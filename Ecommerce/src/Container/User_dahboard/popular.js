import React, { Component } from 'react'
import { Row, Modal, ModalHeader, ModalBody, ModalFooter, Container } from 'reactstrap'
import './popular.css'
import Axios from 'axios'
import {BACKEND_URL} from '../../config';

export default class Popular extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      foodname: '',
      foodimage: '',
      food:[],
      notes:'',
      quantity:'1',
      popular: [],
      totalprice:'',
      modal:false,
      config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      },
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.setState({
      modal:!this.state.modal
    })
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    Axios.get(BACKEND_URL+'/foods',this.state.config)
    .then((response)=>{
      const data = response.data;
      this.setState({popular:  data});
      console.log("data fecth");
     
    }).catch(error => console.log(error.response));
  }

  handleFood = (foodId) => {
    // if(localStorage.length===0) {
    //   alert("Please login first...")
    // }
    // else{
    this.setState({
      modal: !this.state.modal

    })
    Axios.get(BACKEND_URL+`/foods/${foodId}`, this.state.config)
      .then((response) => {
        const data = response.data;
        this.setState({
          food: data,
          totalprice: data.price
        });
        console.log("data fecth");
      }).catch(error => console.log(error.response));
    // }
  }

  addCart(){
    // if(this.state.quantity<1){
    //   alert("Please Enter a valid quantity")
    // }
    // else{
    //   if(localStorage.getItem('token'!=null)){
        Axios.post(BACKEND_URL+`/cart/`,
          {
            food: this.state.food._id,
            totalprice: (this.state.totalprice * this.state.quantity),
            notes: this.state.notes,
            quanity: this.state.quantity
          }, this.state.config)
          .then((response) => {
            console.log(response);
            this.setState({
              modal: !this.state.modal
            })
          }).catch((err) => console.log(err.response));
    //   }
    //   else{
    //     alert("Please login to add cart");
    //   }
    // }
  }

    render() {
        return (
           <div className="container">
             <div>
               <p><span className='h1' style={{color:'DarkOrange'}}>ITEMS FOR YOU</span></p>
               <hr></hr>
             </div>
              
            <Row>
              {
                this.state.popular.map((pop => 
                  <div key={pop._id} className="Col-md-4" id="product">
                    <figure className="card card-product p-2">
                        <img alt="foodPic" width='250' height='150' src={BACKEND_URL+`/pictures/${pop.foodimage}`}/>
                        <figcaption className="info-wrap">
                          <legend className="title">{pop.foodname}</legend>
                          <h6 className="title">Rs. {pop.price}</h6>
                        </figcaption>
                        <button className="btn btn-primary" onClick={()=>this.handleFood(pop._id)}>Add to cart</button>
                    </figure>
                  </div>
                  ))
              }
            </Row>
           

            <Modal isOpen={this.state.modal}>
              <form>
              <ModalHeader toggle={this.toggle}>Item : {this.state.food.foodname}<br/>
                      Price : Rs.{this.state.food.price}
              </ModalHeader>
              <ModalBody>
                <p>Add notes</p>
                <textarea id="notes" className="col-md-10" value={this.state.notes} placeholder="Customize food as your taste" name="notes" onChange={this.handleChange}></textarea>
                <hr/>
                <p>Add quantity</p>
                <input type="number" pattern="[0-9]*" name="quantity" min={1} value={this.state.quantity} onChange={this.handleChange} min="1" max="100" />
              </ModalBody>
              <ModalFooter>
                <Container id="ftr">
                  <button className="btn btn-lg btn-success" id="btnbag" onClick={() => this.addCart(this.state.food._id)}>Add to cart</button>
                </Container>
              </ModalFooter>
              </form>
            </Modal>
          </div>
        )
  }
}

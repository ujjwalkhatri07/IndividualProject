import axios from "axios";
import { Component } from "react";
import './myStyle.css'
class Conatctus extends Component{
    state={
        email:'',
        help:'',
        
        

    }
    changeGarne=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    sendmessage=(e)=>{
        const data={
           email:this.state.email,
            help:this.state.help
        }
        axios.post('http://localhost:90/insert/contact',data).then((response)=>{
            console.log(response);
            alert("Message sent!!")
        }).catch(error=>{console.log(error);})
    }
            
    render(){
        return(
            <div className="container-fluid">
           
            <section className="Form my-4 mx-5 pt-5 pb-5 mt-6">
            <div className="container">
                <div className="row no-gutters shadow" style={{background:'white', borderRadius:'3px'}}>
                   
                    <div className="col-lg-5">
                      
                            <img alt="login" src="/contact2.png" className="img-fluid" style={{ height: '400px' }} />

                        
                    </div>
                    <div className="col-lg-5 no gutters">
                       
                    <h2 className=" py-4 ml-5">Take subscription</h2>
                    <h5 className="ml-5"></h5>
                        
                 
                <form>

                <div className="form-row">
                                        <div className="col-lg-9 ml-5">
                    <p>
                        Email: <input type="text" name="email" value={this.state.email} onChange={this.changeGarne} /> </p>
                        </div>
                        </div>

                        <br></br>

    <div className="form-row">
                                        <div className="col-lg-9 ml-5">
                                            <p>
                           Phone number: <input type="text"  name="help" value={this.state.help} onChange={this.changeGarne} />

                        </p>

                        </div>
                        </div>
                    
                     

                        <div className="form-row">
                                        <div className="col-lg-9 ml-5">
                    <p><button className="btn btn-primary" onClick={this.sendmessage}>Submit</button></p>
                    </div>
                    </div>
                   
                      
                    </form>
            </div>
            </div>
            </div>
            </section>
            </div>
        )
    }
}

export default Conatctus
import React,{ Component } from "react";
import {Route, Link} from 'react-router-dom';
import { Table} from 'reactstrap';
import axios from 'axios';
import {BACKEND_URL} from '.././config';


class Vieworderadmin extends Component{
    state = {
        
        food : '',
        user : '',
        quanity : '',
        orderDate:'',
        totprice: '',
        totAmt:0,
        orders: [],
        viewOrder:[],
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }

    componentDidMount(){
        axios.get(BACKEND_URL+"/orders/show/admin",this.state.config)
        .then((response)=>{
            const data = response.data;
            this.setState({viewOrder:data});
            console.log(this.state.viewOrder);
          }).catch((err)=>console.log(err.response));
    }
    
    

       
    render(){
        return(
            <div id="prd">{
              
                  
                        
                    <div className="col-lg-12" id="prd">
                     
                        <div className="card"> 
                        <Table>
                    <thead>
                        <h1>Orders by user</h1>
                    <tr>
                        
                      <th><h5>Food Name</h5></th>
                      <th><h5>Quantity</h5></th>
                      <th><h5>Price</h5></th>
                      <th><h5>Total Price</h5></th>
                      <th><h5>Email</h5></th>
                      <th><h5>Full Name</h5></th>
                      <th><h5>Contact</h5></th>
                      <th><h5>Deliver</h5></th>

                    </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.viewOrder.map(listItem=>{
                          return(
                            <tr key={listItem._id}>
                              
                               
                              <td><h6>{listItem.food.foodname}</h6></td>
                              <td><h6>{listItem.quanity}</h6></td>
                              <td><h6>{listItem.food.price}</h6></td>
                              <td><h6>{listItem.food.price*listItem.quanity}</h6></td>
                              <td><h6>{listItem.user.email}</h6></td>
                              <td><h6>{listItem.user.fullname}</h6></td>
                              <td><h6>{listItem.user.contact}</h6></td>
                              <td><button className="btn btn-success">Deliver</button></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                    
                  </Table>
                        
                            
                        </div>
                        </div>
                        
                            
                  
                }
                </div>
              
    )
        
    }
}
export default Vieworderadmin;
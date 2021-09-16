import { Component } from "react";

import {Route} from 'react-router-dom'
import Register from './Register'
import Login from "./Login";
import Logout from "./Logout";
import ViewRestaurantRequest from './Viewusers';
import ListFoods from './Category';
import AddRestuarant from './Restaurant';
import AddFood from "./Product";
import Category from "./User_dahboard/Category";
import Popular from "./User_dahboard/popular";
import Resturantdetails from "./User_dahboard/Product";
import Restaurant from "./User_dahboard/Store";
import Home from "./User_dahboard/Home";
import Cart from "./User_dahboard/Viewcart";
import Profile from "./User_dahboard/Profile";
import ViewOrder from "./User_dahboard/vieworder";
import Vieworderadmin from "./Vieworderadmin";
import Contactus from './Contactus';



class Container extends Component{
    render(){
     
        return(
            <div className="">
                <div className=''>
                    <div className=''>
                  <Route path="/users/signup" component={Register} />
                  <Route path="/users/login" component={Login} />
                  <Route path="/users/logout" component={Logout} />
      
                  <Route path='/user/show' component={ViewRestaurantRequest} />
                  <Route path='/add/cat' component={ListFoods} />
                  <Route path='/stores/add' component={AddRestuarant} />
                  <Route path='/add/product' component={AddFood} />
                  <Route path='/category' component={Category}/>
                  <Route path='/popular' component={Popular}/>
                  <Route path='/viewRes/:id' component={Resturantdetails}/>
                  <Route path='/store' component={Restaurant}/>
                  <Route exact path="/" component={Home} />
                  <Route path="/view/carts" component={Cart} />
                  <Route path="/user/single" component={Profile} />
                  <Route path="/view/order" component={ViewOrder} />
                  <Route path="/order/admin" component={Vieworderadmin} />
                  <Route path="/insert/contact" component={Contactus}/>
                  
                   </div>
                
                   </div>
            </div>
            
        )
    }
}

export default Container
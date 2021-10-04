import { Component } from "react";
import {Link} from 'react-router-dom';
import { Nav, NavDropdown, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import {useDispatch,useSelector } from 'react-redux'

import { FaWeightHanging,FaHotel,FaUserAstronaut,FaRegTrashAlt,FaShoppingCart,FaBuysellads,FaBiking,FaStudiovinari, FaCartPlus,FaRss,FaSignInAlt,FaBlog,FaRegLightbulb,FaRegQuestionCircle,FaUserSecret,FaSuitcaseRolling,FaInfo,FaRegMoon,FaUserGraduate,FaTty, FaRibbon,FaPlus,FaShareSquare,  FaPlusCircle, FaWindowRestore, FaUsers, FaMedapps, FaTelegramPlane,FaUserCog } from 'react-icons/fa'
import {FcContacts,FcManager,FcPlus,FcButtingIn,FcTwoSmartphones,FcSmartphoneTablet,FcCurrencyExchange,FcViewDetails,FcOnlineSupport,FcAddDatabase,FcDonate,FcBullish,FcCallback,FcAbout,FcComboChart } from 'react-icons/fc'
import { GoGitPullRequest } from "react-icons/go";
import { IoFastFoodSharp } from "react-icons/io5";


class Header extends Component{

  
  logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
 
    localStorage.removeItem('firstname')
    window.location.href = '/'
  }

 
    render(){
      
      
      
      {
        if(localStorage.getItem('token') && localStorage.getItem('role')=="admin"){
          var menu=
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
           
          </Nav>

          <Form inline>



            
            <Nav.Link href="/add/product">Add Product<FcAddDatabase/></Nav.Link>
              <Nav.Link href="/add/cat">Add Category<FcAddDatabase/></Nav.Link>
              <Nav.Link href="/stores/add">Add Stores<FcAddDatabase/></Nav.Link>
              <Nav.Link href="/user/show">Users<FaUserAstronaut/></Nav.Link>
              <Nav.Link href="/order/admin">Order<FaShoppingCart/></Nav.Link>
       
              <Nav.Link eventKey={2} href="/user/single/:id">{localStorage.getItem('fullname')}<FcManager/>
            </Nav.Link>
            {/* <Nav.Link href="/logout"><FaShareSquare/>Logout</Nav.Link> */}
            <Button Link to="/logout" className="btn btn-danger" onClick={this.logout}><FaShareSquare/> Log out</Button>
        
  
      </Form>
      </Navbar.Collapse>




}
         


        else if(localStorage.getItem('token') && localStorage.getItem('role')=="customer"){
          var menu=

          <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="mr-auto">

        </Nav>
        <Form inline>

              {/* <Nav.Link href="/restaurant/register">Request<GoGitPullRequest/></Nav.Link> */}
              <Nav.Link href="/category">Category</Nav.Link>
              {/* <Nav.Link href="/foodsr">foods<IoFastFoodSharp/></Nav.Link> */}
              <Nav.Link href="/view/carts">Cart<FaShoppingCart/></Nav.Link>
              <Nav.Link href="/store">Stores<FaHotel/></Nav.Link>
              <Nav.Link href="/popular">popular</Nav.Link>
              <Nav.Link href="/view/order">Order</Nav.Link>
              <Nav.Link eventKey={2} href="/user/single">{localStorage.getItem('fullname')}<FcManager/>
              </Nav.Link>
              <Button Link to="/logout" className="btn btn-danger" onClick={this.logout}><FaShareSquare/> Log out</Button>
       
    
         
           
           
              </Form>
       </Navbar.Collapse>
         
        }
      
   
        else{
        var menu=
 

<Navbar.Collapse id="responsive-navbar-nav">
   
   <Nav className="mr-auto">



    
      <Nav.Link href="/store">Category<FaHotel/></Nav.Link>
      <Nav.Link href="/insert/contact">Contact us<FcOnlineSupport/></Nav.Link>
      
     
    
</Nav>
    
    <Form inline>
  
    <Button href="/users/login" className="btn btn-primary"><FaSignInAlt/> Sign in</Button>
    {/* <Button href="/user/login"><FaSignInAlt/> Sign in</Button> */}
  
  </Form>


  </Navbar.Collapse>

      }
    
        return(
      
          <Navbar collapseOnSelect expand="lg" bg="white" className="shadow">
        
 
          <Navbar.Brand href="/">
            <img src="/logo.jpg" clsassName="d-inline-block align-top" alt="logo" style={{height:'50px', width:'50px'}} />
   
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         
    
            {menu}
           
                 
        </Navbar>

      
         
         
        )
    }
}

}




export default Header
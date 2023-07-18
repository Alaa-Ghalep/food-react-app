import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Style/MyStyle.css';
import logo from'../Images/logo.png';


import 'font-awesome/css/font-awesome.min.css';
// import 'font-awesome/css/font-awesome.min.css';

function NavBar() {
  return (
    <Navbar  expand="lg" className="bg-body-tertiary pt-2 px-5 w-100  parentnavbar"style={{marginBottom:100,backgroundColor:'#FCF5F5'}}>
        <Navbar.Brand href="#" > 
           <a className="navbar-brand text-black fs-6" href="#"><img className='me-1' style={{width:40}} src={logo}/> Pwoer Diet</a>
        </Navbar.Brand>
        <Navbar.Toggle className="shadow-none border-0 p-3" id="newtoggle"><i className="fa fa-bars py-1 px-2 " style={{fontSize:22,color:'#F25757',border:'2px solid #F25757',borderRadius:5}}></i></Navbar.Toggle>


        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" me-auto mb-2 mb-lg-0 mx-lg-auto">
            <Nav.Link href="#" className="d-inline-block text-decoration-none me-2 mx-2 cool-link " style={{color:'#F25757'}}>Home</Nav.Link>
            <Nav.Link href="#" className="d-inline-block text-decoration-none  me-2 mx-2 cool-link">About US</Nav.Link> 
             <Nav.Link href="#" className="d-inline-block text-decoration-none me-2 mx-2 cool-link">Menu</Nav.Link>
               <Nav.Link href="#" className="d-inline-block text-decoration-none me-2 mx-2 cool-link">Testimonials</Nav.Link>
               <Nav.Link href="#" className="d-inline-block text-decoration-none me-2 mx-2 cool-link">Contact</Nav.Link>
          </Nav>
          <button className='btn rounded-3 shadow-none text-white px-3 btn-bg'>Login</button>
            <div>
            </div>
        
        
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
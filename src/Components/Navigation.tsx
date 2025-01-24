
import{Navbar,Nav,Container} from 'react-bootstrap';

import JsonData from "../data/data.json";
import { useState, useEffect } from "react";



export function Navigation()
{
    const [pageData, setPageData] = useState({});//pageData== vetor, setPageData == funcão para carregar o vetor
    useEffect(() => {
      setPageData(JsonData);
    }, []);

    return(

        
<div>

<div>
   <>
  

  <Navbar  collapseOnSelect fixed = 'top' expand='sm' className='navbar-default '>
    <Container>
        <Navbar.Brand >DevPro</Navbar.Brand>
        <Navbar.Toggle className='navbar-toggle' aria-controls ='responsive-navbar-nav' />

        <Navbar.Collapse id = 'responsive-navbar-nav'   className="justify-content-end" >
         <Nav defaultActiveKey="/" as="ul">
         <Nav.Item>
           <Nav.Link href="#home" className="nav-links" >Inicio</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href="#features"  className="nav-links" >Características</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href="#services" className="nav-links" >Servicios</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href='#about'  className="nav-links" >Acerca de</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href='#portfolio'  className="nav-links" >Galería</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href='#testimonials'  className="nav-links" >Testimonios</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href='#team'  className="nav-links" >Equipo</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href="#contact"  className="nav-links" >Contactanos</Nav.Link>
         </Nav.Item>
         
               
         </Nav>
        </Navbar.Collapse>
    
  
    </Container>
  </Navbar>
 
</>
</div>


</div>


  )
}
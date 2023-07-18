import React from 'react'
import '../Style/MyStyle.css';
export default function Footer() {
  return (
    <div className='container-fluid' style={{backgroundColor:'#FCF5F5'}}>
    <footer className='text-center py-3'>
          <div className="ms-3 d-flex" style={{justifyContent:'center'}}>
                     
              
                      <a className="btn shadow-none rounded-circle  ms-2 me-2
                      d-flex justify-content-center
                      " href="#">
                      <i className="fa fa-facebook" aria-hidden="true"    
                       style={{color:'#fff',fontSize:20,verticalAlign:'center'}}></i></a> 

                         <a className="btn shadow-none rounded-circle d-flex justify-content-center ms-2 me-2" href="#">
                      <i className="fa fa-twitter" aria-hidden="true"  
                         style={{color:'#fff',fontSize:23,verticalAlign:'center'}}></i></a>
                         
                          <a className="btn shadow-none rounded-circle d-flex justify-content-center ms-2 me-2" href="#">
                           <i className='fa fa-instagram'
                         style={{color:'#fff',fontSize:23,verticalAlign:'center'}} ></i>
                          </a>
                 <a className="btn shadow-none rounded-circle d-flex justify-content-center ms-2 me-2" href="#">
              <i className="fa fa-linkedin" aria-hidden="true"  
                style={{color:'#fff',fontSize:21,verticalAlign:'center'}} ></i></a>
                   
                        
                  </div>

      </footer>
    </div>
  )
}

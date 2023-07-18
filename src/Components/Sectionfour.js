import React from 'react'
import secimg1 from'../Images/section4img1.png';
import map from'../Images/map.png';
import colc from'../Images/colc.png';
import '../Style/MyStyle.css';
export default function Sectionfour() {
  return (
    <div>
      <div className='container-fluid parent-four'>
        <div className='container'>
            <div className='row row-four g-5'>
                <div className='col-lg-8'>
                    <div className='row row-four '>
                        <div className='col-md-6 col-lg-6'>
                            <div
                              data-aos="fade-down-right"
                              data-aos-duration="2000"
                              data-aos-once="true">
                              <div className='pb-4'>
                   <h1 className='mb-5'>Get your potential Personalize Fitness Solutions</h1>
                   </div>
                   <button className='btn rounded-3 shadow-none px-3 text-white btn-bg '>Learn More</button>
                   </div>

                   </div>
                        <div className='col-md-6 col-lg-6'> 
                        <div className='mx-5 div-bg2 h-100 d-flex justify-content-center px-5'
                          data-aos="zoom-in"
                          data-aos-duration="2500"
                          data-aos-once="true">
                    <img className='w-100' style={{marginTop:-44}} src={secimg1}/>
                </div>
                </div>

                    </div>
                </div>
                <div className=' col-lg-4 col-xl-4 col-xxl-4'>
                  <div  data-aos="fade-down-left"
                data-aos-duration="2000"
                data-aos-once="true">
                  <div className='px-3'>            
                       <div className='d-flex mb-2  h-100'>                 
                          <div className=' me-2'>
                         <div className=' d-flex justify-content-center align-items-center py-2 rounded-3 px-2' style={{backgroundColor:'#FB9334',verticalAlign:'center'}}>
                        <img  className='' style={{width:20,height:22}} src={map}/>
                        </div>
                      </div>
                       <div>  <h4>Track Your Order</h4> </div>
      
                      </div>
                          <p className='text-secondary'>We’re here to help you eat healthy.
                          our website offers 24/7 support to
                          its customers care services.</p>
 
                </div>
      

                <div className='px-3 mt-4'>            
                       <div className='d-flex mb-2  h-100'>                 
                          <div className=' me-2'>
                         <div className=' d-flex justify-content-center align-items-center py-2 rounded-3 px-2' style={{backgroundColor:'#FB9334',verticalAlign:'center'}}>
                        <img  className='' style={{width:20,height:22}} src={colc}/>
                        </div>
                      </div>
                       <div>  <h4>24/7 Support</h4> </div>
      
                      </div>
                          <p className='text-secondary'>We’re here to help you eat healthy.
our website offers 24/7 support to
its customers care services.</p>
 
                </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

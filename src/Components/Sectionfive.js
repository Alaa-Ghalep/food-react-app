import React from 'react'
import imgcard1 from '../Images/imgcard1.png';
import imgcard2 from '../Images/imgcard2.png';
import imgcard3 from '../Images/imgcard3.png';
import star from'../Images/star.png';
import nar from'../Images/nar.png';

import '../Style/MyStyle.css';

export default function Sectionfive() {
  return (
    <div>
        <div className='container-fluid parent-five'>
            <div className='container'>
                  <h2 
                data-aos="zoom-in"
                data-aos-duration="2500"
                data-aos-once="true" className='mb-4'>Get your potential Personalize
                  <span className='ms-3'><img style={{width:30}} src={nar}/></span></h2> 
                <div className='row g-5'
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-once="true">
          
                    <div className='col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
                    <div class="card shadow-sm" style={{borderRadius:20}}>
  <img src={imgcard1} class="card-img-top" />
  <div class="card-body">
    <div className='d-flex mb-1 ' style={{justifyContent:'space-between'}}>

    
    <h5 class="card-title">Vegerable salad</h5>
<h5><span className='me-1'><img src={star}/></span>4.9 <span className='text-secondary'>(500)</span></h5>
    </div>
    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
    <div className='d-flex mt-1' style={{justifyContent:'space-between'}}>
        <h4 className='txtcolor'><span className='me-1'>$</span>40.00</h4>
   
    <a href="#" class="btn shadow-none btn-card">Add To cart</a>
  </div>
  </div>
</div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-4 col-xxl-4 '>
                    <div class="card shadow-sm" style={{borderRadius:20}}>
  <img src={imgcard2} class="card-img-top" />
  <div class="card-body">
    <div className='d-flex mb-1 ' style={{justifyContent:'space-between'}}>

    
    <h5 class="card-title">Dietary salad</h5>
<h5><span className='me-1'><img src={star}/></span>4.9 <span className='text-secondary'>(500)</span></h5>
    </div>
    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
    <div className='d-flex mt-1' style={{justifyContent:'space-between'}}>
        <h4 className='txtcolor'><span className='me-1'>$</span>90.00</h4>
   
    <a href="#" class="btn text-white shadow-none btn-bg">Add To cart</a>
  </div>
  </div>
</div>
                    </div>
                    <div className=' col-lg-4 col-xl-4 col-xxl-4 '>
                    <div class="card shadow-sm" style={{borderRadius:20}}>
  <img src={imgcard3} class="card-img-top" />
  <div class="card-body">
    <div className='d-flex mb-1 ' style={{justifyContent:'space-between'}}>

    
    <h5 class="card-title">Grilled chicken</h5>
<h5><span className='me-1'><img src={star}/></span>4.9 <span className='text-secondary'>(500)</span></h5>
    </div>
    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
    <div className='d-flex mt-1' style={{justifyContent:'space-between'}}>
        <h4 className='txtcolor'><span className='me-1'>$</span>85.00</h4>
   
    <a href="#" class="btn shadow-none btn-card">Add To cart</a>
  </div>
  </div>
</div>
                    </div>
                 <div className='text-center'>
      
    <a href="#" class="btn shadow-none px-4" style={{border:'1px solid #F46B6B',color:'#F46B6B'}} 
     data-aos="flip-right"
                data-aos-duration="2000"
                data-aos-once="true"> View All Products</a>

        </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

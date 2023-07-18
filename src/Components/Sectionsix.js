import React from 'react'
import secimg1 from'../Images/sction6img1.png';
import email from'../Images/email.png';
export default function Sectionsix() {
  return (
    <div>
      <div className='container-fluid parent-six'>
        <div className='container'>
            <div className='row row-six g-5  mx-4' style={{backgroundColor:'#F46B6B',borderRadius:25}}
             data-aos="fade-up"
             data-aos-anchor-placement="center-center"
             data-aos-duration="2500"
             data-aos-once="true">
                <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6 '>
                    <div className='text-white ps-2 mb-4'>
                        <h1 className='mb-2'>Subscribe To Get Latest New Letter</h1>
<p>Looking for more salad recipes? Visit our website for a variety of healthy and delicous salad options.</p>

    <div  className='py-1 bg-white aaa'style={{borderRadius:13}}>
{/* <form className=' d-flex px-3 pt-2 justify-content-center vertical-align-center'  > */}
<form className=' d-md-flex px-3 pt-2  vertical-align-center ' >

  <div class="mb-3 d-flex justify-content-center vertical-align-center">
    <img  src={email} style={{width:15,height:15,marginTop:12}}/>
    <input type="email" class="form-control shadow-none border-0 " placeholder='Type your email'/>
  </div>
<div className=''>
  <button type="submit" className='btn rounded-3 

shadow-none px-3 text-white btn-bg ' style={{backgroundColor:'#F46B6B'}}>Subscribe</button>
  </div>
</form>
</div>

                    </div>
                    </div>    
                <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
<div className='d-flex justify-content-center h-100'>
    <img className='w-75 ' src={secimg1} style={{marginTop:-130}}/>
</div>
            </div>
            </div>

        </div>
      </div>
    </div>
  )
}

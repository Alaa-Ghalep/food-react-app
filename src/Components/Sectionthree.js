import React from 'react'
import sec3icon1 from'../Images/sec3icon1.png';
import sec3icon2 from'../Images/sec3icon2.png';
//import sec3icon3 from'../Images/sec3icon3.png';
import icon1 from'../Images/icon1.png';
import sec3icon4 from'../Images/sec3icon4.png';
import '../Style/MyStyle.css';
export default function Sectionthree() {
  return (
    <div>
            <div className='container-fluid parent-three' style={{backgroundColor:'#FCF5F5'}}>
            <div className='container pt-5 pb-5'>
                <div className='row pt-5  mb-5'
                  data-aos="zoom-in"
                  data-aos-duration="2500"
                  data-aos-once="true">
                    <div className='col-md-6'>
                        <div className='pe-5'>
                            <h1 className='me-5'>Salads That Are Perfect For A Healthy Lifestyle</h1>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div>
<p className='text-secondary me-5'>
This service allaws customers to order fresh, healthy salads that are delivered right to their door. This services offers a variety of salads variety of diets and lifestyles.</p>                        </div>
                    </div>
                </div>
                <div className='row g-5 pb-3'
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-once="true">
                  
                    <div className='col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
                        <div className='bg-white  shadow-sm h-100  p-3 py-4' style={{borderRadius:13}}>
                         <div className=' d-flex justify-content-center align-items-center py-2 rounded-3 mb-3 xx' style={{verticalAlign:'center',width:59,height:59}}>
                        <img  className='' style={{width:33,height:38}} src={sec3icon1}/>
                      </div>
                      <h4>Online Ordering</h4>
                      <p className=''>Many salad food website offer online ordering so that you can order food on time delivery.</p>
<div className='d-flex'>
<p className='text-black fw-bold me-2'>Learn More</p>
<i class='bx bx-right-arrow-alt' style={{
    fontSize:28
}}></i>
</div>


                        </div>
                    </div>
       
                    <div className='col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
                        <div className='bg-white  shadow-sm h-100 p-3 py-4' style={{borderRadius:13}}>
                         <div className=' d-flex justify-content-center align-items-center py-2 rounded-3 mb-3 xx' style={{verticalAlign:'center',width:59,height:59}}>
                        <img  className='' style={{width:33,height:38}} src={sec3icon2}/>
                      </div>
                      <h4>Customization</h4>
                      <p className='pb-4'>MAny salad food allow you to customize your salads so you can choose your own.</p>
<div className='d-flex'>
<p className='text-black fw-bold me-2'>Learn More</p>
<i class='bx bx-right-arrow-alt' style={{
    fontSize:28
}}></i>
</div>


                        </div>
                    </div>

                    <div className='col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
                        <div className='bg-white  shadow-sm h-100 p-3 py-4' style={{borderRadius:13}}>
                         <div className=' d-flex justify-content-center align-items-center py-2 rounded-3 mb-3 xx' style={{verticalAlign:'center',width:59,height:59}}>
                        <img  className='' style={{width:33,height:38}} src={icon1}/>
                      </div>
                      <h4>Freshness Salad</h4>
                      <p className='pb-4'>
Salad food websites use fresh ingredients, so your salad will be delicious and nutritius.</p>
<div className='d-flex'>
<p className='text-black fw-bold me-2'>Learn More</p>
<i class='bx bx-right-arrow-alt' style={{
    fontSize:28
}}></i>
</div>


                        </div>
                    </div>

                 
                    <div className='col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
                        <div className='bg-white  shadow-sm h-100 p-3 py-4' style={{borderRadius:13}}>
                         <div className=' d-flex justify-content-center align-items-center py-2 rounded-3 mb-3 xx' style={{verticalAlign:'center',width:59,height:59}}>
                        <img  className='' style={{width:33,height:38}} src={sec3icon4}/>
                      </div>
                      <h4>Freshness Salad</h4>
                      <p className='pb-4'>
Salad food websites use fresh ingredients, so your salad will be delicious and nutritius.</p>
<div className='d-flex'>
<p className='text-black fw-bold me-2'>Learn More</p>
<i class='bx bx-right-arrow-alt' style={{
    fontSize:28
}}></i>
</div>


                        </div>
                    </div>


                    </div>
            </div></div>
    </div>
  )
}

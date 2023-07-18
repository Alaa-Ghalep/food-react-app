import React from 'react'
import icon1 from'../Images/icon1.png';
import icon2 from'../Images/icon2.png';
import icon3 from'../Images/icon3.png';
import img1 from'../Images/img1.png';
import k from'../Images/k.png';
import m from'../Images/m.png';


import '../Style/MyStyle.css';


export default function Sectionone() {
  return (
    <div>
      <div className='container-fluid parent-one pb-5'>
        <div className='container pb-4'>
        <div className='row mb-5 row-one g-5 '>
            <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                <div
                data-aos="fade-up-right"
                data-aos-duration="2000"
                data-aos-once="true">
                    <h1 className='pe-5 mb-5' style={{fontSize:48}}>Eeat Healthy And Feel Great with Our Diet Plans</h1>
                    <p className=''>Discover a world of Delicious Salads at Our online Salads . Salad meals are ready to eat in minutes so save time energy.</p>
                    <div className='mt-5 d-md-flex justify-content-space-between'>
                        <button className='btn rounded-3 shadow-none px-3 text-white btn-bg '>Order Now</button>
                        <button className='btn rounded-3 shadow-none px-3 ms-4 btn-border ' style={{border:'1px solid #F46B6B',color:'#F46B6B'}}>Contact Us</button>
                    </div>
                </div>
            </div>

            <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6 px-5'>
                <div
                  data-aos="fade-up-left"
                  data-aos-duration="2000"
                  data-aos-once="true">
                    
                 <div className='div-bg position-relative h-100  d-flex justify-content-center virtecal-align-center'>
                    <img className='w-75' style={{marginTop:-90}} src={img1}/>
                  
                  
                   {/* <div className='bg-white shadow-sm  px-3 div1 position-absolute' style={
                    {borderRadius:15}
                }>
                        <p className='pt-3'>Today’s Calories</p>
                        <div className='d-flex ' style={{justifyContent:'space-between',}}>
                         <h5 className='pt-1'>102.000</h5>
                         <img style={{width:37,height:37}} src={k}/>
                        </div>
                        <div className='d-flex'>
                            <img className='ms-1 me-1'style={{width:22,height:22}} src={m}/>
                            <p className='ms-1 me-1' style={{color:'#FFB800'}}>+0.95</p>
                            <p className='ms-1 me-1 fw-bold'>This week</p>
                        </div>
                      </div> */}



                </div>

             
                </div>

            </div>
        </div>
      
        </div>

        <div className='container'>
        <div className='row g-3 '
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true">
            <div className=' col-lg-4 col-xl-4 col-xxl-4'>
                <div className='d-flex px-3 h-100'>
                 
          <div className='my-auto me-3'>
    <div className=' d-flex justify-content-center align-items-center py-3 rounded-3 px-3' style={{backgroundColor:'#FB9334',verticalAlign:'center'}}>
        <img  className='' style={{width:35,height:35}} src={icon1}/>
        </div>
</div>
                    <div>
                        <h4>Delicious Food</h4>
    <p className='text-secondary'>Salads are a great way to get daily dose of vegetables. Theylight refreshing hearty.</p>

                    </div>

                </div>
      
            </div>

          

            <div className=' col-lg-4 col-xl-4 col-xxl-4'>
                <div className='d-flex px-3 h-100'>
                 
          <div className='my-auto me-3'>
    <div className=' d-flex justify-content-center align-items-center py-3 rounded-3 px-3' style={{backgroundColor:'#FB9334',verticalAlign:'center'}}>
        <img  className='' style={{width:35,height:35}} src={icon2}/>
        </div>
        </div>
        <div>
     <h4>Fast Delivery</h4>
    <p className='text-secondary'>This is a 100% free services that 
can customers no need to pay 
any extra money.</p>

                    </div>

                </div>
      
            </div>


            <div className='col-lg-4 col-xl-4 col-xxl-4'>
                <div className='d-flex px-3 h-100'>
                 
          <div className='my-auto me-3'>
    <div className=' d-flex justify-content-center align-items-center py-3 rounded-3 px-3' style={{backgroundColor:'#FB9334',verticalAlign:'center'}}>
        <img  className='' style={{width:35,height:35}} src={icon3}/>
        </div>
</div>
   <div>
       <h4>Feedback</h4>
    <p className='text-secondary'>I had pleasure of trying salads
for first time recently & it was
really impressed.</p>

                    </div>

                </div>
      
            </div>

        </div>
        </div>
      </div>
      
    </div>
  )
}

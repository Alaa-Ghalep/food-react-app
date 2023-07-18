import React from 'react'
import sec2img1 from'../Images/section2img1.png';
import sec2img2 from'../Images/section2img2.png';
import vector from '../Images/Vector.png';
import vector2 from '../Images/Vector2.png';

import '../Style/MyStyle.css';
export default function Sectiontwo() {
  return (
    <div>
      <div className='container-fluid parent-two'>
        <div className='container'>
            <div className='row g-5'>
                <div className='col-lg-6 col-xl-6 col-xxl-6 pe-5'>
                    <div
                      data-aos="fade-down-right"
                      data-aos-duration="2000"
                      data-aos-once="true">
                      <div><img className='sec2img1 position-relative' src={sec2img1}/></div>
                      <div><img className=' sec2img2  position-relative2' src={sec2img2} 
                     />
                     {/* <div className='position-absolutesec2  shadow-sm py-3 px-2 bg-white rounded-3 d-flex'>
                      <div className='me-3 d-flex justify-content-center' style={{backgroundColor:'#FB9334',borderRadius:50,width:53,height:53}}>
                        <img className='mx-auto mt-3' style={{width:22,height:22}} src={vector}/>
                      </div>
                      <p className='fw-bold mt-3 '>No Exercise facility</p>
                     </div>

                     <div className='position-absolutesec22  shadow-sm py-3 px-2 bg-white rounded-3 d-flex'>
                      <div className='me-3 d-flex justify-content-center' style={{backgroundColor:'#FB9334',borderRadius:50,width:53,height:53}}>
                        <img className='mx-auto mt-3' style={{width:22,height:22}} src={vector2}/>
                      </div>
                      <p className='fw-bold mt-3 '>Ideal Body Weight</p>
                     </div> */}
                     </div>

                    </div>
                </div>
       
       
       
       
       
                <div className=' col-lg-6 col-xl-6 col-xxl-6'>
                    <div className='me-5'
                      data-aos="fade-up-left"
                      data-aos-duration="2000"
                      data-aos-once="true">
                        <h1 className='mb-4 pe-5'>We Help Reach Your Fitness & Goals with Delicious Salad</h1>
                        <p className='text-secondary'>
                        Welcome to our fitness program where we’re pledged to helping you grow & achieve your fitness goals. 
we understand that embarking on a fitness journey can be challenge. Our expert guidance and support you can unlock your full potential your life.
                        </p>
                        <p className='text-secondary mt-3'>
                        Our team of dedicated fitness professionals is here to design personalized fitness solutions.
                        </p>
                        <button className='btn rounded-3 shadow-none px-3 text-white btn-bg '>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

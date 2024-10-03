import React from 'react'

function Header() {
  return (
    <div className='headerMain'>
        <div className="row  w-100">
            <div className="col-lg-6 ">
                <div className='headerNumber fw-bold text-end'>01</div>
                <hr />
                <div className=' text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam a laborum qui optio rerum sunt, dolorem sed dolorum incidunt facilis sequi veritatis maxime suscipit praesentium voluptates numquam dolor doloribus eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae saepe commodi numquam rem dolor dignissimos nisi ut fugiat repudiandae dolores expedita perspiciatis, debitis doloribus illo eum necessitatibus itaque excepturi nostrum.</div>
                <div className='learnMore text-end'>Learn More <span><i class="fa-solid fa-arrow-right"></i></span></div>
            </div>

            <div className="col-lg-6 ">
            <div  className='headerNumber fw-bold text-end'>02</div>
                <hr />
                <div  className=' text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam a laborum qui optio rerum sunt, dolorem sed dolorum incidunt facilis sequi veritatis maxime suscipit praesentium voluptates numquam dolor doloribus eum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora a maiores nesciunt tenetur, iure libero odio rerum dolorem, deserunt vel vitae laborum at doloribus aliquid, explicabo minima rem saepe facere.</div>
                <div className='learnMore text-end'>Learn More <span><i style={{width:'40px'}} class="fa-solid fa-arrow-right"></i></span></div>
            </div>
        </div>
    </div>
  )
}

export default Header
import React from 'react'

function SecondHeader() {
  return (
    <div className='secondHeaderMain mx-auto'>
        <div className="w-100 secondHeading fw-bolder">
            "Lorem ipsum dolor sit amet"
        </div>
        <div className='text-center'>
            <button className=' fw-bold mx-auto'>
                Free Seminars
            </button>

        </div>
        <div className="d-flex w-100 secondHeaderBottomMain justify-content-between">
            <div className="">
                <div className='secondHeaderBottom'>Lorem  Ipsum</div>
                <div className='fw-bolder'>Dolor sit amet</div>
            </div>
            <div  className=" text-justify fw-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing eque vero totam iste, ad impedit iure ratione quasi fuga, officia aperiam ullam? Consequuntur minima harum velit doloribus numquam ea!
            </div>
        </div>
    </div>
  )
}

export default SecondHeader
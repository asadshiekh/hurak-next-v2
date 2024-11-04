import React from 'react'
const TestPrepBanner = ({params}) => {
   
  return (
    <>
    <div className=" w-full  bg-[#ebf5dd] border-b-[6px] border-[#0f7c90]">
        <div className="container mx-auto max-w-[1140px] py-5">
           <div className='w-4/6 py-3'>
                <div className='flex'>
                        <a href="">Home </a>
                        <a href=""> &nbsp;/ &nbsp;Test Prep </a>
                        <a href="">&nbsp;/&nbsp; CSCS Green Card Mock Test</a>
                    </div>
                    <div>
                        <h1 className='font-bold text-[38px] '>CSCS Green Card Mock Test</h1>
                        <p className='text-[#0f7c90] text-xl'> 
                            <h1 className='text-2xl font-bold'>Free</h1>
                            The CSCS Green Card mock test consists of 40 multiple choice questions covering safety practices, 
                            accident prevention and the use of protective equipment. To pass this test, 32 out of 40 questions must be correct. At the end of the test, 
                            a page will display your score and the incorrect answers.</p>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TestPrepBanner
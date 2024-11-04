import React from 'react'
const TestPrepMockExam = ({params}) => {
   const resources = [
    {
        title: 'SMSTS Mock Test',
        url: 'test-prep/smsts-mock-test'
    },
    {
        title: 'SMSTS Mock Test 1',
        url: 'test-prep/smsts-mock-test'
    },
    {
        title: 'SMSTS Mock Test 2',
        url: 'test-prep/smsts-mock-test'
    },
    {
        title: 'SMSTS Mock Test 3',
        url: 'test-prep/smsts-mock-test'
    },
    {
        title: 'SMSTS Mock Test 3',
        url: 'test-prep/smsts-mock-test'
    },
   ]
  return (
    <>
    <div className=" w-full  ">
        <div className="container mx-auto max-w-[1140px] py-5">
            <div className='w-4/6 '>
                <div>
                    <h1 className='text-3xl'>2024 CSCS Green Card Mock Exam Test</h1>
                </div>
                <div>
                    <div className='border '>
                        <div>
                            <p>CSCS Mock Test</p>
                            <p>CSCS Mock Test</p>
                            <p>80%</p>
                            <p>00:60:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TestPrepMockExam
import React from 'react'
const TestPrepResources = ({params}) => {
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
            <div className='w-4/6 py-3'>
                <div className='border rounded-md bg-[#fbfbf8] px-3 py-6' >
                    <div>
                        <h1 className=' text-3xl'>More Tests & Resources</h1>
                    </div>
                    <ul className="list-none  py-3">
                        {resources.map((item, index) => (
                            <li key={index} className="flex items-center mb-2">
                                <span className="w-2 h-2 bg-[#0f7c90] rounded-full mr-2 flex items-center justify-center"></span>
                                <a href={item.url} className="hover:cursor-pointer text-blue-500  leading-relaxed">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TestPrepResources
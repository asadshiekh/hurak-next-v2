import React from 'react';

const TestPrepPopularTest = () => {
    const TestPrepTags = [
        {
            title: 'CSCS Mock Test',
            url: 'test-prep/cscs-mock-test',
        },
        {
            title: 'CSCS',
            url: 'test-prep/cscs-mock-test-1',
        },
        {
          title: 'CSCS',
          url: 'test-prep/cscs-mock-test-1',
      },
        {
            title: 'CSCS Mock Test 2',
            url: 'test-prep/cscs-mock-test-2',
        },
        {
            title: 'CSCS Mock Test 3 CSCS Mock Test 3',
            url: 'test-prep/cscs-mock-test-3',
        },
        {
            title: 'CSCS Mock Test 4',
            url: 'test-prep/cscs-mock-test-4',
        },
        {
            title: 'CSCS Mock Test 5',
            url: 'test-prep/cscs-mock-test-5',
        },
        {
            title: 'CSCS Mock Test 6',
            url: 'test-prep/cscs-mock-test-6',
        },
        {
            title: 'CSCS Mock Test 7',
            url: 'test-prep/cscs-mock-test-7',
        },
    ];

    return (
        <div className="w-full my-12">
          <div className="container mx-auto">
          <div className="flex justify-center">
                <div className='w-full px-3 lg:px-0'>
                    <h3 className='text-[1.75rem] mb-7 text-center'>Explore Popular Tests on Hurak</h3>
                    <div className='flex justify-center flex-wrap'>
                        {TestPrepTags.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                className='rounded-[50px] bg-[#0f7c90] text-white hover:text-black py-2 px-4 mr-2 mb-4'
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </div>
          </div>
          </div>
        </div>
    );
}

export default TestPrepPopularTest;

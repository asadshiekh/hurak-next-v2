import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const FeatureBox = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        <div className='col-span-1'>
            <Image src="/images/featured_image.webp" alt='featured image' width={500} height={400} />
        </div>
        <div className='col-span-2 flex flex-col justify-between'>
            <div>
                <h4 className='text-2xl font-semibold mb-3'>NVQ Level 2 Diploma in Plastering</h4>
                <p className='mb-3'>The Level 2 NVQ Diploma in Plastering is perfect for you if you want to become a skilled plasterer or looking to specialise in one particular skill for better job prospects.</p>
                <p>Course provider: <strong>Sbc Solutions Ltd</strong></p>
                <p>Updated :<strong>January 11, 2024</strong></p>
            </div>
            <h4 className='text-xl font-semibold'>£900.00</h4>
        </div>
    </div>
  )
}

export default FeatureBox
import React from 'react'

const VerticleCourseCards = ({idx,image,title,provider,price}) => {
  return (
    <div>
         <div
            key={idx}
            className="bg-white flex flex-col"
            >
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-500 mt-2">{provider}</p>
            <p className="text-gray-500 mt-2 font-light text-sm">From <strong className='font-bold text-lg text-gray-900 '>{price}</strong></p>
        </div>
    </div>
  )
}

export default VerticleCourseCards
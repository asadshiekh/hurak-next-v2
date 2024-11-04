import React from 'react';

const CourseFeatures = ({ features }) => {
  return (
    <section className="course-features">
    <div className="w-full bg-white mb-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Course Features</h2>
        <div className="flex flex-wrap gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-center shadow-sm"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default CourseFeatures;

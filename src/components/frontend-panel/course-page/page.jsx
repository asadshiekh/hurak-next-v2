import React from 'react'
import CourseFeatures from '@/components/frontend-panel/course-page/CourseFeatures';
import LearningOptions from '@/components/frontend-panel/course-page/LearningOptions';
import ReviewsSection from '@/components/frontend-panel/course-page/ReviewsSection';
import FeatureSection from '@/components/frontend-panel/course-page/FeatureSection';
import AreasCovered from '@/components/frontend-panel/course-page/AreasCovered';
import CourseBanner from '@/components/frontend-panel/course-page/CourseBanner';
import LeftArea from '@/components/frontend-panel/course-page/LeftArea';
import RightArea from '@/components/frontend-panel/course-page/RightArea';
import CourseDetail from '@/components/frontend-panel/course-page/CourseDetail';
import WhoThisCourse from '@/components/frontend-panel/course-page/WhoThisCourse';
import CourseFaqs from '@/components/frontend-panel/course-page/CourseFaqs';

const CoursePage = () => {
    
  const courseFeatures = [
    '2-Day Course (with mandatory distance learning)',
    'ACT Awareness & ACT Security courses included',
    'Recognising terrorism',
    'Effective crowd control techniques',
    'Physical Intervention',
    'Get certified in 10–15 working days'
  ];

  const reviews = [
    {
      name: 'Fred Pulisic',
      course: 'Hurak Learning',
      date: 'Tue July 30 2024',
      rating: 5,
      review: 'I booked my training through Hurak but I got my SIA training at Reed Training. The trainers were awesome and I did get the required treatment and training as I was told. Their service was good and I would love to do my CCTV training with them in the future.',
    },
    {
      name: 'Fred Pulisic',
      course: 'Hurak Learning',
      date: 'Tue July 30 2024',
      rating: 5,
      review: 'I booked my training through Hurak but I got my SIA training at Reed Training. The trainers were awesome and I did get the required treatment and training as I was told. Their service was good and I would love to do my CCTV training with them in the future.',
    },
    {
      name: 'Fred Pulisic',
      course: 'Hurak Learning',
      date: 'Tue July 30 2024',
      rating: 5,
      review: 'I booked my training through Hurak but I got my SIA training at Reed Training. The trainers were awesome and I did get the required treatment and training as I was told. Their service was good and I would love to do my CCTV training with them in the future.',
    },
    // Add more reviews here
  ];

  return (
    <div>
        <div className="w-full bg-white">
            <CourseBanner />
            <CourseFeatures features={courseFeatures} />
            <LearningOptions />
            <section className="course-main-module">
            <div className="container mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Left Column (3 col) */}
                <div className="md:col-span-3  p-4">
                    <LeftArea />
                </div>

                {/* Middle Column (6 col) */}
                <div className="md:col-span-6 p-4">
                    <CourseDetail />
                    <WhoThisCourse />
                    <AreasCovered />
                </div>

                {/* Right Column (3 col) */}
                <div className="md:col-span-3 hidden lg:block">
                    <RightArea />
                </div>
                </div>
            </div>
            </section>

            <ReviewsSection reviews={reviews} />
            <FeatureSection />
            <CourseFaqs />
        </div>
    </div>
  )
}

export default CoursePage
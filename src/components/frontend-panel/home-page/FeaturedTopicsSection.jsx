import React from 'react';

const FeaturedTopicsSection = () => {
  return (
    <section className="add-sec feature-topics-sec py-5 bg-[#FBFBF8]">
      <div className="container mx-auto">
        <div className="text-center lg:text-left">
          <h4 className="heading text-3xl font-semibold ml-5">Featured Topics</h4>
        </div>

        <div className="flex flex-wrap mt-6">
          <div className="w-full lg:w-1/2 px-4 mb-6">
            {/* Construction */}
            <div className="mb-6">
              <h5 className="font-bold text-lg mb-4">
                <i className="las la-fire-extinguisher pr-2 text-2xl"></i>Construction
              </h5>
              <ul className="list-none flex flex-wrap gap-x-5">
                <li className="mb-3 pr-3 border-r-2 border-gray-300">
                  <a href="https://hurak.com/courses/smsts" className="text-[#5022c2] underline font-semibold">SMSTS</a>
                </li>
                <li className="mb-3 pr-3 border-r-2 border-gray-300">
                  <a href="https://hurak.com/courses/sssts" className="text-[#5022c2] underline font-semibold">SSSTS</a>
                </li>
                <li className="mb-3 pr-3 border-r-2 border-gray-300">
                  <a href="https://hurak.com/courses/cscs" className="text-[#5022c2] underline font-semibold">CSCS</a>
                </li>
                <li className="mb-3 pr-3 border-r-2 border-gray-300">
                  <a href="https://hurak.com/courses/banksman" className="text-[#5022c2] underline font-semibold">Banksman</a>
                </li>
                <li className="mb-3 pr-3 border-r-2 border-gray-300">
                  <a href="https://hurak.com/courses/iosh" className="text-[#5022c2] underline font-semibold">IOSH</a>
                </li>
                <li className="mb-3 pr-3">
                  <a href="https://hurak.com/courses/nebosh" className="text-[#5022c2] underline font-semibold">NEBOSH</a>
                </li> {/* No border on the last item */}
              </ul>
            </div>

            {/* First Aid */}
            <div className="mb-6">
              <h5 className="font-bold text-lg mb-4">
                <i className="las la-first-aid pr-2 text-2xl"></i>First Aid
              </h5>
              <ul className="list-none flex flex-wrap gap-x-5">
                <li className="mb-3 pr-3 border-r-2 border-gray-300">
                  <a href="https://hurak.com/courses/emergency-first-aid-at-work" className="text-[#5022c2] underline font-semibold">Emergency First Aid at Work</a>
                </li>
                <li className="mb-3 pr-3 border-r-2 border-gray-300">
                  <a href="https://hurak.com/courses/first-aid-at-work" className="text-[#5022c2] underline font-semibold">First Aid at Work</a>
                </li>
                <li className="mb-3 pr-3 border-r-2 border-gray-300">
                  <a href="https://hurak.com/courses/paediatric-first-aid" className="text-[#5022c2] underline font-semibold">Paediatric First Aid</a>
                </li>
                <li className="mb-3 pr-3 border-r-2 border-gray-300">
                  <a href="https://hurak.com/courses/mental-health-first-aid" className="text-[#5022c2] underline font-semibold">Mental Health First Aid</a>
                </li>
              </ul>
            </div>

            {/* Teaching & Academics */}
            <div className="mb-6">
              <h5 className="font-bold text-lg mb-4">
                <i className="las la-chalkboard-teacher pr-2 text-2xl"></i>Teaching & Academics
              </h5>
              <ul className="list-none flex flex-wrap gap-x-5">
                <li className="mb-3 pr-3 border-r-2 border-gray-300">
                  <a href="https://hurak.com/courses/education-training" className="text-[#5022c2] underline font-semibold">Education Training</a>
                </li>
                <li className="mb-3 pr-3 border-r-2 border-gray-300">
                  <a href="https://hurak.com/courses/aet" className="text-[#5022c2] underline font-semibold">AET</a>
                </li>
                <li className="mb-3 pr-3 border-r-2 border-gray-300">
                  <a href="https://hurak.com/courses/iqa-training" className="text-[#5022c2] underline font-semibold">IQA Training</a>
                </li>
                <li className="mb-3 pr-3 border-r-2 border-gray-300">
                  <a href="https://hurak.com/courses/sia-trainers" className="text-[#5022c2] underline font-semibold">SIA Trainers</a>
                </li>
                <li className="mb-3 pr-3 border-r-2 border-gray-300">
                  <a href="https://hurak.com/courses/assessment-training" className="text-[#5022c2] underline font-semibold">Assessment Training</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            {/* Health and Safety */}
            <div className="mb-6">
              <h5 className="font-bold text-lg mb-4">
                <i className="las la-fire-extinguisher pr-2 text-2xl"></i>Health and Safety
              </h5>
              <ul className="list-none flex flex-wrap gap-x-5">
                <li className="mb-3 pr-3 border-r-2 border-gray-300">
                  <a href="https://hurak.com/courses/fire-safety" className="text-[#5022c2] underline font-semibold">Fire Safety</a>
                </li>
                <li className="mb-3 pr-3 border-r-2 border-gray-300">
                  <a href="https://hurak.com/courses/asbestos-awareness" className="text-[#5022c2] underline font-semibold">Asbestos Awareness</a>
                </li>
                <li className="mb-3 pr-3 border-r-2 border-gray-300">
                  <a href="https://hurak.com/courses/manual-handling" className="text-[#5022c2] underline font-semibold">Manual Handling</a>
                </li>
                <li className="mb-3 pr-3 border-r-2 border-gray-300">
                  <a href="https://hurak.com/courses/health-and-safety-in-the-workplace" className="text-[#5022c2] underline font-semibold">Health and Safety in the Workplace</a>
                </li>
                <li className="mb-3 pr-3">
                  <a href="https://hurak.com/courses/citb-site-safety-plus" className="text-[#5022c2] underline font-semibold">CITB Site Safety Plus</a>
                </li>
              </ul>
            </div>

            {/* Health and Care */}
            <div className="mb-6">
              <h5 className="font-bold text-lg mb-4">
                <i className="las la-hand-holding-heart pr-2 text-2xl"></i>Health and Care
              </h5>
              <ul className="list-none flex flex-wrap gap-x-5">
                <li className="mb-3 pr-3">
                  <a href="https://hurak.com/courses/care" className="text-[#5022c2] underline font-semibold">Care</a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
  <h5 className="font-bold text-lg mb-4">
    <i className="las la-shield-alt pr-2 text-2xl"></i>Security
  </h5>
  <ul className="list-none flex flex-wrap gap-x-5">
    <li className="mb-3 pr-3 border-r-2 border-gray-300">
      <a href="https://hurak.com/courses/door-supervisor" className="text-[#5022c2] underline font-semibold">Door Supervisor</a>
    </li>
    <li className="mb-3 pr-3 border-r-2 border-gray-300">
      <a href="https://hurak.com/courses/top-up-door-supervisors" className="text-[#5022c2] underline font-semibold">Top up for Door Supervisors</a>
    </li>
    <li className="mb-3 pr-3 border-r-2 border-gray-300">
      <a href="https://hurak.com/courses/security-guard" className="text-[#5022c2] underline font-semibold">Security Guard</a>
    </li>
    <li className="mb-3 pr-3 border-r-2 border-gray-300">
      <a href="https://hurak.com/courses/top-up-security-guards" className="text-[#5022c2] underline font-semibold">Top up for Security Guards</a>
    </li>
    <li className="mb-3 pr-3 border-r-2 border-gray-300">
      <a href="https://hurak.com/courses/cctv-operator" className="text-[#5022c2] underline font-semibold">CCTV Operator</a>
    </li>
    <li className="mb-3 pr-3 border-r-2 border-gray-300">
      <a href="https://hurak.com/courses/crowd-safety" className="text-[#5022c2] underline font-semibold">Crowd Safety</a>
    </li>
    <li className="mb-3 pr-3 border-r-2 border-gray-300">
      <a href="https://hurak.com/courses/close-protection" className="text-[#5022c2] underline font-semibold">Close Protection</a>
    </li>
    <li className="mb-3 pr-3 border-r-2 border-gray-300">
      <a href="https://hurak.com/courses/top-up-close-protection" className="text-[#5022c2] underline font-semibold">Top up for Close Protection</a>
    </li>
    <li className="mb-3 pr-3">
      <a href="https://hurak.com/courses/sia-trainers" className="text-[#5022c2] underline font-semibold">SIA Trainers</a>
    </li> 
  </ul>
</div>

   
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTopicsSection;

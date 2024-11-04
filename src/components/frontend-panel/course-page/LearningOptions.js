import { FaCheck } from 'react-icons/fa';
import { MdOutlineLocalOffer } from 'react-icons/md'; // For "Most Popular" badge
import { BsGlobe, BsFillPeopleFill } from 'react-icons/bs'; // Icons for E-learning and In-house
import Link from 'next/link';

const LearningOptions = () => {
  const options = [
    {
      title: 'E-learning',
      icon: <BsGlobe className="text-2xl mr-2" />, // Icon for E-learning
      points: [
        'Designed to work around your schedule.',
        'Complete the course in your own time.',
        'Access learning materials from any device.',
        'Book exams when you’re ready.',
      ],
      price: '£99.99',
      oldPrice: '£169.99',
      discount: '41% Off',
      popular: true,
      purchaseInfo: 'Looking to purchase multiple?',
      buttonText: 'Book Now',
    },
    {
      title: 'Classroom',
      points: [
        'Focused study away from the workplace.',
        'Face-to-face support with experienced tutors.',
        'Interact with fellow professionals.',
      ],
      price: '£89.99',
      oldPrice: '£109.99',
      discount: '18% Off',
      buttonText: 'See Dates',
    },
    {
      title: 'Online (Live)',
      points: [
        'A complete classroom experience you can do from home.',
        'Structured learning with access to e-learning materials.',
        'Interact live with your tutor and other students.',
      ],
      price: '£144',
      buttonText: 'See Dates',
    },
    {
      title: 'In-house',
      icon: <BsFillPeopleFill className="text-2xl mr-2" />, // Icon for In-house
      points: [
        'Study alongside colleagues and learn together.',
        'Choose from classroom, live tutor-led online or self-paced online learning options.',
        'Tailored course content to your workplace.',
      ],
      contactInfo: 'CONTACT US FOR A QUOTE',
      buttonText: 'Enquire Now',
    },
  ];

  return (
    <section className="learning-options py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mb-8 font-bold">Learning Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 min-h-full flex flex-col justify-between border-[2px] border-gray hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Title and Icon in one line */}
                <div className="flex items-center mb-4">
                  {option.icon && <div>{option.icon}</div>}
                  <h3 className="text-xl font-semibold">{option.title}</h3>
                </div>

                {option.popular && (
                  <div className="bg-yellow-200 text-yellow-800 text-sm font-bold py-1 px-2 rounded-full inline-flex items-center mb-4">
                    <MdOutlineLocalOffer className="mr-1" /> MOST POPULAR
                  </div>
                )}

                <ul className="space-y-2 mb-6">
                  {option.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {option.purchaseInfo && (
                  <p className="text-blue-500 text-sm font-semibold mb-2">
                    {option.purchaseInfo}
                  </p>
                )}
              </div>

              <div>
                {/* Price section placed above the button */}
                {option.price && (
                  <div className="mb-4 text-left">
                    <p className="text-lg font-bold">
                      From {option.price} <span className="text-sm">All inc</span>
                    </p>
                    {option.oldPrice && (
                      <p className="text-sm text-gray-500 line-through">
                        {option.oldPrice}
                      </p>
                    )}
                    {option.discount && (
                      <p className="text-sm text-red-500">{option.discount}</p>
                    )}
                  </div>
                )}

                {option.contactInfo && (
                  <p className="font-semibold text-lg mb-4">{option.contactInfo}</p>
                )}

                <Link href="pricing-plans"
                  className={`${
                    option.title === 'In-house' ? 'bg-orange-500' : 'bg-red-500'
                  } text-white px-4 py-2 rounded hover:bg-opacity-90 w-full`}
                >
                  {option.buttonText}
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningOptions;

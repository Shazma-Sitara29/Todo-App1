import React from 'react';
import { FaHeartbeat, FaUserShield, FaStar, FaHandsHelping } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-20 font-serif">
      {/* Centered About Us Heading */}
      <h2 className="text-4xl font-bold  my-8 text-center mb-10">About Us</h2>
      
      <div className="max-w-6xl mx-auto px-4 lg:flex lg:items-stretch lg:space-x-8">
        {/* Left Side Image with Full Height Adjustment */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img
            src="https://www.tomahhealth.org/wp-content/uploads/2022/09/emergency-urgent-care.jpg"
            alt="Healthcare Team"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* Right Side Content in Three Divs with White Background */}
        <div className="lg:w-1/2 space-y-8">
          {/* About Us Content */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-center mb-4">About Us</h3>
            <p className="text-lg text-gray-700">
            At <strong>Urgent Care</strong> , established in <strong>1989 on Shahrah-e-Faisal in Karachi, Pakistan,</strong> we have been dedicated to transforming healthcare for over three decades. Our commitment to excellence in medical services and patient care has made us a trusted name in the community. At Urgent Care, we prioritize the well-being of our patients, providing comprehensive healthcare solutions that are personalized to meet the unique needs of each individual. Our mission is to enhance the quality of life for all those we serve, bringing advanced medical treatments and compassionate care to the heart of Karachi.
            </p>
          </div>

          {/* Our Vision Content */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-center mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700">
              We envision a world where everyone has access to high-quality healthcare services that empower them to live healthier, happier lives. Our commitment to innovation and excellence drives us to continuously improve our services and adopt the latest advancements in medical technology.
            </p>
          </div>

          {/* Our Team Content */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-center mb-4">Our Team</h3>
            <p className="text-lg text-gray-700">
              Our dedicated team of healthcare professionals is comprised of experienced doctors, nurses, and support staff who are passionate about patient care. We provide holistic and personalized treatment plans that cater to the needs of each patient.
            </p>
          </div>
        </div>
      </div>

      {/* Icon Cards Section */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <h3 className="text-4xl font-semibold text-center mb-6">Our Values</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: <FaHeartbeat className="text-6xl text-blue-500" />, title: 'Compassion', description: 'We treat every patient with kindness, empathy, and respect.' },
            { icon: <FaUserShield className="text-6xl text-green-500" />, title: 'Integrity', description: 'We uphold the highest ethical standards in all our interactions.' },
            { icon: <FaStar className="text-6xl text-yellow-500" />, title: 'Excellence', description: 'We strive for excellence in everything we do.' },
            { icon: <FaHandsHelping className="text-6xl text-red-500" />, title: 'Collaboration', description: 'We work closely with patients and families to achieve the best outcomes.' }
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              {value.icon}
              <h4 className="font-bold mt-4">{value.title}</h4>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

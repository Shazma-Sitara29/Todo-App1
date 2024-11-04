import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between font-serif bg-cover bg-center mt-4 py-40 px-10" 
             style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSO3KUdWLc6zzGYIUt-TxfaLymvxbL_b71iv27gWEjkVUiR6b7tfXEcyyokZD4as09iU&usqp=CAU')` }}>
      <div className="max-w-xl bg-white bg-opacity-75 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Get Quick</h1>
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Medical Services</h2>
        <p className=" mb-6">
       <strong>Healthcare with Compassion and Excellence</strong> 
"Bringing compassionate healthcare to every doorstep, where healing is our mission, and excellence is our promise."

<strong>Your Health, Our Priority</strong>
"Providing advanced healthcare services, tailored to meet your unique needs with utmost care and professionalism."

<strong>Empowering Healthier Futures</strong>
"Dedicated to offering the best in medical care, advanced technology, and a team you can trust for a healthier tomorrow."

<strong>Where Every Life Matters</strong>
"Committed to serving you with the finest medical facilities and compassionate care, every day."

<strong>Redefining Care</strong>
"From specialized treatments to personalized care, experience a place where healthcare goes beyond treatment."        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition duration-300">
          Get Services
        </button>
      </div>
      <div className="hidden md:block relative">
        <img src="https://img.freepik.com/premium-photo/muslim-female-doctor-wearing-hijab-medical-mask-with-clipboard-office_368093-5979.jpg" alt="Healthcare" className="h-96 w-96 object-cover rounded-full shadow-lg" />
        <div className="absolute top-10 right-10 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">1520+</h3>
          <p className="text-gray-500">Active Clients</p>
        </div>
        <div className="absolute bottom-10 right-10 bg-blue-600 text-white p-4 rounded-lg shadow-md">
          <p className="text-sm">Get 20% off on every first month</p>
          <p className="text-sm">Expert Doctors</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

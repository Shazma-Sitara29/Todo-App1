import React from "react";
import { FaUserMd, FaAmbulance, FaVial, FaStethoscope, FaHeartbeat, FaBriefcaseMedical } from "react-icons/fa";

const services = [
  {
    title: "General Consultation",
    description: "Our team of skilled doctors is available for routine check-ups, diagnosis, and treatment of various health conditions.",
    icon: <FaUserMd className="text-white text-4xl bg-blue-500 p-2 rounded-full" />,
  },
  {
    title: "Emergency Care",
    description: "Our emergency care team is trained to handle urgent medical situations with speed and precision.",
    icon: <FaAmbulance className="text-white text-4xl bg-red-500 p-2 rounded-full" />,
  },
  {
    title: "Diagnostic Services",
    description: "We offer a range of diagnostic tests, including blood tests, imaging, and more, using state-of-the-art equipment.",
    icon: <FaVial className="text-white text-4xl bg-green-500 p-2 rounded-full" />,
  },
  {
    title: "Specialist Referrals",
    description: "Our network of specialists is available for referrals, providing you with access to expert treatment tailored to your needs.",
    icon: <FaStethoscope className="text-white text-4xl bg-purple-500 p-2 rounded-full" />,
  },
  {
    title: "Preventative Health",
    description: "Our preventative services include health screenings, vaccinations, and wellness check-ups.",
    icon: <FaHeartbeat className="text-white text-4xl bg-yellow-500 p-2 rounded-full" />,
  },
  {
    title: "Medical Packages",
    description: "We offer comprehensive medical packages that include preventive care, diagnostic tests, and consultations at an affordable price.",
    icon: <FaBriefcaseMedical className="text-white text-4xl bg-teal-500 p-2 rounded-full" />,
  },
];

const Services = () => {
  return (
    <section className="py-20  flex justify-center items-center font-serif">
      <div className="max-w-7xl mx-auto px-4  my-8 text-center">
        <h2 className="text-4xl font-bold  mb-10">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 max-w-xs">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

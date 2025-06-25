import { FaShippingFast, FaMapMarkedAlt, FaBoxes, FaHandHoldingUsd, FaWarehouse, FaUndo } from 'react-icons/fa';

const services = [
  {
    title: 'Express & Standard Delivery',
    description:
      'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.',
    icon: <FaShippingFast className="text-4xl text-black" />,
  },
  {
    title: 'Nationwide Delivery',
    description:
      'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.',
    icon: <FaMapMarkedAlt className="text-4xl text-black" />,
  },
  {
    title: 'Fulfillment Solution',
    description:
      'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.',
    icon: <FaBoxes className="text-4xl text-black" />,
  },
  {
    title: 'Cash on Home Delivery',
    description:
      '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.',
    icon: <FaHandHoldingUsd className="text-4xl text-black" />,
  },
  {
    title: 'Corporate Service / Contract In Logistics',
    description:
      'Customized corporate services which includes warehouse and inventory management support.',
    icon: <FaWarehouse className="text-4xl text-black" />,
  },
  {
    title: 'Parcel Return',
    description:
      'Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.',
    icon: <FaUndo className="text-4xl text-black" />,
  },
];

const OurServices = () => {
  return (
    <section className="py-12 px-4 md:px-8 text-neutral-content bg-[#03373D] rounded-2xl mt-24">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 ">Our Services</h2>
        <p className="mb-10 text-sm max-w-3xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 rounded-2xl">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card shadow-md hover:shadow-xl transition-shadow duration-300 ${
        index === 1 ? 'bg-[#CAEB66]' : 'bg-base-200'
      }`}
            >
              <div className="card-body items-center text-black">
                <div className="mb-4 p-4 bg-base-300 rounded-full">{service.icon}</div>
                <h3 className="card-title text-xl ">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;

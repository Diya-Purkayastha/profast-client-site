import React from 'react';
import img from '../assets/location-merchant.png'

const BeMerchant = () => {
    return (
        <div className="bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat bg-[#03373D] p-20 rounded-4xl text-white mt-28" data-aos="zoom-in-down" >
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img
      src={img}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
      <p className="py-6">
        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
      </p>
      <button className="btn bg-[#CAEB66] rounded-full border-none ">Become a Merchant</button>
      <button className="btn border-[#CAEB66] text-[#CAEB66] rounded-full border btn-outline ml-2">Earn with Profast Courier</button>
    </div>
  </div>
</div>
    );
};

export default BeMerchant;
import React from 'react';
import Banner from '../components/Banner';
import OurServices from '../components/OurServices';
import BrandLogos from '../components/BrandLogos';
import BenefitSection from '../components/BenefitSection';
import BeMerchant from '../components/BeMerchant';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <OurServices></OurServices>
            <BrandLogos></BrandLogos>
            <BenefitSection></BenefitSection>
            <BeMerchant></BeMerchant>
        </div>
    );
};

export default Home;
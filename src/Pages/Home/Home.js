import React from 'react';
import Banner from './Banner';
import InfoCard from './InfoCard';
import ServiceProvide from './ServiceProvide';
import DentalTerm from './DentalTerm';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <ServiceProvide></ServiceProvide>
            <DentalTerm></DentalTerm>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
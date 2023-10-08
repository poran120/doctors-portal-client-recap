import React from 'react';
import Banner from './Banner';
import InfoCard from './InfoCard';
import ServiceProvide from './ServiceProvide';
import DentalTerm from './DentalTerm';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <ServiceProvide></ServiceProvide>
            <DentalTerm></DentalTerm>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
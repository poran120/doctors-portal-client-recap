import React from 'react';
import Banner from './Banner';
import InfoCard from './InfoCard';
import ServiceProvide from './ServiceProvide';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <ServiceProvide></ServiceProvide>
        </div>
    );
};

export default Home;
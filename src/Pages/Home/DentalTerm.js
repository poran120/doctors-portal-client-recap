import React from 'react';
import treatmentImages from '../../assets/images/treatment.png'

const DentalTerm = () => {
    return (
        <div className="my-40 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-slate-100 shadow-xl p-20 text-black">
  <div className='card-image'>
  <figure><img className='w-[400px] mx-auto' src={treatmentImages} alt="Album"/></figure>
  </div>
  <div className="card-body">
    <h2 className="card-title">Exceptional Dental Care , on Your Term</h2>
    <p>The clean design offered by the template can help the visitors or users of this template find the services they need easily. This template even comes with an appointment form so any patient can make an appointment with doctors or other health workers by registering online. And the modern look of this template gives a fresh and professional appearance that can convince the audience more. It also has a simple and friendly user interface that makes it easy to use by any hospital admin.</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default DentalTerm;
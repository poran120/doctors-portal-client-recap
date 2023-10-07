import React from 'react';
import appointment from "../../assets/images/appointment.png";

const Contact = () => {
    return (
        <section 
        style={{
            background: `url(${appointment})`
        }} 
        className='text-center py-10 rounded-lg text-white'>
            <h4 className='font-bold text-xl'>Contact With Us</h4>
            <h2 className='text-2xl'>Stay Connect With Us</h2>
            <input className='mb-3 bg-transparent border bg-slate-100' type='text' placeholder='Email Address' ></input>
            <br></br>
            <input className='bg-transparent'  type='text' placeholder='Your Subject' ></input>
            <br></br>
            <textarea className="textarea mb-3" placeholder="Bio"></textarea>
            <br></br>
            <button className="btn btn-outline btn-primary">Primary</button>
        </section>
    );
};

export default Contact;
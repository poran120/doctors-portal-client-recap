import React from "react";

const Services = ({data}) => {
    const {name, image} = data
  return (
    <div className="card lg:max-w-lg bg-slate-50 shadow-xl">
      <figure className="py-3">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center p-0 text-black">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Services;

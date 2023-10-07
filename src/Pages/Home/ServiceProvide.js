import React from "react";
import fluorideImage from "../../assets/images/fluoride.png";
import cavityImage from "../../assets/images/cavity.png";
import whiteningImage from "../../assets/images/whitening.png";
import Services from "./Services";

const ServiceProvide = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description: "",
      image: fluorideImage,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description: "",
      image: cavityImage,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description: "",
      image: whiteningImage,
    },
  ];
  return (
    <div className="section-container my-20">
      <div className="text-center text-black mb-10">
        <h3 className="text-xl font-bold uppercase">Our Services</h3>
        <h1 className="text-4xl uppercase">Services We Provide</h1>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            servicesData.map((data) => <Services
            key = {data.id}
            data = {data}
            ></Services>)
        }
      </div>
    </div>
  );
};

export default ServiceProvide;

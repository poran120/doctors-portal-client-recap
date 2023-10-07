import React from "react";
import quote from "../../assets/icons/quote.svg";
import peopleOne from "../../assets/images/people1.png";
import peopleTwo from "../../assets/images/people2.png";
import peopleThree from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      image: peopleOne,
      name: "Martin Jackson",
      location: "New Zealand",
    },
    {
      id: 2,
      image: peopleTwo,
      name: "Martin Jackson",
      location: "Auckland",
    },
    {
      id: 3,
      image: peopleThree,
      name: "Martin Jackson",
      location: "Japanese",
    },
  ];
  return (
    <section className="my-40">
      <div className="testimonial-top flex items-center justify-between">
        <div>
          <h4>Testimonials</h4>
          <h2>What Our Patients Says</h2>
        </div>
        <div>
          <img src={quote} className="w-24 lg:w-48" alt="quote"></img>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

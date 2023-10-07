import React from "react";

const Review = ({ review }) => {
  const { name, location, image } = review;
  return (
    <div className="card lg:max-w-lg bg-slate-100 text-black">
      <div className="card-body">
        <p>The clean design offered by the template can help the visitors or users of this template find the services they need easily. This template even comes with an appointment form so any patient can make.</p>
       <div className="review-section flex items-center gap-4">
       <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={image} />
  </div>
</div>
<div>
    <p className="font-bold">{name}</p>
    <p>{location}</p>
</div>
</div>
       </div>
      </div>
  );
};

export default Review;

import React from "react";

export const CardsCarousel = ({ title, ...props }) => {
  return (
    <div className="container-fluid mb-5 px-5">
      <h2 className="text-danger text-start mb-5">{title}</h2>
      <div className="d-flex overflow-auto">{props.children}</div>
    </div>
  );
};
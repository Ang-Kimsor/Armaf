import React from "react";

const BigHero = ({ img, name }) => {
  return (
    <section className="flex justify-center w-full">
      <img className="w-full" src={img} alt={name} />
    </section>
  );
};

export default BigHero;

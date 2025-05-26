import React from "react";

const BigHero = ({ img, name }) => {
  return (
    <section className="w-full flex justify-center">
      <img className="w-[99.8%]" src={img} alt={name} />
    </section>
  );
};

export default BigHero;

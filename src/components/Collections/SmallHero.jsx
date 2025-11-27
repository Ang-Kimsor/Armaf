const SmallHero = ({ category, title, des, imgbig, imgsmall, reverse }) => {
  return (
    <>
      <div
        className={`w-full bg-white flex gap-[20px] items-center md:justify-start justify-center flex-col-reverse relative ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="lg:w-[500px] w-full">
          <img src={imgbig} alt={category} />
        </div>
        <div className="w-[240px] pr-3 flex flex-col">
          <h1 className="text-2xl font-semibold ">{title}</h1>
          <p className="text-[9px] text-black/60 font-extralight">{des}</p>
          <img
            src={imgsmall}
            className="lg:size-[225px] lg:bg-transparent bg-white size-[250px] border lg:relative absolute mt-5 lg:bottom-0 -bottom-[130px]"
            alt={category}
          />
        </div>
      </div>
    </>
  );
};

export default SmallHero;

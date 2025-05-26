import { useParams } from "react-router-dom";
import { HeroCollections } from "./../data/Collections";
import { useEffect } from "react";
import img from "./../assets/clubdenuit/Hero.jpg";
const Collections = () => {
  let { category } = useParams();
  category = category.replaceAll("-", " ");
  let HeroImg = HeroCollections;
  HeroImg = HeroImg.find((c) => c.category == category);
  console.log(HeroImg);
  return (
    <main>
      <h1 className="my-4 text-2xl tracking-wider text-center uppercase md:text-4xl text-black/80 font-extralight">
        {category}
      </h1>
      {category != "New Launches" && (
        <section>
          <img src={HeroImg.img} alt="" />
        </section>
      )}
    </main>
  );
};

export default Collections;

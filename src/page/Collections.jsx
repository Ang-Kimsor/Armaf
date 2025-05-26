import { useParams } from "react-router-dom";
import { HeroCollections } from "./../data/Collections";
import { BigHero } from "../components";
const Collections = () => {
  let { category } = useParams();
  category = category.replaceAll("-", " ");
  let HeroImg = HeroCollections;
  HeroImg = HeroImg.find(
    (c) => c.category.toLowerCase() == category.toLowerCase()
  );
  return (
    <main>
      <h1 className="my-4 text-2xl tracking-wider text-center uppercase md:text-4xl text-black/80 font-extralight">
        {category}
      </h1>
      {category != "New Launches" && (
        <BigHero img={HeroImg.img} name={HeroImg.name} />
      )}
    </main>
  );
};

export default Collections;

import Vdo from "./../../assets/HeroVdo.mp4";

const VideoHero = () => {
  return (
    <section className="2xl:[height:calc(100vh-140px)]">
      <video
        src={Vdo}
        className="w-full h-full object-cover object-center"
        loop
        autoPlay
        muted
        playsInline
      ></video>
    </section>
  );
};

export default VideoHero;

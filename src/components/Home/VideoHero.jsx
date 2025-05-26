const VideoHero = ({ Vdo }) => {
  return (
    <section className="w-full 2xl:[height:calc(100vh-140px)] mb-8">
      <video
        src={Vdo}
        className="w-full h-full object-cover object-center"
        loop
        autoPlay
        muted
        preload="auto"
        playsInline
      ></video>
    </section>
  );
};

export default VideoHero;

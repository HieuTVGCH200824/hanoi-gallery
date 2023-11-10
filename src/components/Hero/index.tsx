import HeroImg from "../../assets/Hero.png";
import ButtonImg from "../../assets/menu-button.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  function handleClickLocation() {
    const element = document.getElementById("location");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="text-[#001ECB] mt-20 px-10 text-center h-[80vh]">
      <div className="flex justify-center flex-col items-center w-full">
        <h5>
          DI
          <span className="font-bold"> SẢN</span>
        </h5>
        <img src={HeroImg} className="mt-10 w-[900px]" alt="" />
        <div className="flex gap-8 text-4xl items-center justify-center mt-6">
          <span>Khám phá</span>
          <div className="py-5 px-8 rounded-full border italic w-52">
            <Typewriter
              options={{
                strings: ["lịch sử", "văn hóa"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <span>thủ đô</span>
        </div>
      </div>
      <button
        onClick={handleClickLocation}
        className="w-36 animate-bounce flex"
      >
        <img src={ButtonImg} alt="" />
      </button>
    </section>
  );
};

export default Hero;

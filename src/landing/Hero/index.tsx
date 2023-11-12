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
        <h5 className="font-felix text-lg">
          DI
          <span className="font-extrabold font-spartan"> SẢN</span>
        </h5>
        <img src={HeroImg} className="mt-10 w-[600px]" alt="" />
        <div className="flex gap-8 text-6xl font-light items-center justify-center font-spartan mt-6">
          <span>Khám phá</span>
          <div className="py-5 px-8 rounded-full border italic font-garamond font-medium w-72 whitespace-nowrap">
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

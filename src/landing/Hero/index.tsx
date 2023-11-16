import HeroImg from "../../assets/Hero.png";
import Typewriter from "typewriter-effect";
import CircleImg from "../../assets/outter-button.png";
import ArrowImg from "../../assets/inner-button.png";

const Hero = () => {
  function handleClickLocation() {
    const element = document.getElementById("location");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="text-[#001ECB] mt-20 text-center max-h-[85vh] h-[85vh]">
      <div className="flex justify-center flex-col items-center w-full">
        <h5 className="font-felix text-lg">
          DI
          <span className="font-extrabold font-spartan"> SẢN</span>
        </h5>
        <img
          src={HeroImg}
          className="mt-10  w-[70vw] sm:w-[60vw] lg:w-[40vw]"
          alt=""
        />
        <div className="flex gap-8 xl:text-6xl  text-4xl 2xl:text-8xl font-light items-center justify-center font-spartan mt-6">
          <span>Khám phá</span>
          <div className="py-5 px-8 rounded-full border italic font-garamond font-medium w-40 lg:w-96 whitespace-nowrap">
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
      <button onClick={handleClickLocation} className="w-36 flex mt-8">
        <div className="relative">
          <img
            src={CircleImg}
            className="absolute animate-[spin_15s_linear_infinite]"
            alt=""
          />
          <img src={ArrowImg} className="" alt="" />
        </div>
      </button>
    </section>
  );
};

export default Hero;

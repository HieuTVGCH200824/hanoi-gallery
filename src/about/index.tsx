import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div>
      <section className="text-[#001ECB] mt-20 px-10 text-center h-[80vh]">
        <h1 className="font-playfair text-9xl">Xin chào!</h1>
        <div className="flex gap-8 text-6xl font-light items-center justify-center font-spartan mt-6">
          <span>Chúng tớ là</span>
          <div className="py-5 px-8 rounded-full border italic font-garamond font-medium w-72 whitespace-nowrap">
            <Typewriter
              options={{
                strings: ["UI/UX", "3d", "graphic"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <span>designer</span>
        </div>
      </section>
    </div>
  );
};

export default About;

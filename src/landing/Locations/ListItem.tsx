// import LangBacImg from "./assets/lang-bac.jpg";

const background = [
  {
    number: "01",
    img: "/lang-bac.png",
  },
  {
    number: "02",
    img: "/thap-rua.png",
  },
  {
    number: "03",
    img: "/mot-cot.png",
  },
];

const ListItem = ({ number, text }: { number: string; text: string }) => {
  const selected = background.find((item) => item.number === number);
  return (
    <div>
      <div
        className={`text-[#001ECB] text-4xl font-bold group rounded-3xl px-8 py-4 border border-[#001ECB] h-20 hover:text-white duration-500 transition-all ease-in-out hover:h-96 bg-right bg-cover relative overflow-hidden`}
      >
        <span className="font-normal font-modern z-1">{number}</span>
        <span className="font-sans ml-4 z-1">{text}</span>
        <img
          src={selected?.img}
          alt=""
          className="w-full absolute -top-1/2 left-0 object-cover -z-10 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500"
        />
      </div>
    </div>
  );
};

export default ListItem;

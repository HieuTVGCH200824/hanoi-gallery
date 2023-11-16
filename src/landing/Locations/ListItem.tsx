// import LangBacImg from "./assets/lang-bac.jpg";

const background = [
  {
    number: "01",
    url: `hover:bg-lang-bac`,
  },
  {
    number: "02",
    url: `hover:bg-thap-rua`,
  },
  {
    number: "03",
    url: `hover:bg-mot-cot`,
  },
];

const ListItem = ({ number, text }: { number: string; text: string }) => {
  const selected = background.find((item) => item.number === number);
  return (
    <div
      className={`text-[#001ECB] text-4xl font-bold rounded-3xl px-8 py-4 border border-[#001ECB] h-20 hover:text-white duration-500 transition-all ease-in-out hover:h-96 bg-right bg-cover ${selected?.url}`}
    >
      <span className="font-normal font-modern">{number}</span>
      <span className="font-sans ml-4">{text}</span>
    </div>
  );
};

export default ListItem;

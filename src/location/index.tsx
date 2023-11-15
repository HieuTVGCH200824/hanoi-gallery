import { useParams } from "react-router-dom";
// import LangBacImg from "../assets/lang-bac.png";
// import ThapRuaImg from "../assets/thap-rua.jpg";
// import { useEffect, useState } from "react";
import FirstModel from "../components/Model/first.tsx";
import SecondModel from "../components/Model/second.tsx";
// import ThirdModel from "../components/Model/third.tsx";

const locations = [
  {
    id: "01",
    name: "Lăng Chủ tịch Hồ Chí Minh",
    description:
      "Lăng Chủ tịch Hồ Chí Minh là nơi an nghỉ của vị lãnh tụ vĩ đại của nhân dân Việt Nam. Lăng nằm trên quảng trường Ba Đình, là một công trình kiến trúc hiện đại mang đậm dấu ấn lịch sử.",
  },
  {
    id: "02",
    name: "Cột cờ Hà Nội",
    description:
      "Cột cờ Hà Nội là một cột cờ cao 33,3m, nằm trong khuôn viên Bảo tàng Lịch sử Quân sự Việt Nam. Cột cờ được xây dựng vào thế kỷ 19, là một biểu tượng của tinh thần yêu nước của dân tộc Việt Nam.",
  },
  {
    id: "03",
    name: "Chùa Một Cột",
    description:
      "Chùa Một Cột là một ngôi chùa độc đáo với kiến trúc hình bông sen nở, nằm ở phía tây hồ Hoàn Kiếm. Chùa được xây dựng vào thế kỷ 11, là một trong những biểu tượng của Phật giáo Việt Nam.",
  },
];

const ArrowIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="976"
    height="162"
    viewBox="0 0 976 162"
    fill="none"
  >
    <path
      d="M967.793 161.707C968.183 162.098 968.817 162.098 969.207 161.707L975.571 155.343C975.962 154.953 975.962 154.319 975.571 153.929C975.181 153.538 974.547 153.538 974.157 153.929L968.5 159.586L962.843 153.929C962.453 153.538 961.819 153.538 961.429 153.929C961.038 154.319 961.038 154.953 961.429 155.343L967.793 161.707ZM0 2H919.5V0H0V2ZM967.5 50V161H969.5V50H967.5ZM919.5 2C946.01 2 967.5 23.4903 967.5 50H969.5C969.5 22.3858 947.114 0 919.5 0V2Z"
      fill="#001ECB"
    />
  </svg>
);

const Location = () => {
  const { id } = useParams<{ id: string }>(); // Scrolling image scaling logic
  // const maxScrollFor100 = 250;
  // const maxPadding = 500;
  // // const [padding, setPadding] = useState(maxPadding);

  // const handleScroll = () => {
  //   const scrollY = window.scrollY;
  //   const percent =
  //     100 -
  //     (scrollY >= maxScrollFor100 ? 100 : scrollY / (maxScrollFor100 / 100));
  //   const newPadding = maxPadding * (percent / 100);
  //   setPadding(newPadding);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []); // Adding an empty dependency array to run the effect only once on mount

  const location = locations.find((loc) => loc.id === id);

  if (!location) {
    return <div>Location not found</div>;
  }

  const { name, description } = location;

  return (
    <section className="text-[#001ECB] mt-40 px-20 h-[130vh]">
      <div className="text-8xl flex gap-10 items-center">
        <span className="font-modern">{id}</span>
        <span>{name}</span>
      </div>
      <p className="mt-20 text-2xl w-1/2">{description}</p>
      <ArrowIcon className="mt-20 w-1/2" />
      {/* <div
        id="img-container"
        className="flex-center"
        style={{ padding: `0 ${padding}px` }}
      > */}
      <div className="max-w-[60vw] aspect-square mx-auto">
        {id === "01" ? <FirstModel /> : <SecondModel />}
      </div>
      {/* <div
          className="relative h-full z-1"
          style={{
            backgroundImage: `url(${LangBacImg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
        
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default Location;

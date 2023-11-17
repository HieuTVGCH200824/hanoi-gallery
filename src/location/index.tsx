import { useParams } from "react-router-dom";
import FirstModel from "../components/Model/first.tsx";
import SecondModel from "../components/Model/second.tsx";
import ThirdModel from "../components/Model/third.tsx";
import { useState } from "react";

const locations = [
  {
    id: "01",
    name: "Lăng Chủ tịch Hồ Chí Minh",
    description:
      "Lăng Chủ tịch Hồ Chí Minh, còn gọi là Lăng Hồ Chủ tịch, Lăng Bác, là nơi gìn giữ di hài Chủ tịch Hồ Chí Minh, vị lãnh tụ vĩ đại của nhân dân Việt Nam. Lăng được chính thức khởi công ngày 2 tháng 9 năm 1973, tại vị trí của lễ đài cũ giữa Quảng trường Ba Đình, nơi Hồ Chí Minh từng chủ trì các cuộc gặp mặt quan trọng.",
    history:
      "Sau khi Chủ tịch Hồ Chí Minh qua đời ngày 2 tháng 9 năm 1969, nhân dân Việt Nam và bạn bè quốc tế đã bày tỏ nguyện vọng được viếng thăm và tưởng nhớ Bác. Để đáp ứng nguyện vọng đó, Chính phủ Việt Nam đã quyết định xây dựng Lăng Chủ tịch Hồ Chí Minh. \n\n Lễ khởi công xây dựng Lăng diễn ra vào ngày 2 tháng 9 năm 1973, tại vị trí của lễ đài cũ giữa Quảng trường Ba Đình. Lăng được xây dựng trong vòng 2 năm, do kiến trúc sư Hoàng Anh Tuấn thiết kế. Lăng được khánh thành vào ngày 29 tháng 8 năm 1975. \n\n Công tác xây dựng Lăng Chủ tịch Hồ Chí Minh được tiến hành khẩn trương, với sự tham gia của hàng vạn cán bộ, chiến sĩ và nhân dân cả nước. Lăng được xây dựng theo tiêu chuẩn kỹ thuật cao nhất, với hệ thống điều hòa không khí và ánh sáng hiện đại, giúp giữ gìn thi hài Chủ tịch Hồ Chí Minh được lâu dài. \n\n Lăng Chủ tịch Hồ Chí Minh là một công trình có ý nghĩa đặc biệt đối với nhân dân Việt Nam. Lăng Bác là một biểu tượng của lòng yêu nước, tinh thần đoàn kết của nhân dân Việt Nam.",
    architecture:
      "Kiến trúc Lăng Chủ tịch Hồ Chí Minh được thiết kế theo phong cách hiện đại, kết hợp với những nét truyền thống của kiến trúc Việt Nam. Lăng gồm ba lớp chính, mỗi lớp có một ý nghĩa riêng. \n\n 🏊‍♂️ Lớp dưới: là bậc thềm tam cấp, có diện tích 1.300 m², được lát đá granite màu xám. Bậc thềm được bố trí so le nhau, tạo nên một không gian rộng lớn, thoáng mát. \n\n  🏊‍♂️ Lớp giữa: là phòng thi hài, có diện tích 100 m². Phòng thi hài được ốp đá cẩm thạch trắng, có hệ thống điều hòa không khí và ánh sáng hiện đại, giúp giữ gìn thi hài Chủ tịch Hồ Chí Minh được lâu dài. \n\n 🏊‍♂️ Lớp trên: là mái lăng hình tam cấp, được ốp đá granite màu đỏ. Mái lăng được thiết kế theo kiểu hình chóp, tượng trưng cho hình ảnh núi non hùng vĩ của đất nước Việt Nam. \n\n  Ngoài ra, xung quanh Lăng còn có các công trình phụ trợ khác như nhà vãn cảnh, nhà tưởng niệm, nhà lưu niệm, nhà trưng bày tượng Bác,... Các công trình này được thiết kế hài hòa với kiến trúc tổng thể của Lăng, tạo nên một quần thể kiến trúc hoàn chỉnh và trang nghiêm. \n\n Kiến trúc Lăng Chủ tịch Hồ Chí Minh được thiết kế theo phong cách hiện đại, kết hợp với những nét truyền thống của kiến trúc Việt Nam. Lăng gồm ba lớp chính, mỗi lớp có một ý nghĩa riêng.",
  },
  {
    id: "02",
    name: "Tháp Rùa Hồ Gươm",
    description:
      'Tháp Rùa là một ngọn tháp nhỏ nằm trên gò đảo giữa Hồ Hoàn Kiếm, lui về phía Nam hồ thuộc Hà Nội. Từ năm 1888, Tháp Rùa đã bị phá hủy do người dân Việt đang được xây đựng mới cất lại tiếp chuẩn của người Pháp với kiến trúc sư đầu tiên là "Maispel Disnel" sau khi chính thức khánh thành vào năm 1892.',
    history:
      "Tháp được xây dựng trong khoảng từ giữa năm 1884 đến tháng 4 năm 1886, trên nền của gò Rùa có từ thời Lê \n\n Tháp Rùa gắn liền với truyền thuyết về thần Kim Quy trả gươm cho vua Lê Lợi. Theo truyền thuyết, sau khi đánh tan quân Minh, vua Lê Lợi đã đi thuyền dạo chơi trên hồ Hoàn Kiếm. Khi thuyền vua đi đến gần gò Rùa thì bỗng nhiên có một con rùa lớn nổi lên mặt nước, ngậm thanh gươm báu trao cho vua. Vua Lê Lợi nhận gươm, phong cho rùa là thần Kim Quy và cho xây dựng một ngôi đền trên gò Rùa.",
    architecture:
      "Được thiết kế theo phong cách Gothic và quy thức kiến trúc cổ Việt Nam \n\n Tầng dưới cùng xây trên móng cao 0,8m. Chiều dài là 6,28m trong khi chiều rộng là 4,54m. Tầng này do là hình chữ nhật nên chiều dài mở ra ba cửa, còn chiều ngang mở ra hai cửa, tất cả là 10 cửa; bên trong phân ra ba gian, các gian thông với nhau bằng các cửa ngăn, đỉnh cũng nhọn như tất cả các cửa khác. Cả tầng có 4 cửa ngăn, tổng cộng 14 cửa. \n\n Tầng hai xây lùi vào một chút, chiều dài 4,8m, chiều rộng 3,64m, cũng chia ra ba gian, kiến trúc y như tầng một với 14 bộ cửa nhưng nhỏ hơn. Tầng ba thu nhỏ hơn nữa, dài 2,97m, rộng 1,9m, chỉ mở một cửa hình tròn ở mặt phía đông, đường kính 0,68m. \n\n Tầng đỉnh chỉ như một vọng lâu, vuông vức, mỗi bề 2m. Trên tường mặt phía đông, bên trên cửa tròn có đường kính là 0.68m của tầng ba có ba chữ Quy Sơn Tháp, nghĩa là Tháp Núi Rùa. Như vậy, từ nền đất Gò Rùa lên đến đỉnh tháp là 8,8m.",
  },
  {
    id: "03",
    name: "Chùa Một Cột",
    description:
      "Chùa Một Cột, có tên ban đầu là Liên Hoa Đài, là một ngôi chùa có kiến trúc độc đáo: một điện thờ đặt trên một cột trụ duy nhất. Liên Hoa Đài là công trình nổi tiếng nhất nằm trong quần thể kiến trúc Chùa Diên Hựu. Đây là một trong những ngôi chùa cổ kính nhất ở Việt Nam, được xây dựng vào thế kỷ 11, dưới thời vua Lý Thái Tổ.",
    history:
      "Theo truyền thuyết, chùa Một Cột được xây dựng theo giấc mơ của vua Lý Thái Tổ. Trong giấc mơ, vua thấy Phật Bà Quan Âm hiện ra và bảo rằng hãy xây dựng một ngôi chùa trên một cột đá. \n\n Chùa Một Cột được xây dựng vào năm 1049. Ngôi chùa được xây dựng bằng đá và gỗ, gồm một cột đá cao 4 mét, hình bát giác, có đường kính 1,2 mét. Trên cột có một ngôi chùa nhỏ hình vuông, diện tích 4,5 mét vuông, được xây dựng bằng gỗ lim. \n\n Chùa Một Cột đã được trùng tu nhiều lần trong lịch sử. Lần trùng tu lớn nhất là vào năm 2009, để chuẩn bị cho Đại lễ 1000 năm Thăng Long - Hà Nội. Trong đợt trùng tu này, ngôi chùa đã được giữ nguyên kiến trúc cổ kính của thời Lý.",
    architecture:
      "Chùa được tạo hình giống như một đóa hoa sen nở trên mặt nước – loài hoa tượng trưng cho sự tinh khiết và cao quý của Phật pháp. Vì vậy dân gian vẫn gọi chùa Một Cột là Liên Hoa Đài. \n\n Tổng thể chùa Một Cột gồm hai phần: phần cột đá và phần ngôi chùa trên đỉnh cột. \n\n 🏊‍♂️ Phần cột đá được làm bằng đá xanh nguyên khối, hình bát giác, có đường kính 1,2 mét. Cột đá được chôn sâu dưới lòng hồ 3,2 mét, phần nổi trên mặt nước cao 4 mét. \n\n 🏊‍♂️ Phần ngôi chùa trên đỉnh cột được làm bằng gỗ lim, hình vuông, diện tích 4,5 mét vuông. Ngôi chùa có một cửa chính và hai cửa phụ. Bên trong chùa là tượng Phật Bà Quan Âm.",
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

// const NextIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="icon icon-tabler icon-tabler-swimming group-hover:translate-x-20 transition-all ease-in-out duration-500"
//     width="128"
//     height="128"
//     viewBox="0 0 24 24"
//     stroke-width="1"
//     stroke="currentColor"
//     fill="none"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//     <path d="M16 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
//     <path d="M6 11l4 -2l3.5 3l-1.5 2" />
//     <path d="M3 16.75a2.4 2.4 0 0 0 1 .25a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 1 -.25" />
//   </svg>
// );

const NextIcon = () => (
  <div className="flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-swimming group-hover:translate-x-20 transition-all ease-in-out duration-500"
      width="128"
      height="128"
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16.69 7.44a6.973 6.973 0 0 0 -1.69 4.56c0 1.747 .64 3.345 1.699 4.571" />
      <path d="M2 9.504c7.715 8.647 14.75 10.265 20 2.498c-5.25 -7.761 -12.285 -6.142 -20 2.504" />
      <path d="M18 11v.01" />
      <path d="M11.5 10.5c-.667 1 -.667 2 0 3" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-swimming group-hover:translate-x-20 transition-all ease-in-out duration-500 -translate-y-4"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M14.5 7.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
    </svg>
  </div>
);

const buttons = [
  { id: "01", text: "Giới thiệu chung" },
  { id: "02", text: "Lịch sử" },
  {
    id: "03",
    text: "Kiến trúc",
  },
  {
    id: "04",
    text: "Mô hình",
  },
];

const Location = () => {
  const { id } = useParams<{ id: string }>();
  const [buttonState, setButtonState] = useState("01");

  const location = locations.find((loc) => loc.id === id);

  if (!location) {
    return <div>Location not found</div>;
  }

  const { name, description, history, architecture } = location;

  return (
    <section className="text-[#001ECB] mt-40 h-[130vh]">
      <div className="text-6xl lg:text-8xl flex gap-10 items-center">
        <span className="font-modern">{id}</span>
        <span>{name}</span>
      </div>
      <div className="flex gap-4 mt-10 flex-wrap">
        {buttons.map((button, index) => (
          <button
            onClick={() => setButtonState(button.id)}
            key={index}
            className="text-xl font-semibold font-garamond italic border-[#001ECB] hover:text-white hover:bg-[#001ECB] border rounded-full px-4 py-2 bg-[#]"
            style={{
              backgroundColor: buttonState === button.id ? "#001ECB" : "white",
              color: buttonState === button.id ? "white" : "#001ECB",
            }}
          >
            {button.text}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between mb-10">
        <div className="w-1/2">
          <p
            className="mt-20 text-lg sm:text-2xl whitespace-pre-line text-justify font-beVietnam
          "
          >
            {buttonState === "01"
              ? description
              : buttonState === "02"
              ? history
              : buttonState === "03" && architecture}
          </p>
          <ArrowIcon className="mt-20 w-full" />
        </div>
        <a
          className="-translate-x-10 sm:-translate-x-20  group"
          href={
            id === "01"
              ? "/location/02"
              : id === "02"
              ? "/location/03"
              : "/location/01"
          }
        >
          <div>
            <NextIcon />
          </div>
        </a>
      </div>
      <div className="max-w-[60vw] aspect-square mx-auto">
        {id === "01" ? (
          <FirstModel />
        ) : id == "02" ? (
          <SecondModel />
        ) : (
          <ThirdModel />
        )}
      </div>
    </section>
  );
};

export default Location;

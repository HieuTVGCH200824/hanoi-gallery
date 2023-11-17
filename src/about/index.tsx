import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div>
      <section className="text-[#001ECB] mt-20 px-10 text-center h-[80vh]">
        <h1 className="font-playfair text-4xl lg:text-7xl 2xl:text-9xl">
          Xin chào!
        </h1>
        <div className="flex sm:flex-row flex-col  gap-8 lg:text-4xl text-2xl 2xl:text-6xl font-light items-center justify-center font-spartan mt-6">
          <span>Chúng tớ là</span>
          <div className="py-5 px-8 rounded-full border italic font-garamond font-medium  w-40 lg:w-96 whitespace-nowrap">
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
        <div className="mt-20 text-2xl font-beVietnam">
          <span>
            Chào mừng các bạn đến với một “siêu phẩm” của nhóm{" "}
            <span className="font-bold">“Bơi về di sản”</span> chúng tớ!
          </span>
          <div className="text-justify space-y-3 text-lg mt-10">
            <p>
              Cuộc thi <strong>“2023 - Bước di sản”</strong> là một sân chơi mới
              mẻ và bổ ích với mục đích nhằm quảng bá các di sản của thủ đô Hà
              Nội qua tài năng của các bạn sinh viên. Vì vậy, chúng tớ - những
              sinh viên năm 3, năm 4 với đặc điểm “không biết bơi”, đã chọn tên
              gọi <strong> "Bơi về di sản"</strong> như cách thể hiện mong muốn
              tìm hiểu, học hỏi, khám phá những giá trị di sản văn hóa của Hà
              Nội của nhóm chúng tớ.
            </p>
            <p>
              Trong cuộc thi <strong> "2023 - Bước di sản" </strong>, chúng tớ
              muốn sử dụng những kỹ năng chuyên môn trong ngành học của mình để
              giới thiệu những giá trị di sản của Hà Nội đến với cộng đồng.{" "}
              <strong>“Bơi về di sản” </strong> chúng tớ đã chọn làm interactive
              website để truyền tải thông tin về các công trình kiến trúc Hà Nội
              một cách sinh động, hấp dẫn.
            </p>
            <p>
              Chúng tớ tin rằng, thông qua cuộc thi này, chúng tớ sẽ có cơ hội
              để phát triển kỹ năng và tìm hiểu, học hỏi thêm về di sản Hà Nội.
              Chúng tớ cũng mong muốn có thể góp phần nâng cao nhận thức của
              cộng đồng về di sản văn hóa của Hà Nội, góp phần bảo tồn và phát
              huy những giá trị di sản của Thủ đô.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

const pple = [
  {
    ava: "/static/hand-ava.jpg",
    fb: "https://www.facebook.com/mhte.hin007",
    name: "Trần Minh Hạnh",
  },
  {
    ava: "/static/linh-ava.jpg",
    fb: "https://www.facebook.com/linh.phanthuy.399",
    name: "Phan Thùy Linh",
  },
  {
    ava: "/public/hieu-ava.jpg",
    fb: "https://www.facebook.com/htv912/",
    name: "Trần Văn Hiếu",
  },
  {
    ava: "/static/hiep-ava.jpg",
    fb: "https://www.facebook.com/hiepdyu.03",
    name: "Nguyễn Duy Hiệp",
  },
];

const Contact = () => {
  return (
    <div>
      <h1 className="text-center mt-40 font-playfair text-4xl font-bold text-[#001ECB] ">
        Thành viên
      </h1>
      <div className="grid grid-cols-4 gap-10 mx-auto mt-20">
        {pple.map((p) => (
          <div className="flex flex-col items-center">
            <a
              href={p.fb}
              target="_blank"
              className="rounded-full border-[#001ECB] border w-40 justify-self-center"
              key={p.fb}
            >
              <img src={p.ava} className="rounded-full" alt="" />
            </a>
            <span className="mt-2">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

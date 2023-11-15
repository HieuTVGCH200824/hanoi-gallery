const pple = [
  {
    ava: "/public/hand-ava.jpg",
    fb: "https://www.facebook.com/mhte.hin007",
  },
  {
    ava: "/public/linh-ava.jpg",
    fb: "https://www.facebook.com/linh.phanthuy.399",
  },
  {
    ava: "/public/hieu-ava.jpg",
    fb: "https://www.facebook.com/htv912/",
  },
  {
    ava: "/public/hiep-ava.jpg",
    fb: "https://www.facebook.com/hiepdyu.03",
  },
];

const Contact = () => {
  return (
    <div>
      <h1 className="text-center mt-40 font-playfair text-4xl font-bold text-[#001ECB] ">
        Thành viên
      </h1>
      <div className="grid grid-cols-2 gap-10 mx-auto mt-20">
        {pple.map((p) => (
          <a
            href={p.fb}
            target="_blank"
            className="rounded-full border-[#001ECB] border w-40 justify-self-center"
            key={p.fb}
          >
            <img src={p.ava} className="rounded-full" alt="" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;

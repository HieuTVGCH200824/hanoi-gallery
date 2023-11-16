import ListItem from "./ListItem";

const locations = [
  {
    id: "01",
    name: "Lăng Chủ tịch Hồ Chí Minh",
  },
  {
    id: "02",
    name: "Tháp Rùa Hồ Gươm",
  },
  {
    id: "03",
    name: "Chùa Một Cột",
  },
];

const Locations = () => {
  return (
    <section className="px-20 text-[#001ECB]" id="location">
      <ul className="space-y-6 mt-32 mb-52">
        {locations.map((location) => (
          <li key={location.id}>
            <a href={`/location/${location.id}`}>
              <ListItem number={location.id} text={location.name} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Locations;

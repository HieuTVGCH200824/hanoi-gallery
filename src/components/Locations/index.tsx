import ListItem from "./ListItem";

const locations = [
  {
    id: "01",
    name: "Lăng Chủ tịch Hồ Chí Minh",
  },
  {
    id: "02",
    name: "Cột cờ Hà Nội",
  },
  {
    id: "03",
    name: "Chùa Một Cột",
  },
];

const Locations = () => {
  return (
    <section className="px-10 text-[#001ECB]" id="location">
      <h1 className="ml-4">địa điểm</h1>
      <ul className="space-y-6 mt-32 mb-52">
        {locations.map((location) => (
          <li key={location.id}>
            <ListItem number={location.id} text={location.name} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Locations;

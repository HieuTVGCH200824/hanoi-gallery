const ListItem = ({ number, text }: { number: string; text: string }) => {
  return (
    <div className="text-[#001ECB] text-4xl font-bold rounded-full px-8 py-4 border border-[#001ECB]">
      <span className="font-normal font-modern">{number}</span>
      <span className="font-sans ml-4">{text}</span>
    </div>
  );
};

export default ListItem;

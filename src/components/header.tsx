const Header = () => {
  return (
    <div className="flex gap-10 w-full font-playfair font-semibold sticky top-0 justify-center pb-5 pt-8 border-b border-[#001ECB] bg-white z-10 text-[#001ECB]">
      <a href="/" className="hover:text-black">
        index
      </a>
      <a className="hover:text-black" href="/about">
        about
      </a>
      <a className="hover:text-black" href="/contact">
        contact
      </a>
    </div>
  );
};

export default Header;

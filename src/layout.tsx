import Header from "./components/header";
import { PropsWithChildren } from "react";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <div className="sm:mx-10 mx-5 md:mx-20 lg:mx-40">{children}</div>
    </div>
  );
};

export default Layout;

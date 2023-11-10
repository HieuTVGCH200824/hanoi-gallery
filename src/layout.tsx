import Header from "./components/header";
import { PropsWithChildren } from "react";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;

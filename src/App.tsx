import "./App.css";
import Layout from "./layout";
import Hero from "./components/Hero";
import Locations from "./components/Locations";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Locations />
      </Layout>
    </>
  );
}

export default App;

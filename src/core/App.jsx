import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CoinContextProvider from "../context/CoinContext";
function App() {
  return (
    <>
      <CoinContextProvider>
        <div className="wrapper">
          <Navbar />
          <Hero />
        </div>
      </CoinContextProvider>
    </>
  );
}

export default App;

// @ts-nocheck
import AsideImg from "./components/Header/AsideImg";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="bg-secondary flex justify-center items-center px-2 py-2 rounded-md">
      <div className=" w-full h-full flex justify-center items-center">
        <Header />
        <AsideImg />
      </div>
    </div>
  );
}

export default App;

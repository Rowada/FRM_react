// @ts-nocheck
import Form from "./components/Form/Form";
import AsideImg from "./components/Header/AsideImg";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="bg-secondary h-screen">
      <div className="">
        <AsideImg />
        <div>
          <Header />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;

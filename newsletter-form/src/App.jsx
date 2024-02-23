// @ts-nocheck
import Form from "./components/Form/Form";
import AsideImg from "./components/Header/AsideImg";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="bg-secondary h-screen w-screen md:h-full md:w-full md:p-4 md:rounded-3xl">
      <div className="md:flex md:flex-row-reverse md:items-center md:justify-center">
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

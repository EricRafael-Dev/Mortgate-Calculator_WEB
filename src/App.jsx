import CalculatorInputs from "./components/CalculatorInputs";
import Results from "./components/Results";

function App() {
  return (
    <div className="lg:h-screen lg:w-screen lg:flex lg:justify-center lg:items-center">
      <main
        className="
    bg-white h-full flex flex-col justify-center 
    [&_label]:text-[gray] [&_label]:text-[14px] 
    lg:h-[40rem] lg:w-[54rem] lg:flex-row lg:rounded-2xl
    xl:h-[40rem] xl:w-[64rem]"
      >
        <div className="m-5 p-5 lg:m-0 lg:w-[60%] lg:mt-1 flex flex-col justify-center">
          <div className="mb-5">
            <h1 className="font-bold text-2xl">Mortgate Calculator</h1>
            <button className="underline text-[gray]">
              <label>Clear All</label>
            </button>
          </div>

          <CalculatorInputs />
        </div>

        <div className="lg:w-[40%]">
          <Results />
        </div>
      </main>
    </div>
  );
}
export default App;

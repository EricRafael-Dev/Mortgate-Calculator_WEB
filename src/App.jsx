import { useState } from "react";
import CalculatorInputs from "./components/CalculatorInputs";
import Results from "./components/Results";

function App() {
  const [value, setValue] = useState("");
  const [valueTerm, setValueTerm] = useState("");
  const [valueRate, setValueRate] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
            <label className=" ">
              <button
                onClick={() => {
                  ;
                  setSubmitted(false);
                  setValue("");
                  setValueTerm("");
                  setValueRate("");
                }}
                className="text-[gray] underline cursor-pointer"
              >
                Clear All
              </button>
            </label>
          </div>
          <CalculatorInputs
            value={value}
            valueTerm={valueTerm}
            valueRate={valueRate}
            submitted={submitted}
            setValue={setValue}
            setValueTerm={setValueTerm}
            setValueRate={setValueRate}
            setSubmitted={setSubmitted}
          />
        </div>

        <div className="lg:w-[40%]">
          <Results />
        </div>
      </main>
    </div>
  );
}
export default App;

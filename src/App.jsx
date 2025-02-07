import { useEffect, useRef, useState } from "react";
import CalculatorInputs from "./components/CalculatorInputs";
import Results from "./components/Results";

function App() {
  const [value, setValue] = useState("");
  const [valueTerm, setValueTerm] = useState("");
  const [valueRate, setValueRate] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const showResults = useRef();
  const [showState, setShowState] = useState(showResults.current);

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
                  setSubmitted(false);
                  setSelectedOption("");
                  setValue("");
                  setValueTerm("");
                  setValueRate("");
                  setShowState(false);
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
            setSelectedOption={setSelectedOption}
            showResults={showResults}
            setShowState={setShowState}
          />
        </div>

        <div className="lg:w-[40%]">
          <div
            className="bg-[#133040] flex flex-col justify-center items-center pt-8 pb-8 
      md:static 
      lg:h-full lg:rounded-bl-[70px] lg:rounded-tl-none lg:rounded-3xl 
      "
          >
            <Results
              value={value}
              valueTerm={valueTerm}
              valueRate={valueRate}
              submitted={submitted}
              selectedOption={selectedOption}
              setSubmitted={setSubmitted}
              showResults={showResults}
              showState={showState}
              setShowState={setShowState}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;

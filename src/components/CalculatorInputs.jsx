import { useRef } from "react";
import iconcalculator from "../assets/icon-calculator.svg";

function CalculatorInputs({
  value,
  valueTerm,
  valueRate,
  submitted,
  setValue,
  setValueTerm,
  setValueRate,
  setSubmitted,
  setSelectedOption,
  showResults,
  setShowState,
}) {
  const valueRef = useRef(null);
  const termRef = useRef(null);
  const rateRef = useRef(null);

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (
          valueRef.current.checkValidity() &&
          termRef.current.checkValidity() &&
          rateRef.current.checkValidity()
        ) {
          showResults.current = true;
          setShowState(showResults.current);
        } else {
          showResults.current = false;
          setShowState(showResults.current);
        }

        setSubmitted(true);
      }}
    >
      <div
        className="
        flex flex-col 
      [&_div]:flex
      [&_label]:mb-1
      [&_input]:bg-white
      [&_input]:focus:outline-[#D6D82F] [&_input]:focus:outline-1
      [&_input]:cursor-pointer [&_input]:p-5
      "
      >
        <div className="mt-[5%] flex-col group">
          <label>Mortgage Amount</label>
          <div
            className={`group
              rounded-md border-1 border-gray-500 justify-between h-[50px]  
              [&_input]:w-[85%] [&_input]:rounded-tr-md [&_input]:rounded-br-md
              
              has-[:focus]:border-[#D6D82F] 
              has-[:focus]:border-1 
              has-[:focus]:[&_div]:bg-[#D6D82F]
              has-[:focus]:[&_div]:text-[#143516]
              ${
                submitted && value === ""
                  ? "has-invalid:[&_div]:bg-[#d73328] has-invalid:border-[#d73328] has-[:focus]:has-invalid:border-[#d73328]"
                  : ""
              }`}
          >
            <div
              className={`w-[15%] h-full rounded-tl-sm rounded-bl-sm flex justify-center items-center font-bold [&_p]:text-[20px] lg:[&_p]:text-[15px] text-slate-400
              bg-slate-100 
              ${
                submitted && value === ""
                  ? " group-has-[:focus]:group-has-invalid:bg-[#d73328] group-has-[:focus]:group-has-invalid:text-white group-has-invalid:text-white"
                  : ""
              }`}
            >
              <p>$</p>
            </div>
            <input
              className={`${
                submitted && value === ""
                  ? "invalid:text-[#d73328] focus:invalid:outline-[#d73328] invalid:border-[#d73328]"
                  : ""
              }`}
              value={value}
              ref={valueRef}
              step="0.01"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              type="number"
              required
            />
          </div>
          <p
            className={`text-[#d73328] text-[13px] font-bold hidden ${
              submitted ? "group-has-invalid:block" : ""
            }`}
          >
            Insert a valid value
          </p>
        </div>

        <div className=" flex flex-col lg:flex-row lg:justify-between">
          <div className="mt-[5%] flex flex-col w-full group">
            <label>Mortgage Term</label>

            <div
              className={`group
              rounded-md border-1 border-gray-500 justify-between h-[50px]  lg:w-full
                [&_input]:w-[75%] [&_input]:rounded-tl-md [&_input]:rounded-bl-md has-[:focus]:border-[#D6D82F] has-[:focus]:border-1 has-[:focus]:[&_div]:bg-[#D6D82F] has-[:focus]:[&_div]:text-[#143516]
              ${
                submitted && valueTerm === ""
                  ? "has-invalid:[&_div]:bg-[#d73328] has-invalid:border-[#d73328] has-[:focus]:has-invalid:border-[#d73328]"
                  : ""
              }
                `}
            >
              <input
                className={` 
              ${
                submitted && valueTerm === ""
                  ? "invalid:text-[#d73328] focus:invalid:outline-[#d73328] invalid:border-[#d73328]"
                  : ""
              }

            `}
                value={valueTerm}
                ref={termRef}
                onChange={(e) => setValueTerm(e.target.value)}
                type="number"
                required
              />
              <div
                className={`w-[25%] h-full rounded-tr-sm rounded-br-sm flex justify-center items-center font-bold [&_p]:text-[20px] lg:[&_p]:text-[15px] text-slate-400
              bg-slate-100 ${
                submitted && valueTerm === ""
                  ? " group-has-[:focus]:group-has-invalid:bg-[#d73328] group-has-[:focus]:group-has-invalid:text-white group-has-invalid:text-white"
                  : ""
              }`}
              >
                <p>years</p>
              </div>
            </div>
            <p
              className={`text-[#d73328] text-[13px] font-bold hidden ${
                submitted ? "group-has-invalid:block" : ""
              }`}
            >
              Insert a valid value
            </p>
          </div>
          <div className="w-[15px]"></div>

          <div className="mt-[5%] flex flex-col w-full group">
            <label>Interest Rate</label>
            <div
              className={`group
              rounded-md border-1 border-gray-500 justify-between h-[50px]  lg:w-full
                [&_input]:w-[85%] [&_input]:rounded-tl-md [&_input]:rounded-bl-md has-[:focus]:border-[#D6D82F] has-[:focus]:border-1 has-[:focus]:[&_div]:bg-[#D6D82F] has-[:focus]:[&_div]:text-[#143516]
                ${
                  submitted && valueRate === ""
                    ? "has-invalid:[&_div]:bg-[#d73328] has-invalid:border-[#d73328] has-[:focus]:has-invalid:border-[#d73328]"
                    : ""
                }`}
            >
              <input
                className={`${
                  submitted && valueRate === ""
                    ? "invalid:text-[#d73328] focus:invalid:outline-[#d73328] invalid:border-[#d73328]"
                    : ""
                }`}
                type="number"
                step="0.01"
                ref={rateRef}
                value={valueRate}
                onChange={(e) => setValueRate(e.target.value)}
                required
              />
              <div
                className={`w-[15%] h-full rounded-tr-sm rounded-br-sm flex justify-center items-center font-bold [&_p]:text-[20px] lg:[&_p]:text-[15px] text-slate-400
              bg-slate-100 ${
                submitted && valueRate === ""
                  ? " group-has-[:focus]:group-has-invalid:bg-[#d73328] group-has-[:focus]:group-has-invalid:text-white group-has-invalid:text-white"
                  : ""
              }`}
              >
                <p>%</p>
              </div>
            </div>
            <p
              className={`text-[#d73328] text-[13px] font-bold hidden ${
                submitted ? "group-has-invalid:block" : ""
              }`}
            >
              Insert a valid value
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[5%] flex flex-col justify-between h-[150px] group">
        <label>Mortgage Type</label>

        <label className="has-checked:border-2 has-checked:bg-[#FAFAE0] has-checked:border-[#DCDDAB] flex items-center p-3 [&_label]:pl-3 border border-gray-500 rounded-md h-[50px] cursor-pointer">
          <input
            className="mr-4"
            type="radio"
            name="type"
            value="1"
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
            required
          />
          Repayment
        </label>

        <label className="has-checked:border-2 has-checked:bg-[#FAFAE0] has-checked:border-[#DCDDAB] flex items-center p-3 [&_label]:pl-3 border border-gray-500 rounded-md h-[50px] cursor-pointer">
          <input
            className="mr-4"
            type="radio"
            name="type"
            value="2"
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
            required
          />
          Interest Only
        </label>
        <p
          className={`text-[#d73328] text-[13px] font-bold hidden ${
            submitted ? "group-has-invalid:block" : ""
          }`}
        >
          Insert a valid value
        </p>
      </div>

      <div
        type="submit"
        className="bg-[#D6D82F] w-full h-[50px] rounded-full text-[#143516] font-bold mt-[30px] [&_p]:ml-1.5 [&_img]:pr-1.5 cursor-pointer hover:bg-[#dddf51]"
      >
        <button
          type="submit"
          className="flex cursor-pointer w-full h-full justify-center items-center"
        >
          <img src={iconcalculator} alt="" />
          <p>Calculate Repayment</p>
        </button>
      </div>
    </form>
  );
}
export default CalculatorInputs;

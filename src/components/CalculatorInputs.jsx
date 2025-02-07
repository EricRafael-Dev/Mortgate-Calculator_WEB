import { useState } from "react";
import iconcalculator from "../assets/icon-calculator.svg";

function CalculatorInputs() {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      noValidate
      onSubmit={(e) => {
        console.log(submitted);
        e.preventDefault();
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
        <div className="mt-[5%] flex-col ">
          <label>Mortgage Amount</label>
          <div
            className={`group
              rounded-md border border-gray-500 justify-between h-[50px]  
                [&_input]:w-[85%] [&_input]:rounded-tr-md [&_input]:rounded-br-md
                
                has-[:focus]:border-[#D6D82F] 
                has-[:focus]:border-1 
                has-[:focus]:[&_div]:bg-[#D6D82F]
                has-[:focus]:[&_div]:text-[#143516]
                ${
                  submitted && value === ""
                    ? "has-invalid:[&_div]:bg-[#d73328] has-invalid:border-[#d73328]"
                    : "border-4"
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
              onChange={(e) => setValue(e.target.value)}
              type="number"
              pattern=""
              required
            />
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row lg:justify-between">
          <div className="mt-[5%] flex flex-col w-full">
            <label>Mortgage Term</label>

            <div
              className=" group
              rounded-md border border-gray-500 justify-between h-[50px]  lg:w-full
                [&_input]:w-[75%] [&_input]:rounded-tl-md [&_input]:rounded-bl-md has-[:focus]:border-[#D6D82F] has-[:focus]:border-1 has-[:focus]:[&_div]:bg-[#D6D82F] has-[:focus]:[&_div]:text-[#143516]
              "
            >
              <input
                className=" 
              invalid:text-[#d73328]
              focus:invalid:outline-[#d73328] 
              invalid:border-[#d73328]

            "
                type="number"
                required
              />
              <div
                className="w-[25%] h-full rounded-tr-md rounded-br-md flex justify-center items-center font-bold [&_p]:text-[20px] lg:[&_p]:text-[15px] text-slate-400
              bg-slate-100 

              group-has-[:focus]:group-has-invalid:bg-[#d73328]
              group-has-[:focus]:group-has-invalid:text-white
              group-has-invalid:text-white"
              >
                <p>years</p>
              </div>
            </div>
          </div>
          <div className="w-[15px]"></div>
          <div className="mt-[5%] flex flex-col w-full">
            <label>Interest Rate</label>
            <div
              className="
              rounded-md border border-gray-500 justify-between h-[50px]  lg:w-full
                [&_input]:w-[85%] [&_input]:rounded-tl-md [&_input]:rounded-bl-md has-[:focus]:border-[#D6D82F] has-[:focus]:border-1 has-[:focus]:[&_div]:bg-[#D6D82F] has-[:focus]:[&_div]:text-[#143516]
              "
            >
              <input type="number" required />
              <div
                className="w-[15%] h-full rounded-tr-md rounded-br-md flex justify-center items-center font-bold [&_p]:text-[20px] lg:[&_p]:text-[15px] text-slate-400
              bg-slate-100 "
              >
                <p>%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[5%] flex flex-col justify-between h-[150px]">
        <label>Mortgage Type</label>

        <label className="has-checked:border-2 has-checked:bg-[#FAFAE0] has-checked:border-[#DCDDAB] flex items-center p-3 [&_label]:pl-3 border border-gray-500 rounded-md h-[50px] cursor-pointer">
          <input className="mr-4" type="radio" name="type" checked />
          Repayment
        </label>

        <label className="has-checked:border-2 has-checked:bg-[#FAFAE0] has-checked:border-[#DCDDAB] flex items-center p-3 [&_label]:pl-3 border border-gray-500 rounded-md h-[50px] cursor-pointer">
          <input className="mr-4" type="radio" name="type" />
          Interest Only
        </label>
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

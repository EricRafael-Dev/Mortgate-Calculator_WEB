import empty from "../assets/illustration-empty.svg";

function Results() {
  return (
    <div className="bg-[#133040] flex flex-col justify-center items-center pt-8 pb-8 
    md:static 
    lg:h-full lg:rounded-bl-[70px] lg:rounded-tl-none lg:rounded-3xl 
    ">
      <img src={empty} alt="" />
      <div className="flex flex-col justify-center text-center w-[80%]
      [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-4">
        <h2>Results shown here</h2>
        <label>
          Complete the form and click "calculate repayment" to see what your
          monthly reapyments would be.
        </label>
      </div>
    </div>
  );
}

export default Results;

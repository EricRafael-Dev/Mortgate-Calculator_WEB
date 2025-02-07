import empty from "../assets/illustration-empty.svg";

function Results({
  value,
  valueTerm,
  valueRate,
  selectedOption,
  showResults,
  showState,
}) {
  if (showState !== true && showResults.current !== true) {
    return (
      <>
        <img src={empty} alt="" />
        <div
          className="flex flex-col justify-center text-center w-[80%]
    
        [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-4"
        >
          <h2>Results shown here</h2>
          <label>
            Complete the form and click "calculate repayment" to see what your
            monthly reapyments would be.
          </label>
        </div>
      </>
    );
  } else {
    showResults.current = false;

    const annual_rate = valueRate / 100;
    const r = annual_rate / 12;
    const n = valueTerm * 12;
    const p = value * 1000;
    let total;
    if (selectedOption == "1") {
      total = (p * r) / (1 - (1 + r) ** -n);
    } else {
      total = p * r;
    }
    return (
      <>
        <div className="bg-ambe w-[70%] h-[70%] flex flex-col justify-around">
          <h2 className="text-3xl font-bold text-white mb-3">Your results</h2>
          <label className="mb-3">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "calculate
            repayments" again.
          </label>
          <div className="bg-[#0E2431] border-t-4 border-[#D1D745] rounded-md p-5 mb-3 mt-5">
            <div>
              <label>Your monthly repayments</label>
              <h1 className="text-3xl w-full overflow-hidden overflow-ellipsis text-[#D1D745] font-bold">
                {total.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </h1>
            </div>
            <div className="w-full border-1 border-[gray] mt-5 mb-5"></div>
            <div>
              <label>Total you'll repay over the term</label>
              <h2 className="w-full overflow-hidden overflow-ellipsis text-1xl text-white font-bold">
                {(total * n).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Results;

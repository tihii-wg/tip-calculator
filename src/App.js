import { useState } from "react";
import "./App.css";
import { ResetComponent } from "./ResetComponent";
import { OutPutComponent } from "./OutPutComponent";
import { SelectPercentage } from "./SelectPercentage";
import { BillComponent } from "./BillComponent";

function App() {
  const [bill, setBill] = useState("");
  const [percent, setPercent] = useState(0);
  const [friendsPercent, setFriendPercent] = useState(0);

  let totalPercent = (percent + friendsPercent) / 2;

  let tip = (bill * totalPercent) / 100;

  let totalBill = bill + tip;
  //Math.round(+bill * (1 + totalPercent / 100));

  const resetCalc = () => {
    setBill("");
    setPercent("0");
    setFriendPercent("0");
  };

  const onSetBill = (value) => {
    setBill(value);
  };

  return (
    <div>
      <BillComponent bill={bill} onSetBill={onSetBill} />
      <SelectPercentage percent={percent} setPercent={setPercent}>
        <span>How did you like the service?</span>
      </SelectPercentage>
      <SelectPercentage percent={friendsPercent} setPercent={setFriendPercent}>
        <span>How did you friends like the service?</span>
      </SelectPercentage>
      {bill && (
        <>
          <OutPutComponent
            bill={bill}
            totalPercent={totalPercent}
            totalBill={totalBill}
            tip={tip}
          />
          <ResetComponent resetHandler={resetCalc}>
            <span>Reset</span>
          </ResetComponent>
        </>
      )}
    </div>
  );
}

export default App;

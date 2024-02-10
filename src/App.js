import { useState } from "react";
import "./App.css";
import { ResetComponent } from "./ResetComponent";
import { OutPutComponent } from "./OutPutComponent";
import { SelectPercentage } from "./SelectPercentage";
import { BillComponent } from "./BillComponent";

function App() {
  const [bill, setBill] = useState("0");
  const [percent, setPercent] = useState("0");
  const [friendsPercent, setFriendPercent] = useState("0");

  let totalPercent = (Number(percent) + Number(friendsPercent)) / 2;

  let tip = (bill * totalPercent) / 100;

  let totalBill = +bill + tip;
  //Math.round(+bill * (1 + totalPercent / 100));

  const resetHandler = () => {
    setBill("0");
    setPercent("0");
    setFriendPercent("0");
  };

  return (
    <div className="App">
      <BillComponent bill={bill} setBill={setBill} />
      <SelectPercentage percent={percent} setPercent={setPercent}>
        <span>How did you like the service?</span>
      </SelectPercentage>
      <SelectPercentage percent={friendsPercent} setPercent={setFriendPercent}>
        <span>How did you friends like the service?</span>
      </SelectPercentage>
      <OutPutComponent
        bill={bill}
        totalPercent={totalPercent}
        totalBill={totalBill}
        tip={tip}
      />
      <ResetComponent resetHandler={resetHandler}>
        <span>Reset</span>
      </ResetComponent>
    </div>
  );
}

export default App;

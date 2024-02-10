export function OutPutComponent({ bill, totalPercent, totalBill, tip }) {
  return (
    <div>
      <h3>
        You pay {totalBill} ({bill}$ + {tip}$ ({totalPercent}%) tip)
      </h3>
    </div>
  );
}

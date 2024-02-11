export function BillComponent({ bill, onSetBill }) {

	
  const onSetBillHandler = (e) => {
    onSetBill(e.currentTarget.value);
  };
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        placeholder="0"
        value={bill}
        onChange={onSetBillHandler}
      />
    </div>
  );
}

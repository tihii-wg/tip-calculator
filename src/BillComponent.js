export function BillComponent({ bill, onSetBill }) {
  const onSetBillHandler = (e) => {
    onSetBill(Number(e.currentTarget.value));
  };
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        placeholder="Bill value.."
        value={bill}
        onChange={onSetBillHandler}
      />
    </div>
  );
}

export function BillComponent({ bill, setBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        placeholder="0"
        value={bill}
        onChange={(e) => {
          setBill(e.currentTarget.value);
        }}
      />
    </div>
  );
}

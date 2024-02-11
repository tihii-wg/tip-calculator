export function SelectPercentage({ percent, setPercent, children }) {
	
  const onSetPercentHandler = (e) => {
    setPercent(e.target.value);
  };

  return (
    <div>
      {children}
      <select value={percent} onChange={onSetPercentHandler}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%) </option>
        <option value="20">Absolutely amazing (20%) </option>
      </select>
    </div>
  );
}

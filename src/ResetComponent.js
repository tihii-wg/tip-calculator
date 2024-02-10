export function ResetComponent({ children, resetHandler }) {
  return (
    <div>
      <button onClick={resetHandler}>{children}</button>
    </div>
  );
}

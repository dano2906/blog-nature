import "./MenuButton.css";

export default function MenuButton({ setShow, show }) {
  return (
    <button
      onClick={() => setShow(!show)}
      type="button"
      id="menu-button"
      aria-expanded="true"
      aria-haspopup="true"
      className="sm:hidden flex gap-y-3"
    >
      <div style={{ transform: show ? "rotate(52deg)" : null }}></div>
      <div style={{ opacity: show ? 0 : null }}></div>
      <div style={{ transform: show ? "rotate(-52deg)" : null }}></div>
    </button>
  );
}

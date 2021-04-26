import "./styles.css";

export default function App() {
  const dropDown = () => {};
  return (
    <div className="App">
      <button className="menu-btn">Menu 1</button>
      <div className="d-none shodow rounded menu">
        <span className="d-block menu-option">
          <label>
            <input type="checkbox" />
            Option 1
          </label>
        </span>

        <span className="d-block menu-option">
          <label>
            <input type="checkbox" />
            Option 2
          </label>
        </span>
      </div>
    </div>
  );
}

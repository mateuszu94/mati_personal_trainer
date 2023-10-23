export const SelectHeight = ({ setHeight, height }) => {
  return (
    <div className="calculator-interact_div w-1/2 flexCol">
      <label htmlFor="number" className=" calculator-inLine_title ">
        Wzrost (cm){" "}
      </label>
      <input
        required
        className="calculator-number_div"
        type="number"
        id="height"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value);
        }}
      />
      <input
        className="w-full text-gray-950 bg-prime"
        type="range"
        id="height"
        min="80"
        max="300"
        step="1"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value);
        }}
      ></input>
    </div>
  );
};

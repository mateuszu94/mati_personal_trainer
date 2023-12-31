export const SelectWeigth = ({ setWeight, weight }) => {
  return (
    <div className="calculator-interact_div w-full flexCol ">
      <label htmlFor="weight" className="calculator-inLine_title ">
        Waga (kg){" "}
      </label>
      <input
        required
        className="calculator-number_div"
        type="number"
        min="1"
        max="400"
        value={weight}
        onChange={(e) => {
          setWeight(e.target.value);
        }}
      />
      <input
        className="w-full accent-accentColor"
        type="range"
        id="weight"
        min="1"
        max="400"
        step="1"
        value={weight}
        onChange={(e) => {
          setWeight(e.target.value);
        }}
      ></input>
    </div>
  );
};

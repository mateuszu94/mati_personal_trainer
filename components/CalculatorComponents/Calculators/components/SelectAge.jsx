export const SelectAge = ({ setAge, age }) => {
  return (
    <div className="calculator-interact_div w-1/2 flexCol">
      <label htmlFor="age" className=" calculator-inLine_title   ">
        Wiek{" "}
      </label>

      <input
        required
        className=" calculator-number_div "
        type="number"
        id="age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <input
        className="w-full accent-accentColor"
        type="range"
        id="age"
        min="1"
        max="100"
        step="1"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      ></input>
    </div>
  );
};

import { useEffect } from "react";

export const SelectActivity = ({
  setphysicalActivity,
  physicalActivity,
  physicalActivityArray,
}) => {
  useEffect(() => {
    setphysicalActivity(physicalActivityArray[0].name);
  }, []);
  return (
    <div className="calculator-interact_div  w-full flexCol">
      <label className="calculator-inLine_title ">Aktywność fizyczna</label>
      <select
        className="calculator-select_div"
        value={physicalActivity}
        onChange={(e) => {
          setphysicalActivity(e.target.value);
        }}
      >
        <option value={physicalActivityArray[0].name}>
          {physicalActivityArray[0].name}
        </option>
        <option value={physicalActivityArray[1].name}>
          {physicalActivityArray[1].name}
        </option>
        <option value={physicalActivityArray[2].name}>
          {physicalActivityArray[2].name}
        </option>
        <option value={physicalActivityArray[3].name}>
          {physicalActivityArray[3].name}
        </option>
        <option value={physicalActivityArray[4].name}>
          {physicalActivityArray[4].name}
        </option>
      </select>
    </div>
  );
};

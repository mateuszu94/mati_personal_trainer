import { useEffect } from "react";

const objectiveArray = [
  "Przytyć",
  "Utrzymać wagę",
  "Schudnąć",
  "Zbudować masą mięśniową",
];

export const SelectObjective = ({ setObjective, objective }) => {
  useEffect(() => {
    setObjective(objectiveArray[0]);
  }, []);
  return (
    <div className="calculator-interact_div  w-full flexCol">
      <label className="calculator-inLine_title">Planuję</label>
      <select
        className="calculator-select_div"
        value={objective}
        onChange={(e) => {
          setObjective(e.target.value);
        }}
      >
        <option value={objectiveArray[0]}>{objectiveArray[0]}</option>
        <option value={objectiveArray[1]}>{objectiveArray[1]}</option>
        <option value={objectiveArray[2]}>{objectiveArray[2]}</option>
        <option value={objectiveArray[3]}>{objectiveArray[3]}</option>
      </select>
    </div>
  );
};

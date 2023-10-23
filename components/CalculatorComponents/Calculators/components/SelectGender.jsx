import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";

export const SelectGender = ({ setGender, gender }) => {
  return (
    <div className="calculator-gender ">
      <h3 className="calculator-inLine_title shadow-md shadow-black  w-full">
        Płeć:
      </h3>
      <div className="calculator-gender_lableDiv  ">
        <label
          htmlFor="male"
          className={`calculator-interact_div w-1/2 ${
            gender === "Mężczyzna" ? "border-4 border-prime " : ""
          }`}
        >
          {" "}
          <BsGenderMale />
        </label>
        <input
          required
          className="hidden"
          type="radio"
          id="male"
          name="gender"
          value="Mężczyzna"
          checked={gender === "Mężczyzna"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />

        <label
          htmlFor="female"
          className={`calculator-interact_div w-1/2   ${
            gender === "kobieta" ? "border-4 border-prime " : ""
          }`}
        >
          {" "}
          <BsGenderFemale />
        </label>
        <input
          required
          className="hidden"
          type="radio"
          id="female"
          name="gender"
          value="kobieta"
          checked={gender === "kobieta"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

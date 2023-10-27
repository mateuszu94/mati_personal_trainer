import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";

export const SelectGender = ({ setGender, gender }) => {
  const mailGender = "Mężczyzna";
  const femailGender = "kobieta";
  return (
    <div className="calculator-gender ">
      <h3 className="calculator-inLine_title shadow-md shadow-black  w-full">
        Płeć:
      </h3>
      <div className="calculator-gender_lableDiv  ">
        <label
          htmlFor="male"
          className={`calculator-interact_div w-1/2 ${
            gender === mailGender ? "border-4 border-accentColor " : ""
          }`}
        >
          {" "}
          <div
            className={`${gender === mailGender ? " text-accentColor " : ""}`}
          >
            <BsGenderMale />
          </div>
        </label>
        <input
          required
          className="hidden"
          type="radio"
          id="male"
          name="gender"
          value={mailGender}
          checked={gender === mailGender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />

        <label
          htmlFor="female"
          className={`calculator-interact_div w-1/2   ${
            gender === femailGender ? "border-4 border-accentColor " : ""
          }`}
        >
          {" "}
          <div
            className={`${gender === femailGender ? " text-accentColor " : ""}`}
          >
            <BsGenderFemale />
          </div>
        </label>
        <input
          required
          className="hidden"
          type="radio"
          id="female"
          name="gender"
          value={femailGender}
          checked={gender === femailGender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

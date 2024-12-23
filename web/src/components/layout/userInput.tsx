import CheckBox from "../common/checkBox";
import DropDown from "../common/dropDown";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { 
    $classNumber,
    $department,
    $excludeCovid,
    $excludePNP,
    $instructorName, 
    $lowerDivOnly, 
    $semester, 
    $upperDivOnly, 
    $year, 
    setClassNumber, 
    setDepartment, 
    setExcludeCovid, 
    setExcludePNP, 
    setInstructorName, 
    setLowerDivOnly, 
    setSemester, 
    setUpperDivOnly, 
    setYear 
} from "../../lib/store";
import { useStore } from "@nanostores/react";
import { options } from "../../data/types";

const semesters: options[] = [
  { value: "fall", label: "Fall" },
  { value: "spring", label: "Spring" },
];

const years: options[] = [
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
];

const departments: options[] = [
  { value: "Biomedical Engineering", label: "Biomedical Engineering" },
  { value: "Computer Science", label: "Computer Science" },
  { value: "Applied Mathematics and Statistics", label: "Applied Mathematics and Statistics" },
];

const UserInput = () => {
  const instructorName = useStore($instructorName);
  const semester = useStore($semester);
  const year = useStore($year);
  const department = useStore($department);
  const classNumber = useStore($classNumber);
  const excludePNP = useStore($excludePNP);
  const excludeCovid = useStore($excludeCovid);
  const upperDivOnly = useStore($upperDivOnly);
  const lowerDivOnly = useStore($lowerDivOnly);

  // Function to clear all states
  const clearForm = () => {
    setInstructorName("");
    setSemester("");
    setYear("");
    setDepartment("");
    setClassNumber("");
    setExcludePNP(false);
    setExcludeCovid(false);
    setUpperDivOnly(false);
    setLowerDivOnly(false);
  };

  return (
    <div>
      {/* Input Fields */}
      <div className="flex flex-row justify-center items-center p-4 space-x-4">
        <Input
          value={instructorName}
          onChange={(e) => setInstructorName(e.target.value)}
          type="text"
          placeholder="Instructor Name"
          className="w-1/5"
          style={{ height: "50px", fontSize: "1.25rem" }}
        />

        <DropDown
          opts={semesters}
          defaultVal="Select Semester"
          val={semester}
          onChange={setSemester}
        />
        <DropDown
          opts={years}
          defaultVal="Select Year"
          val={year}
          onChange={setYear}
        />
      </div>

      {/* Department and Class Number */}
      <div
        className="flex flex-row justify-center items-center p-4 space-x-4"
        style={{ margin: "-15px" }}
      >
        <DropDown
          opts={departments}
          defaultVal="Include All Departments"
          width={500}
          val={department}
          onChange={setDepartment}
        />
        <Input
          value={classNumber}
          onChange={(e) => setClassNumber(e.target.value)}
          type="text"
          placeholder="Class Number"
          className="w-1/5"
          style={{ height: "50px", fontSize: "1.25rem" }}
        />
      </div>

      {/* Checkboxes */}
      <div className="flex flex-row justify-center items-center p-4 space-x-4">
        <CheckBox
          title="Exclude PNP"
          value={excludePNP}
          onChange={setExcludePNP}
        />
        <CheckBox
          title="Exclude COVID"
          value={excludeCovid}
          onChange={setExcludeCovid}
        />
        <CheckBox
          title="Upper Division Only"
          value={upperDivOnly}
          onChange={setUpperDivOnly}
        />
        <CheckBox
          title="Lower Division Only"
          value={lowerDivOnly}
          onChange={setLowerDivOnly}
        />
      </div>

      {/* Clear Form Button */}
      <div className="flex justify-center p-4 space-x-4">
      <Button 
            style={{
                backgroundColor: '#6495ED',
                fontSize: "1.25rem",
                width: "100px",
                height: "40px"
            }}
        >
          Submit
        </Button>
        <Button 
            onClick={clearForm} 
            style={{
                backgroundColor: '#6495ED',
                fontSize: "1.25rem",
                width: "100px",
                height: "40px"
            }}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default UserInput;



import * as React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DateOfBirth() {
  const [DOB, setDOB] = React.useState(null);

  return (
    <DatePicker
      label="Date of Birth"
      value={DOB}
      onChange={(newDOB) => setDOB(newDOB)}
    />
  );
}

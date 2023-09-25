import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

function CreateAccount() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">User Type</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Accountant"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="Accountant"
          control={<Radio />}
          label="Accountant"
        />
        <FormControlLabel value="Manager" control={<Radio />} label="Manager" />
        <FormControlLabel
          value="Administrator"
          control={<Radio />}
          label="Administrator"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default CreateAccount;

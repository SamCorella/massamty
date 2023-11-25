import React, { useState, useEffect } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../index";

const AccountSelect = ({ label, name }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const optionsCollection = await getDocs(collection(db, "accounts"));
        const newOptions = optionsCollection.docs.map(
          (doc) => doc.data().accountName
        );
        setOptions(newOptions);
      } catch (error) {
        console.error("Error fetching options from Firestore:", error);
      }
    };

    fetchOptions();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        id="select"
        name={name}
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AccountSelect;

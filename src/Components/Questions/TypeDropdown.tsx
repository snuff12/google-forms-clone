import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

const TypeDropdown = () => {
  const [type, setType] = useState<string>("객관식 질문");
  const handleChange = (e: SelectChangeEvent) => {
    setType(e.target.value);
  };

  return (
    <FormControl style={{width:'208px'}}>
      <InputLabel id="type-dropdown">Type</InputLabel>
      <Select
        labelId="type-dropdown"
        id="type-dropdown"
        value={type}
        label="Type"
        onChange={handleChange}
      >
        <MenuItem value="단답형">단답형</MenuItem>
        <MenuItem value="장문형">장문형</MenuItem>
        <MenuItem value="객관식 질문">객관식 질문</MenuItem>
        <MenuItem value="체크박스">체크박스</MenuItem>
        <MenuItem value="드롭다운">드롭다운</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TypeDropdown;

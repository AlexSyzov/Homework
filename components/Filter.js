import React from "react";
import { Input, Label } from "../styled";
import PropTypes from "prop-types";

const Filter = ({ filter, onInputChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        name="filter"
        onChange={onInputChange}
      ></Input>
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filter;

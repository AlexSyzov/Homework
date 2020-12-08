import React from "react";
import { Header } from "../styled";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <>
      {title && (
        <>
          <Header>{title}</Header>
        </>
      )}
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;

import styled from "styled-components";

const FontFamily = `
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const MarginLeft = `
  margin-left: 5px;
`;

const Border = `
  border: 2px solid #c0c0c0;
  border-radius: 6px;
`;

const InputStyles = `
  display: flex;
  width: 200px;
  height: 20px;
  margin-bottom: 12px;
  transition: all 0.16s linear;
  ${Border}

  &:focus {
    border: 2px solid #87cefa;
    outline: none;
    box-shadow: 0px 0 6px #87cefa;
  }
`;

const LabelStyles = `
  ${FontFamily}
  font-size: 20px;
`;

const ButtonStyles = `
  width: 120px;
  height: 26px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.1s linear;
  ${Border}

  &:active {
    border: 2px solid #87cefa;
    outline: none;
    background-color: #00bfff;
  }

  &:focus {
    outline: none;
  }
`;

export const Header = styled.h2`
  ${FontFamily}
  ${MarginLeft}
`;

export const Form = styled.form`
  ${MarginLeft}
  width: 220px;
  margin-right: 0;
  border: 2px solid #696969;
  border-radius: 6px;
  padding: 10px;
`;

export const FormInput = styled.input`
  ${InputStyles}
`;

export const FormLabel = styled.label`
  ${LabelStyles}
  margin-left: 1px;
`;

export const Input = styled.input`
  ${InputStyles}
  ${MarginLeft}
`;

export const Label = styled.label`
  ${LabelStyles}
  ${MarginLeft}
`;

export const Button = styled.button`
  ${ButtonStyles}
`;

export const ListItemButton = styled.button`
  ${ButtonStyles}
  margin-left: 10px;
`;

export const ListItem = styled.li`
  ${FontFamily}
  font-size: 20px;
  margin-bottom: 6px;
`;

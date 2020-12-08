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

// const FontSize = `
//   font-size: 20px;
// `;

// const FontSettings = `
//   ${FontSize}
//   ${FontFamily}
// `;

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

// export const FeedbackButton = styled.button`
//   width: 100px;
//   background-color: #fff5ee;
//   height: 30px;
//   margin-right: 10px;
//   border: 1px solid #dcdcdc;
//   border-radius: 6px;
//   font-weight: 600;
//   box-shadow: 1px 1px 2px #c0c0c0;
//   transition: all 0.2s linear;
//   cursor: pointer;

//   &:hover {
//     background-color: #da70d6;
//   }

//   &:focus {
//     outline: none;
//     border: 1px dotted #bc8f8f;
//     background-color: #fff0f5;
//     width: 110px;
//   }
// `;

// export const FeedbackContainer = styled.div`
//   ${FontSettings}
// `;

// export const NotificationContainer = styled.div`
//   margin-top: 20px;
//   ${FontSettings}
// `;

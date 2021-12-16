import styled from "styled-components";

interface IProps {
  size: "small" | "large" | "medium" | "title";
  color?: string;
  font: "bold" | "medium" | "regular";
  textAlign?: string;
}

const getCurrentFont = (font: string) => {
  switch (font) {
    case "bold":
      return "JetBrains Mono";
    case "medium":
      return "JetBrains Mono Medium";
    case "regular":
      return "JetBrains Mono";
    default:
      break;
  }
};

const getCurrentSize = (size: string) => {
  switch (size) {
    case "small":
      return "15px";
    case "large":
      return "35px";
    case "medium":
      return "25px";
    case "title":
      return "45px";
    default:
      break;
  }
};

export const Text = styled.label`
  font-family: ${({ font }) => getCurrentFont(font)};
  color: ${({ color }: IProps) => color};
  font-size: ${({ size }) => getCurrentSize(size)};
  font-size: ${({ size }) => getCurrentSize(size)};
  text-align: ${({ textAlign }: IProps) => textAlign};
`;

import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default function Button({
  size,
  backgroundColor,
  fontColor,
  content,
  type = "",
  margin = "3px auto",
  border = "solid 0px",
  clickFunction,
  isDisabled = false,
}) {
  return (
    <Wrapper
      size={size}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      type={type}
      margin={margin}
      border={border}
      onClick={clickFunction}
      disabled={isDisabled}
    >
      {isDisabled ? (
        <ThreeDots
          height="13"
          width="51"
          radius="9"
          color="#ffffff"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        content
      )}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background-color: #52b6ff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 400;
  margin: 3px auto;

  ${(props) => {
    let config = "";
    if (props.size === "small") {
      config += `
        height: 30px;
        font-size: 20px;
        width: 30px;
        `;
    }

    if (props.size === "medium") {
      config += `
        height: 35px;
        width: 84px;
        font-size: 16px;
        `;
    }

    if (props.size === "large") {
      config += `
        height: 45px;
        width: 100%;
        font-size: 26px;
        `;
    }

    if (props.margin !== "") {
      config += `margin: ${props.margin};`;
    }

    config += `border: ${props.border};`;

    if (props.backgroundColor === "blue") {
      config += "background-color: #52b6ff;";
    }

    if (props.backgroundColor === "white") {
      config += "background-color: #fff;";
    }

    if (props.backgroundColor === "gray") {
      config += "background-color: #CFCFCF;";
    }

    if (props.fontColor === "white") {
      config += "color: #fff;";
    }

    if (props.fontColor === "blue") {
      config += "color: #52b6ff;";
    }

    if (props.fontColor === "gray") {
      config += "color: #DBDBDB;";
    }

    return config;
  }}
`;

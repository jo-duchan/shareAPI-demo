import styled from "styled-components";
import Colors from "@styles/color-system";
import Fonts from "@styles/typography-system";

interface Props {
  action: () => void;
}

function Button({ action }: Props) {
  return <Container onClick={action}>Share Button</Container>;
}

export default Button;

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  ${Fonts.Body.Bold.M};
  color: ${Colors.Basic[100]};
  background-color: ${Colors.Primary[500]};
  border: initial;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  transition: background-color 200ms ease-in-out;

  &:active {
    background-color: ${Colors.Primary[600]};
  }
`;

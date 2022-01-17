import styled from "@emotion/styled";
import { theme } from "../../pages/theme";

export const Background = styled.div`
  padding-top: 4vh;
  background: linear-gradient(
    0deg,
    #98c3e8 8.84%,
    rgba(152, 195, 232, 0) 31.12%
  );
  width: 100%;
  height: 100%;
`;
export const Grid = styled.div`
  display: grid;
  padding: 0 20px;

  ${theme.breakpoints.up("md")} {
    display: grid;
    grid-template-columns: 0.7fr 1fr;
  }
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
`;
export const Right = styled.div`
  display: block;
`;
export const Text = styled.div`
  gap: 33px;
  display: flex;
  flex-direction: column;
`;

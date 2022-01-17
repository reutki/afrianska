import styled from "@emotion/styled";
import { theme } from "../../pages/theme";
export const Main = styled.div`
  display: grid;
  grid-template-columns: none;
  padding-inline: 12px;
  margin-top: 60px;
  ${theme.breakpoints.up("md")} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 180px;
  }
  width: max-content;
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  ${theme.breakpoints.up("md")} {
    display: flex;
    flex-direction: column;
    gap: 150px;
    align-items: center;
  }
`;

export const Right = styled.div`
  ${theme.breakpoints.up("md")} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const Title = styled.div`
  width: 360px;
  ${theme.breakpoints.up("md")} {
    margin-left: 210px;
  }
`;

import styled from "@emotion/styled";
import { theme } from "../../pages/theme";

export const FooterStyle = styled.div`
  width: 90vw;
  height: 100%;
  color: white;
  background-color: ${theme.palette.primary.main};
  border-radius: 0 8rem 0 0;

  .top {
    display: grid;
    grid-template-columns: 1.5fr 0.5fr;
  }
  .bottom {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

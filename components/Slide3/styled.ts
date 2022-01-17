import styled from "@emotion/styled";
import { theme } from "../../pages/theme";

export const Slide3Style = styled.div`
  padding-top: 5vh;
  padding-bottom: 5vh;

  .boxDown {
    display: flex;
    flex-direction: columns;
    gap: 10vw;
    justify-content: center;
  }

  .BoxTop {
    display: flex;
    justify-content: center;
  }

  .boxDown {
  }

  .boxes {
    ${theme.breakpoints.up("md")} {
      padding-inline: 10%;
      display: flex;
      flex-direction: column;
      gap: 300px;
    }
    display: flex;
    flex-direction: column;
    padding-inline: 12px;
    gap: 20px;
  }

  .info {
    ${theme.breakpoints.up("md")} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
      margin-top: 190px;
      margin-bottom: 100px;
      padding-inline: 20%;
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 20px;
    padding-inline: 12px;
  }

  .comment {
    display: flex;
    align-items: center;
  }

  .cover {
    z-index: 1;
    color: blue;
  }

  .sparkliteApp {
    display: block;
    position: relative;
  }
  .image {
    z-index: 0;
  }
  #text {
    z-index: 1;
    position: absolute;
    margin-left: 3%;
    margin-top: 1%;
    color: white;
  }
  #textTop {
    z-index: 1;
    position: absolute;
    margin-left: 32rem;
    margin-top: 3rem;
    color: white;
  }
  #textBottom {
    z-index: 1;
    position: absolute;
    margin-left: 38rem;
    margin-top: 7rem;
    color: white;
  }
`;

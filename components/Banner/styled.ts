import styled from "@emotion/styled";

export const StyledBanner = styled.div`
  .banner {
    position: relative;
    text-align: center;
    width: 100%;
    height: 15rem;
    display: block;
  }
  .text {
    z-index: 1;
    position: absolute;
    top: 2rem;
    padding-inline: 20%;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 4vh;
    text-align: center;
  }
  .title-image {
    z-index: 0;
  }
  #title {
    font-size: 3rem;
  }
  #description {
    font-size: 1rem;
  }
`;

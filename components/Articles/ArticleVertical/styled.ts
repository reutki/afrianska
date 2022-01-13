import styled from "@emotion/styled";

export const ArticleVerticalStyle = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-inline: 5%;
  .contaier2 {
    width: 100%;
    height: 100%;
  }
  .text-main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
  .info {
    display: grid;
    grid-template-columns: 1fr 0.5fr;
  }
  .buttons {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .image {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: contain;
  }
`;

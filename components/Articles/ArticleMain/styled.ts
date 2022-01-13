import styled from "@emotion/styled";

export const ArticleStyle = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  .contaier {
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
    width: 30rem;
    height: 20rem;
    overflow: hidden;
    object-fit: contain;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

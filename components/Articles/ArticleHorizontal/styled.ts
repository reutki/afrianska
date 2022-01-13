import styled from "@emotion/styled";

export const ArticleHorizontalStyle = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  .contaier3 {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .text-main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .info {
    display: grid;
    grid-template-columns: 0.5fr 0.1fr;
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

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
`;

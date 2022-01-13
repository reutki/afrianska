import styled from "@emotion/styled";

export const StyledContacts = styled.div`
  padding-top: 7vh;

  .container {
    padding-top: 5vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-inline: 20%;
  }
  .image {
    display: block;
    position: relative;
  }
  .left {
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    padding-inline: 10%;
  }
  .rigth {
    padding-inline: 10%;
  }

  #submit {
    margin-top: 10%;
  }
  .phone {
    justify-content: center;
  }

  .email,
  .website,
  .phone1,
  .phone2 {
    display: flex;
    align-items: center;
  }
`;

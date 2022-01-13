import styled from "@emotion/styled";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%;
  width: 100%;
  height: 100%;
  .card {
    padding: 10% 10% 10% 10%;
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
    gap: 2vw;
  }
  #paper {
    width: 100%;
    height: 100%;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }
`;

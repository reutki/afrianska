import styled from '@emotion/styled';

export const FooterStyle = styled.div`
width:80%;
font-family:'Gilroy', sans-serif;



   .main{
    border-radius:0px 150px 0px 0px ;
    background:#316099;
    display:flex;
    flex-direction:column;
    padding-inline:20%;
    
  }
  .link{
    padding-top:2vh;
    display:flex;
    flex-direction:column;
    gap:1vh;
  }
  .top{
      padding-top:8vh;
      padding-bottom:8vh;
      display:grid;
      grid-template-columns:1.5fr 0.5fr;
      gap:4vw;
      color:white;

  }
  .titleTop , .text{
      width:25vw;
  }
  .button{
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
  }
  .bottom{
    padding-top:8vh;
    padding-bottom:8vh;
    display:flex;
    gap:5vw;
    align-items:center;
    
  }
 
  .line{
    width:100%;
    opacity:0.3;
  }
  .logo{
      display:flex;
      flex-direction:row;
      width:100%;
      align-items:center;
      gap:1vw;
      color:white;
      height:2vh;

  }
  .logoImage{
      height:4vw;
      width:1vw;
  }
  .text{
      display:flex;
      flex-direction:column;
    gap:1vw;
    padding:0;
    align-items:center;
    color:white;
  }
  .phone{
    display:flex;
gap:1vw;
align-items:center;
color:white;
  }
      .email,.a{
        display:flex;
gap:1vw;
align-items:center;
color:white;
  }
  .column2, .column3{
      color:white;
  }
  .title, .logo {
    padding-bottom:2vh;

  }
  .title{
      width:100%;
  }
  .links{
    display:flex;
    flex-direction:column;
    gap:1vh;
  }
  
    
    `
    
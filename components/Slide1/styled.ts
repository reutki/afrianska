import styled from "@emotion/styled";


export const Slide1Style=styled.div`
margin:0;
padding:0;

.main{
    background: linear-gradient(0deg, #98C3E8 5%, rgba(152, 195, 232, 0) 80%);
    margin:0;
    padding-top:4vh;
    display:grid;
    grid-template-columns:1fr 1fr;
   
    height:100vh;
    
    
    
}
.info{
    display:flex;
    flex-direction:column;
    margin-top:10vh;
    gap:7vh;
    margin-left:20vw;
    
}
#title{
font-family:'Galien, sans-serif';
font-weight:600;
    color:#1F3F68;

}
#comments{
}
#button{
    padding:2rem 0.7rem 2 rem 0.75rem;
    font-size:1rem;
}
`
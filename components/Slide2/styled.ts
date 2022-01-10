import styled from "@emotion/styled";


export const Slide2Style=styled.div`

.main{
   display:grid;
   grid-template-columns:1fr 1fr;
    height:100%;
   padding-top:6rem;
   padding-bottom:4rem;
    width:100%;
}
.left{
    display:flex;
    flex-direction:column;
    gap:4rem;
     margin-left:20vw;
     padding-inline:1rem;
    

}
.right{
    display:flex;
    flex-direction:column;
    gap:8rem;
    width:100%;
    padding:0 ;

    

    
}
.title{
    width:25rem;
    padding:1rem;
}
.text{
    font-family:'Gilroy', sans-serif;
    font-weight:500;
    font-size:1rem;

}

`;
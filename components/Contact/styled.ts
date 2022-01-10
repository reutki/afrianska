import styled from "@emotion/styled"

export const StyledContacts=styled.div`
padding-top:7vh;


.container{
    padding-top:5vh;
    display:grid;
    grid-template-columns:1fr 1fr;
    padding-inline:20%;
}
.image{
    display:block;
    position:relative;    
}
.left {
    display:flex;
    flex-direction:column;
    gap:1.7rem;
    padding-inline:10%;

}
.rigth{
padding-inline:10%;
}
.card
{
    padding: 10% 10% 10% 10%
}
#submit{
margin-top:10%;
}
.phone {

    justify-content:center;
}
.email ,.website, .phone1,.phone2 {
    display:flex;
    gap:2vw;  
      
}
.email,.website,.phone1,.phone2 div{
    padding-bottom:3vh;
    display:flex;
    align-items:center;
    
}
#paper{
    width:100%;
    height:100%;
}
.card section{
    padding-bottom:3vh;
}
.adress{
    width:90%;
}
.form{
    width:100%;
    height:100%;
}

`
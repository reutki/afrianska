import styled from "@emotion/styled";

export const StyledForm=styled.div`
padding-inline:10%;

width:100%;
height:100%;    
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

`
import styled from "@emotion/styled";

export const StyleBlog=styled.div`
padding-top:5vh;

.banner{
    position:relative;
    text-align: center;
    width:100%;
    height:15rem;
    display:block;
}
.text{
    z-index:1;
    position:absolute;
    top:2rem;
    padding-inline:20%;
    color:white;

}
.title-image{
    z-index:0;
}
#title{
font-size:3rem;
}
#description{
font-size:1rem;
}
.searchbar{
    display:flex;
    align-items:center;
    padding-inline:15%;
    padding-top:3em;
    padding-bottom:3em;
}




`;
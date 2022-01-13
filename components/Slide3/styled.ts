import styled from "@emotion/styled";


export const Slide3Style=styled.div`
padding-top:5vh;
padding-bottom:5vh;

.boxDown{
    display:flex;
    flex-direction:columns;
    gap:10vw;
    justify-content:center;
}

.BoxTop{
    display:flex;
    justify-content:center;
    padding-inline:10%;
}

.boxDown{
    padding-inline:10%;
}

.boxes{
    padding-inline:10%;
    display:flex;
    flex-direction:column;
    gap:10vh;
}

.info{
    display:grid;
    grid-template-columns:1fr 1fr;
    text-align:center;
    padding-top:5vh;
    padding-bottom:5vh;
    padding-inline:20%;
}

.comment{
    display:flex;
    align-items:center;
}

.cover{
    z-index:1;
    color:blue;
}

.sparkliteApp{
    display:block;
    position:relative;
}
.image{
    z-index:0;
}
#text{
    z-index:1;
    position:absolute;
    margin-left:3%;
    margin-top:1%;
    color:white;
}
#textTop{
    z-index:1;
    position:absolute;
    margin-left:25rem;
    margin-top:3rem;
    color:white;
}
#textBottom{
    z-index:1;
    position:absolute;
    margin-left:31rem;
    margin-top:6rem;
    color:white;
}
`
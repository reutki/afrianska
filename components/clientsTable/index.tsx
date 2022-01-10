import React from "react";
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import  Divider  from "@mui/material/Divider";
import {Style} from './styled'




export const Clients=()=>{
    return(        
        <Style>
            <div className="container">

<div className="row1">

        <Grid container  columnSpacing={{  xs: 3, sm: 5, md: 8 }}>
       

    <Grid item xs={2}>
        <h1>Logo</h1>
    </Grid>
    <Grid item xs={0}>
    <Divider orientation="vertical" variant="fullWidth" />

    </Grid> 

    <Grid item xs={2}>
    <h1>Logo</h1>

    </Grid> 
    <Grid item xs={0}>
    <Divider orientation="vertical" variant="fullWidth" />

    </Grid> 
   

    <Grid item xs={2}>
    <h1>Logo</h1>

    </Grid>
    <Grid item xs={0}>
    <Divider orientation="vertical" variant="fullWidth" />

    </Grid> 
    <Grid item xs={2}>
    <h1>Logo</h1>

    </Grid>
  </Grid>
  
</div>
  <Divider orientation="horizontal" variant="fullWidth" />
  <div className="row2">

<Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 5, md: 8 }}>

<Grid item xs={2}>
<h1>Logo</h1>
</Grid>
<Grid item xs={0}>
<Divider orientation="vertical" variant="fullWidth" />

</Grid> 

<Grid item xs={2}>
<h1>Logo</h1>

</Grid> 
<Grid item xs={0}>
<Divider orientation="vertical" variant="fullWidth" />

</Grid> 


<Grid item xs={2}>
<h1>Logo</h1>

</Grid>
<Grid item xs={0}>
<Divider orientation="vertical" variant="fullWidth" />

</Grid> 
<Grid item xs={2}>
<h1>Logo</h1>

</Grid>
</Grid>

</div>
            </div>
        </Style>
        )

    







}
import { Box, Grid } from '@material-ui/core';
import React from 'react';


export default function Confirmation({ title, data }){
    return(
       <Grid container>
           <Box>
             {title}
           </Box>
           <Grid item>
            <p>   thank you for you participation Mr(s) {data.name} , you are going to recive a confirmation on your E-mail : .{data.email}
            </p> 
            <p>{data.Lastname}</p>
           </Grid>
       </Grid>

    )
} 
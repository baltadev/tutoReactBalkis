import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   confstyl : {
    fontFamily: 'Raleway, Arial',
    backgroundColor: '#F0CEA0', 
    width: '80%',
    height: '20%',
    alignItems:'center',
    border: '1px solid black',
    textAlign:'center',
    margin: 'auto',
    },
    titre:{
    marginTop: '20px',
    backgroundColor: '#F7C7DB', 
    width: '100%',
    height: '10%',
    alignItems:'center',
    border: '1px solid black',
    textAlign:'center',
    }
    
  }));

export default function Confirmation({ title, data }){
    const classes = useStyles();
    return(
       <Grid container >
           <Box className={classes.titre}>
            {title} 
           </Box>
           <Grid item className={classes.confstyl} >
            <p> Thank you for you participation Mr(s) {data.name} {data.lastname}  , you are going to recive a confirmation on your E-mail : {data.email}
           {JSON.stringify(data)} 
            </p> 
           </Grid>
           </Grid>
       

    )
} 
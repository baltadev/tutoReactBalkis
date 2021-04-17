import React, { useState } from 'react';
import Confirmation from './confirmation';
import Inscription from './inscription';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#cfe8fc', 
    height: '100vh', 
    border: '1px solid black', 
    flexGrow: 1
}
}));
  function Ex10() {
    const [ editMode, setEditMode ] = useState(true);
    const [ data, setData ] = useState({ name: '', lastname: ''})
    const classes = useStyles();
      return(
      <React.Fragment>
        <CssBaseline />
        <Container fixed className={classes.root}>
        {editMode && <Inscription setEditModeProps={setEditMode} setDataProps={setData} data={data}/> } 
       {!editMode && <Confirmation title="Confirmation" data={data} />} 
      </Container>
    </React.Fragment>
  
    )
      }
import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';
import LanguageIcon from '@material-ui/icons/Language';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  field: {
   
  },
  section: {
    border: '1px solid black',
    backgroundColor: '#F0CEA0', 
    marginTop: '20px',
    padding:  theme.spacing(2)
  },
  segmentActions: { 
    margin: 'auto',
    width: '30%',
    float: 'right'
  },
  

}));


export default function FixedContainer({ setEditModeProps, setDataProps}) {
  const [data,setData]=useState({name:'',lastname:'',birthday:'',town:'',country:'',email:'',password:'',zipcode:'',street:'',confirmation:''})
  const classes = useStyles();
  return (
    
    <React.Fragment>
      <CssBaseline />
      <Container  className={classes.root}>
      <Grid container direction='column' className={classes.title}>
        <Grid item xs={12}>
        <Typography component=''> Inscription </Typography>
      </Grid>
      
     <Grid item xs={12}>
      <form>
      <Grid container className={classes.section}>
        <Typography variant='subtitle1'>Personnal data </Typography>
              <Grid container spacing={12}>
                <Grid item  xs={6} className={classes.field}>
                  <FormControl>
                    <InputLabel htmlFor="name">Name</InputLabel>
                      <Input
                       id="name"
                       onChange={(event) => setData({...data,name:event.target.value})}
                       startAdornment={
                           <InputAdornment position="start">
                             <AccountCircle />
                           </InputAdornment>
                         }
                    />
                    <FormHelperText>writh your Name</FormHelperText>
                  </FormControl>
                </Grid>
             
     
               <Grid item  xs={6} className={classes.field}>
                <FormControl>
                 <InputLabel htmlFor="lastname"> Last Name</InputLabel>
                   <Input
                     id='lastname'
                     onChange={(event) => setData({...data,lastname:event.target.value})}  
                     startAdornment={
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      }
                   />
                    <FormHelperText>writh your last Name</FormHelperText>
                </FormControl>
                </Grid>
                
                </Grid>
                <Grid container >
                <FormControl>
                        <TextField id='birthday' type='date' label='birthday' defaultValue='2000-01-01'
                         onChange={(event) => setData({...data,birthday:event.target.value})} />
                        <FormHelperText>choose your birthday</FormHelperText>
                </FormControl>
            </Grid>
            
            
      

            <Grid container >
      <FormControl component="fieldset">
          <FormLabel component="legend">Statue</FormLabel>
              <RadioGroup row aria-label="Statue" name="Statue" >
                 <FormControlLabel value="Single" control={<Radio  color='primary'/>} label="Single" />
                 <FormControlLabel value="Married" control={<Radio color='primary'/>} label="Married" />
                 <FormControlLabel value="divorced" control={<Radio color='primary'/>} label="Divorced" />
                 <FormControlLabel value="other" control={<Radio color='primary'/>} label="other" />
                    
               </RadioGroup>
      </FormControl>
        
      </Grid>
     </Grid>             

<Grid container className={classes.section}>
    <Typography variant='subtitle1'>Adresse</Typography>
                <Grid container spacing={8}>
                <Grid item xs={6}  className={classes.field}>
                    <FormControl>
                        <InputLabel htmlFor='street'>Street</InputLabel>
                        <Input id='street'
                       onChange={(event) => setData({...data,street:event.value})}
                          startAdornment={
                            <InputAdornment position="start">
                              <HomeIcon />
                            </InputAdornment>
                          } />
                    </FormControl>
                    </Grid>
                    <Grid item xs={6}  className={classes.field}>
                    <FormControl>
                        <InputLabel htmlFor='town'>Town</InputLabel>
                        <Input id='town'
                        onChange={(event) => setData({...data,town:event.target.value})}
                           
                            startAdornment={
                            <InputAdornment position="start">
                              <LocationCityIcon />
                            </InputAdornment>
                          } />
                    </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                <Grid item  xs={6} className={classes.field}>
                    <FormControl>
                        <InputLabel htmlFor='zipcode'>Zip-Code</InputLabel>
                        <Input id='zipcode'
                         onChange={(event) => setData({...data,zipcode:event.target.value})}
                            startAdornment={
                            <InputAdornment position="start">
                              <LocalPostOfficeIcon />
                            </InputAdornment>
                          } />
                    </FormControl>
                    </Grid>
                    <Grid item xs={6}  className={classes.field}>
                    <FormControl>
                        <InputLabel htmlFor='country'>Country</InputLabel>
                        <Input id='counrty'
                         onChange={(event) => setData({...data,country:event.target.value})}
                            startAdornment={
                            <InputAdornment position="start">
                              <LanguageIcon />
                            </InputAdornment>
                          } />
                    </FormControl>
                    </Grid>
                </Grid>
                
            </Grid>
      
            <Grid container className={classes.section}>
    <Typography variant='subtitle1'>Authentification</Typography>
                <Grid container spacing={12}>
            <Grid item  item xs={4} className={classes.field}>
        <FormControl>
        <InputLabel htmlFor="email"> E-mail</InputLabel>
        <Input
          id="email"
          onChange={(event) => setData({...data,email:event.target.value})}   
          startAdornment={
            <InputAdornment position="start">
              <AlternateEmailIcon />
            </InputAdornment>
          }
        />
        <FormHelperText>Example@Example.com/tn...</FormHelperText>
      </FormControl>
      </Grid>
      
      <Grid item  item xs={4} className={classes.field}>
        <FormControl>
        <InputLabel htmlFor="password"> Password</InputLabel>
        <Input
          id="password"
          onChange={(event) => setData({...data,password:event.target.value})} 
          type='password'
       ww
        />
        <FormHelperText>Password should have a number ,letter......</FormHelperText>
      </FormControl>
      </Grid>
      <Grid item xs={4}  className={classes.field}>
        <FormControl>
        <InputLabel htmlFor="confirmation"> Comfirm your Password</InputLabel>
        <Input
          id="confirmation"

          onChange={(event) => setData({...data,confirmation:event.target.value})} 
          type='password'
        
        />
        <FormHelperText>confirm your password</FormHelperText>
      </FormControl>
      </Grid>
      </Grid>
      </Grid>
     
      <Grid container className={classes.segmentActions}>
                      <Button type="submit" variant='contained' color='primary' onClick={ () => {setEditModeProps(false);setDataProps(data);}} >confirm</Button>
                      <Button type="reset" variant='contained' color='secondary' >Reset</Button>
                  </Grid>
      
      
      </form>
      </Grid>
      </Grid>
      </Container>
    </React.Fragment>
    
  );
}
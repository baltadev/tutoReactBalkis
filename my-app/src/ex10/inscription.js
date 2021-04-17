import React from 'react';
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
    marginTop: '20px',
    padding:  theme.spacing(2)
  },
  segmentActions: {
    margin: 'auto',
    width: '30%',
    float: 'right'
  }
}));


export default function FixedContainer({ setEditModeProps, setDataProps, data }) {
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
                       onChange={(event) => setDataProps({ name: event.target.value, lastname:data.lastname})}
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
                     onChange={(event) => setDataProps({ lastname: event.target.value, name:data.name})}
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
                          onChange={(event) => setDataProps({ birthday: event.target.value, name:data.name, lastname:data.lastname})}
                          />
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
                        onChange={(event) => setDataProps({ street: event.target.value, birthday:data.birthday, name:data.name, lastname:data.lastname})}
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
                         onChange={(event) => setDataProps({ town: event.target.value,street:data.street, birthday:data.birthday, name:data.name, lastname:data.lastname})}
        
                           
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
                         onChange={(event) => setDataProps({ Zipcode: event.target.value,town:data.town,street:data.street, birthday:data.birthday, name:data.name, lastname:data.lastname})}
        
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
                         onChange={(event) => setDataProps({ Country: event.target.value,zipcode:data.zipcode,town:data.town,street:data.street, birthday:data.birthday, name:data.name, lastname:data.lastname})}
        
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
          onChange={(event) => setDataProps({ email: event.target.value,country:data.country,zipcode:data.zipcode,town:data.town,street:data.street, birthday:data.birthday, name:data.name, lastname:data.lastname})}
        
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
          onChange={(event) => setDataProps({ password: event.target.value, email:data.email,country:data.country,zipcode:data.zipcode,town:data.town,street:data.street, birthday:data.birthday, name:data.name, lastname:data.lastname})}
          
          type='password'
       ww
        />
        <FormHelperText>Password should have a number ,letter......</FormHelperText>
      </FormControl>
      </Grid>
      <Grid item xs={4}  className={classes.field}>
        <FormControl>
        <InputLabel htmlFor="password confirmation"> Comfirm your Password</InputLabel>
        <Input
          id="password Confirmation"
          type='password'
        
        />
        <FormHelperText>confirm your password</FormHelperText>
      </FormControl>
      </Grid>
      </Grid>
      </Grid>
     
      <Grid container className={classes.segmentActions}>
                      <Button type="submit" variant='contained' color='primary' onClick={ () => setEditModeProps(false)} >confirm</Button>
                      <Button type="reset" variant='contained' color='secondary' >Reset</Button>
                  </Grid>
      
      
      </form>
      </Grid>
      </Grid>
      </Container>
    </React.Fragment>
    
  );
}
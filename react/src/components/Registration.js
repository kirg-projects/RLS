import React from 'react'
import {Typography,TextField, Button,FormControl,FormControlLabel,Grid,Link,Checkbox,NativeSelect,FormHelperText,InputLabel, Select  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


class Registration extends React.Component {
    constructor(){
        super(),
        this.state={
            accountType:""
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
        const {name, value}=event.target
        this.setState({
            [name]:value
        })

    }
    render() {
        return (
            <div>
                <Typography component="h1" variant="h5" color="primary" align="center">
                    Register
                </Typography>
                   <form noValidate>
                       <FormControl fullWidth>
                           <InputLabel htmlFor="age-native-simple">Account type</InputLabel>
                           <Select
                             native
                             value={this.state.accountType}
                             onChange={this.handleChange}
                             name="accountType"
                           >
                             <option aria-label="None" value="" />
                             <option value={"osobaFizyczna"}>osoba fizyczna</option>
                             <option value={"osobaFizycznaZDzielanoscia"}>osoba fizyczna z działalnością gospodarczą</option>
                             <option value={"spolka"}>spółka</option>
                             <option value={"zwykly"}>zwykły użytkownik</option>
                             <option value={"opiekun"}>opiekun</option>
                           </Select>
                       </FormControl>
                       <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="firstName"
                          type="text"
                          label="First Name"
                          name="firstName"
                       />
                       <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="lastName"
                          type="text"
                          label="Last Name"
                          name="lastName"
                       />
{/* TODO label nie może nachodzić na typ inputa */}
                       <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="birthDate"
                          type="date"
                          label="Birth Date"
                          name="birthDate"
                       />
                       <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="country"
                          type="text"
                          label="Country"
                          name="country"
                       />
                       <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="street"
                          type="text"
                          label="Street"
                          name="street"
                       />
                       <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="flatNumber"
                          type="number"
                          label="Flat Number"
                          name="flatNumber"
                       />
{/* TODO regex do kodu pocztowego */}
                       <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="zip"
                          type="number"
                          label="ZIP"
                          name="zip"
                       />
                       <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="city"
                          type="text"
                          label="City"
                          name="city"
                       />
{/* TODO regex dla numeru telefonicznego */}
                       <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="phone"
                          type="number"
                          label="Phone"
                          name="phone"
                       />
                       <TextField
                           variant="outlined"
                           margin="normal"
                           required
                           fullWidth
                           id="email"
                           label="Email Address"
                           type="email"
                           name="email"
                           autoComplete="email"
                       />
                       <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="reEmail"
                          label="Repeat Email Address"
                          type="email"
                          name="reEmail"
                          autoComplete="email"
                      />
                       <TextField
                           variant="outlined"
                           margin="normal"
                           required
                           fullWidth
                           name="password"
                           label="Password"
                           type="password"
                           id="password"

                       />
                       <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          name="rePassword"
                          label="Repeat password"
                          type="password"
                          id="rePassword"

                       />
                       {this.state.accountType==="opiekun"
                       ? <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="patronId"
                            label="Patron ID"
                            type="text"
                            id="patronId"
                         />
                         : null}
                       <FormControlLabel
                           control={<Checkbox value="remember" color="primary" />}
                           label="Remember me"
                       />
                       <Button
                           type="submit"
                           fullWidth
                           variant="contained"
                           color="primary"
                       >
                           Sign up
                       </Button>
                   </form>
               </div>
        )
    }
}

export default Registration
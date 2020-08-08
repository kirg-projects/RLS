import React from 'react'
import {Typography,TextField, Button,FormControl,FormControlLabel,Grid,Link,Checkbox,NativeSelect,FormHelperText,InputLabel, Select  } from '@material-ui/core';

class Registration extends React.Component {
    constructor(){
        super(),
        this.state={
            accountType:"",
            firstName:"",
            lastName:"",
            birthDate:undefined,
            country:"",
            street:"",
            flatNumber:undefined,
            zip:undefined,
            zipError:false,
            city:"",
            phone:undefined,
            phoneError:false,
            email:"",
            reEmail:"",
            password:"",
            rePassword:"",
            companyName:"",
            nip:undefined,
            companyNumber:undefined,
            patronId:"",
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value}=event.target
        this.setState({
            [name]:value
        })
        {this.state.phone.toString().length<8 || this.state.phone.toString().length>8
        ? this.setState(
             {phoneError:true}
         )
        : this.setState(
            {phoneError:false}
          )
        }
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
                             <option value={"individual"}>osoba fizyczna</option>
                             <option value={"individualWithEconomy"}>osoba fizyczna z działalnością gospodarczą</option>
                             <option value={"partnership"}>spółka</option>
                             <option value={"regular"}>zwykły użytkownik</option>
                             <option value={"patron"}>opiekun</option>
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
                          value={this.state.firstName}
                          onChange={this.handleChange}
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
                          value={this.state.lastName}
                          onChange={this.handleChange}
                       />
                       {this.state.birthDate===undefined
                       ? <TextField
                           variant="outlined"
                           margin="normal"
                           required
                           fullWidth
                           id="birthDate"
                           type="date"
                           label="Birth Date"
                           name="birthDate"
                           value={this.state.birthDate}
                           onChange={this.handleChange}
                           InputProps={{
                              style: {
                                  color: "transparent"
                              }
                           }}
                         />
                       : <TextField
                           variant="outlined"
                           margin="normal"
                           required
                           fullWidth
                           id="birthDate"
                           type="date"
                           label="Birth Date"
                           name="birthDate"
                           value={this.state.birthDate}
                           onChange={this.handleChange}
                         />
                       }
                       <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="country"
                          type="text"
                          label="Country"
                          name="country"
                          value={this.state.country}
                          onChange={this.handleChange}
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
                          value={this.state.street}
                          onChange={this.handleChange}
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
                          value={this.state.flatNumber}
                          onChange={this.handleChange}
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
                          value={this.state.zip}
                          error={this.state.zipError}
                          onChange={this.handleChange}

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
                          value={this.state.city}
                          onChange={this.handleChange}
                       />
                       {this.state.phoneError?
                       <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="phone"
                          type="number"
                          label="Phone"
                          name="phone"
                          value={this.state.phone}
                          error={this.state.phoneError}
                          helperText="Phone number must contain 9 digits"
                          onChange={this.handleChange}
                       />
                       :<TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="phone"
                          type="number"
                          label="Phone"
                          name="phone"
                          value={this.state.phone}
                          error={this.state.phoneError}
                          onChange={this.handleChange}
                       />
                       }
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
                           value={this.state.email}
                           onChange={this.handleChange}
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
                          value={this.state.reEmail}
                          onChange={this.handleChange}
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
                           value={this.state.password}
                           onChange={this.handleChange}
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
                          value={this.state.rePassword}
                          onChange={this.handleChange}
                       />
                       {this.state.accountType==="partnership"||this.state.accountType==="individualWithEconomy"
                       ? <div><TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="companyName"
                            label="Name of company"
                            type="text"
                            id="companyName"
                            value={this.state.companyName}
                            onChange={this.handleChange}
                         />
                         <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="nip"
                            label="NIP"
                            type="number"
                            id="nip"
                            value={this.state.nip}
                            onChange={this.handleChange}
                         />
                         <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="companyNumber"
                            label="Company phone number"
                            type="number"
                            id="companyNumber"
                            value={this.state.companyNumber}
                            onChange={this.handleChange}
                         /></div>
                       : null
                       }
                       {this.state.accountType==="patron"
                       ? <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="patronId"
                            label="Patron ID"
                            type="text"
                            id="patronId"
                            value={this.state.patronId}
                            onChange={this.handleChange}
                         />
                       : null
                       }
                       <FormControlLabel
                           control={<Checkbox value="remember" color="primary" />}
                           label="Remember me"
                       />
                       <Button
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
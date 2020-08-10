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
            zip1:undefined,
            zip2:undefined,
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
            <div >
                <Typography component="h1" variant="h5" color="primary" align="center">
                    Register
                </Typography>
                   <form noValidate>
                       <Grid container justify="center">
                        <Grid item>
                           <FormControl >
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
                          </Grid>
                       </Grid>
                       <Grid container direction="row"  >
                           <Grid container direction="column" alignItems="center" xs={6} >
                               <Grid item>
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
                                  InputProps={{
                                        style: {
                                            width:"400px"
                                        }
                                  }}
                               />
                               </Grid>
                               <Grid item >
                               <TextField
                                  variant="outlined"
                                  margin="normal"
                                  required
                                  id="lastName"
                                  type="text"
                                  label="Last Name"
                                  name="lastName"
                                  value={this.state.lastName}
                                  onChange={this.handleChange}
                                  InputProps={{
                                        style: {
                                            width:"400px"
                                        }
                                  }}
                               />
                               </Grid>
                               <Grid item >
                               {this.state.birthDate===undefined
                               ? <TextField
                                   variant="outlined"
                                   margin="normal"
                                   required
                                   id="birthDate"
                                   type="date"
                                   label="Birth Date"
                                   name="birthDate"
                                   value={this.state.birthDate}
                                   onChange={this.handleChange}
                                   InputProps={{
                                      style: {
                                          color: "transparent",
                                          width:"400px"
                                      }
                                   }}
                                 />
                               : <TextField
                                   variant="outlined"
                                   margin="normal"
                                   required
                                   id="birthDate"
                                   type="date"
                                   label="Birth Date"
                                   name="birthDate"
                                   value={this.state.birthDate}
                                   onChange={this.handleChange}
                                   InputProps={{
                                         style: {
                                             width:"400px"
                                         }
                                   }}
                                 />
                               }
                               </Grid>
                               <Grid item >
                               {this.state.phoneError?
                                  <TextField
                                     variant="outlined"
                                     margin="normal"
                                     required
                                     id="phone"
                                     type="number"
                                     label="Phone"
                                     name="phone"
                                     value={this.state.phone}
                                     error={this.state.phoneError}
                                     helperText="Phone number must contain 9 digits"
                                     onChange={this.handleChange}
                                     InputProps={{
                                           style: {
                                               width:"400px"
                                           }
                                     }}
                                  />
                                  :<TextField
                                     variant="outlined"
                                     margin="normal"
                                     required
                                     id="phone"
                                     type="number"
                                     label="Phone"
                                     name="phone"
                                     value={this.state.phone}
                                     error={this.state.phoneError}
                                     onChange={this.handleChange}
                                     InputProps={{
                                           style: {
                                               width:"400px"
                                           }
                                     }}
                                  />
                                  }
                                  </Grid>
                           </Grid>
                           <Grid container direction="column" alignItems="center"  xs={6}>
                               <Grid item >
                                   <TextField
                                      variant="outlined"
                                      margin="normal"
                                      required
                                      id="country"
                                      type="text"
                                      label="Country"
                                      name="country"
                                      value={this.state.country}
                                      onChange={this.handleChange}
                                      InputProps={{
                                        style: {
                                            width:"400px"
                                        }
                                      }}
                                   />
                               </Grid>
                               <Grid item >
                                   <TextField
                                      variant="outlined"
                                      margin="normal"
                                      required
                                      id="street"
                                      type="text"
                                      label="Street"
                                      name="street"
                                      value={this.state.street}
                                      onChange={this.handleChange}
                                      InputProps={{
                                          style: {
                                              width:"400px"
                                          }
                                      }}
                                   />
                               </Grid>
                               <Grid item >
                                   <TextField
                                      variant="outlined"
                                      margin="normal"
                                      required
                                      id="flatNumber"
                                      type="number"
                                      label="Flat Number"
                                      name="flatNumber"
                                      value={this.state.flatNumber}
                                      onChange={this.handleChange}
                                      InputProps={{
                                          style: {
                                              width:"400px"
                                          }
                                      }}
                                   />
                               </Grid>
                               <Grid container direction="row" spacing={1} justify="center" alignItems="center">
                                   <Grid item xs={2}>
                                       <TextField
                                          variant="outlined"
                                          margin="normal"
                                          required
                                          id="zip1"
                                          type="number"
                                          label="ZIP"
                                          name="zip1"
                                          value={this.state.zip1}
                                          onChange={this.handleChange}
                                       />
                                   </Grid>
                                   <Grid item style={{textAlign:"center"}}>
                                    -
                                   </Grid>
                                   <Grid item xs={2}>
                                       <TextField
                                         variant="outlined"
                                         margin="normal"
                                         required
                                         id="zip2"
                                         type="number"
                                         label="ZIP"
                                         name="zip2"
                                         value={this.state.zip2}
                                         onChange={this.handleChange}
                                       />
                                   </Grid>
                                   <Grid item >
                                       <TextField
                                          variant="outlined"
                                          margin="normal"
                                          required
                                          id="city"
                                          type="text"
                                          label="City"
                                          name="city"
                                          value={this.state.city}
                                          onChange={this.handleChange}
                                       />
                                   </Grid>
                               </Grid>
                           </Grid>
                       </Grid>
                       <Grid container direction="column" justify="center" alignItems="center">
                            <Grid item xs={12}>
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
                                     InputProps={{
                                           style: {
                                               width:"400px"
                                           }
                                     }}
                                 />
                            </Grid>
                            <Grid item>
                                 <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    id="reEmail"
                                    label="Repeat Email Address"
                                    type="email"
                                    name="reEmail"
                                    autoComplete={this.state.email}
                                    value={this.state.reEmail}
                                    onChange={this.handleChange}
                                    InputProps={{
                                          style: {
                                              width:"400px"
                                          }
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                 <TextField
                                     variant="outlined"
                                     margin="normal"
                                     required
                                     name="password"
                                     label="Password"
                                     type="password"
                                     id="password"
                                     value={this.state.password}
                                     onChange={this.handleChange}
                                     InputProps={{
                                           style: {
                                               width:"400px"
                                           }
                                     }}
                                 />
                            </Grid>
                            <Grid item>
                                 <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    name="rePassword"
                                    label="Repeat Password"
                                    type="password"
                                    id="rePassword"
                                    value={this.state.rePassword}
                                    onChange={this.handleChange}
                                    InputProps={{
                                          style: {
                                              width:"400px"
                                          }
                                    }}
                                 />
                            </Grid>
                       </Grid>
                       <Grid container direction="column" justify="center" alignItems="center">
                            <Grid item>
                             {this.state.accountType==="partnership"||this.state.accountType==="individualWithEconomy"
                             ? <TextField
                                  variant="outlined"
                                  margin="normal"
                                  required
                                  name="companyName"
                                  label="Name of company"
                                  type="text"
                                  id="companyName"
                                  value={this.state.companyName}
                                  onChange={this.handleChange}
                                  InputProps={{
                                        style: {
                                            width:"400px"
                                        }
                                  }}
                               /> : null}
                            </Grid>
                            <Grid item>
                            {this.state.accountType==="partnership"||this.state.accountType==="individualWithEconomy"
                             ?  <TextField
                                  variant="outlined"
                                  margin="normal"
                                  required
                                  name="nip"
                                  label="NIP"
                                  type="number"
                                  id="nip"
                                  value={this.state.nip}
                                  onChange={this.handleChange}
                                  InputProps={{
                                        style: {
                                            width:"400px"
                                        }
                                  }}
                               /> : null}
                            </Grid>
                            <Grid item>
                            {this.state.accountType==="partnership"||this.state.accountType==="individualWithEconomy"
                             ?  <TextField
                                  variant="outlined"
                                  margin="normal"
                                  required
                                  name="companyNumber"
                                  label="Company phone number"
                                  type="number"
                                  id="companyNumber"
                                  value={this.state.companyNumber}
                                  onChange={this.handleChange}
                                  InputProps={{
                                        style: {
                                            width:"400px"
                                        }
                                  }}
                               /> : null
                             }
                            </Grid>
                       </Grid>
                       <Grid container direction="column" justify="center" alignItems="center">
                             {this.state.accountType==="patron"
                             ? <TextField
                                  variant="outlined"
                                  margin="normal"
                                  required
                                  name="patronId"
                                  label="Patron ID"
                                  type="text"
                                  id="patronId"
                                  value={this.state.patronId}
                                  onChange={this.handleChange}
                                  InputProps={{
                                        style: {
                                            width:"400px"
                                        }
                                  }}
                               />
                             : null
                             }
                       </Grid>
                       <Grid container direction="column" justify="center" alignItems="center">
                             <FormControlLabel
                                 control={<Checkbox value="remember" color="primary" />}
                                 label="Remember me"
                             />
                             <Button
                                 variant="contained"
                                 color="primary"
                             >
                                 Sign up
                             </Button>
                       </Grid>
                         </form>
                     </div>
                      )
                  }
                }

                export default Registration
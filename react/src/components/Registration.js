import React from 'react'
import { Typography, TextField, Button, FormControl, FormControlLabel, Grid, Link, Checkbox, FormLabel,RadioGroup,Radio, FormHelperText,InputLabel, Select } from '@material-ui/core';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';

class Registration extends React.Component {
    constructor() {
        super(),
            this.state = {
                accountType: "newUser",
                login: "",
                firstName: "",
                lastName: "",
                birthDate: undefined,
                country: "",
                street: "",
                flatNumber: undefined,
                zip: undefined,
                city: "",
                phone: undefined,
                phoneError: false,
                email: "",
                reEmail: "",
                password: "",
                rePassword: "",
                companyName: "",
                nip: undefined,
                companyNumber: undefined,
                companyNumberError: false,
                patronId: "",
                remember: false,
            }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, checked } = event.target
        name==="remember"? this.setState({[name]: checked}) : this.setState({[name]: value})
        
    }

    submitForm = (event) => {
        event.preventDefault();

        this.state.phone.toString().length != 9
            ? this.setState(
                { phoneError: true }
            )
            : this.setState(
                { phoneError: false }
            )

        this.state.companyNumber.toString().length != 9
            ? this.setState(
                { companyNumberError: true }
            )
            : this.setState(
                { companyNumberError: false }
            )

        if (!this.state.phoneError && !this.state.companyNumberError)
            console.log('Submited!!')

    }

    render() {
        return (
            <div >
                <Grid container justify="center" >
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h5" color="primary" align="center" style={{paddingBottom:"45px"}}>
                            Sign up
                        </Typography>
                    </Grid>
                    <form noValidate onSubmit={this.submitForm}>
                        <Grid container justify="center" spacing={10}>
                            <Grid item>
                                <FormControl component="fieldset">
                                  <FormLabel component="legend">Account Type</FormLabel>
                                  <RadioGroup  name="accountType" value={this.state.accountType} onChange={this.handleChange}>
                                    <FormControlLabel value="newUser" control={<Radio color="primary"/>} label="New user" labelPlacement="start"/>
                                    <FormControlLabel value="company" control={<Radio color="primary"/>} label="Company" labelPlacement="start"/>
                                    <FormControlLabel value="patron" control={<Radio color="primary"/>} label="Patron" labelPlacement="start"/>
                                  </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item >
                                <TextField
                                    margin="normal"
                                    id="login"
                                    type="text"
                                    label="Login"
                                    name="login"
                                    value={this.state.login}
                                    onChange={this.handleChange}
                                     InputProps={{
                                         style:{
                                             marginTop:"22%",
                                             marginLeft:"5%"
                                         }
                                     }}
                                     InputLabelProps={{
                                        style:{
                                            marginTop:"13%",
                                            marginLeft:"5%"
                                        }
                                     }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid container item direction="column" justify="center"  alignItems="center" xs={6}>
                                <Grid item >
                                    <TextField
                                        margin="normal"
                                        id="firstName"
                                        type="text"
                                        label="First Name"
                                        name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.handleChange}

                                    />
                                </Grid>
                                <Grid item >
                                    <TextField
                                        margin="normal"
                                        id="lastName"
                                        type="text"
                                        label="Last Name"
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.handleChange}

                                    />
                                </Grid>
                                <Grid item >
                                    <TextField
                                       id="birthDay"
                                       fullWidth
                                       label="Birth Date"
                                       type="date"
                                       name="birthDate"
                                       value={this.state.birthDate}
                                       onChange={this.handleChange}
                                       InputLabelProps={{
                                         shrink: true,
                                       }}
                                       InputProps={{
                                         style:{
                                            width:"200px"
                                         }
                                       }}
                                     />
                                </Grid>
                                <Grid item >
                                    {this.state.phoneError ?
                                        <TextField
                                            margin="normal"
                                            id="phone"
                                            type="number"
                                            label="Phone"
                                            name="phone"
                                            value={this.state.phone}
                                            error={this.state.phoneError}
                                            helperText="Phone number must contain 9 digits"
                                            onChange={this.handleChange}
                                        />
                                        : <TextField
                                            margin="normal"
                                            id="phone"
                                            type="number"
                                            label="Phone"
                                            name="phone"
                                            value={this.state.phone}
                                            error={this.state.phoneError}
                                            onChange={this.handleChange}
                                        />
                                    }
                                </Grid>
                            </Grid>
                            <Grid container item direction="column" justify="center"  alignItems="center" xs={6}>
                                <Grid item >
                                    <TextField
                                        margin="normal"
                                        id="country"
                                        type="text"
                                        label="Country"
                                        name="country"
                                        value={this.state.country}
                                        onChange={this.handleChange}
                                        InputProps={{
                                            style:{
                                                marginLeft:"6%"
                                            }
                                        }}
                                        InputLabelProps={{
                                            style:{
                                                marginLeft:"6%"
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item >
                                    <TextField
                                        margin="normal"
                                        id="street"
                                        type="text"
                                        label="Street"
                                        name="street"
                                        value={this.state.street}
                                        onChange={this.handleChange}
                                        InputProps={{
                                            style:{
                                                marginLeft:"6%"
                                            }
                                        }}
                                        InputLabelProps={{
                                            style:{
                                                marginLeft:"6%"
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item >
                                    <TextField
                                        margin="none"
                                        id="flatNumber"
                                        type="number"
                                        label="Flat Number"
                                        name="flatNumber"
                                        value={this.state.flatNumber}
                                        onChange={this.handleChange}
                                        InputProps={{
                                            style:{
                                                marginLeft:"6%"
                                            }
                                        }}
                                        InputLabelProps={{
                                            style:{
                                                marginLeft:"6%"
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid container item justify="center" >
                                    <Grid item xs={6}>
                                        <TextField
                                            margin="normal"
                                            id="zip"
                                            type="number"
                                            label="ZIP Code"
                                            name="zip"
                                            value={this.state.zip}
                                            onChange={this.handleChange}
                                            InputProps={{
                                                style:{
                                                    width:"75px",
                                                    marginLeft:"15%",
                                                }
                                            }}
                                            InputLabelProps={{
                                               style:{
                                                  marginLeft:"15%",
                                                  fontSize:"14px"
                                               }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            margin="normal"
                                            id="city"
                                            type="text"
                                            label="City"
                                            name="city"
                                            value={this.state.city}
                                            onChange={this.handleChange}
                                            InputProps={{
                                                style:{
                                                    width:"95px"
                                                }
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    margin="normal"
                                    id="reEmail"
                                    label="Repeat Email Address"
                                    type="email"
                                    name="reEmail"
                                    autoComplete={this.state.email}
                                    value={this.state.reEmail}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    margin="normal"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    margin="normal"
                                    name="rePassword"
                                    label="Repeat Password"
                                    type="password"
                                    id="rePassword"
                                    value={this.state.rePassword}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Grid item>
                                {this.state.accountType === "company"
                                    ? <TextField
                                        margin="normal"
                                        name="companyName"
                                        label="Name of company"
                                        type="text"
                                        id="companyName"
                                        value={this.state.companyName}
                                        onChange={this.handleChange}
                                    /> : null}
                            </Grid>
                            <Grid item>
                                {this.state.accountType === "company"
                                    ? <TextField
                                        margin="normal"
                                        name="nip"
                                        label="NIP"
                                        type="number"
                                        id="nip"
                                        value={this.state.nip}
                                        onChange={this.handleChange}
                                    /> : null}
                            </Grid>
                            <Grid item>
                                <If condition={this.state.accountType === "company"  && this.state.companyNumberError}>
                                    <Then>
                                        <TextField
                                            margin="normal"
                                            id="companyNumber"
                                            type="number"
                                            label="Company Phone Number"
                                            name="companyNumber"
                                            value={this.state.companyNumber}
                                            error={this.state.companyNumberError}
                                            helperText="Phone number must contain 9 digits"
                                            onChange={this.handleChange}
                                        />
                                    </Then>
                                    <ElseIf condition={this.state.accountType === "company"&& !this.state.companyNumberError}>
                                        <TextField
                                            margin="normal"
                                            id="companyNumber"
                                            type="number"
                                            label="Company Phone Number"
                                            name="companyNumber"
                                            value={this.state.companyNumber}
                                            error={this.state.companyNumberError}
                                            onChange={this.handleChange}
                                        />
                                    </ElseIf>
                                </If>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" justify="center" alignItems="center">
                            {this.state.accountType === "patron"
                                ? <TextField
                                    margin="normal"
                                    name="patronId"
                                    label="Patron ID"
                                    type="text"
                                    id="patronId"
                                    value={this.state.patronId}
                                    onChange={this.handleChange}
                                />
                                : null
                            }
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item>
                                <FormControlLabel
                                    control={<Checkbox name="remember " value={this.state.remember} onChange={this.handleChange} color="primary" />}
                                    label={<span  style={{ color: "#3f51b5" , fontSize:"14px"  }}>Remember me</span>}

                                />
                            </Grid>
                            <Grid item>
                                <Link href="#" style={{  fontSize:"12px"  }}>
                                    I already have an account. Sign in.
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Button variant="contained" color="primary" onClick={this.submitForm}>
                                Sign up
                            </Button>
                        </Grid>
                    </form>
                </Grid>
            </div>
        )
    }
}

export default Registration
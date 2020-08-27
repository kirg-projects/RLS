import React from 'react'
import {  Grid } from '@material-ui/core';

import SignUpTitle from './registration/SignUpTitle'
import RadioButtons from './registration/RadioButtons'
import LoginTextField from './registration/LoginTextField'
import FNameTextField from './registration/FNameTextField'
import LNameTextField from './registration/LNameTextField'
import BirthTextField from './registration/BirthTextField'
import PhoneTextField from './registration/PhoneTextField'
import CountryTextField from './registration/CountryTextField'
import StreetTextField from './registration/StreetTextField'
import FlatTextField from './registration/FlatTextField'
import ZIPTextField from './registration/ZIPTextField'
import CityTextField from './registration/CityTextField'
import EmailTextField from './registration/EmailTextField'
import ReEmailTextField from './registration/ReEmailTextField'
import PasswordTextField from './registration/PasswordTextField'
import RePasswordTextField from './registration/RePasswordTextField'
import CompanyTextField from './registration/CompanyTextField'
import NIPTextField from './registration/NIPTextField'
import CPhoneTextField from './registration/CPhoneTextField'
import PatronTextField from './registration/PatronTextField'
import RememberCheckbox from './registration/RememberCheckbox'
import SignInLink from './registration/SignInLink'
import SubmitButton from './registration/SubmitButton'


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
                        <SignUpTitle/>
                    </Grid>
                    <form noValidate onSubmit={this.submitForm}>
                        <Grid container justify="center" spacing={10}>
                            <Grid item>
                                <RadioButtons
                                    value={this.state.accountType}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item >
                                <LoginTextField
                                    value={this.state.login}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid container item direction="column" justify="center"  alignItems="center" xs={6}>
                                <Grid item >
                                    <FNameTextField
                                        value={this.state.firstName}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item >
                                    <LNameTextField
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item >
                                    <BirthTextField
                                        value={this.state.birthDate}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item >
                                    <PhoneTextField
                                        phoneError={this.state.phoneError}
                                        value={this.state.phone}
                                        error={this.state.phoneError}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container item direction="column" justify="center"  alignItems="center" xs={6}>
                                <Grid item >
                                    <CountryTextField
                                        value={this.state.country}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item >
                                    <StreetTextField
                                        value={this.state.street}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item >
                                    <FlatTextField
                                        value={this.state.flatNumber}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid container item justify="center" >
                                    <Grid item xs={6}>
                                        <ZIPTextField
                                            value={this.state.zip}
                                            onChange={this.handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CityTextField
                                            value={this.state.city}
                                            onChange={this.handleChange}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Grid item xs={12}>
                                <EmailTextField
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <ReEmailTextField
                                    value={this.state.reEmail}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <PasswordTextField
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <RePasswordTextField
                                    value={this.state.rePassword}
                                    onChange={this.handleChange}
                                />

                            </Grid>
                        </Grid>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Grid item>
                                <CompanyTextField
                                    accountType={this.state.accountType}
                                    value={this.state.companyName}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <NIPTextField
                                    accountType={this.state.accountType}
                                    value={this.state.nip}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <CPhoneTextField
                                    accountType={this.state.accountType}
                                    value={this.state.companyNumber}
                                    onChange={this.handleChange}
                                    companyNumberError={this.state.companyNumberError}
                                />
                            </Grid>
                        </Grid>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <PatronTextField
                                accountType={this.state.accountType}
                                value={this.state.patronId}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item>
                                <RememberCheckbox
                                    value={this.state.patronId}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <SignInLink />
                            </Grid>
                        </Grid>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <SubmitButton
                                onClick={this.submitForm}
                            />
                        </Grid>
                    </form>
                </Grid>
            </div>
        )
    }
}

export default Registration
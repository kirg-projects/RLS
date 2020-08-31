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
                login: "", loginError:false,
                firstName: "", firstNameError:false,
                lastName: "", lastNameError:false,
                birthDate: "", birthDateError:false,
                country: "", countryError:false,
                street: "", streetError:false,
                flatNumber: "", flatNumberError:false,
                zip: "", zipError:false,
                city: "", cityError:false,
                phone: "", phoneError:false,
                email: "", emailError:false,
                reEmail: "", reEmailError:false,
                password: "", passwordError:false,
                rePassword: "", rePasswordError:false,
                companyName: "", companyNameError:false,
                nip: "", nipError:false,
                companyNumber: "", companyNumberError: false,
                patronId: "", patronIdError:false,
                remember:false,
                submitError:true,
                submitCounter:0,
            }

    }

    handleChange=(event)=> {
        const { name, value, checked } = event.target
        name==="remember"? this.setState({[name]: checked}) : this.setState({[name]: value})

    }

    submitForm = (event) => {
        event.preventDefault();

        this.state.login.length <= 1
        ? this.setState(
            {loginError: true}
        )
        : this.setState(
            {loginError: false}
        )

        this.state.firstName.length <= 1
        ? this.setState(
            {firstNameError: true}
        )
        : this.setState(
            {firstNameError: false}
        )

        this.state.lastName.length <= 1
        ? this.setState(
            {lastNameError: true}
        )
        : this.setState(
            {lastNameError: false}
        )

        if(/[0-9]{4}\-[0-9]{2}\-[0-9]{2}/.test(this.state.birthDate.toString())){
            this.setState(
                {birthDateError: false}
            )
        }else{
            this.setState(
                {birthDateError: true}
            )
        }

        if(this.state.phone.toString().length <= 5 || this.state.phone.toString().length >= 16){
            this.setState(
                {phoneError: true}
            )
        }else{
            this.setState(
                {phoneError: false}
            )
        }

        this.state.country.length <= 1
        ? this.setState(
            {countryError: true}
        )
        : this.setState(
            {countryError: false}
        )

        this.state.street.length <= 1
        ? this.setState(
            {streetError: true}
        )
        : this.setState(
            {streetError: false}
        )

        this.state.flatNumber.toString().length <= 0
        ? this.setState(
            {flatNumberError: true}
        )
        : this.setState(
            {flatNumberError: false}
        )

        this.state.city.length <= 1
        ? this.setState(
            {cityError: true}
        )
        : this.setState(
            {cityError: false}
        )

        this.state.zip.toString().length <= 3
        ? this.setState(
            {zipError: true}
        )
        : this.setState(
            {zipError: false}
        )
        if( !this.state.loginError &&
            !this.state.firstNameError &&
            !this.state.lastNameError &&
            !this.state.birthDateError &&
            !this.state.phoneError &&
            !this.state.countryError &&
            !this.state.streetError &&
            !this.state.flatNumberError &&
            !this.state.zipError &&
            !this.state.CityError &&
             this.state.submitCounter == 1){

            this.setState(
                {submitError: false}
            )
        }else{
            this.setState(
                {submitError: true,
                 submitCounter: 1}
            )
        }
        if (!this.state.submitError ){
            console.log('Submited!!')
        }

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
                                    error={this.state.loginError}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid container item direction="column" justify="center"  alignItems="center" xs={6}>
                                <Grid item >
                                    <FNameTextField
                                        value={this.state.firstName}
                                        error={this.state.firstNameError}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item >
                                    <LNameTextField
                                        value={this.state.lastName}
                                        error={this.state.lastNameError}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item >
                                    <BirthTextField
                                        value={this.state.birthDate}
                                        error={this.state.birthDateError}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item >
                                    <PhoneTextField
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
                                        error={this.state.countryError}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item >
                                    <StreetTextField
                                        value={this.state.street}
                                        error={this.state.streetError}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item >
                                    <FlatTextField
                                        value={this.state.flatNumber}
                                        error={this.state.flatNumberError}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid container item justify="center" >
                                    <Grid item xs={6}>
                                        <ZIPTextField
                                            value={this.state.zip}
                                            error={this.state.zipError}
                                            onChange={this.handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CityTextField
                                            value={this.state.city}
                                            error={this.state.cityError}
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
                                    error={this.state.emailError}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <ReEmailTextField
                                    value={this.state.reEmail}
                                    error={this.state.reEmailError}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <PasswordTextField
                                    value={this.state.password}
                                    error={this.state. passwordError}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <RePasswordTextField
                                    value={this.state.rePassword}
                                    error={this.state.rePasswordError}
                                    onChange={this.handleChange}
                                />

                            </Grid>
                        </Grid>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Grid item>
                                <CompanyTextField
                                    accountType={this.state.accountType}
                                    value={this.state.companyName}
                                    error={this.state.companyNameError}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <NIPTextField
                                    accountType={this.state.accountType}
                                    value={this.state.nip}
                                    error={this.state.nipError}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <CPhoneTextField
                                    accountType={this.state.accountType}
                                    value={this.state.companyNumber}
                                    onChange={this.handleChange}
                                    error={this.state.companyNumberError}
                                />
                            </Grid>
                        </Grid>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <PatronTextField
                                accountType={this.state.accountType}
                                value={this.state.patronId}
                                error={this.state.patronIdError}
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
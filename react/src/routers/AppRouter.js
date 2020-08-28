import React from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import About from '../components/About'
import Cart from '../components/Cart'
import ShopPage from '../components/ShopPage'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import WishList from '../components/WishList'
import { Info, FavoriteBorder, ShoppingCart, Shop, PersonAdd, PowerSettingsNew } from '@material-ui/icons'
import { Typography } from '@material-ui/core'
import Logo from './logo.jpg'

const useStyles = makeStyles({
    link: {
        color: '#994984',
        textDecoration: 'none',
    },
    wrapper: {
        overflow: 'hidden',
    },
    navPillLeft: {
        float: 'left',
        margin: 15,
        position: 'relative',
        zIndex: 1,
    },
    navPillRight: {
        float: 'right',
        margin: 15,
        position: 'relative',
        zIndex: 1,
    },
    aboutPill: {
        textAlign: 'center',
        width: '100%',
        position: 'absolute',
        top: 15,
    },
    link1: {
        display: 'inline-block',
    },
    icon: {
        textAlign: 'center'
    },
    cartCounter: {
        position: 'absolute',
        right: 3,
        top: -4,
        fontSize: 11,
        fontFamily: 'sans',
    }
});

const AppRoutes = () => {
    const classes = useStyles();

    return (
        <BrowserRouter>
            <div className={classes.wrapper}>
                <div className={classes.navPillLeft}>
                    <Link to="/wishlist" className={classes.link}>
                        <div className={classes.icon}>
                            <FavoriteBorder fontSize="large" />
                        </div>
                        <div className={classes.label}>
                            <Typography>
                                Wish list
                            </Typography>
                        </div>
                    </Link>
                </div>

                <div className={classes.navPillLeft}>
                    <Link to="/cart" className={classes.link}>
                        <div className={classes.icon}>
                            <ShoppingCart fontSize="large" />
                            <svg width="14" height="14" className={classes.cartCounter}>
                                <circle cx="7" cy="7" r="6" stroke="#994984" strokeWidth="1" fill="white" />
                                <text x="4" y="11" fill="#994984">2</text>
                            </svg>
                        </div>
                        <div className={classes.label}>
                            <Typography>
                                Cart
                            </Typography>
                        </div>
                    </Link>
                </div>

                <div className={classes.navPillLeft}>
                    <Link to="/" className={classes.link}>
                        <div className={classes.icon}>
                            <Shop fontSize="large" />
                        </div>
                        <div className={classes.label}>
                            <Typography>
                                Shop
                            </Typography>
                        </div>
                    </Link>
                </div>

                <div className={classes.navPillRight}>
                    <Link to="/signup" className={classes.link}>
                        <div className={classes.icon}>
                            <PersonAdd fontSize="large" />
                        </div>
                        <div className={classes.label}>
                            <Typography>
                                Sign up
                            </Typography>
                        </div>
                    </Link>
                </div>

                <div className={classes.navPillRight}>
                    <Link to="/signin" className={classes.link}>
                        <div className={classes.icon}>
                            <PowerSettingsNew fontSize="large" />
                        </div>
                        <div className={classes.label}>
                            <Typography>
                                Sign in
                            </Typography>
                        </div>
                    </Link>
                </div>
            </div>

            <div className={classes.aboutPill}>
                <Link to="/about" className={classes.link1}>
                    <img src={Logo} />
                </Link>
            </div>

            <div>
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/wishlist">
                        <WishList />
                    </Route>

                    <Route path="/cart">
                        <Cart />
                    </Route>

                    <Route path="/">
                        <ShopPage />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/signup">
                        <SignUp />
                    </Route>

                    <Route path="/signin">
                        <SignIn />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRoutes
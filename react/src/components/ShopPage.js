import React from 'react'
import { Search, Star, StarBorder, AddShoppingCart, FavoriteBorder } from '@material-ui/icons'
import { fade, makeStyles } from '@material-ui/core/styles';
import { InputBase, Paper, IconButton, Typography } from '@material-ui/core';
import JavaLogo from './Java-logo.png';

const useStyles = makeStyles({
    search: {
        borderRadius: 4,
        backgroundColor: '#dcdcdc',
        width: '500px',
        margin: 'auto',
        '&:hover': {
            backgroundColor: '#eeeeee'
        }
    },
    searchIcon: {
        padding: 3,
        verticalAlign: 'middle',
        float: 'left',
    },
    input: {
        fontFamily: 'sans',
        display: 'flex',
    },
    offer: {
        width: 700,
        margin: 'auto',
        marginTop: 30,
        display: 'flex',
    },
    javaLogo: {
        height: 100,
        margin: 10,
    },
    top: {
        overflow: 'hidden',
    },
    title: {
        float: 'left',
    },
    rating: {
        float: 'right',
        color: 'gold',
    },
    middle: {
        lineHeight: '1.0',
    },
    iconButton: {
        color: '#994984',
    },
    price: {
        float: 'right',
        fontWeight: 'bold',
        position: 'relative',
        top: 12
    },
});

function handleSearch(event) {
    if(event.key === 'Enter'){
        console.log('Send search request...')
        // send with GET method
        // update content
    }
}

const ShopPage = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.search}>
                <Search className={classes.searchIcon} />
                <InputBase
                    placeholder="Search…"
                    className={classes.input}
                    onKeyPress={handleSearch}
                />
            </div>
            <div>
                <Paper className={classes.offer} elevation={3}>
                    <img src={JavaLogo} className={classes.javaLogo} />
                    <div style={{margin: 10, marginLeft: 0}}>
                        <div className={classes.top}>
                            <div className={classes.title}>
                                <Typography variant="h6">
                                    Kurs Java
                                </Typography>
                            </div>
                            <div className={classes.rating}>
                                <Star /><Star /><Star /><Star /><StarBorder />
                            </div>
                        </div>

                        <div className={classes.middle}>
                            <Typography variant="body2">
                                To jest opis.To jest opis. To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.
                            </Typography>
                        </div>

                        <div className={classes.bottom}>
                            <IconButton className={classes.iconButton} aria-label="add to shopping cart">
                                <AddShoppingCart />
                            </IconButton>
                            <IconButton className={classes.iconButton} aria-label="add to wishlist">
                                <FavoriteBorder />
                            </IconButton>
                            <Typography className={classes.price} variant="h6">
                                22 zł
                            </Typography>
                        </div>
                    </div>
                </Paper>
            </div>
        </div>
    );
}

export default ShopPage
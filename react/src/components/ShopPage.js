import React from 'react'
import axios from 'axios';
import { Search, Star, StarBorder, AddShoppingCart, FavoriteBorder } from '@material-ui/icons'
import { InputBase, Paper, IconButton, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

function toStars(n) {
    let result = [];
    let i = 0;
    for(; i<n; i++) {
        result.push(<Star key={i} />);
    }

    for(; i<5; i++) {
        result.push(<StarBorder key={i} />);
    }
    return result;
}

const styles = theme => ({
    search: {
        borderRadius: 4,
        backgroundColor: '#dcdcdc',
        width: 500,
        margin: 'auto',
        "&:hover": {
            backgroundColor: '#eeeeee',
        },
    },
    searchIcon: {
        padding: 3,
        verticalAlign: 'middle',
        float: 'left'
    },
    input: {
        fontFamily: 'sans',
        display: 'flex'
    },
    offer: {
        width: 700,
        margin: 'auto',
        marginTop: 30,
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        height: 100,
        margin: 10
    },
    top: {
        overflow: 'hidden'
    },
    title: {
        float: 'left',
        fontWeight: 'bold'
    },
    titleText: {
        fontWeight: 'bold'
    },
    rating: {
        float: 'right',
        color: 'gold'
    },
    middle: {
        lineHeight: '1.0',
    },
    iconButton: {
        color: '#994984'
    },
    price: {
        float: 'right',
        fontWeight: 'bold',
        position: 'relative',
        top: 12,
        right: 6
    }
});

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            courses: []
        };
        axios.get(
            'http://127.0.0.1:3000/courses.json',
        )
        .then(response => {
            this.setState({
                courses: response.data.items
            });

            let imgPaths = response.data.items.map(item => {
                return item.imgPath;
            })

            let coursesCopy = this.state.courses.slice();
            for(let i = 0; i<imgPaths.length; i++) {
                axios.get(imgPaths[i], { responseType: 'arraybuffer' })
                    .then(imgRes => {
                        const base64 = btoa(
                            new Uint8Array(imgRes.data).reduce(
                                (data, byte) => data + String.fromCharCode(byte),
                                '',
                            )
                        );
                        coursesCopy[i].img = "data:;base64," + base64;
                        this.setState({ courses: coursesCopy });
                    }
                );
            }
            for(let i = 0; i<response.data.items.length; i++) {
                coursesCopy[i].ptr = React.createRef();
            }
            this.setState({ courses: coursesCopy });
        });
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event) {
        if(event.key === 'Enter'){
            if(event.target.value == '') {
                for (let i = 0; i<this.state.courses.length; i++) {
                    this.state.courses[i].ptr.current.style.display = 'block';
                }
            }

            let coursesLen = this.state.courses.length;
            let coursesToHide = Array(coursesLen).fill(false);

            let titles = this.state.courses.map(course => {
                return course.title;
            });

            let descriptions = this.state.courses.map(course => {
                return course.description;
            });

            for (let i = 0; i<coursesLen; i++) {
                if ( !(new RegExp(event.target.value, "i").test(titles[i])) &&
                     !(new RegExp(event.target.value, "i").test(descriptions[i])) ) {
                    coursesToHide[i] = true;
                }
            }
            for(let i = 0; i<coursesToHide.length; i++) {
                console.log(coursesToHide[i]);
                if (coursesToHide[i]) {
                    this.state.courses[i].ptr.current.style.display = 'none';
                }
            }
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className={classes.search}>
                    <Search className={classes.searchIcon} />
                    <InputBase
                        placeholder="Search…"
                        className={classes.input}
                        onKeyPress={this.handleSearch}
                    />
                </div>
                { this.state.courses.map((elem, key) => (
                    <div key={key} ref={elem.ptr}>
                        <Paper className={classes.offer} elevation={3}>
                            <img src={elem.img} className={classes.logo} />
                            <div style={{margin: 10, marginLeft: 0, width: '100%'}}>
                                <div className={classes.top}>
                                    <div className={classes.title}>
                                        <Typography className={classes.titleText} variant="h6">
                                            {elem.title}
                                        </Typography>
                                    </div>
                                    <div className={classes.rating}>
                                        {toStars(elem.rating)}
                                    </div>
                                </div>

                                <div className={classes.middle}>
                                    <Typography variant="body2">
                                        {elem.description}
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
                                        {elem.price}
                                    </Typography>
                                </div>
                            </div>
                        </Paper>
                    </div>
                )) }
            </div>
        );
    }
}

ShopPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShopPage);
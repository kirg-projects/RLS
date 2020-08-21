import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StarIcon from '@material-ui/icons/Star';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  search: {
    '& > *': {
      margin: theme.spacing(1),
      width: '70ch',
    },
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function LandingPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <React.Fragment>
      <CssBaseline />
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Categories" icon={<CategoryIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Login" icon={<LockOpenIcon />} />
      </BottomNavigation>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="Primary" gutterBottom>
            <BusinessCenterIcon className={classes.icon} style={{ fontSize: 60 }} />
            Best business courses in one place
            </Typography>
            <form className={classes.search} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="What do you want to learn?" variant="outlined" />
            </form>
          </Container>
        </div>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h2" variant="h4" align="center" color="Primary" gutterBottom>
            <StarIcon className={classes.icon} style={{ fontSize: 40 }} />
            Most popular:
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://lh3.googleusercontent.com/proxy/WCgS2dJgCC9rqLmc6F3cyAllyWUeiZjIEQ8E34HZuFbRbBCTxlf-CY7fkCgBHbLVaofAR-BalnYAe0wSgZwzWK773QRYn-P8xkyyb-ePEObQml0VUeHrS7KJyTnFLDtdvVYAxH3Avcbbnu_FEJVaOeQ"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Java advanced techniques
                    </Typography>
                    <Typography>
                    Learn Java In This Course And Become a Computer Programmer. Obtain valuable Core Java Skills And Java Certification.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <OpenInBrowserIcon className={classes.icon} />
                      Open
                    </Button>
                    <Button size="small" color="primary">
                      <ShoppingCartIcon className={classes.icon} />
                      Add to cart
                    </Button>
                    <Button size="small" color="primary">
                      <StarIcon className={classes.icon} />
                      Rating
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
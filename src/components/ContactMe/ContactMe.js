import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import Headshot from '../images/headshot.jpg';
import CodePic from '../images/code.jpg';
import { fade } from '@material-ui/core/styles/colorManipulator';




const styles = theme => ({
  card: {
    width: 400,
    margin: theme.spacing.unit,
    marginLeft: 300,
    backgroundColor: fade(theme.palette.common.white, 0.05),


  },
  float: {
    width: 400,
    float: 'right',
    marginRight: 300,
    backgroundColor: fade(theme.palette.common.white, 0.9),
   
  },
  media: {
    height: 250,
  },
  link: {
    color: theme.palette.primary.dark,
  },
    header: {
    color: theme.palette.primary.dark,
    marginLeft: 100,
    marginBottom: 100,
    paddingTop: 100,
  },
  text: {
    textDecoration: 'none',
  },
  content: {
    backgroundColor: fade(theme.palette.primary.dark, 0.05),
  }
});

class ContactMe extends Component {
    render() {
        const classes = this.props.classes; 

        return (
          <>
          <Typography gutterBottom variant="h2" component="h2" className={classes.header}> 
          get in touch!
          </Typography>
            
            <Card className={classes.float}>
              <CardActionArea className={classes.content}>
                <Link
                  href="https://www.linkedin.com/in/kristenstoeckeler/"
                  className={classes.link}
                  target='_blank'
                  style={{ textDecoration: 'none' }}
                >
                <CardMedia
                  className={classes.media}
                  image={Headshot}
                  title="Headshot"
                />
                  <CardContent >
                    <Typography gutterBottom variant="h6" className={classes.text}>

                      connect with me on linkedIn.

                  </Typography>
                  </CardContent>
                </Link>
                
              </CardActionArea>
            </Card>

              <Card className={classes.card}>
                <CardActionArea>
                <Link
                  href="https://github.com/kristenstoeckeler/"
                  className={classes.link}
                  target='_blank'
                  style={{ textDecoration: 'none' }}
                >
                  <CardMedia
                    className={classes.media}
                    image={CodePic}
                    title="Code Pic"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2" className={classes.text}>
                      
                        follow me on github.
                      
                    </Typography>
                  </CardContent>
                </Link>
                </CardActionArea>
              </Card>

          </>
        );
    }
}

ContactMe.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ContactMe);


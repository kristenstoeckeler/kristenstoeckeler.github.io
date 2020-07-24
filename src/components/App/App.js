import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";

import BackgroundImage from '../images/background.jpg'; 

import Resume from '../Resume/Resume';
import ProjectView from '../ProjectView/ProjectView';
import ContactMe from '../ContactMe/ContactMe';
import Home from '../Home/Home';
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';



const styles = theme => ({
  header: {
    color: theme.palette.primary.dark,
    float: 'right',
    marginBottom: 50,
    marginRight: 20,
    marginTop: 20,
  },
  root: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: 'repeat',
    height: 1080,
    width: 'auto',
  }
});


class App extends Component{
  render(){
    const classes = this.props.classes
    return (
      <div className={classes.root}>
      <Router>
        <div className="App">
          <header className="App-header">
              <Typography gutterBottom variant="h4" className={classes.header}>
                <Link to='/' style={{ textDecoration: 'none', color: '#212121' }}>
                  kristen stoeckeler
                </Link>
              </Typography>
          </header>

          <div>
            <Route
              exact path="/"
              component={Home}
            />
          </div>
          <div>
            <Route
              path="/resume"
              component={Resume}
            />
          </div>
          <div>
            <Route
              path="/projects"
              component={ProjectView}
            />
          </div>
          <div>
            <Route
              path="/contact"
              component={ContactMe}
            />
          </div>
        </div>
        </Router>
      </div>

    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

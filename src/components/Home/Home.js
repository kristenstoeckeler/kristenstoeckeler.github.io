import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';


const styles = theme => ({
    header: {
        color: theme.palette.primary.dark,
            marginLeft: 100,
            marginBottom: 10,
            paddingTop: 100,
    },
    body: {
        marginTop: 20,
        marginLeft: 100,
        marginRight: 600,
        display: 'block',
    },
    link: {
        fontSize: 30,
        marginLeft: 100,
        marginTop: 50,
        fontWeight: 'bold',
        color: theme.palette.primary.dark,
        textDecoration: 'none'
    }
});

class Home extends Component {
    render() {
        const classes = this.props.classes; 

        return (
            <>
            <Typography gutterBottom variant="h2" component="h2" className={classes.header}>
                        hi! i'm KRISTEN.
            </Typography>
            <Typography variant="p" className={classes.body}>
                    I'm a full-stack software developer with a background in marketing, communications, 
                    audiovisual production and the arts. As a developer, I live for finding creative solutions to 
                    maximizeteam eficiencies, product impact and client engagement. I’m excited to join a team that’s 
                    developing top-notch software to address the world’s needs. I'm also passionate about environmental 
                    conservation, experiencing the great outdoors, international travel, performance photography and documentary 
                    filmmaking.
            </Typography>
            <div className={classes.link}>
                <Typography gutterBottom variant="h4" >
                        <Link to='/projects' style={{ textDecoration: 'none', color: '#212121'  }}>
                            projects
                        </Link>
                </Typography>
                <Typography gutterBottom variant="h4" >
                        <Link to='/contact' style={{ textDecoration: 'none', color: '#212121' }}>
                            get in touch
                        </Link>
                </Typography>
            </div>
            </>
        );
    }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
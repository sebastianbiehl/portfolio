import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Skill from "../../components/Skill";

import ProfilePicture from '../../assets/profile-picture.jpg';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottom: [`2px dotted ${theme.palette.primary.main}`],
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    color: "white",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    textAlign: "center",
  },
  skillsContainer: {
    width: "50%",
  },
  picture: {
    borderRadius: 500,
    width: 250,
    height: 250,
},
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container
      id="about"
      className={classes.root}
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <Grid container spacing={5} justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h2" className={classes.title}>
            About
          </Typography>
        </Grid>
        <Grid xs={6} item>
            <Grid container justify="center">
            <img src={ProfilePicture} alt="Profile Picture" className={classes.picture} />
            </Grid>
       
        </Grid>
        <Grid xs={6} item>
          <Skill value="90" label="HTML" />
          <Skill value="80" label="CSS" />
          <Skill value="80" label="JavaScript" />
          <Skill value="80" label="React" />
          <Skill value="60" label="Node.js" />
        </Grid>
        
      </Grid>
    </Container>
  );
};

export default About;

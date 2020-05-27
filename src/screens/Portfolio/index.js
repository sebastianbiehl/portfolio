import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Brain from "../../assets/brain.png";
import BurgerBuilder from "../../assets/burgerbuilder.png";
import StorADA from "../../assets/storada.png";
import Bloguen from "../../assets/bloguen.png";
import Mizuxe from "../../assets/mizuxe.png";
import Kickstarter from "../../assets/kickstarter.png";

import Card from "../../components/Card";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "auto",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'theme.palette.secondary.light',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(5),
    textAlign: 'center',
    marginBottom: theme.spacing(5),
  },
  text: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  picture: {
    borderRadius: 500,
    width: 250,
    height: 250,
    marginRight: theme.spacing(5),
  },
  button: {
    marginTop: theme.spacing(3),
    fontSize: "1.2rem",
    width: 410,
  },
  cardBox: {
    marginBottom: theme.spacing(5),
  },
}));

const projects = [
  {
    title: "Burger Builder",
    description: "Create your own Burger and order it in my React Dummy Store!",
    image: BurgerBuilder,
    link: "https://sebastianbiehl.github.io/",
  },
  {
    title: "StorADA",
    description: "A Dummy Frontend for a Cryptocurrency Wallet.",
    image: StorADA,
    link: "https://sebastianbiehl.github.io/storADA/",
  },
  {
    title: "Magical Brain",
    description:
      "Upload Images and the App will detect faces within it. Built in React and Node.js.",
    image: Brain,
    link: "https://magical-brain.herokuapp.com/",
  },
  {
    title: "Bloguen",
    description: "A Web App to create Blog Posts and view them in a Dashboard.",
    image: Bloguen,
    link: "https://sebastianbiehl.github.io/bloguen/",
  },
  {
    title: "Mizuxe",
    description: "A Dummy Book Product Page in a Single Page App.",
    image: Mizuxe,
    link: "https://sebastianbiehl.github.io/mizuxe/",
  },
  {
    title: "CrowdChain",
    description:
      "A decentralized Kickstarter built with Solidty, Web3 and React.",
    image: Kickstarter,
    link: "https://github.com/sebastianbiehl/crowdchain",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <div
      id="portfolio"
      className={classes.root}
    >
    <Container data-aos="fade-right"
      data-aos-delay="100"
      data-aos-duration="1000">
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h2" className={classes.title}>
            Projects
          </Typography>
        </Grid>
          {projects.map((project) => (
            <Grid item xs={4} className={classes.cardBox}>
              <Card
                className={classes.card}
                title={project.title}
                description={project.description}
                img={project.image}
                link={project.link}
              />
            </Grid>
          ))}
        </Grid>
        </Container>
        </div>

  );
};

export default Portfolio;

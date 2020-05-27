import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { FormControl } from "@material-ui/core";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white',
    color: 'black',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    textAlign: "center",
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
  textField: {
    color: "white",
    bckgroundColor: theme.palette.secondary.light,
    width: "100%",
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
  textfieldContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div id="contact" className={classes.root}>
      <Container
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <Grid container spacing={5} justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h2" className={classes.title}>
              Contact
            </Typography>
          </Grid>
          <Grid xs={6} item direction="column">
            <FormControl fullWidth>
              <TextField
                label="Name"
                variant="filled"
                className={classes.textField}
              />
              <TextField
                label="Email"
                variant="filled"
                className={classes.textField}
              />
              <TextField
                label="Message"
                variant="filled"
                multiline
                rows={10}
                className={classes.textField}
              />

              <Button variant="contained" color="primary">
                Submit
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "8em",
    marginBottom: "2em",
    paddingLeft: "2em",
    paddingRight: "2em",
    height: "calc(100vh - 10em)",
    [theme.breakpoints.down("md")]: {
      marginTop: "5em",
      paddingLeft: "1em",
      paddingRight: "1em",
      marginBottom: 0,
      height: "calc(100vh - 5em)"
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  mainPaper: {
    backgroundColor: theme.palette.common.containerColor,
    borderRadius: 15,
    boxShadow: "none",
    padding: "3em",
    width: "100vw",
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0
    }
  },
  contentGrid: {
    height: "calc(100vh - 16em)"
  },
  heroTextContainer: {
    minWidth: "25.5em",
    marginLeft: "4em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0
    }
  },
  heroImage: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em"
    }
  },
  heroText: {
    fontFamily: "Montserrat",
    fontWeight: 200,
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: "4rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem"
    }
  },
  optionHeader: {
    color: "white"
  },
  buttonContainer: {
    marginTop: "0"
  },
  quizButton: {
    borderRadius: 50,
    backgroundColor: theme.palette.common.lightYellow,
    fontSize: "1.5rem",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    },
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginBottom: 30,
      fontSize: "1rem",
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  cheatSheetButton: {
    borderRadius: 50,
    borderColor: theme.palette.common.lightYellow,
    color: theme.palette.common.lightYellow,
    fontSize: "1.5rem",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  checkbox: {
    color: "white"
  },
  startQuizButton: {
    borderRadius: 50,
    backgroundColor: theme.palette.common.lightYellow,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    width: "100%",
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }
  }
}));

export default function Homepage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [character, setCharacter] = useState("hiragana");
  const [checkbox, setCheckbox] = useState({
    single: true,
    combo: true,
    dakuten: true
  });
  const [quizUrl, setQuizUrl] = useState("");

  const handleCheckbox = (event) => {
    setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
  };

  const handleSelect = (event) => {
    setCharacter(event.target.value);
  };

  const generateQuizUrl = () => {
    let url;
    switch (character) {
      case "hiragana":
        url = "/quiz?hiragana=true&";
        break;
      case "katakana":
        url = "/quiz?katakana=true&";
        break;
      case "all":
        url = "/quiz?all=true&";
        break;
      default:
        break;
    }

    let checkboxStrings = Object.keys(checkbox).map(key => key + '=' + checkbox[key]).join('&');
    url = `${url}${checkboxStrings}`;
    
    setQuizUrl(url);
  };

  useEffect(() => {
    generateQuizUrl();
  }, [character, checkbox]);

  useEffect(() => {
    setChecked(true);
  }, [checked]);

  return (
    <Grid container className={classes.mainContainer}>
      <Paper className={classes.mainPaper}>
        <Fade in={checked}>
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            className={classes.contentGrid}
          >
            <Grid item md={5}>
              <Typography
                variant="h1"
                align="center"
                className={classes.heroText}
              >
                Learn Hiragana and Katakana in a fun way
              </Typography>
            </Grid>
            <Grid item md={7}>
              <Grid
                container
                justifyContent="center"
                className={classes.buttonContainer}
                alignItems="center"
                direction="column"
              >
                <Grid item>
                  <Button
                    className={classes.quizButton}
                    variant="contained"
                    component={motion.div}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setOpen(true)}
                  >
                    Take Quiz
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: "2em" }}>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className={classes.cheatSheetButton}
                      variant="outlined"
                      component={Link}
                      to="/cheatsheet"
                      onClick={() => props.setValue(1)}
                    >
                      Cheatsheet
                    </Button>
                  </motion.div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Fade>
      </Paper>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="xs"
        PaperProps={{
          style: {
            background: theme.palette.common.elementColor,
          },
        }}
      >
        <DialogTitle disableTypography className={classes.optionHeader}>
          Options
        </DialogTitle>
        <DialogContent>
          <Grid container direction="column">
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                select
                style={{ width: "100%" }}
                variant="outlined"
                label={character === "" ? "Characters" : ""}
                value={character}
                onChange={handleSelect}
                InputLabelProps={{ shrink: false }}
              >
                <MenuItem value="hiragana">Hiragana</MenuItem>
                <MenuItem value="katakana">Katakana</MenuItem>
                <MenuItem value="all">Both</MenuItem>
              </TextField>
            </Grid>
            <Grid
              item
              style={{ marginBottom: "1em" }}
              container
              direction="column"
            >
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="single"
                      color="secondary"
                      checked={checkbox.single}
                      onChange={handleCheckbox}
                    />
                  }
                  label="Single characters"
                  className={classes.checkbox}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="combo"
                      color="secondary"
                      checked={checkbox.combo}
                      onChange={handleCheckbox}
                    />
                  }
                  label="Combo characters"
                  className={classes.checkbox}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="dakuten"
                      color="secondary"
                      checked={checkbox.dakuten}
                      onChange={handleCheckbox}
                    />
                  }
                  label="Has dakuten"
                  className={classes.checkbox}
                />
              </Grid>
            </Grid>
            <Grid item style={{ marginBottom: "1em" }}>
              <Button
                disabled={
                  !checkbox.single && !checkbox.combo && !checkbox.dakuten
                }
                variant="contained"
                className={classes.startQuizButton}
                component={Link}
                to={quizUrl}
              >
                Start Quiz
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

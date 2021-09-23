import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Howl } from 'howler';
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography  from "@material-ui/core/Typography";
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
    padding: "1.5em",
    width: "100vw",
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0
    }
  },
  secondaryPaper: {
    backgroundColor: theme.palette.common.elementColor,
    marginTop: "2em",
    borderRadius: 15,
    boxShadow: "none",
    padding: "3em",
    [theme.breakpoints.down("md")]: {
      padding: "2em",
    },
    [theme.breakpoints.down("md")]: {
      padding: "1.5em",
      marginTop: "0.5em",
    },
  },
  contentGrid: {
    height: "calc(100vh - 16em)"
  },
  question: {
    color: theme.palette.common.lightYellow,
    fontFamily: "Montserrat",
    fontSize: "2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.45rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem"
    },
  },
  japaneseChar: {
    fontFamily: "Kaisei Tokumin",
    fontSize: "12rem",
    color: theme.palette.common.lightYellow,
    [theme.breakpoints.down("md")]: {
      fontSize: "10rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "6rem"
    },
  },
  optionButton: {
    borderRadius: 50,
    fontSize: "3rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem"
    }
  },
  retryButton: {
    borderRadius: 50,
    backgroundColor: theme.palette.common.lightYellow,
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    },
  },
  goToHome: {
    borderRadius: 50,
    borderColor: theme.palette.common.lightYellow,
    color: theme.palette.common.lightYellow,
  },
  optionHeader: {
    color: "white"
  }
}));

function CircularProgressWithLabel(props) {
  const value = props.value / 10;
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
        >{`${value}`}</Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

let correctId = "";
let wrongId = "";

export default function Quiz(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [question, setQuestion] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [clickable, setClickable] = useState(true);
  const [score, setScore] = useState(0);
  const [open, setOpen] = useState(false);

  const getQuiz = () => {
    axios
      .get(`api/getQuestions${window.location.search}`)
      .then((res) => {
        setQuestion(res.data);
        setInitialLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setInitialLoading(false);
      });
  };

  const checkAnswer = (e, option) => {
    if (clickable) {
      const correctAnswer = question[currentQuestion - 1]["options"].filter(
        function (option) {
          return option.isCorrect;
        }
      );

      if (option.isCorrect) {
        setScore(score + 10);
        correctId = correctAnswer[0].answer;
        const correctElement = document.getElementById(correctId);
        correctElement.style.boxShadow = "inset 0 0 40px #45BA49";
      } else {
        correctId = correctAnswer[0].answer;
        const correctElement = document.getElementById(correctId);
        correctElement.style.boxShadow = "inset 0 0 40px #45BA49";
        wrongId = option.answer;
        const clickedElement = document.getElementById(wrongId);
        clickedElement.style.boxShadow = "inset 0 0 40px #FB0423";
      }
    
      if (currentQuestion === 10) {
        setClickable(false);
        const sound = new Howl({
          src: `audio/${correctAnswer[0].answer}.mp3`,
          rate: 0.75,
          html5: true,
          onend: function () {
            setTimeout(() => {
              setOpen(true);
            }, 1000);
          },
        });

        sound.play();
      } else {
        setClickable(false);
        const sound = new Howl({
          src: `audio/${correctAnswer[0].answer}.mp3`,
          rate: 0.75,
          html5: true,
          onend: function () {
            setTimeout(() => {
              const correctElement = document.getElementById(correctId);
              correctElement.style.boxShadow = "";
              if (wrongId !== "") {
                const wrongElement = document.getElementById(wrongId);
                if (wrongElement) {
                  wrongElement.style.boxShadow = "";
                }
              }
              setCurrentQuestion(currentQuestion + 1);
            }, 1000);
          },
        });

        sound.play();
      }
    }
  };

  useEffect(() => {
    props.setValue(false);
    getQuiz();
  }, []);

  useEffect(() => {
    setClickable(true);
  }, [currentQuestion]);

  return (
    <Grid container className={classes.mainContainer}>
      <Paper className={classes.mainPaper}>
        {initialLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 16em)",
            }}
          >
            <CircularProgress size="100px" />
          </div>
        ) : (
          <React.Fragment>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              <Grid container className={classes.contentGrid}>
                <Grid
                  item
                  md={12}
                  style={{ width: "100%", marginBottom: "5em" }}
                >
                  <Paper className={classes.secondaryPaper}>
                    <Grid item container>
                      <Grid
                        item
                        container
                        md={8}
                        sm={8}
                        xs={12}
                        justifyContent={matchesXS ? "center" : undefined}
                      >
                        <Grid item>
                          <CircularProgressWithLabel
                            size={matchesMD ? "35px" : "50px"}
                            value={currentQuestion * 10}
                          />
                        </Grid>
                        <Grid
                          item
                          style={{ marginLeft: matchesXS ? 0 : "1em" }}
                        >
                          <Typography className={classes.question}>
                            Guess the pronunciation.
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        container
                        md={4}
                        sm={4}
                        xs={12}
                        justifyContent={matchesXS ? "center" : "flex-end"}
                      >
                        <Grid item>
                          <Typography className={classes.question}>
                            Score: {score}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography
                        align="center"
                        className={classes.japaneseChar}
                      >
                        {question[currentQuestion - 1].character}
                      </Typography>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid
                  item
                  container
                  spacing={2}
                  style={{ marginBottom: "5em" }}
                >
                  <React.Fragment>
                    {question[currentQuestion - 1].options.map(
                      (option, index) => (
                        <Grid item lg={6} md={12} sm={12} xs={12} key={index}>
                          <motion.div
                            whileHover={{
                              scale: 1.02,
                              transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              id={option.answer}
                              disableElevation
                              disableRipple
                              className={classes.optionButton}
                              fullWidth
                              variant="contained"
                              onClick={(e) => {
                                checkAnswer(e, option);
                              }}
                            >
                              {option.answer}
                            </Button>
                          </motion.div>
                        </Grid>
                      )
                    )}
                  </React.Fragment>
                </Grid>
              </Grid>
            </motion.div>
          </React.Fragment>
        )}
      </Paper>

      <Dialog
        open={open}
        fullWidth
        maxWidth="xs"
        PaperProps={{
          style: {
            background: theme.palette.common.elementColor,
          },
        }}
      >
        <DialogTitle disableTypography className={classes.optionHeader}>
          Final Score
        </DialogTitle>
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h3"
                align="center"
                style={{ color: "white" }}
              >
                {score}
              </Typography>
            </Grid>
            <Grid item style={{ marginTop: "2em" }}>
              {score <= 30 ? (
                <Typography
                  variant="h5"
                  align="center"
                  style={{ color: "white " }}
                >
                  Don't worry. You can always try.
                </Typography>
              ) : score <= 60 ? (
                <Typography
                  variant="h5"
                  align="center"
                  style={{ color: "white " }}
                >
                  Almost there.
                </Typography>
              ) : score <= 90 ? (
                <Typography
                  variant="h5"
                  align="center"
                  style={{ color: "white " }}
                >
                  Very good!
                </Typography>
              ) : (
                <Typography
                  variant="h5"
                  align="center"
                  style={{ color: "white " }}
                >
                  Congratulations!
                </Typography>
              )}
            </Grid>
            <Grid
              item
              container
              style={{ marginTop: "1em", marginBottom: "1em" }}
              spacing={2}
              justifyContent="center"
            >
              <Grid item md={6}>
                <Button
                  disableElevation
                  fullWidth
                  className={classes.retryButton}
                  variant="contained"
                  onClick={() => window.location.reload()}
                >
                  Retry
                </Button>
              </Grid>
              <Grid item md={6}>
                <Button
                  disableElevation
                  fullWidth
                  className={classes.goToHome}
                  variant="outlined"
                  component={Link}
                  to="/"
                >
                  Go To Home
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
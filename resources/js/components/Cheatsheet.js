import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Howl } from 'howler';
import { motion } from "framer-motion";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from "@material-ui/core/Paper";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "8em",
    paddingLeft: "2em",
    paddingRight: "2em",
    marginBottom: "1em",
    minHeight: "calc(100vh - 9em)",
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
    marginBottom: "1em",
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0
    }
  },
  headerText: {
    fontFamily: "Poppins",
    fontWeight: 200,
    color: "white",
    marginBottom: "0.5em"
  },
  searchField: {
    width: "200px",
    marginRight: "1em"
  },
  checkbox: {
    color: "white"
  },
  cardSection: {
    marginTop: "1em"
  },
  japaneseCard: {
    backgroundColor: theme.palette.common.elementColor,
    boxShadow: "none"
  },
  japaneseChar: {
    fontFamily: "Kaisei Tokumin",
    color: theme.palette.common.lightYellow,
    fontSize: "4rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem"
    }
  },
  pronunciationCard: {
    fontFamily: "Montserrat",
    color: theme.palette.common.lightYellow,
    fontSize: "3rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem"
    }
  },
  filterButton: {
    marginLeft: "auto",
    borderRadius: 50,
    backgroundColor: theme.palette.common.lightYellow,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    },
    width: "200px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: 0
    }
  }
}));

export default function Cheatsheet(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [checkbox, setCheckbox] = useState({
    hiragana: true,
    katakana: true,
    single: true,
    combo: true,
    dakuten: true
  });
  const [filter, setFilter] = useState("");
  const [hiragana, setHiragana] = useState([]);
  const [katakana, setKatakana] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  const handleCheckbox = (event) => {
    setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
  };

  const cardClick = (pronunciation) => {
    const sound = new Howl({
      src: `audio/${pronunciation}.mp3`,
      rate: 0.75,
      html5: true
    });
    
    sound.play();
  };

  const getCharacter = () => {
    if (!loading) {
      setLoading(true);
      checkbox["filter"] = filter;
      axios
        .get(`api/getCharacters`, {
          params: checkbox, 
        })
        .then((res) => {
          setHiragana(res.data["hiragana"]);
          setKatakana(res.data["katakana"]);
          setLoading(false);
          setInitialLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
          setInitialLoading(false);
        });
    }
  };

  const cards = (
    <React.Fragment>
      {hiragana.map((char, index) => (
          <Grid md={2} sm={4} xs={6} item key={index}>
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className={classes.japaneseCard}>
                <CardActionArea onClick={(e) => cardClick(char.pronunciation)}>
                  <CardContent>
                    <Typography
                      align="center"
                      gutterBottom
                      className={classes.japaneseChar}
                    >
                      {char.character}
                    </Typography>
                    <Typography align="center" className={classes.pronunciationCard}>
                      {char.pronunciation}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
        ))}
      {katakana.map((char, index) => (
          <Grid md={2} sm={4} xs={6} item key={index}>
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className={classes.japaneseCard}>
                <CardActionArea onClick={(e) => cardClick(char.pronunciation)}>
                  <CardContent>
                    <Typography
                      align="center"
                      gutterBottom
                      className={classes.japaneseChar}
                    >
                      {char.character}
                    </Typography>
                    <Typography align="center" className={classes.pronunciationCard}>
                      {char.pronunciation}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
        ))}
    </React.Fragment>
  );

  const mdCheckbox = (
    <React.Fragment>
      <Accordion
        style={{
          backgroundColor: theme.palette.common.containerColor,
          width: "100%",
          marginBottom: "1em",
          boxShadow: "none"
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography style={{ color: "white" }}>Additional filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup row={matchesMD ? false : true}>
            <FormControlLabel
              control={
                <Checkbox
                  name="hiragana"
                  color="primary"
                  checked={checkbox.hiragana}
                  onChange={handleCheckbox}
                />
              }
              label="Hiragana"
              className={classes.checkbox}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="katakana"
                  color="primary"
                  checked={checkbox.katakana}
                  onChange={handleCheckbox}
                />
              }
              label="Katakana"
              className={classes.checkbox}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="single"
                  color="secondary"
                  checked={checkbox.single}
                  onChange={handleCheckbox}
                />
              }
              label="Single"
              className={classes.checkbox}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="combo"
                  color="secondary"
                  checked={checkbox.combo}
                  onChange={handleCheckbox}
                />
              }
              label="Combo"
              className={classes.checkbox}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="dakuten"
                  color="secondary"
                  checked={checkbox.dakuten}
                  onChange={handleCheckbox}
                />
              }
              label="Dakuten"
              className={classes.checkbox}
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );

  const normalCheckbox = (
    <React.Fragment>
      <FormControlLabel
        control={
          <Checkbox
            name="hiragana"
            color="primary"
            checked={checkbox.hiragana}
            onChange={handleCheckbox}
          />
        }
        label="Hiragana"
        className={classes.checkbox}
      />
      <FormControlLabel
        control={
          <Checkbox
            name="katakana"
            color="primary"
            checked={checkbox.katakana}
            onChange={handleCheckbox}
          />
        }
        label="Katakana"
        className={classes.checkbox}
      />
      <FormControlLabel
        control={
          <Checkbox
            name="single"
            color="secondary"
            checked={checkbox.single}
            onChange={handleCheckbox}
          />
        }
        label="Single"
        className={classes.checkbox}
      />
      <FormControlLabel
        control={
          <Checkbox
            name="combo"
            color="secondary"
            checked={checkbox.combo}
            onChange={handleCheckbox}
          />
        }
        label="Combo"
        className={classes.checkbox}
      />
      <FormControlLabel
        control={
          <Checkbox
            name="dakuten"
            color="secondary"
            checked={checkbox.dakuten}
            onChange={handleCheckbox}
          />
        }
        label="Dakuten"
        className={classes.checkbox}
        style={{ marginBottom: matchesMD ? "1em" : "inherit" }}
      />
    </React.Fragment>
  );

  useEffect(() => {
    getCharacter();
  }, []);

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
              <Grid item container direction="column">
                <Grid item>
                  <Typography
                    variant="h5"
                    className={classes.headerText}
                    align={matchesMD ? "center" : undefined}
                  >
                    Filter
                  </Typography>
                  <FormGroup row={matchesMD ? false : true}>
                    <TextField
                      id="filter-text"
                      label="Search for"
                      variant="outlined"
                      className={classes.searchField}
                      onChange={(e) => setFilter(e.target.value)}
                      style={{
                        width: matchesMD ? "100%" : "inherit",
                        marginBottom: matchesMD ? "1em" : "inherit",
                      }}
                    />
                    {matchesMD ? mdCheckbox : normalCheckbox}
                    <Button
                      className={classes.filterButton}
                      onClick={getCharacter}
                    >
                      {loading ? (
                        <CircularProgress color="secondary" />
                      ) : (
                        <React.Fragment>Apply Filter</React.Fragment>
                      )}
                    </Button>
                  </FormGroup>
                </Grid>
                {/* Character cards */}
                <Grid
                  container
                  spacing={2}
                  item
                  className={classes.cardSection}
                >
                  {cards}
                </Grid>
              </Grid>
            </motion.div>
          </React.Fragment>
        )}
      </Paper>
    </Grid>
  );
}
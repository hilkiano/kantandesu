import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles(theme => ({
  appbar: {
    background: theme.palette.background.default,
    boxShadow: "none"
  },
  logo: {
    padding: "1em",
    fontFamily: "Poppins",
    fontWeight: "400",
    color: "white",
    "&:hover": {
      textDecoration: "none"
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem"
    }
  },
  tabContainer: {
    marginLeft: "auto"
  },
	tab: {
		...theme.typography.tab
	}
}));

function ElevationScroll(props) {
  const { children } = props;
  
  const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
  });

  return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  }

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        props.setValue(0);
        break;
      case '/cheatsheet':
        props.setValue(1);
        break;
      default:
        break;
    }
  }), [props.value];

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
      >
        <Tab
          disableRipple
          label="Home"
          component={RouterLink}
          to="/"
          className={classes.tab}
        />
        <Tab
          disableRipple
          label="Cheatsheet"
          component={RouterLink}
          to="/cheatsheet"
          className={classes.tab}
        />
      </Tabs>
    </React.Fragment>
  );

  return (
    <ElevationScroll>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <div
            style={{
              display: matchesMD ? "flex" : "inherit",
              justifyContent: matchesMD ? "center" : "inherit",
              width: matchesMD ? "100%" : "inherit"
            }}
          >
            <Link
              component="button"
              variant="h4"
              className={classes.logo}
              component={RouterLink}
              to="/"
              onClick={() => props.setValue(0)}
            >
              KantanDesu
            </Link>
          </div>
          {matchesMD ? "" : tabs}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

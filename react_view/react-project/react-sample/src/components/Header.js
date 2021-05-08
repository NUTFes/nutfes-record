import { AppBar, Button, Toolbar, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 2
  }
}));

function Header(headerRef) {
  const classes = useStyles();
  return (
    <header>
      <AppBar positon="fixed">
			  <Toolbar>
				  <Typography className={classes.typographyStyles} variant="h5">
            NUTFES RECORD
          </Typography>
          <AccountCircleIcon />
          <Button color="inherit">Login</Button>
			  </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
import React, { useEffect, useState } from "react";
import { Grid } from '@material-ui/core';
import axios from "axios"
import './App.css';
import CenteredTabs from './pages/CenteredTabs.js';
import StudentsTable from './pages/StudentsTable.js';
import TeachersTable from './pages/TeachersTable.js';
import Header from './components/Header.js'
import Title from './pages/Title.js'

const App = () => {
  return (
    <div className="App">
      <Header className="App-header" />
      <body>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={8}>
            <Title />
            <CenteredTabs labels={['Students', 'Teachers']}>
              <StudentsTable />
              <TeachersTable />
            </CenteredTabs>
          </Grid>
        </Grid>
      </body>
    </div>
  );
}


export default App;
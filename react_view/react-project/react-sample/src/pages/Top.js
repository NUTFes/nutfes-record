import React from "react";
import { Grid } from '@material-ui/core';
import CenteredTabs from './CenteredTabs.js';
import StudentsTable from './StudentsTable.js';
import TeachersTable from './TeachersTable.js';
import Title from './Title.js'

const Top = () => {
  return (
    <div className="Top">
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


export default Top;
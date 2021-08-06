import React, { useEffect, useState } from "react";
import { Link, RouteComponentProps, useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell, { tableCellClasses } from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
});


export default function SimpleCard() {
  const { userId } = useParams();
  const host = "http://localhost:3000/"
  const [userDetails, setUserDetails] = useState([]);
  const [userDetail, setUserDetail] = useState([]);

  // userDetailsを取得
  useEffect(() => {

    axios.get(host + "api/v1/user/" + userId)
      .then(response => setUserDetails(response.data));
    axios.get(host + "api/v1/user/" + userId)
      .then(response => setUserDetail(response.data.user));
  }, [])

  const classes = useStyles();

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={8}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h3" component="Name">
              {userDetail.name}
            </Typography><br />
            {/* userの情報を表示する */}
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableBody>
                  <StyledTableRow>
                    <TableCell component="th" scope="row">Grade</TableCell>
                    <TableCell align="right">{userDetails.grade}</TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell component="th" scope="row">Department</TableCell>
                    <TableCell align="right">{userDetails.department}</TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell component="th" scope="row">email</TableCell>
                    <TableCell align="right">{userDetail.email}</TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell component="th" scope="row">PC Name</TableCell>
                    <TableCell align="right">{userDetail.pc_name}</TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell component="th" scope="row">CPU</TableCell>
                    <TableCell align="right">{userDetail.pc_cpu}</TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell component="th" scope="row">Memory</TableCell>
                    <TableCell align="right">{userDetail.pc_memory}</TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell component="th" scope="row">SSD</TableCell>
                    <TableCell align="right">{userDetail.pc_ssd}</TableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link to="/">Top</Link>
            </Button>
            <Button size="small">
            <Link to="/members">Member</Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
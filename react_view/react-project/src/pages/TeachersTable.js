import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable() {
  
  const host = "http://localhost:3000/"
  // useStateでteachersの変数を定義
  const [teachers, setTeachers] = useState([]);

  // teachersを取得（非同期処理）
  useEffect(() => {
    const getTeachers = async () => {
      const response = await axios.get(host + "/api/v1/get_role_1");
      setTeachers(response.data)
    }
    getTeachers()
  }, [])

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Role</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {teachers.map((teacher) => (
            <TableRow key={teacher.id}>
                <TableCell component="th" scope="row">
                    {teacher.role_id === 1 &&
                      <p>teacher</p>
                    }
                </TableCell>
                <TableCell><Link to={"/members/"+ teacher.id}>{teacher.name}</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
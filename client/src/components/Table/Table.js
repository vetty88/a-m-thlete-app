import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Moment from "react-moment";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import styles from "../../assets/jss/material-dashboard-react/components/tableStyle.js";
import API from "../../utils/API";
import { SelectHorse } from "../Form/index.js";

const useStyles = makeStyles(styles);

export default function CustomTable() {
  const classes = useStyles();

  const [competitions, setCompetitions] = useState([])

  // Load all competitions and store them with setCompetitions
  useEffect(() => {
    loadCompetitions()
  }, [])

  // Loads all competitions and sets them to competitions
  function loadCompetitions() {
    API.getCompetitions()
      .then(res => 
        setCompetitions(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
      {competitions.length ? (
        <TableHead>
          <h4>CUSTOM TABLE 1</h4>
          {competitions.map(competition => (
          <TableRow key={competition.id}
          dateFormat="DD/MM/YYYY">
            <TableCell
            className={classes.tableCell + " " + classes.tableHeadCell}
            key={competition.id} >
            {competition.eventName}
            </TableCell>
            <TableCell
            className={classes.tableCell + " " + classes.tableHeadCell}
            key={competition.id} >
            {competition.horse}
            </TableCell>
            <TableCell
              className={classes.tableCell + " " + classes.tableHeadCell}
            key={competition.id} >
            <Moment format="DD-MM-YYYY">{competition.date}</Moment>
            </TableCell>
            <TableCell
            className={classes.tableCell + " " + classes.tableHeadCell}
            key={competition.id} >
            {competition.placing}
            </TableCell>
          </TableRow>
          ))}
        </TableHead> 
      ) : (null
      )}
        <TableBody>
        {competitions.length ? (
          <TableHead>
            <h4>CUSTOM TABLE 2</h4>
    
            <TableRow >         
                <TableCell className="some class">
                <SelectHorse>
 
                </SelectHorse>
 
                </TableCell>
                
            </TableRow>

          </TableHead>  
              ) : (null
                )}
        </TableBody>
      </Table>
    </div>
    );
    }
import { Col, Row, Container } from "../../components/Grid/";
import { connect } from "react-redux";
import { faHorseHead } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from "react-router-dom";
import { List, ListItem } from "../../components/List/List";
// import { logoutUser } from "../../actions/authActions";
import { makeStyles } from "@material-ui/core/styles";
import Accessibility from "@material-ui/icons/Accessibility";
import AccessTime from "@material-ui/icons/AccessTime";
import API from "../../utils/API";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import BugReport from "@material-ui/icons/BugReport";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import ChartistGraph from "react-chartist";
import Cloud from "@material-ui/icons/Cloud";
import Code from "@material-ui/icons/Code";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import Danger from "../../components/Typography/Danger.js";
import DateRange from "@material-ui/icons/DateRange";
import DeleteBtn from "../../components/Buttons/DeleteBtn";
import FormatListNumbered from "@material-ui/icons/FormatListNumbered";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Icon from "@material-ui/core/Icon";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Moment from "react-moment";
import PropTypes from "prop-types";
import React, {useEffect, useState, Component} from "react";
import ReactDOM from 'react-dom';
import Store from "@material-ui/icons/Store";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Table from "../../components/Table/Table.js";
import Tasks from "../../components/Tasks/Tasks.js";
import Update from "@material-ui/icons/Update";
import Warning from "@material-ui/icons/Warning";

const useStyles = makeStyles(styles);

 export default function Dashboard() {
  const classes = useStyles();
  // Setting our component's initial state
  const [competitions, setCompetitions] = useState([])
  const [competition, setCompetition] = useState([])

  // Load all competitions and store them with setCompetitions
  useEffect(() => {
    loadCompetitions()
    getCompetition()
  }, [])

  // Loads all competitions and sets them to competitions
  function loadCompetitions() {
    API.getCompetitions()
      .then(res => 
        setCompetitions(res.data)
      )
      .catch(err => console.log(err));
  };

  function getCompetition(id) {
    API.getCompetition(id)
    .then(res => 
      setCompetition(res.data)
    )
    .catch(err => console.log(err));
};

// Setting our component's initial state
  const [horses, setHorses] = useState([])
  const [horse, setHorse] = useState([])

  // Load all competitions and store them with setCompetitions
  useEffect(() => {
    loadHorses()
    getHorse()
  }, [])

  // Loads all competitions and sets them to competitions
  function loadHorses() {
    API.getHorses()
      .then(res => 
        setHorses(res.data)
      )
      .catch(err => console.log(err));
  };

  function getHorse(uniqueName) {
    API.getHorse(uniqueName)
    .then(res => 
      setHorse(res.data)
    )
    .catch(err => console.log(err));
};

    return (
      <div>
        <GridContainer>

      <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <FontAwesomeIcon icon={faStar} />
              </CardIcon>
              <p className={classes.cardCategory}>Total Comps</p>
              <h3 className={classes.cardTitle}>
              {competitions.length} <small>competitions</small>
              </h3>
              <p className={classes.cardCategory}>Total Horses</p>
              <h3 className={classes.cardTitle}>
              {horses.length} <small>horses</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
                <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <FontAwesomeIcon icon={faHorseHead} />
              </CardIcon>
              <p className={classes.cardCategory}>Horses</p>
         
              <h3 className={classes.cardTitle}></h3>
            </CardHeader>
            <CardBody>
          {horses.length ? (
              <List>
            {horses.map(horse => (
                  <ListItem key={horse.uniqueName}>
                          {horse.uniqueName}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results</h3>
            )}
            </CardBody>
            <CardFooter stats>
            
             
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <FontAwesomeIcon icon={faStar} />
              </CardIcon>
              <p className={classes.cardCategory}>Last 5: Competitions List</p>
              <h3 className={classes.cardTitle}></h3>
              </CardHeader>
              <CardBody>
               {competitions.length ? (
              <List>
                {competitions.slice(0, 5).map(competition => (
                  <ListItem key={competition._id}>
                          {competition.eventName} with {competition.horse}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results</h3>
            )}
            </CardBody>
            <CardFooter stats>
           </CardFooter>
          </Card>
        </GridItem>

      </GridContainer>
      <GridContainer>
      <GridItem xs={12} sm={10} md={10}>
                <Card>
           <CardHeader><Icon> addchart </Icon> Competitions by horse </CardHeader>
                    <CardBody>
                        <div id="chart">
                        <iframe styles="background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="600" height="600" src="https://charts.mongodb.com/charts-project-0-ifizl/embed/charts?id=bdab3054-5ba1-47e5-b482-45e5e859c862&theme=light"></iframe>
                        </div>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>
            </GridItem> 

            <GridItem xs={12} sm={10} md={10}>
                <Card>
                    <CardHeader><Icon> addchart </Icon> Placing by Discipline </CardHeader>
                    <CardBody>
                        <div id="chart">
                        <iframe styles="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="800" height="600" src="https://charts.mongodb.com/charts-project-0-ifizl/embed/charts?id=d2f1e98d-9b13-4e08-9ce8-d01c7a8869f0&theme=light"></iframe> 
                        </div>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>
            </GridItem>

            <GridItem xs={12} sm={10} md={10}>
                <Card>
                    <CardHeader></CardHeader>
                    <CardBody>
                        <div id="chart">
                        <iframe styles="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="800" height="600" src="https://charts.mongodb.com/charts-project-0-ifizl/embed/charts?id=ef7be6d4-9043-4ed2-90c4-ac8576aae118&theme=light"></iframe>
                        </div>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>
            </GridItem> 
      </GridContainer>
      
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>

        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitle}>Competition Table</h4>
              <p className={classes.cardCategory}>
                Competition List (All Horses)
              </p>
            </CardHeader>
            <CardBody>
              <Table
                />
            </CardBody>
          </Card>
        </GridItem>
        
        </GridContainer>
    </div>
  );
}
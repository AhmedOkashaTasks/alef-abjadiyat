import React,{useState} from 'react'
import ClassForm from '../../components/Form/ClassForm';
import StudentForm from '../../components/Form/StudentForm';
import Table from '../../components/Table'
import {  useAppSelector } from "../../hooks";
import {selectClass} from '../../redux/reducers/class'
import {IClass} from '../../types'
import {Grid} from '@mui/material'
import Navbar from '../../components/Navbar';



const Home = () => {
  const [open,setOpen]=useState<boolean>(false)
  const [show,setClassOpen]=useState<boolean>(false)

  const [currentClass,setCurrentClass]=useState<IClass>()

  const classes = useAppSelector(selectClass);


//student modal form hide/show handlers

const handleClickOpen = () => {
  setOpen(true);
};  
const handleClose = () => {
  setOpen(false);
};
//-----------------------

//get the current class handler
const getCurrentClass=(curClass:IClass)=>{
setCurrentClass(curClass)
}


//Add class modal hide/show handler

const classFormShow = () => {
  setClassOpen(true);
};  
const classFormClose = () => {
  setClassOpen(false);
};


return (
    <>
     <Grid  container spacing={3} >
      <Grid item xs ={12}>
      <Navbar/>
      </Grid>
          <Grid item xs={12}>
      <ClassForm show={show} classFormClose={classFormClose} curClass={currentClass}/>
      <StudentForm open={open} handleClose={handleClose} curClass={currentClass}/>
      <Table classFormShow={classFormShow}  classes={classes.class} handleClickOpen={handleClickOpen} getCurrentClass={getCurrentClass} />
      </Grid >
          </Grid>
    </>
  )
}

export default Home
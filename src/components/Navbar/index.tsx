import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  IconButton,
  Button
  
} from "@mui/material";
import {FiUser} from 'react-icons/fi'
import {HiOutlineBell} from 'react-icons/hi'
import {BsViewStacked} from 'react-icons/bs'
import {TbChartLine} from 'react-icons/tb'
import {TbFileInvoice} from 'react-icons/tb'
import {BsMenuApp} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'
import {MdKeyboardArrowDown} from 'react-icons/md'
import logo from '../../assets/logo-bi.svg'
import './Navbar.scss'
import { useTranslation } from 'react-i18next';


function Navbar() {
  const {t,i18n } = useTranslation();


  return (
    <AppBar position="static" className="nav_main" dir={`${i18n.dir()}`}>
      <CssBaseline />
      <Toolbar>
          <div className="nav_menu">
            <img src={logo}/>
            <Button startIcon={<BsMenuApp/>}>
              {t('main')}
            </Button>
            <Button startIcon={<TbFileInvoice/>} endIcon={<MdKeyboardArrowDown/>}>
             {t('grads')}
            </Button>
            <Button startIcon={<TbChartLine/>} endIcon={<MdKeyboardArrowDown/>}> 
              {t('reports')}
            </Button>
            <Button startIcon={<BsViewStacked/>}>
            {t('classes')}

            </Button>
          </div>
          <div className="nav_icons">

          <IconButton><HiOutlineBell/></IconButton>
          <IconButton><BsQuestionCircle/></IconButton>
          <span>
          <IconButton><FiUser/></IconButton><MdKeyboardArrowDown/>

          </span>

          </div>
          
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;

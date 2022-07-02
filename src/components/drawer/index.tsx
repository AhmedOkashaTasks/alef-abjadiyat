import React,{useState,useEffect} from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  IconButton,
  Button,Slide,useMediaQuery,useTheme
  
} from "@mui/material";
import {FiUser} from 'react-icons/fi'
import {HiOutlineBell} from 'react-icons/hi'
import {BsViewStacked} from 'react-icons/bs'
import {TbChartLine} from 'react-icons/tb'
import {TbFileInvoice} from 'react-icons/tb'
import {BsMenuApp} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'
import {MdKeyboardArrowRight} from 'react-icons/md'
import logo from '../../assets/logo-bi.svg'
import './Drawer.scss'
import { useTranslation } from 'react-i18next';





import {
  Drawer,
  List,
  ListItem,
  ListItemText,
 createStyles,
} from "@mui/material";
import {GiHamburgerMenu} from 'react-icons/gi'
// import { Link } from "react-router-dom";

const useStyles:any = createStyles(()=>({
    a:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
   

const classes = useStyles();
const {t,i18n } = useTranslation();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>

      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            {/* <img src={logo}/> */}
            <Button startIcon={<BsMenuApp/>}>
              {t('main')}
            </Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
          <Button startIcon={<TbFileInvoice/>} endIcon={<MdKeyboardArrowRight/>}>
             {t('grads')}
            </Button>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Button startIcon={<TbChartLine/>} endIcon={<MdKeyboardArrowRight/>}> 
              {t('reports')}
            </Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Button startIcon={<BsViewStacked/>}>
            {t('classes')}
            </Button>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <GiHamburgerMenu />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
            
            
            
            
import { styled } from '@mui/material/styles';
import {Table as MuTable} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {IClass} from '../../types'
import {BiLink} from 'react-icons/bi'
import {HiKey} from 'react-icons/hi'
import {TiUserAdd} from 'react-icons/ti'
import {MdEdit} from 'react-icons/md'
import {RiDeleteBin6Fill} from 'react-icons/ri'
import {Button,IconButton,Grow,Slide} from '@mui/material';
import {MdAddCircle} from 'react-icons/md'
import {MdLanguage} from 'react-icons/md'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from "../../hooks";
import {removeClass,} from '../../redux/reducers/class'
import {ITableProps} from '../../types'
import './table.scss'
import { useState ,useEffect} from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontweight:900

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



 const  Table: React.FC<ITableProps> = ({classes,handleClickOpen,getCurrentClass,classFormShow}) =>{
  const dispatch = useAppDispatch();
  const {t,i18n } = useTranslation();
  const [visible,setVisible]=useState<boolean>(false)


  //controle table visibilty
  useEffect(()=>{
setVisible(true)
  },[])

  
  //delete class handler
  const deleteHandler=(id:string)=>{
     dispatch(removeClass(id))
  }

  // handle language changes
  const toggleLanguage=()=>{
    if(i18next.language==="ar"){
    i18next.changeLanguage('en')
    }else{
    i18next.changeLanguage('ar')
    }
  }

//adding new students handler 
const studentsHandler =(row:IClass)=>{
  handleClickOpen();
  getCurrentClass(row)
  
} 

//edit class button  handler
const editClassHandler =(row:IClass)=>{

  classFormShow()
  getCurrentClass(row)


}


  return (
    <Grow
          in={visible}
          {...(visible ? { timeout: 2000 } : {})}
        >
    <TableContainer className={`table_${i18n.dir()}`} component={Paper}>
        <Button onClick={classFormShow} endIcon={<MdAddCircle />}>
  {t('add_class')}
</Button>
<Button onClick={toggleLanguage} endIcon={<MdLanguage/>}>{`${i18next.language==="ar"?"English":"العربية"}`}</Button>
      <MuTable  sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{t('section')}</StyledTableCell>
            <StyledTableCell >{t('class')}</StyledTableCell>
            <StyledTableCell >{t('students')}</StyledTableCell>
            <StyledTableCell >{t('join_key')}</StyledTableCell>
            <StyledTableCell >{t('login_key')}</StyledTableCell>
            <StyledTableCell >{t('add')}</StyledTableCell>
            <StyledTableCell >{t('edit')}</StyledTableCell>
            <StyledTableCell >{t('delete')}</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {classes.length > 0 ? classes.map((newClass) => (
            newClass.sections.map((section,i)=> (
                <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {section.section}
              </StyledTableCell>
              <StyledTableCell >{newClass.name}</StyledTableCell>
              <StyledTableCell  >{section.students}</StyledTableCell>
              <StyledTableCell ><IconButton  ><BiLink/></IconButton></StyledTableCell>
              <StyledTableCell ><IconButton  ><HiKey/></IconButton></StyledTableCell>
              <StyledTableCell ><IconButton  onClick={()=>studentsHandler({name:newClass.name,sections:[section]})}><TiUserAdd/></IconButton></StyledTableCell>
              <StyledTableCell ><IconButton  onClick={()=>editClassHandler({name:newClass.name,sections:[section]})} ><MdEdit/></IconButton></StyledTableCell>
              <StyledTableCell ><IconButton onClick={()=>deleteHandler(section.id)}><RiDeleteBin6Fill/></IconButton></StyledTableCell>
            </StyledTableRow>
            ))
          )):(
            <StyledTableRow>
              <StyledTableCell ><h1>{t('apology')}</h1></StyledTableCell>

            </StyledTableRow>


          )}
        </TableBody>
      </MuTable>
    </TableContainer></Grow>
  );
}
export default Table
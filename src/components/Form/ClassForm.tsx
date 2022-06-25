import  React,{useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import {MdAddCircle} from 'react-icons/md'
import {FcCancel} from 'react-icons/fc'
import { useAppDispatch } from "../../hooks";
import {addClass, updateClass} from '../../redux/reducers/class'
import {formProps} from '../../types'

import './ClassForm.scss'

    
const  ClassForm: React.FC<formProps>=({show,classFormClose,curClass}) =>{
  const {t } = useTranslation();
  const dispatch=useAppDispatch()

  const [fields,setFields]=useState({name:'',section:''})
  const [errors,setErrors]=useState({name:'',section:''})


//setting the feilds to the current class row on first render
  useEffect(()=>{
setFields({name:curClass?curClass.name:'',section:curClass?curClass.sections[0].section:''})    
  },[curClass])


//submit class handler
const submitHandler=()=>{
    
    let nameIsValid=validHandler('name');
    let sectionIsValid =validHandler('section');
if(nameIsValid && sectionIsValid){

if(!curClass){
dispatch(addClass(fields))
}else{

dispatch(updateClass({section:fields.section,id:curClass.sections[0].id}))
}
    setFields({name:'',section:''})
classFormClose()}
}

//input change handler
const changeHandler=(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
    const{name,value}=e.target
    setFields({...fields,[name]:value})
}


//validation handler
const validHandler=(field:string)=>{
    let _fields=fields;
    let _errors=errors;
    let formIsValid=true;
    
//there is more edge casses to implement if have more time 
//class name validation

 if(field=='name'){
    console.log('name');
    
    
    if(!_fields['name']){
        formIsValid=false;
        _errors['name']="class name is required !!"
            }
            if(typeof _fields['name']!==undefined){
        if(!_fields['name'].match(/^[a-zA-Z]+$/)){
            formIsValid=false;
            _errors['name']="letters only alowed for class name"
        
        }
            };
 }
//class section validation
if(field=='section'){

    console.log('section');

   if(!_fields['section']){
        formIsValid=false;
        _errors['section']="class section is required !!"
            }
            if(typeof _fields['section']!==undefined){
        if(!_fields['section'].match(/^[a-zA-Z]+$/)){
            
            formIsValid=false;
            _errors['section']="letters only alowed for section name"

        
        }}
            }

    setErrors({..._errors})
    return formIsValid
}


  return (
    <Dialog className='classform_main' open={show} disableEscapeKeyDown > 
        <DialogTitle>{t('add_class')}</DialogTitle>
        <Box>
          <TextField
          error={errors.name.length>0}
          onChange={changeHandler}
          autoFocus
          required
          id="outlined-required"
          label={t('class')}
          value={fields["name"]}
          name="name"
        />
        <TextField
        error={errors.section.length>0}
        onChange={changeHandler}
        value={fields["section"]}
        required
        id="outlined-required"
        label={t('section')}
        name="section"
        disabled={!!curClass}
      />
         </Box>
        <DialogActions>
          <Button onClick={classFormClose} endIcon={<FcCancel/>}>{t('cancel')}</Button>
          <Button onClick={submitHandler} endIcon={<MdAddCircle />}>{t('add')}</Button>
        </DialogActions>
      </Dialog>

  );
}
export default ClassForm
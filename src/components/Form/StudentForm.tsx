import * as React from 'react';
import {FormControlLabel, Radio,RadioGroup, Button,IconButton ,Dialog,DialogTitle,Grid} from '@mui/material';
import {IoMdCloseCircle} from 'react-icons/io'
import {TbCopy} from 'react-icons/tb'
import './StudentForm.scss'
import {studentFormProps} from '../../types'
import i18next from 'i18next';



const  StudentForm: React.FC<studentFormProps>=({open,handleClose,curClass}) =>{

  

  return (
    <div>
      <Dialog className='form_main' open={open} onClose={handleClose} dir={i18next.language==='ar'?'rtl':'ltr'}>

      <DialogTitle> <IconButton onClick={handleClose} ><IoMdCloseCircle/></IconButton> <span>أضافة الطلاب</span></DialogTitle>
        <Grid  container  >
          <Grid item xs={12}>
         أسم الشعبة :  {curClass?.sections[0].section}

          </Grid>
       
        <Grid item xs={12}>
<p>          يرجى أختيار أحدى الطرق المناسبة لك لأضافة طلابك
</p>        
        <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue='link'
      >
        <FormControlLabel value="single" control={<Radio color='info' />} label="أضافة كل طالب على حدى" />
        <FormControlLabel value="list" control={<Radio />} label="أضافة قائمة الطلاب" />
        <FormControlLabel value="link" control={<Radio  />} label="الانضمام برابط الصف" />
        
        
      </RadioGroup>

        </Grid>
        <Grid item xs={12}>
<p>قم بمشاركة رابط الانضمام مباشرة مع طلابك عن طريق البريد الالكتروني او الواتس اب     
</p>
<TbCopy/>
<Button>sharelink url</Button>

   </Grid> 
      
       
      </Grid>
        
      </Dialog>
    </div>
  );
}
export default StudentForm
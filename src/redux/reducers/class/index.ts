import { createSlice, current ,PayloadAction} from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { v4 as uuid } from 'uuid';
import _ from 'lodash'
import { IClass } from "../../../types";
import data from '../../../assets/data.json'


 const initialState: IClass[] | null= data;

export const classSlice = createSlice({
  name: "class",
  initialState,

  reducers: {


    //--------------------------------

    addClass: (state, action:PayloadAction<{name:string,section:string}>) => {
      
      
const {name,section}=action.payload
//create new id for new classes
       let id = uuid();
      const myClass=_.filter({...state},{name:name,sections:[{section:section}]})
      if (myClass.length===0) {
        
        let _myClass={name,sections:[{id,section,students:0}],}
        state.push({ ..._myClass });
      } 
    },
    //--------------------------------

    removeClass: (state, action:PayloadAction<string>)=> {
      
        let _state= _.map(state,(element) => {
        
        return {...element, sections: _.filter(element.sections,(v)=>!_.includes({id:action.payload},v.id))}})


        let _result =_.remove(_state,(v)=>{
              return v.sections.length>0
        })
return _result 

    },

    //--------------------------------

    updateClass: (state, action:PayloadAction<{name:string,section:string,id:string}>) => {
console.log(action.payload);

      const {name,section,id}=action.payload;
      //updating section name ONLY for simplicity but could be extended

      let _state= _.map({...current(state)},(element,i) => {
        
        return {name:_.find(element.sections,(v)=>{
           if(v.id===id){
return true
        }else{return false}}
          
          )?name:element.name, sections: _.map(element.sections,(exSection)=>{
          
          return exSection.id===id? {...exSection,section:section} : exSection
        })}
      })

return _state

    },
  },
});

export const { addClass, removeClass,updateClass } = classSlice.actions;

export const selectClass = (state: RootState) => state;

export default classSlice.reducer;
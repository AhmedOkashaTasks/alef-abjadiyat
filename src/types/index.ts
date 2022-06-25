
export type Section = {
    id:string,
    section:string,
    students: number
  }
  
  export interface IClass {
    name: string;
    sections: Array<Section>;
    
  }
  
export interface ITableProps{
  classes:IClass[],
  handleClickOpen:()=>void
  getCurrentClass:(currentClass:IClass)=>void
  classFormShow:()=> void
  }

  export type formProps ={
    show:boolean,
    classFormClose:()=>void
    curClass?:IClass
  }

  export type studentFormProps ={
    open:boolean,
    handleClose:()=>void
    curClass?:IClass
  }
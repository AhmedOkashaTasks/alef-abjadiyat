import { screen,render} from '@testing-library/react'
import Table from '.'
import {IClass} from '../../types'
import { Provider } from 'react-redux';
import {store} from '../../redux/store'


//  Sample simple test for task purposes ONLY
//more unit test should be done later

    let testClass:IClass[]=[{name:'first',sections:[{id:'1',section:'lions',students:1}],}];
     
  
describe('table component',()=>{
test('should render table element',()=>{

  render(
    <Provider store={store}>
  <Table 
      classFormShow={()=>{}}  classes={testClass} handleClickOpen={()=>{}} getCurrentClass={(currentClass:IClass)=>{}}  />
      </Provider>,
      );
const table =screen.getByRole('table')
expect(table).toBeInTheDocument()
expect(table.tagName).toEqual('TABLE')
})
})

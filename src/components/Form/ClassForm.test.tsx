import { screen,render} from '@testing-library/react'
import ClassForm from './ClassForm'
import {IClass} from '../../types'
import { Provider } from 'react-redux';
import {store} from '../../redux/store'


//  Sample simple test for task purposes ONLY
//more unit test should be done later

    let testClass:IClass={name:'first',sections:[{id:'1',section:'lions',students:1}],} 
     

describe('Class Form component',()=>{
test('should render 2 input feilds element',async ()=>{

    render(
    <Provider store={store}>
  <ClassForm 
      show={true}  classFormClose={()=>{}} curClass={testClass}  />
      </Provider>,
      );
const input=await screen.findAllByRole('textbox')
expect(input).toHaveLength(2)
})
})

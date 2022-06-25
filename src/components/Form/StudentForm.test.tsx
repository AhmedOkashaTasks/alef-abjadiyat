import { screen,render} from '@testing-library/react'
import StudentForm from './StudentForm'
import {IClass} from '../../types'
import { Provider } from 'react-redux';
import {store} from '../../redux/store'


//  Sample simple test for task purposes ONLY
//more unit test should be done later

let testClass:IClass={name:'first',sections:[{id:'1',section:'lions',students:1}],} 
  
describe('Student Form component',()=>{
test('should render 3 input feilds element',async ()=>{

    render(
    <Provider store={store}>
  <StudentForm 
      open={true}  handleClose={()=>{}} curClass={testClass}  />
      </Provider>,
      );
const input=await screen.findAllByRole('radio')
expect(input).toHaveLength(3)
})
})

require('@testing-library/react');
import { render, fireEvent } from '@testing-library/react'
import UserFormWithReducer from "../../components/UserFormWithReducer";



it('test update name', () => {
    const comp = render(<UserFormWithReducer />);
    const input = comp.getByLabelText('form-name-input-reducer');
    fireEvent.change(input, { target: { value: 'Daro' } });
 

    fireEvent.click(input);
    
   //incomplete test... view more in https://testing-library.com/
  })
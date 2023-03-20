import { render } from '@testing-library/react';
import Login from '../components/Forms/Login';

test ('<Login />A Cargar formulario Login', () =>{
    const wrapper = render(<Login />);
    wrapper.debug();
});
import { render } from '@testing-library/react';
import Register from '../components/Forms/Login';

test ('<Register /> A Cargar formulario Login', () =>{
    const wrapper = render(<Register />);
    wrapper.debug();
});
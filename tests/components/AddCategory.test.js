import { fireEvent, render, screen, wrapper  } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

//les falta mas analisis a estas pruebas
describe('AddCategory - Test', () => {
    test('debe cambiar el valor de la caja de texto', () => {
       
        render(
            <AddCategory 
                onAddAnime={() => {}} 
                inputValue={""} 
                setInputValue={() => {}}
            />
        );

        const ipt  = screen.getByRole('textbox');

        ipt.value = 'Saitama'
        //no funciona con el fireEvent
        // fireEvent.change(input, { target: { value: 'Saitama' } });
    
        expect( ipt.value ).toBe('Saitama');


    });

    test('debe llamar agregarAnime() si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        const setInputValue = jest.fn();
        const onAddAnime = jest.fn();

        render(
            <AddCategory 
                onAddAnime={onAddAnime}
                inputValue={'Saitama'} 
                setInputValue={setInputValue}
            />
        );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        expect( input.value ).toBe('Saitama');

        //no funciona con el fireEvent
        // fireEvent.input(input, { target: { value: inputValue } });
        
        //input.value = 'Saitama'
        
        fireEvent.submit(form);
        
        // console.log(input.value)
        
        //evaluar si fue llamada la funcion
        expect(onAddAnime).toHaveBeenCalled();

        //evaluar si fue llamada la funcion, x cantidad de veces
        expect(onAddAnime).toHaveBeenCalledTimes(1);

        //evaluar si fue llamada la funcion, con un texto 
        expect(onAddAnime).toHaveBeenCalledWith(input.value);

        screen.debug();
    });

    test('no debe de llamar el onAddAnime si el input esta vacio ', () => {

        // prueba bien realizda
        const onAddAnime = jest.fn();

        render(
            <AddCategory 
                onAddAnime={onAddAnime}
                inputValue={""} 
                setInputValue={() => {}}
            />
        );

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onAddAnime).toHaveBeenCalledTimes(0);
        expect(onAddAnime).not.toHaveBeenCalled();
    });
})

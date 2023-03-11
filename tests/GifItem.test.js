import ReactDOM from 'react-dom/client';
import { render, screen } from '@testing-library/react';
import { GifItem } from "../src/components/GifItem";


describe('GifItem - Test', () => {

    const title = "Goku";
    const url = "https://www.latercera.com/resizer/kMBcLnUVzd4zyy1YYTmqtjhJK4o=/768x0/smart/filters:quality(70):format(webp):no_upscale()/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/DTJTGBAZKBBNBD5Q3WFW25YXU4.gif";
    
    test('debe obligar a requerir los campos de url y titulo', () => {
        
        
        const { container, getByText, getByTestId } = render(
            <GifItem title={title} url={url} />
            )
            
            expect( container ).toMatchSnapshot();
            
            
        });
        
    test('debe mostrar la imagen con el URL y el ALT indicado', () => {

        render( <GifItem title={title} url={url} /> );

        // screen.debug();

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe existir el titulo en el componente', () => {
        
        render(
            <GifItem title={title} url={url} />
        );

        expect(screen.getByText(title)).toBeTruthy();
    });
})

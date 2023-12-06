import { render, screen } from '@testing-library/react';
import Greet from './greet';

describe('Greet', () => {
    test('should Greet renders correctly', () => {
        render(<Greet />);
        const textElement = screen.getByText(/Hello/);
        expect(textElement).toBeInTheDocument();
    });

    // test('should Greet renders a name', () => {
    //     render(<Greet name="Andy" />);
    //     const textElement = screen.getByText('Hello Andy');
    //     expect(textElement).toBeInTheDocument();
    // });
});

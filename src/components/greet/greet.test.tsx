import { render, screen } from '@testing-library/react';
import Greet from '.';

describe('Greet', () => {
    test.skip('should Greet renders correctly', () => {
        render(<Greet />);
        const textElement = screen.getByText('Hello');
        expect(textElement).toBeInTheDocument();
    });

    test.only('should Greet renders a name', () => {
        render(<Greet name="Andy" />);
        const textElement = screen.getByText('Hello Andy');
        expect(textElement).toBeInTheDocument();
    });
});

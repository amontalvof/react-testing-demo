import { render, screen } from '@testing-library/react';
import Greet from '.';

test('Greet renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
});

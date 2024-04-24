// react testing library

import { render, screen } from '@testing-library/react';
import Home from './Home';

describe("<Home />", () => {
    it("Renderizou o título", () => {
        render(<Home />);

        expect(screen.getByText("Home")).toBeInTheDocument();
    });
});

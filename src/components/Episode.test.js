import React from 'react';
import {render, screen} from '@testing-library/react';
import Episodes from './Episodes';

test('episodes component renders with no errors', () => {
    render(<Episodes episodes={[]}/>)
    screen.debug();
})
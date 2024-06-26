import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

import Add from '../components/Add'

describe('todo add', () => {
    test('armazenando valor do input', () => {
        render(<Add></Add>) // passa o componente que deseja testar

    })
})
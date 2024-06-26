import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

import Add from '../components/Add'

describe('todo add', () => {
    test('armazenando valor do input', async () => {
        render(<Add />) // passa o componente que deseja testar

        await userEvent.type( // tem os comandos nativos para interagir com a página
            screen.getByTestId('todo-input') // pega todos os elementos da tela 
            , 'segundo item todo' // passa o texto que deseja digitar
        )
 
        expect(screen.getByDisplayValue(/segundo item todo/)).toBeInTheDocument() // verifica se o texto foi digitado
    })
})
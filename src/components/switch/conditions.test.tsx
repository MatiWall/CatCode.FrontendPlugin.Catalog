import React from 'react';
import {test, expect} from 'vitest';
import { EntityProvider } from '../../contexts';
import { Entity } from '../../types';
import { isKind } from './conditions';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/vitest';


test('Testing isKind', ()=>{

    const entity: Entity = {
        apiVersion: 'test',
        kind: 'component',
        metadata: {},
        spec: {}
    }

    const IsKindComponent = ()=>{
        
        return (
        <>
        <div data-testid='is-kind'>{isKind('component') ? 'true' : 'false'}</div>
        <div data-testid='is-not-kind'>{isKind('notcomponent') ? 'true' : 'false'}</div>
        </>
        )
    }

    render(            
    <EntityProvider value={entity}>
        <IsKindComponent/>
    </EntityProvider>
    )

    expect(screen.getByTestId('is-kind')).toHaveTextContent('true');
    expect(screen.getByTestId('is-not-kind')).toHaveTextContent('false');


})
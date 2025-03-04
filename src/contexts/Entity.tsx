import React, {createContext, useContext    } from 'react';
import {Entity} from './../types';

const EntityContext = createContext<Entity | undefined>(undefined);



const EntityProvider = ({children, value}: {children: React.ReactNode, value?: Entity | undefined}) => {

    return (
        <EntityContext.Provider value={value}>
            {children}
        </EntityContext.Provider>
    )
} 

const useEntity = (): Entity => {
    const context = useContext<Entity | undefined>(EntityContext);

    if (!context){
        throw new Error('useEntity must be used within a EntityProvider.')
    }

    return context;
}


export {
    EntityProvider,
    useEntity
}
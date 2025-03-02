import React, {createContext, useContext    } from 'react';

const EntityContext = createContext({});



const EntityProvider = ({children}) => {

    return (
        <EntityContext.Provider value={{}}>
            {children}
        </EntityContext.Provider>
    )
} 

const useEntity = () => {
    const context = useContext(EntityContext);

    if (!context){
        throw new Error('useEntity must be used within a EntityProvider.')
    }

    return context;
}


export {
    EntityProvider,
    useEntity
}
import React from 'react';
import { createExtensionBluePrint } from '@plugger/frontend-extension';
import { catalogKindDataRef, catalogKindPageDataRef } from './CatalogEntity';


const catalogKindBlueprint = createExtensionBluePrint({
    namespace: 'catalog',
    name: 'entity',
    attachToo: {    namespace: 'catalog', name: 'entity', kind: 'home'},
    output: [catalogKindDataRef, catalogKindPageDataRef],
    provider: ({input , config, params}) => [
        catalogKindPageDataRef.with(params?.page),
        catalogKindDataRef.with(params?.kind)
    ]
})




export {
    catalogKindBlueprint
};
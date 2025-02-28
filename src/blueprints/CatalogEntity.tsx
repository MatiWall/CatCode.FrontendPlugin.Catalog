import React from 'react';
import { RoutingSwitch } from '../components';
import { createExtensionBluePrint } from '@plugger/frontend-extension';
import { PageBlueprint, NavbarItemBlueprint } from '@plugger/frontend-blueprints';
import {createRouteRef, useRouteRefParams} from '@plugger/frontend-routing'
import { catalogPageRouteRef } from './Catalog';


const catalogEntityPageRouteRef = catalogPageRouteRef.createSubRouteRef({
    params: ['kind', 'namespace', 'name']
});


const CatalogEntity = () => {

    const params = useRouteRefParams(catalogEntityPageRouteRef)
    return <>
        <div>kind: {params.kind}</div>
        <div>namespace: {params.namespace}</div>
        <div>name: {params.name}</div>
    </>
}


const catalogEntityPage = PageBlueprint.make({
    namespace: 'catalog',
    name: 'overview',
    kind: 'default',
    params: {
        page: CatalogEntity,
        routeRef: catalogEntityPageRouteRef

    }
})




export {
    catalogEntityPage,
    catalogEntityPageRouteRef
};
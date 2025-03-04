import React from 'react';
import { createRouteRef } from '@plugger/frontend-routing';
import { PageBlueprint, NavbarItemBlueprint, RouteBindBluePrint } from '@plugger/frontend-blueprints';


const catalogPageRouteRef = createRouteRef();

const Catalog = () => {



    return (<>
        <div>Catalog Dummy</div>
    </>)
}



const catalogPage = PageBlueprint.make({
    namespace: 'catalog',
    name: 'overview',
    kind: 'page',
    params: {
        page: Catalog,
        routeRef: catalogPageRouteRef

    }
})

const catalogPageNavbarItem = NavbarItemBlueprint.make({
    namespace: 'catalog',
    name: 'overview',
    kind: 'navbar',
    params: {
        title: 'Catalog',
        routeRef: catalogPageRouteRef
    }
})

const catalogPageRouteBind = RouteBindBluePrint.make({
    namespace: 'catalog',
    name: 'overview',
    kind: 'route-bind',
    params: {
        path: '/catalog',
        routeRef: catalogPageRouteRef
    }
})


export {
    catalogPage,
    catalogPageRouteBind,
    catalogPageNavbarItem,
    catalogPageRouteRef
};
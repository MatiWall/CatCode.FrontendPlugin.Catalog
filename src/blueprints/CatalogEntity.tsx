import React from 'react';
import { PageBlueprint, RouteBindBluePrint, pageRef, pageMountPointRef } from '@plugger/frontend-blueprints';
import {createRouteRef, useRouteRefParams} from '@plugger/frontend-routing'
import { createExtensionDataRef, createExtension, createExtensionInputNode } from '@plugger/frontend-extension';

import { EntitySwitch, isKind,  } from '../components';
import { EntityProvider, useEntity } from '../contexts';

const catalogEntityPageRouteRef = createRouteRef({
    params: ['kind', 'namespace', 'name']
});

const catalogKindDataRef = createExtensionDataRef();
const catalogKindPageDataRef = createExtensionDataRef();


const catalogEntityPageExtension = createExtension({
    namespace: 'catalog',
    name: 'entity',
    kind: 'home',
    attachToo: {namespace: 'app', name: 'app', kind: 'routes'},
    output: [
        pageRef,
        pageMountPointRef
    ],
    input: {
        kindPages: createExtensionInputNode({ref: catalogKindPageDataRef}),
        kinds: createExtensionInputNode({ref: catalogKindDataRef})
    },
    provider: ({input, config}) => {

        const pages = input.kindPages;
        const kinds = input.kinds;

        const KindSwitch = ({}) => {

            let items = []
            for (let i=0; i< pages.length; i++){
                const Page = pages[i];
                const kind = kinds[i];

                items.push(
                    <EntitySwitch.Case when={isKind(kind)}>
                    <Page/>
                    </EntitySwitch.Case>
                )

            }

            return (
                <EntitySwitch>
                    {items}
                </EntitySwitch>
            )
        }

        const CatalogEntityPage = ({}) => {

            return (
                <EntityProvider>
                    <KindSwitch></KindSwitch>
                </EntityProvider>
            )
        }

        return [
            pageRef.with(CatalogEntityPage), 
            pageMountPointRef.with(catalogEntityPageRouteRef),
        ]
    }
})

const catalogEntityPageBind = RouteBindBluePrint.make({
    namespace: 'catalog',
    name: 'entity',
    kind: 'route-bind',
    params: {
        path: '/catalog',
        routeRef: catalogEntityPageRouteRef
    }
})




export {
    catalogEntityPageRouteRef,
    catalogEntityPageBind,
    catalogKindDataRef,
    catalogKindPageDataRef,
    catalogEntityPageExtension
};
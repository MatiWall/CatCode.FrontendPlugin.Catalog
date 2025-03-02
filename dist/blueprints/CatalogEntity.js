import { jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { PageBlueprint, RouteBindBluePrint } from '@plugger/frontend-blueprints';
import { createRouteRef, useRouteRefParams } from '@plugger/frontend-routing';
const catalogEntityPageRouteRef = createRouteRef({
    params: ['kind', 'namespace', 'name']
});
const CatalogEntity = () => {
    const params = useRouteRefParams(catalogEntityPageRouteRef);
    return _jsxs(_Fragment, { children: [_jsxs("div", { children: ["kind: ", params.kind] }), _jsxs("div", { children: ["namespace: ", params.namespace] }), _jsxs("div", { children: ["name: ", params.name] })] });
};
const catalogEntityPage = PageBlueprint.make({
    namespace: 'catalog',
    name: 'entity',
    kind: 'home',
    params: {
        page: CatalogEntity,
        routeRef: catalogEntityPageRouteRef
    }
});
const catalogEntityPageBind = RouteBindBluePrint.make({
    namespace: 'catalog',
    name: 'entity',
    kind: 'route-bind',
    params: {
        path: '/catalog',
        routeRef: catalogEntityPageRouteRef
    }
});
export { catalogEntityPage, catalogEntityPageRouteRef, catalogEntityPageBind };
//# sourceMappingURL=CatalogEntity.js.map
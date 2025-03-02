import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { createRouteRef } from '@plugger/frontend-routing';
import { PageBlueprint, NavbarItemBlueprint, RouteBindBluePrint } from '@plugger/frontend-blueprints';
const catalogPageRouteRef = createRouteRef();
const Catalog = () => {
    return (_jsx(_Fragment, { children: _jsx("div", { children: "Catalog Dummy" }) }));
};
const catalogPage = PageBlueprint.make({
    namespace: 'catalog',
    name: 'overview',
    kind: 'page',
    params: {
        page: Catalog,
        routeRef: catalogPageRouteRef
    }
});
const catalogPageNavbarItem = NavbarItemBlueprint.make({
    namespace: 'catalog',
    name: 'overview',
    kind: 'navbar',
    params: {
        title: 'Catalog',
        routeRef: catalogPageRouteRef
    }
});
const catalogPageRouteBind = RouteBindBluePrint.make({
    namespace: 'catalog',
    name: 'overview',
    kind: 'route-bind',
    params: {
        path: '/catalog',
        routeRef: catalogPageRouteRef
    }
});
export { catalogPage, catalogPageRouteBind, catalogPageNavbarItem, catalogPageRouteRef };
//# sourceMappingURL=Catalog.js.map
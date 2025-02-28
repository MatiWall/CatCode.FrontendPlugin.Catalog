import { jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { PageBlueprint } from '@plugger/frontend-blueprints';
import { useRouteRefParams } from '@plugger/frontend-routing';
import { catalogPageRouteRef } from './Catalog';
const catalogEntityPageRouteRef = catalogPageRouteRef.createSubRouteRef({
    params: ['kind', 'namespace', 'name']
});
const CatalogEntity = () => {
    const params = useRouteRefParams(catalogEntityPageRouteRef);
    return _jsxs(_Fragment, { children: [_jsxs("div", { children: ["kind: ", params.kind] }), _jsxs("div", { children: ["namespace: ", params.namespace] }), _jsxs("div", { children: ["name: ", params.name] })] });
};
const catalogEntityPage = PageBlueprint.make({
    namespace: 'catalog',
    name: 'overview',
    kind: 'default',
    params: {
        page: CatalogEntity,
        routeRef: catalogEntityPageRouteRef
    }
});
export { catalogEntityPage, catalogEntityPageRouteRef };
//# sourceMappingURL=CatalogEntity.js.map
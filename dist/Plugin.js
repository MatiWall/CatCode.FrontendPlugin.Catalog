import { createPlugin } from "@plugger/frontend-extension";
import { catalogEntityPage, catalogEntityPageRouteRef, catalogEntityPageBind, catalogPage, catalogPageNavbarItem, catalogPageRouteBind, catalogPageRouteRef } from "./blueprints";
const catalogPlugin = createPlugin({
    id: 'catalog',
    extensions: [
        catalogPage,
        catalogPageNavbarItem,
        catalogPageRouteBind,
        catalogEntityPage,
        catalogEntityPageBind
    ],
    routes: {
        catalog: catalogPageRouteRef,
        catalogEntity: catalogEntityPageRouteRef
    }
});
export { catalogPlugin };
//# sourceMappingURL=Plugin.js.map
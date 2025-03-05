import { createPlugin } from "@plugger/frontend-extension";
import { 
    catalogEntityPageExtension, 
    catalogEntityPageRouteRef, 
    catalogEntityPageBind,
    catalogPage , 
    catalogPageNavbarItem, 
    catalogPageRouteBind, 
    catalogPageRouteRef 
} from "./blueprints";

const catalogPlugin = createPlugin({
    id: 'catalog',
    extensions: [
        catalogPage,
        catalogPageNavbarItem,
        catalogPageRouteBind, 
        catalogEntityPageExtension,
        catalogEntityPageBind
    ],
    routes: {
        catalog: catalogPageRouteRef,
        catalogEntity: catalogEntityPageRouteRef
    }
})


export {
    catalogPlugin
}
import { createPlugin } from "@plugger/frontend-extension";
import { 
    catalogEntityPage, 
    catalogEntityPageRouteRef, 
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
        catalogEntityPage
    ],
    routes: {
        catalog: catalogPageRouteRef,
        catalogEntity: catalogEntityPageRouteRef
    }
})


export {
    catalogPlugin
}
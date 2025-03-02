declare const catalogPlugin: import("@plugger/frontend-extension").Plugin<{
    catalog: import("@plugger/frontend-routing").RouteRef<readonly string[]>;
    catalogEntity: import("@plugger/frontend-routing").RouteRef<string[]>;
}, {}>;
export { catalogPlugin };

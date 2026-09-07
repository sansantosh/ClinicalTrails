import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route("/", "routes/navigation/navigation.component.tsx", [
        index("routes/home.tsx"),
    ]),
    route("about", "routes/about.tsx"),
] satisfies RouteConfig;

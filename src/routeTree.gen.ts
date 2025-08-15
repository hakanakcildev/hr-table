import { createRootRoute, createRoute } from "@tanstack/react-router";
import { Root } from "./router/__root";
import { Index } from "./router/index";
import { EmployeeDetails } from "./router/employee-details";

export const __rootRoute = createRootRoute({
  component: Root,
});

const indexRoute = createRoute({
  getParentRoute: () => __rootRoute,
  path: "/",
  component: Index,
});

const employeeDetailsRoute = createRoute({
  getParentRoute: () => __rootRoute,
  path: "/employee/$employeeName",
  component: EmployeeDetails,
});

declare module "@tanstack/react-router" {
  interface Register {
    routeTree: typeof __rootRoute;
  }
}

export const routeTree = __rootRoute.addChildren([
  indexRoute,
  employeeDetailsRoute,
]);

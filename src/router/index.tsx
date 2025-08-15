import { createRoute } from "@tanstack/react-router";
import { EmployeeDataTable } from "@/components/data-table";
import { __rootRoute } from "../routeTree.gen";

export const Route = createRoute({
  getParentRoute: () => __rootRoute,
  path: "/",
  component: Index,
});

export function Index() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold max-w-[1280px] m-auto">
        Employee Management System
      </h1>
      <EmployeeDataTable />
    </div>
  );
}

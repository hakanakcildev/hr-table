import { createRoute, useParams } from "@tanstack/react-router";
import { useEmployees } from "@/hooks/use-employees";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, Globe, MapPin, Building } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { __rootRoute } from "../routeTree.gen";
import { slugify } from "@/lib/utils";

export const Route = createRoute({
  getParentRoute: () => __rootRoute,
  path: "/employee/$employeeName",
  component: EmployeeDetails,
});

export function EmployeeDetails() {
  const { employeeName } = useParams({ from: "/employee/$employeeName" });
  const { data: employees, isLoading, isError } = useEmployees();

  const employee = employees?.find((emp) => slugify(emp.name) === employeeName);

  if (isLoading) {
    return (
      <div className="p-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (isError || !employee) {
    return (
      <div className="p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Employee Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The employee you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Employees
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-[1280px] mx-auto flex flex-col gap-2">
      <div className="mb-6">
        <Link to="/">
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Employees
          </Button>
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {employee.name}
              </h1>
              <p className="text-lg text-gray-600">{employee.company.name}</p>
            </div>
            <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
              ID: {employee.id}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
                Contact Information
              </h3>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 " />
                <div>
                  <p className="text-sm ">Email</p>
                  <a
                    href={`mailto:${employee.email}`}
                    className=" hover:underline"
                  >
                    {employee.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 " />
                <div>
                  <p className="text-sm ">Phone</p>
                  <a
                    href={`tel:${employee.phone}`}
                    className=" hover:underline"
                  >
                    {employee.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 " />
                <div>
                  <p className="text-sm ">Website</p>
                  <a
                    href={employee.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:underline"
                  >
                    {employee.website}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
                Company Details
              </h3>

              <div className="flex items-center space-x-3">
                <Building className="h-5 w-5 " />
                <div>
                  <p className="text-sm ">Company</p>
                  <p className="font-medium">{employee.company.name}</p>
                </div>
              </div>

              <div>
                <p className="text-sm ">Catch Phrase</p>
                <p className=" italic">"{employee.company.catchPhrase}"</p>
              </div>

              <div>
                <p className="text-sm ">Business Strategy</p>
                <p>{employee.company.bs}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
                Address
              </h3>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5  mt-1" />
                <div>
                  <p>
                    {employee.address.street}, {employee.address.suite}
                  </p>
                  <p>
                    {employee.address.city}, {employee.address.zipcode}
                  </p>
                  <p className="text-sm ">
                    Coordinates: {employee.address.geo.lat},{" "}
                    {employee.address.geo.lng}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

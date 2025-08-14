import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Employee } from "@/lib/schema";

interface EmployeeDetailModalProps {
  employee: Employee | null;
  isOpen: boolean;
  onClose: () => void;
}

export function EmployeeDetailModal({
  employee,
  isOpen,
  onClose,
}: EmployeeDetailModalProps) {
  if (!isOpen || !employee) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 shadow-lg " onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl mx-4 bg-gray-300 rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">{employee.name}</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-lg mb-3 border-b">
                Employee Details
              </h3>
              <div className="space-y-2">
                <div>
                  <span className="font-bold">ID:</span> {employee.id}
                </div>
                <div>
                  <span className="font-bold">Name:</span> {employee.name}
                </div>
                <div>
                  <span className="font-bold">E-mail:</span>{" "}
                  <a
                    href={`mailto:${employee.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {employee.email}
                  </a>
                </div>
                <div>
                  <span className="font-bold">Phone:</span> {employee.phone}
                </div>
                <div>
                  <span className="font-bold">Website:</span>{" "}
                  <a
                    href={`http://${employee.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {employee.website}
                  </a>
                </div>
              </div>
            </div>
            <div className="border-b"></div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Adress Details</h3>
              <div className="space-y-2">
                <div>
                  <span className="font-bold">City:</span>{" "}
                  {employee.address.city}
                </div>
                <div>
                  <span className="font-bold">Street:</span>{" "}
                  {employee.address.street}
                </div>
                <div>
                  <span className="font-bold">Suit:</span>{" "}
                  {employee.address.suite}
                </div>
                <div>
                  <span className="font-bold">Zipcode:</span>{" "}
                  {employee.address.zipcode}
                </div>
                <div>
                  <span className="font-bold">Coordinates:</span>{" "}
                  {employee.address.geo.lat}, {employee.address.geo.lng}
                </div>
              </div>
            </div>
          </div>
          <div className="border-b"></div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Company Details</h3>
            <div className="space-y-2">
              <div>
                <span className="font-bold">Company Name:</span>{" "}
                {employee.company.name}
              </div>
              <div>
                <span className="font-bold">Slogan:</span>{" "}
                {employee.company.catchPhrase}
              </div>
              <div>
                <span className="font-bold">Business:</span>{" "}
                {employee.company.bs}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end p-6 border-t">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
}

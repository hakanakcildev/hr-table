import { useEmployees } from "./hooks/use-employees";
import { EmployeeDataTable } from "./components/data-table";

function App() {
  const { data: employees, isLoading, isError, error } = useEmployees();

  if (isLoading) {
    return <div className="p-4">Loading employee data...</div>;
  }

  if (isError) {
    return <div className="p-4 text-red-500">Error: {error.message}</div>;
  }

  if (!employees) {
    return <div className="p-4">No data available.</div>;
  }

  return (
    <div className="container mx-auto py-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Management Dashboard</h1>
      <EmployeeDataTable />
    </div>
  );
}

export default App;

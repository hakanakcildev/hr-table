import api from "@/lib/api";
import { usersSchema } from "@/lib/schema";
import { useQuery } from "@tanstack/react-query";

const employeesData = async () => {
  const response = await api.get("/users");

  const data = response.data;

  return usersSchema.parse(data);
};

export const useEmployees = () => {
  return useQuery({
    queryKey: ["employees"],
    queryFn: employeesData,
  });
};

import { useQuery } from "react-query";
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
     const { user } = useAuth();
     const [axiosSecure] = useAxiosSecure();

     const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
          queryKey: ["isAdmin", user?.email],
          queryFn: async () => {
               const res = await axiosSecure.get(`/users/admin/${user?.email}`)
               return res.data.admin;
          }
     })
     console.log(isAdmin);
     return [isAdmin, isAdminLoading];
}

export default useAdmin;
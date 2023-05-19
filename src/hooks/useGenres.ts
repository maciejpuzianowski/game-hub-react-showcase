import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";
const api = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: api.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGenres;

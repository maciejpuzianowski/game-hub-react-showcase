import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import { Platform } from "../entities/Platform";

const api = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: api.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatforms;

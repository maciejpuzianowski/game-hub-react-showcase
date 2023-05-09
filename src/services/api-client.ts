import axios from "axios";

export default axios.create({
  params: {
    key: "ed9a6fd48fa54ccca583c179525c9136",
  },
  baseURL: "https://api.rawg.io/api",
});

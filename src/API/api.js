import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.10.99:4000/",
});
apiClient.addAsyncRequestTransform(async (request) => {
  const token = await localStorage.getItem("token");
  request.headers["x-access-token"] = token;
});
export { apiClient };

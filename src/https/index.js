import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
})

//API ENDPOINTS
export const login = (data) => api.post("/auth/login", data);
export const logout = () => api.post("/auth/logout");
// exports const register = (data) => api.post("/auth/register", data);
export const getUserData = () =>  api.get("/user");


//Table Endpoint
export const addTable = (data) => api.post("/table", data);
export const getTables = () => api.get("/table");
export const updateTable = ({tableId, ...tableData}) => api.put(`/table/${tableId}`, tableData);

//add Order
export const createOrder = (data) => api.post("/order", data);
export const getOrders = () => api.get("/order");


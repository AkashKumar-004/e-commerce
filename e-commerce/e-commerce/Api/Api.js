import axios from "axios";
const API="http://localhost:7777";
const getProjects =()=>axios.get(`${API}/product/all`)
const getcart=()=>axios.get(`${API}/cart/all`)
const addcart=(data)=>axios.post(`${API}/cart/add`,data)
const deletecart=(id)=>axios.delete(`${API}/cart/delete/${id}`)
export {getProjects,getcart,addcart,deletecart}
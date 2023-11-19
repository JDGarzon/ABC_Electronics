import {useEffect, useState} from 'react'
import axios from  '../config/axios'
import OrderTable from '../components/OrderTable'
import OrderForm from '../components/OrderForm'
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom';
import {TableRow, TableCell, Button} from '@mui/material'
function OrderList() {
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState([])
  const [orderEdit, setOrderEdit] = useState({})

  const getOrders = async () => {
    try {
      const res = await axios.get("/orders", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log(res.data);
      setOrderList(res.data);
      console.log(orderList)
    } catch (e) {
      console.log(e);
      if (e.response && e.response.status === 401) {
        console.log("No autorizado");
      }
    }
  };

  useEffect( () => {
    getOrders()}, [])

  const addOrder = async (Order) => {
    console.log(Order)
    if (Order.OrderId==undefined){
      try{
        const res = await axios.post("/orders", Order, {
          headers: {
            Authorization:  localStorage.getItem("token"),
          }})
        if(res.status==200)
        getOrders()
      }catch (e){
        console.log(e)
      }
    }else{
      try{
        const res = await axios.put("/orders/"+Order.OrderId, Order, {
          headers: {
            Authorization:  localStorage.getItem("token"),
          }})
        if(res.status==200)
        getOrders()
      }catch (e){
        console.log(e)
      }

    }  
  }

  const delOrder = async (id) => {
    console.log(id)
    try {
      const res = await axios.delete("/orders/"+id, {
        headers: {
          Authorization:  localStorage.getItem("token"),
        }})
      if(res.status==200)
      getOrders()
    }catch (e){
      console.log(e)
    }
  }

  return (
    <Context.Provider value={{orderEdit, setOrderEdit}}>
      <TableRow>
        <TableCell><Button variant="contained" color="success" onClick={()=>{navigate("/orders")}}>Orders</Button></TableCell>
        <TableCell><Button variant="contained" color="success" onClick={()=>{navigate("/products")}}>Products</Button></TableCell>
        <TableCell><Button variant="contained" color="success" onClick={()=>{navigate("/customers")}}>Customers</Button></TableCell>
        <TableCell><Button variant="contained" color="success" onClick={()=>{navigate("/orderDetails")}}>Orders Details</Button></TableCell>
        <TableCell><Button variant="contained" color="success" onClick={()=>{navigate("/categories")}}>Categories</Button></TableCell>
      </TableRow>
      <OrderForm addOrder={addOrder} orderEdit={orderEdit}/>
      <OrderTable orderList={orderList} deleteOrder={delOrder} editOrder={setOrderEdit}/>

    </Context.Provider>
  )
}

export default OrderList
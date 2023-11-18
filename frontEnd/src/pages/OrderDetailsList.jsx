import {useEffect, useState} from 'react'
import axios from  '../config/axios'
import OrderTable from '../components/OrderDetailTable'
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom';
import {  TableCell, Button} from '@mui/material'
import OrderDetailForm from '../components/OrderDetailForm';

function OrderDetailsList() {
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState([])
  const [orderEdit, setOrderEdit] = useState({id:{orderNumber:"",productId:""}, quantity:"", price:""})

  const getOrders = async () => {
    try {
      const res = await axios.get("/orderDetails", {
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
    console.log("useEffect:",orderEdit)
    getOrders()}, [])

  const addOrder = async (Order) => {
    
    if (Order.OrderId==undefined){
      try{
        console.log(Order)
        const res = await axios.post("/orderDetails", Order, {
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
        const res = await axios.put("/orderDetails/"+Order.id, Order, {
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
      const res = await axios.delete("/orderDetails/"+id, {
        headers: {
          Authorization:  localStorage.getItem("token"),
        }})
      if(res.status==200)
      getOrders()
    }catch (e){
      console.log(e)
    }
    //<OrderForm addOrder={addOrder} orderEdit={orderEdit} />
  }

  return (
    <Context.Provider value={{orderEdit, setOrderEdit}}>
      <TableCell align="left">
      <Button variant="contained" color="success" onClick={()=>{navigate("/products")}}>Products</Button>
      </TableCell>
      <OrderDetailForm addOrder={addOrder} orderDetailEdit={orderEdit} />
      <OrderTable orderList={orderList} deleteOrder={delOrder} editOrder={setOrderEdit}/>

    </Context.Provider>
  )
}

export default OrderDetailsList
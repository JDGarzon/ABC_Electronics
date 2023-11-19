import {useEffect, useState} from 'react'
import axios from  '../config/axios'
import CustomerTable from '../components/CustomerTable'
import CustomerForm from '../components/CustomerForm'
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom';
import {TableRow,  TableCell, Button} from '@mui/material'

function CustomerList() {
  const navigate = useNavigate();
  const [customerList, setCustomerList] = useState([])
  const [CustomerEdit, setCustomerEdit] = useState({})

  const getCustomers = async () => {
    try {
      const res = await axios.get("/customers", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log(res.data);
      setCustomerList(res.data);
      console.log(customerList)
    } catch (e) {
      console.log(e);
      if (e.response && e.response.status === 401) {
        console.log("No autorizado");
      }
    }
  };

  useEffect( () => {
    getCustomers()}, [])

  const addCustomer = async (Customer) => {
    console.log(Customer)
    if (Customer.customerId==undefined){
      try{
        const res = await axios.post("/customers", Customer, {
          headers: {
            Authorization:  localStorage.getItem("token"),
          }})
        if(res.status==200)
        getCustomers()
      }catch (e){
        console.log(e)
      }
    }else{
      try{
        const res = await axios.put("/customers/"+Customer.customerId, Customer, {
          headers: {
            Authorization:  localStorage.getItem("token"),
          }})
        if(res.status==200)
        getCustomers()
      }catch (e){
        console.log(e)
      }

    }  
  }

  const delCustomer = async (id) => {
    console.log(id)
    try {
      const res = await axios.delete("/customers/"+id, {
        headers: {
          Authorization:  localStorage.getItem("token"),
        }})
      if(res.status==200)
      getCustomers()
    }catch (e){
      console.log(e)
    }
  }

  return (
    <Context.Provider value={{CustomerEdit, setCustomerEdit}}>
      <TableRow>
        <TableCell><Button variant="contained" color="success" onClick={()=>{navigate("/orders")}}>Orders</Button></TableCell>
        <TableCell><Button variant="contained" color="success" onClick={()=>{navigate("/products")}}>Products</Button></TableCell>
        <TableCell><Button variant="contained" color="success" onClick={()=>{navigate("/customers")}}>Customers</Button></TableCell>
        <TableCell><Button variant="contained" color="success" onClick={()=>{navigate("/orderDetails")}}>Orders Details</Button></TableCell>
        <TableCell><Button variant="contained" color="success" onClick={()=>{navigate("/categories")}}>Categories</Button></TableCell>
      </TableRow>
      <CustomerForm addCustomer={addCustomer} customerEdit={CustomerEdit}/>
      <CustomerTable customerList={customerList} deleteCustomer={delCustomer} editCustomer={setCustomerEdit}/>

    </Context.Provider>
  )
}

export default CustomerList
import {useEffect, useState} from 'react'
import axios from  '../config/axios'
import CategoryTable from '../components/CategoryTable'
import CategoryForm from '../components/CategoryForm'
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom';
import {TableRow,  TableCell, Button} from '@mui/material'

function CategoryList() {
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([])
  const [CategoryEdit, setCategoryEdit] = useState({})

  const getCategorys = async () => {
    try {
      const res = await axios.get("/categories", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log(res.data);
      setCategoryList(res.data);
      console.log(CategoryList)
    } catch (e) {
      console.log(e);
      if (e.response && e.response.status === 401) {
        console.log("No autorizado");
      }
    }
  };

  useEffect( () => {
    getCategorys()}, [])

  const addCategory = async (Category) => {
    console.log(Category)
    try{
        const res = await axios.put("/categories/"+Category.code, Category, {
          headers: {
            Authorization:  localStorage.getItem("token"),
          }})
        if(res.status==200){
            getCategorys()
        }
      }catch (e){ 
        try{
            const res = await axios.post("/categories", Category, {
              headers: {
                Authorization:  localStorage.getItem("token"),
              }})
            if(res.status==200)
            getCategorys()
          }catch (e2){
            console.log(e)
            console.log(e2)
          }
      }
    if (Category.code==undefined){
      
    }else{
      

    }  
  }

  const delCategory = async (id) => {
    console.log(id)
    try {
      const res = await axios.delete("/categories/"+id, {
        headers: {
          Authorization:  localStorage.getItem("token"),
        }})
      if(res.status==200)
      getCategorys()
    }catch (e){
      console.log(e)
    }
  }

  return (
    <Context.Provider value={{CategoryEdit, setCategoryEdit}}>
      <TableRow>
        <TableCell><Button variant="contained" color="success" onClick={()=>{navigate("/orders")}}>Orders</Button></TableCell>
        <TableCell><Button variant="contained" color="success" onClick={()=>{navigate("/products")}}>Products</Button></TableCell>
        <TableCell><Button variant="contained" color="success" onClick={()=>{navigate("/customers")}}>Customers</Button></TableCell>
        <TableCell><Button variant="contained" color="success" onClick={()=>{navigate("/orderDetails")}}>Orders Details</Button></TableCell>
        <TableCell><Button variant="contained" color="success" onClick={()=>{navigate("/categories")}}>Categories</Button></TableCell>
      </TableRow>
      <CategoryForm addCategory={addCategory} categoryEdit={CategoryEdit}/>
      <CategoryTable categoryList={categoryList} deleteCategory={delCategory} editCategory={setCategoryEdit}/>

    </Context.Provider>
  )
}

export default CategoryList
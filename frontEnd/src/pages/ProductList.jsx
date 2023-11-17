import {useEffect, useState} from 'react'
//import tasks from  '../data/todos.json'
import axios from  '../config/axios'
import ProductTable from '../components/ProductTable'
import ProductForm from '../components/ProductForm'
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom';
import {  TableCell, Button} from '@mui/material'

function ProductList() {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([])
  const [productEdit, setProductEdit] = useState({})

  const getProducts = async () => {
    try {
      const res = await axios.get("/products", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log(res.data);
      setProductList(res.data);
      console.log(productList)
    } catch (e) {
      console.log(e);
      if (e.response && e.response.status === 401) {
        console.log("No autorizado");
        navigate('/');
      }
    }
  };

  useEffect( () => {
    getProducts()}, [])

  const addProduct = async (product) => {
    console.log(product)
    if (product.productId==undefined){
      try{
        const res = await axios.post("/products", product, {
          headers: {
            Authorization:  localStorage.getItem("token"),
          }})
        if(res.status==200)
        getProducts()
      }catch (e){
        console.log(e)
      }
    }else{
      try{
        const res = await axios.put("/products/"+product.productId, product, {
          headers: {
            Authorization:  localStorage.getItem("token"),
          }})
        if(res.status==200)
        getProducts()
      }catch (e){
        console.log(e)
      }

    }  
  }

  const delProduct = async (id) => {
    console.log(id)
    try {
      const res = await axios.delete("/products/"+id, {
        headers: {
          Authorization:  localStorage.getItem("token"),
        }})
      if(res.status==200)
      getProducts()
    }catch (e){
      console.log(e)
    }
  }

  return (
    <Context.Provider value={{productEdit, setProductEdit}}>
      <TableCell align="left">
      <Button variant="contained" color="success" onClick={()=>{navigate("/books")}}>Books</Button>
      </TableCell>
      <ProductForm addProduct={addProduct} ProductEdit={productEdit}/>
      <ProductTable productList={productList} deleteProduct={delProduct} editProduct={setProductEdit}/>

    </Context.Provider>
  )
}

export default ProductList
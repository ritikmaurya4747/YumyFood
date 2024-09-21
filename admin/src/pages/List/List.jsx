import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import {toast} from 'react-toastify'

function List() {

  const url = "http://localhost:4000"
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    
    if(response.data.success){
      setList(response.data.data);
    }else{
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  },[])

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
  console.log(item.image_url); // Check the image URL
  return (
    <div key={index} className='list-table-format'>
      <img src={item.image} alt="" />
      <p>{item.name}</p>
      <p>{item.category}</p>
      <p>${item.price}</p>
      <p>X</p>
    </div>
  );
})}

      </div>
    </div>
  )
}

export default List
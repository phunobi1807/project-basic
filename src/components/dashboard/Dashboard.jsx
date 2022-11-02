import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [dataCity, setDataCity] = useState([]);

  const getDataCity = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/city/getall");
      setDataCity(res.data.data);
      // console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteCity = async (id) => {
    await axios.delete(`http://localhost:3000/api/city/delete/${id}`);
    getDataCity();
}
  useEffect(() => {
    getDataCity();
  }, [])

  return (
    <>
    <Link to={"/add"}>Add</Link>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>City Name</th>
            <th>Publish</th>
            <th>Create At</th>
            <th>Update At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            dataCity.map((data, i) => {
              return (
                <tr key={data.id}>
                  <td>{i + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.publish}</td>
                  <td>{data.created_at}</td>
                  <td>{data.updated_at}</td>
                  <td>
                  <Link to={`/edit/${data.id}`}>Edit</Link>
                  <button onClick={ () => deleteCity(data.id) }>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </>
  )
}

export default Dashboard
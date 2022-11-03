import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import cityApi from "../../api/cityApi";
import { authHeader } from "../../services/auth-header";

const Dashboard = () => {
  const [dataCity, setDataCity] = useState([]);

  const getDataCity = async () => {
    try {
      const res = await cityApi.getAll();
      setDataCity(res.data.data);
      // console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCity = async (id) => {
    await cityApi.delete(id);
    getDataCity();
  };

  const Logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  useEffect(() => {
    getDataCity();
  }, []);
  // sessionStorage.setItem("name", "phu");
  return (
    <>
      <Link to={"/add"}>Add</Link>
      <Link onClick={Logout} style={{ marginLeft: "20px" }}>
        Logout
      </Link>
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
          {dataCity.map((data, i) => {
            return (
              <tr key={data.id}>
                <td>{i + 1}</td>
                <td>{data.name}</td>
                <td>{data.publish}</td>
                <td>{data.created_at}</td>
                <td>{data.updated_at}</td>
                <td>
                  <Link to={`/edit/${data.id}`}>Edit</Link>
                  <button onClick={() => deleteCity(data.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Dashboard;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { authHeader } from "../../../services/auth-header";
import cityApi from "../../../api/cityApi";

const EditCity = () => {
  const [name, setName] = useState("");
  const [publish, setPublish] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const data = {
        name: name,
        publish: publish
    }
  const updateCity = async (e) => {
    e.preventDefault();
    // await axios.put(`http://localhost:3000/api/city/update-publish/${id}`, data);
    await cityApi.update(id, data)
    navigate("/dashboard");
  };

  const getCityById = async () => {
    const response = await cityApi.get(id)
    setName(response.data.data.name);
    setPublish(response.data.data.publish);
  };
  useEffect(() => {
    getCityById();
  }, []);
  return (
    <>
      <form onSubmit={updateCity}>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Publish</label>
          <input
            className="input"
            type="text"
            placeholder="Publish"
            value={publish}
            onChange={(e) => setPublish(e.target.value)}
          />
        </div>

        <div className="field">
          <button className="button">Update</button>
        </div>
      </form>

    </>
  );
};

export default EditCity;

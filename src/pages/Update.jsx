import React, { useEffect, useState } from "react";
import FormCom from "../components/UI/Form";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate({});

  const getUserById = async () => {
    const response = await fetch(
      `https://62ddef1a153d8466.mokky.dev/todos/${id}`
    );
    const result = await response.json();
    setData(result);
  };

  const onsendRequest = async (data) => {
    await fetch(`https://62ddef1a153d8466.mokky.dev/todos/${id}`, {
      method: `PATCH`,
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    navigate("/");
  };
  useEffect(() => {
    getUserById();
  }, [id]);

  return data.id ? (
    <FormCom onSubmit={onsendRequest} buttontext="Update" data={data} />
  ) : (
    <p>...Loading</p>
  );
};

export default Update;

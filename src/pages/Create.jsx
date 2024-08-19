import styled from "styled-components";
import FormCom from "../components/UI/Form";
import {  useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();


  const onsendRequest = async (data) => {
    const { id, ...rest } = data;
    const response = await fetch("https://62ddef1a153d8466.mokky.dev/todos", {
      method: `POST`,
      body: JSON.stringify(rest),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (response.ok !== false) {
      navigate(`/`);
      return;
    }
  };

  return (
    <div>
      <FormCom onSubmit={onsendRequest} buttontext="Add" />;
    </div>
  );
};

export default Create;


import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const formReducer = (state, action) => {
  switch (action.type) {
    case "firstname":
      return { ...state, firstname: action.payload };
    case "lastname":
      return { ...state, lastName: action.payload };
    case "age":
      return { ...state, age: action.payload };
    case "reset":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const FormCom = ({ buttontext, onSubmit, data }) => {
  const [formvalue, dispatch] = useReducer(formReducer, {
    id: "",
    firstname: "",
    lastName: "",
    age: "",
  });

  const navigate = useNavigate();

  const firstNamevalueHandler = (e) => {
    dispatch({ type: "firstname", payload: e.target.value });
  };

  const lastNamevalueHandler = (e) => {
    dispatch({ type: "lastname", payload: e.target.value });
  };

  const agevalueHandler = (e) => {
    dispatch({ type: "age", payload: e.target.value });
  };

  function onSubmitFn(e) {
    e.preventDefault();
    onSubmit(formvalue);
    dispatch({ type: "" });
  }

  function goBack() {
    navigate(`/`);
  }

  useEffect(() => {
    if (data) {
      dispatch({ type: "reset", payload: data });
    }
  }, [data]);

  return (
    <StyledForm onSubmit={onSubmitFn}>
      <FormGroup>
        <StyledLabel>First Name</StyledLabel>
        <StyledInput
          value={formvalue.firstname}
          onChange={firstNamevalueHandler}
          required
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <StyledLabel>Last Name</StyledLabel>
        <StyledInput
          value={formvalue.lastName}
          onChange={lastNamevalueHandler}
          required
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <StyledLabel>Age</StyledLabel>
        <StyledInput
          value={formvalue.age}
          onChange={agevalueHandler}
          required
          type="number"
        />
      </FormGroup>
      <ButtonGroup>
        <StyledButton type="submit">{buttontext}</StyledButton>
        <StyledButton type="button" onClick={goBack}>
          Cancel
        </StyledButton>
      </ButtonGroup>
    </StyledForm>
  );
};

export default FormCom;

const StyledForm = styled.form`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  color: #fff;
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

 
`;

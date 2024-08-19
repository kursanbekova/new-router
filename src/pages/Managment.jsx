import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Managment = () => {
  const [datas, setDatas] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://62ddef1a153d8466.mokky.dev/todos");
    const result = await response.json();
    setDatas(result);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <AddButton to={"/kowuu"}>Add</AddButton>

      <StyledTable>
        <thead>
          <tr>
            <Th>N</Th>
            <Th>First Name</Th>
            <Th>Last Name </Th>
            <Th>Age</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item, index) => {
            return (
              <StyledTr key={item.id}>
                <Td>{++index}</Td>
                <Td>{item.firstname}</Td>
                <Td>{item.lastname}</Td>
                <Td>{item.age}</Td>
                <Td>
                  <ActionButton>
                    <Link to={`update/${item.id}`}>edit</Link>
                  </ActionButton>
                </Td>
              </StyledTr>
            );
          })}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default Managment;

const AddButton = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const StyledTable = styled.table`
  border: 2px solid grey;
  padding: 10px;
  border-radius: 6px;
  max-width: 700px;
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
`;

const Th = styled.th`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const ActionButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  transition: background-color 0.3s;
  &:hover {
    background-color: #218838;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

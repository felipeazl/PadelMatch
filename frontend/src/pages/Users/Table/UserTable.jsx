import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import "./UserTable.css";

export default function UserTable() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await api.get("/users");

    const data = response.data;

    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = (cpf) => {
    api.delete(`user/${cpf}`);
    setUsers(
      users.filter((user) => {
        return user.cpf !== cpf;
      })
    );
  };

  return (
    <div className="table-container">
      <table id="users">
        <thead>
          <tr>
            <th>CPF</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Pontuação</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.cpf}>
              <td>{user.cpf}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.score}</td>
              <td>
                <button
                  id={user.cpf}
                  className="delete-button"
                  onClick={() => deleteUser(user.cpf)}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React, { useEffect, useState, useRef } from "react";
import api from "../../../../services/api";
import "./OpenTournamentTable.css";
import { Link } from "react-router-dom";

export default function OpenTournamentTable() {
  const [tournaments, setTournaments] = useState([]);
  const get_id = useRef();

  const getTournaments = async () => {
    const id = get_id.current;
    const response = await api.get(`/tournaments/${id}`);

    const data = response.data;

    setTournaments(data);
  };

  useEffect(() => {
    getTournaments();
  }, []);

  const [pairs, setPairs] = useState([]);

  const getPairs = async () => {
    const response = await api.get("/pairs");

    const data = response.data;

    setPairs(data);
  };

  useEffect(() => {
    getPairs();
  }, []);

  const deletePair = (id) => {
    api.delete(`pairs/${id}`);
    setPairs(
      pairs.filter((pair) => {
        return pair.id !== id;
      })
    );
  };

  return (
    <div className="table-container">
      <table id="tournaments">
        <thead>
          <tr>
            <th>Jogador 1</th>
            <th>Jogador 2</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pairs.map((pair) => (
            <tr key={pair.id}>
              <td>{pair.player1}</td>
              <td>{pair.player2}</td>
              <td>
                <button
                  id={pair.id}
                  className="delete-button"
                  onClick={() => deletePair(pair.id)}
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

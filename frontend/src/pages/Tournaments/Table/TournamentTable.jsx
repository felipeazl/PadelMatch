import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import "./TournamentTable.css";
import { Routes, Route, Link, useParams } from "react-router-dom";
import OpenTournament from "../OpenTournament/OpenTournament";

export default function TournamentTable() {
  const [tournaments, setTournaments] = useState([]);

  const getTournaments = async () => {
    const response = await api.get("/tournaments");

    const data = response.data;

    setTournaments(data);
  };

  useEffect(() => {
    getTournaments();
  }, []);

  const deleteTournament = (id) => {
    api.delete(`tournaments/${id}`);
    setTournaments(
      tournaments.filter((tournament) => {
        return tournament.id !== id;
      })
    );
  };

  return (
    <div className="table-container">
      <table id="tournaments">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Participantes</th>
            <th>Local</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tournaments.map((tournament) => (
            <tr key={tournament.id}>
              <td>{tournament.name}</td>
              <td>{tournament.size}</td>
              <td>{tournament.location}</td>
              <td>
                <button
                  id={tournament.id}
                  className="delete-button"
                  onClick={() => deleteTournament(tournament.id)}
                >
                  Deletar
                </button>
              </td>
              <td>
                <Link
                  id={tournament.id}
                  style={{
                    backgroundColor: "#0577be",
                    borderRadius: "5px",
                    width: "100%",
                    height: "100%",
                    padding: "5px 10px 5px 10px",
                    color: "#F3F3F3",
                  }}
                  to={tournament.id}
                >
                  Abrir
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

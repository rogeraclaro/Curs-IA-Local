import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import './App.css';

const csvFiles = [
  { name: "Estructura", file: "curso_claude_estructura.csv" },
  { name: "Recursos", file: "curso_claude_recursos.csv" },
  { name: "Rutes", file: "curso_claude_rutas.csv" },
  { name: "Exercicis", file: "curso_claude_ejercicios.csv" },
  { name: "Competències", file: "curso_claude_competencias.csv" }
];

function DataTable({ data }) {
  if(!data || data.length === 0) return null;
  const headers = Object.keys(data[0]);
  return (
    <table>
      <thead>
        <tr>
          {headers.map(h => <th key={h}>{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row,idx) => (
          <tr key={idx}>
            {headers.map(h => <td key={h}>{row[h]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [tables, setTables] = useState({});

  useEffect(() => {
    csvFiles.forEach(info => {
      fetch(`/${info.file}`)
        .then(res => res.text())
        .then(csv => {
          Papa.parse(csv, {
            header: true,
            complete: results => {
              setTables(t => ({ ...t, [info.name]: results.data }));
            }
          });
        });
    });
  }, []);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>Curs Complet Claude IA – Versió Local</h1>
      <p>Consulta en local tota la formació, recursos, exercicis i rutes.</p>
      <nav>
        {Object.keys(tables).map(name => (
          <a 
            href={`#${name}`} 
            key={name} 
            style={{marginRight: 12, textDecoration: "underline"}}
          >{name}</a>
        ))}
      </nav>
      {Object.entries(tables).map(([name, data]) => (
        <section key={name} id={name}>
          <h2>{name}</h2>
          <DataTable data={data} />
        </section>
      ))}
    </div>
  );
}

export default App;

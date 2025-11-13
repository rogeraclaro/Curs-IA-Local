import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import ReactMarkdown from "react-markdown";

// Relació per accedir als fitxers markdown dels mòduls
const moduleFiles = {
  "Mòdul 1": "modul1-introduccio.md",
  "Mòdul 2": "modul2-projects-artifacts.md",
  "Mòdul 3": "modul3-skills.md",
  "Mòdul 4": "modul4-agents.md",
  "Mòdul 5": "modul5-mcps.md",
  "Mòdul 6": "modul6-extended-thinking.md",
  "Mòdul 7": "modul7-claude-code.md",
  "Mòdul 8": "modul8-claude-api.md",
  "Mòdul 9": "modul9-prompt-engineering.md",
  "Mòdul 10": "modul10-context-window.md"
};

// Noms i rutes dels CSV
const csvs = [
  { name: "estructura", file: "curso_claude_estructura.csv" },
  { name: "recursos", file: "curso_claude_recursos.csv" },
  { name: "rutes", file: "curso_claude_rutas.csv" },
  { name: "exercicis", file: "curso_claude_ejercicios.csv" },
  { name: "competencies", file: "curso_claude_competencias.csv" }
];

function makeLinkMòdul(value) {
  // Si troba "Mòdul X" dins el valor, el converteix en un botó/enllaç
  const match = value && value.match(/Mòdul ?(\d+)/i);
  if (match && moduleFiles[`Mòdul ${match[1]}`]) {
    return (
      <button
        style={{
          color: "#3355a1",
          background: "transparent",
          padding: 0,
          border: "none",
          textDecoration: "underline",
          cursor: "pointer"
        }}
        onClick={() => window.__openModule(`Mòdul ${match[1]}`)}
      >
        {match[0]}
      </button>
    );
  }
  return value;
}

function DataTable({ data, headers }) {
  if (!data || data.length === 0) return null;
  return (
    <table>
      <thead>
        <tr>
          {headers.map((h) => <th key={h}>{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) =>
          <tr key={idx}>
            {headers.map((h) => (
              <td key={h}>{makeLinkMòdul(row[h])}</td>
            ))}
          </tr>
        )}
      </tbody>
    </table>
  );
}

function App() {
  const [csvTables, setCsvTables] = useState({});
  const [selectedModule, setSelectedModule] = useState(null);
  const [moduleContent, setModuleContent] = useState("");
  const [moduleTitle, setModuleTitle] = useState("");

  // Prepara perquè makeLinkMòdul pugui cridar update des de botó
  useEffect(() => {
    window.__openModule = (modul) => openModule(modul);
  }, []);

  // Carrega tots els CSV al muntar
  useEffect(() => {
    csvs.forEach(({ name, file }) => {
      fetch(`/${file}`)
        .then((res) => res.text())
        .then((csv) => {
          Papa.parse(csv, {
            header: true,
            complete: (results) => {
              setCsvTables(t => ({
                ...t,
                [name]: {
                  data: results.data,
                  headers: results.meta.fields
                }
              }));
            }
          });
        });
    });
  }, []);

  // Carrega markdown d'un mòdul
  const openModule = async (modul) => {
    const filename = moduleFiles[modul];
    const resp = await fetch(`/contingut/${filename}`);
    if (resp.ok) {
      const txt = await resp.text();
      setSelectedModule(modul);
      setModuleContent(txt);
      setModuleTitle(modul);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setSelectedModule(modul);
      setModuleContent("No s'ha trobat el fitxer markdown per a aquest mòdul.");
      setModuleTitle(modul);
    }
  };

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 28 }}>
      <h1 style={{ textAlign: "center", marginBottom: 30 }}>Curs Claude IA: Índex, Navegació i Recursos</h1>

      <h2>Índex i estructura del curs</h2>
      <DataTable {...csvTables.estructura} />
      <h2>Recursos recomanats per mòdul</h2>
      <DataTable {...csvTables.recursos} />
      <h2>Rutes de formació</h2>
      <DataTable {...csvTables.rutes} />
      <h2>Exercicis pràctics progressius</h2>
      <DataTable {...csvTables.exercicis} />
      <h2>Checklist de competències</h2>
      <DataTable {...csvTables.competencies} />

      {selectedModule && (
        <div style={{ background: "#f8f9ff", padding: 24, borderRadius: 12, margin: "50px 0" }}>
          <h2 style={{ color: "#3355a1" }}>{moduleTitle}</h2>
          <ReactMarkdown>{moduleContent}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default App;

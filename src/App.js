import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import ReactMarkdown from "react-markdown";
import "./App.css";

const moduleFiles = {
  "Curs Estructurat": "curs-estructurat.md",
  "Módulo 1": "modul1-introduccio.md",
  "Módulo 2": "modul2-projects-artifacts.md",
  "Módulo 3": "modul3-skills.md",
  "Módulo 4": "modul4-agents.md",
  "Módulo 5": "modul5-mcps.md",
  "Módulo 6": "modul6-extended-thinking.md",
  "Módulo 7": "modul7-claude-code.md",
  "Módulo 8": "modul8-claude-api.md",
  "Módulo 9": "modul9-prompt-engineering.md",
  "Módulo 10": "modul10-context-window.md"
};

const moduleList = Object.keys(moduleFiles);

const csvs = [
  { name: "estructura", file: "curso_claude_estructura.csv" },
  { name: "recursos", file: "curso_claude_recursos.csv" },
  { name: "rutes", file: "curso_claude_rutas.csv" },
  { name: "exercicis", file: "curso_claude_ejercicios.csv" },
  { name: "competencies", file: "curso_claude_competencias.csv" }
];

function makeLinkMòdul(value, onModuleClick) {
  const match = value && value.match(/Módulo ?(\d+)/i);
  if (match && moduleFiles[`Módulo ${match[1]}`]) {
    return (
      <button
        style={{
          color: "#3355a1",
          background: "transparent",
          padding: 0,
          border: "none",
          textDecoration: "underline",
          cursor: "pointer",
          fontSize: "inherit"
        }}
        onClick={() => onModuleClick(`Módulo ${match[1]}`)}
      >
        {value}
      </button>
    );
  }
  return value;
}

function DataTable({ data, headers, onModuleClick }) {
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
              <td key={h}>{makeLinkMòdul(row[h], onModuleClick)}</td>
            ))}
          </tr>
        )}
      </tbody>
    </table>
  );
}

// Pàgina d'inici
function HomePage({ csvTables, onModuleClick }) {
  return (
    <div className="content-container">
      <div className="hero-section">
        <h1>Curs Claude IA</h1>
        <p style={{ fontSize: "1.2em", color: "#4b5563", maxWidth: "800px", margin: "0 auto" }}>Índex, Navegació i Recursos</p>
      </div>

      <div className="featured-course">
        <h2>📚 Curs Complet Estructurat</h2>
        <p>
          Accedeix al curs estructurat complet de Claude IA: De Zero a Expert amb tots els mòduls i continguts organitzats progressivament.
        </p>
        <button onClick={() => onModuleClick("Curs Estructurat")}>
          Veure el Curs Estructurat →
        </button>
      </div>

      <h2>Índex i estructura del curs</h2>
      <DataTable {...csvTables.estructura} onModuleClick={onModuleClick} />

      <h2>Recursos recomanats per mòdul</h2>
      <DataTable {...csvTables.recursos} onModuleClick={onModuleClick} />

      <h2>Rutes de formació</h2>
      <DataTable {...csvTables.rutes} onModuleClick={onModuleClick} />

      <h2>Exercicis pràctics progressius</h2>
      <DataTable {...csvTables.exercicis} onModuleClick={onModuleClick} />

      <h2>Checklist de competències</h2>
      <DataTable {...csvTables.competencies} onModuleClick={onModuleClick} />
    </div>
  );
}

// Pàgina del mòdul amb menú de navegació
function ModulePage({ moduleName, moduleContent, onGoHome, onPrevious, onNext, onSelectModule }) {
  const currentIndex = moduleList.indexOf(moduleName);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < moduleList.length - 1;

  return (
    <div>
      {/* Menú superior */}
      <nav>
        <div>
          <button onClick={onGoHome}>
            ← Tornar a l'inici
          </button>
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <button onClick={onPrevious} disabled={!hasPrevious}>
            ← Anterior
          </button>

          <select value={moduleName} onChange={(e) => onSelectModule(e.target.value)}>
            {moduleList.map((mod) => (
              <option key={mod} value={mod}>{mod}</option>
            ))}
          </select>

          <button onClick={onNext} disabled={!hasNext}>
            Següent →
          </button>
        </div>
      </nav>

      {/* Contingut del mòdul */}
      <div className="module-content">
        <h1>{moduleName}</h1>
        <ReactMarkdown>{moduleContent}</ReactMarkdown>
      </div>
    </div>
  );
}

// App principal
function App() {
  const [currentPage, setCurrentPage] = useState("home"); // "home" o nom del mòdul
  const [csvTables, setCsvTables] = useState({});
  const [moduleContent, setModuleContent] = useState("");
  const [loading, setLoading] = useState(false);

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
        })
        .catch(err => console.error(`Error carregant ${file}:`, err));
    });
  }, []);

  // Gestor per al botó "enrere" del navegador
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
        if (event.state.page !== "home") {
          setModuleContent(event.state.content || "");
        }
      } else {
        // Si l'event.state és null, retorna a la pàgina principal
        setCurrentPage("home");
        setModuleContent("");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Carrega markdown d'un mòdul
  const openModule = async (modul) => {
    setLoading(true);
    const filename = moduleFiles[modul];
    try {
      const resp = await fetch(`/contingut/${filename}`);
      if (resp.ok) {
        const txt = await resp.text();
        setModuleContent(txt);
        setCurrentPage(modul);
        // Registra el canvi en el history del navegador
        window.history.pushState(
          { page: modul, content: txt },
          modul,
          `#${modul}`
        );
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setModuleContent("No s'ha trobat el fitxer markdown per a aquest mòdul.");
        setCurrentPage(modul);
        window.history.pushState(
          { page: modul, content: "" },
          modul,
          `#${modul}`
        );
      }
    } catch (err) {
      console.error("Error carregant mòdul:", err);
      setModuleContent("Error al carregar el mòdul.");
      setCurrentPage(modul);
      window.history.pushState(
        { page: modul, content: "" },
        modul,
        `#${modul}`
      );
    } finally {
      setLoading(false);
    }
  };

  const goToNextModule = () => {
    const currentIndex = moduleList.indexOf(currentPage);
    if (currentIndex < moduleList.length - 1) {
      openModule(moduleList[currentIndex + 1]);
    }
  };

  const goToPreviousModule = () => {
    const currentIndex = moduleList.indexOf(currentPage);
    if (currentIndex > 0) {
      openModule(moduleList[currentIndex - 1]);
    }
  };

  return (
    <div>
      {currentPage === "home" ? (
        <HomePage csvTables={csvTables} onModuleClick={openModule} />
      ) : (
        <ModulePage
          moduleName={currentPage}
          moduleContent={moduleContent}
          onGoHome={() => {
            setCurrentPage("home");
            window.history.pushState({ page: "home" }, "home", "#home");
          }}
          onPrevious={goToPreviousModule}
          onNext={goToNextModule}
          onSelectModule={openModule}
        />
      )}
    </div>
  );
}

export default App;

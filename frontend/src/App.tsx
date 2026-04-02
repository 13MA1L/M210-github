import { useState } from "react";
import "./App.css";

type Auto = {
  Kennzeichen?: string;
  Marke?: string;
  Modell?: string;
};

function App() {
  const [daten, setDaten] = useState<Auto[]>([]);
  const [fehler, setFehler] = useState("");
  const [laden, setLaden] = useState(false);

  const datenLaden = async () => {
    try {
      setLaden(true);
      setFehler("");

      const response = await fetch(
        "https://tisnmbxaoly2e2og7tblu5hqi40xhkyy.lambda-url.us-east-1.on.aws/"
      );

      if (!response.ok) {
        throw new Error(`HTTP Fehler: ${response.status}`);
      }

      const result = await response.json();
      setDaten(result);
    } catch (error) {
      setFehler("Fehler beim Laden: " + (error as Error).message);
    } finally {
      setLaden(false);
    }
  };

  return (
    <div className="container">
      <h1>🚗 Auto-Verwaltung</h1>

      <button onClick={datenLaden}>Daten laden</button>

      {laden && <p className="loading">Lade Daten...</p>}
      {fehler && <p className="error">{fehler}</p>}

      {daten.map((item, index) => (
        <div key={index} className="card">
          <p><span className="label">Kennzeichen:</span> {item.Kennzeichen || "-"}</p>
          <p><span className="label">Marke:</span> {item.Marke || "-"}</p>
          <p><span className="label">Modell:</span> {item.Modell || "-"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
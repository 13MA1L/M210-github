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

  const datenLaden = async () => {
    try {
      setFehler("");

      const response = await fetch(
        "https://tisnmbxaoly2e2og7tblu5hqi40xhkyy.lambda-url.us-east-1.on.aws/"
      );

      if (!response.ok) {
        throw new Error("Fehler beim Laden");
      }

      const result = await response.json();
      setDaten(result);
    } catch (error) {
      setFehler("Fehler beim Laden: " + (error as Error).message);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>DynamoDB Datensätze</h1>

      <button onClick={datenLaden}>Daten laden</button>

      {fehler && <p style={{ color: "red" }}>{fehler}</p>}

      <div style={{ marginTop: "20px" }}>
        {daten.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#f5f5f5",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "20px",
              maxWidth: "400px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <p><strong>Kennzeichen:</strong> {item.Kennzeichen || "-"}</p>
            <p><strong>Marke:</strong> {item.Marke || "-"}</p>
            <p><strong>Modell:</strong> {item.Modell || "-"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
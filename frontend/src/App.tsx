import { useEffect, useState } from "react";

type Car = {
  Kennzeichen: string;
  Marke?: string;
  Modell?: string;
};

function App() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://tisnmbxaoly2e2og7tblu5hqi40xhkyy.lambda-url.us-east-1.on.aws/")
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP Fehler: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setCars(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Auto-Verwaltung</h1>

      {loading && <p>Lade Daten...</p>}
      {error && <p style={{ color: "red" }}>Fehler: {error}</p>}

      {!loading && !error && cars.length === 0 && (
        <p>Keine Daten gefunden.</p>
      )}

      {!loading && !error && cars.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Kennzeichen</th>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Marke</th>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Modell</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={index}>
                <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{car.Kennzeichen}</td>
                <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{car.Marke || "-"}</td>
                <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{car.Modell || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
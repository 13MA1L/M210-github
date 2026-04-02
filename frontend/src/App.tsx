import { useEffect, useState } from "react";
import "./App.css";

type Car = {
  Kennzeichen: string;
};

function App() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://tisnmbxaoly2e2og7tblu5hqi40xhkyy.lambda-url.us-east-1.on.aws/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Fehler beim Laden der Daten");
        }
        return res.json();
      })
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>Auto-Verwaltung</h1>

      {loading && <p>Lade Daten...</p>}
      {error && <p>Fehler: {error}</p>}

      {!loading && !error && (
        <ul>
          {cars.map((car, index) => (
            <li key={index}>{car.Kennzeichen}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
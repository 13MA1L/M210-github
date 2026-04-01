import "./App.css";

function App() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="logo">AutoVerwaltung</div>
          <div className="nav-links">
            <a href="#features">Funktionen</a>
            <a href="#about">Über uns</a>
            <a href="#contact">Kontakt</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <span className="badge">Moderne Fahrzeugverwaltung</span>
            <h1>Verwalte Fahrzeuge einfach, schnell und übersichtlich.</h1>
            <p>
              AutoVerwaltung hilft dir, Fahrzeuge, Kennzeichen und wichtige
              Informationen zentral zu organisieren. Modernes Design, schnelle
              Übersicht und bereit für Cloud-Deployment.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">Jetzt starten</button>
              <button className="secondary-btn">Mehr erfahren</button>
            </div>
          </div>

          <div className="hero-card">
            <h3>Live Übersicht</h3>
            <div className="stat-list">
              <div className="stat-item">
                <span>Fahrzeuge</span>
                <strong>128</strong>
              </div>
              <div className="stat-item">
                <span>Aktive Einträge</span>
                <strong>312</strong>
              </div>
              <div className="stat-item">
                <span>Bearbeitungen heute</span>
                <strong>47</strong>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="features" className="section">
          <h2>Was deine App kann</h2>
          <p className="section-text">
            Alles, was du für eine saubere und moderne Auto-Verwaltung brauchst.
          </p>

          <div className="cards">
            <div className="card">
              <h3>Fahrzeuge erfassen</h3>
              <p>
                Speichere Kennzeichen, Marke, Modell und weitere Informationen
                strukturiert und schnell.
              </p>
            </div>

            <div className="card">
              <h3>Schnelle Suche</h3>
              <p>
                Finde Fahrzeuge in Sekunden und behalte jederzeit die Übersicht.
              </p>
            </div>

            <div className="card">
              <h3>Cloud-basiert</h3>
              <p>
                Dein Frontend läuft über S3 und dein Backend kann mit Lambda und
                DynamoDB erweitert werden.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="section alt-section">
          <div className="about-box">
            <div>
              <h2>Für dein M210-Projekt</h2>
              <p>
                Diese Oberfläche ist bewusst modern, sauber und einfach gehalten,
                damit du sie direkt verwenden und später mit API-Funktionen
                erweitern kannst.
              </p>
            </div>
            <div className="about-highlight">
              <span>Bereit für Deployment</span>
              <strong>React + Vite + S3</strong>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Kontakt</h2>
          <p className="section-text">
            Später kannst du hier Formulare, API-Aufrufe und Datenbankfunktionen
            ergänzen.
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Dein Name" />
            <input type="email" placeholder="Deine E-Mail" />
            <textarea placeholder="Deine Nachricht" rows={5}></textarea>
            <button type="submit" className="primary-btn">
              Nachricht senden
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 AutoVerwaltung – erstellt von Ismail</p>
      </footer>
    </div>
  );
}

export default App;
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');  

app.use(express.json());
app.use(express.static(path.join(__dirname, 'mainpage')));

// Middleware pentru CORS (adăugat aici pentru a se aplica global)
app.use(cors());  

// Rutare pentru pagina principală
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'mainpage.html'));
});

// Rutare pentru adminlogin.html
app.get('/adminlogin.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'adminlogin.html'));
});

// Endpoint pentru autentificare (API)
app.post('/api/authenticate', (req, res) => {
  const { username, password } = req.body;

  app.get('/dashboard.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
  });

  // Simulează datele într-un obiect JSON (înlocuiește cu o bază de date în viitor)
  let users = [
    { username: 'admin', password: 'parola123' },
  ];

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true, message: 'Autentificare reușită!' });
  } else {
    res.status(401).json({ success: false, message: 'Autentificare eșuată. Verificați datele de conectare.' });
  }
});

// Adaugă aici alte endpoint-uri sau rute dacă este necesar

app.listen(port, () => {
  console.log(`Serverul rulează la adresa http://localhost:${port}`);
});

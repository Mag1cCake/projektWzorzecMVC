const express = require('express');
const app = express();
const subjectRoutes = require('./routes/subjectRoutes');
const subjectModel = require('./models/subjectModel');

// Ustawienia aplikacji
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Trasy
app.use('/', subjectRoutes);

// Obsługa ścieżki /add
app.get('/add', (req, res) => {
  res.render('addSubject'); // Renderowanie widoku do dodawania nowego przedmiotu
});

app.get('/edit/:id', (req, res) => {
  const subjectId = req.params.id;
  const subject = subjectModel.getSubjectById(subjectId);
  if (!subject) {
    console.log('Subject not found');
    res.status(404).send('Subject not found');
    return;
  }

  // Sprawdzenie czy achievements jest pojedynczym ciągiem znaków i zamiana go na tablicę
  if (typeof subject.achievements === 'string') {
    subject.achievements = [subject.achievements];
  }

  res.render('editSubject', { subject }); // Przekazanie przedmiotu do widoku
});

// Serwer nasłuchujący na porcie 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
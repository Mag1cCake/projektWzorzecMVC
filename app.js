const express = require('express');
const app = express();
const subjectRoutes = require('./routes/subjectRoutes');
const subjectModel = require('./models/subjectModel');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', subjectRoutes);

app.get('/add', (req, res) => {
  res.render('addSubject');
});

app.get('/edit/:id', (req, res) => {
  const subjectId = req.params.id;
  const subject = subjectModel.getSubjectById(subjectId);
  if (!subject) {
    console.log('Subject not found');
    res.status(404).send('Subject not found');
    return;
  }

  if (typeof subject.achievements === 'string') {
    subject.achievements = [subject.achievements];
  }

  res.render('editSubject', { subject });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
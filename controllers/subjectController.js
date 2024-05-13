const subjectModel = require('../models/subjectModel');

exports.getAllSubjects = (req, res) => {
  const subjects = subjectModel.getAllSubjects();
  res.render('index', { subjects });
};

exports.addSubject = (req, res) => {
  const { name, progress, achievements } = req.body;
  const id = subjectModel.getAllSubjects().length + 1; // Proste generowanie ID
  const newSubject = { id, name, progress, achievements };
  subjectModel.addSubject(newSubject);
  res.redirect('/');
};

exports.editSubject = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, progress, achievements } = req.body;
  const updatedSubject = { id, name, progress, achievements };
  subjectModel.updateSubject(id, updatedSubject);
  res.redirect('/');
};

exports.deleteSubject = (req, res) => {
  const id = parseInt(req.params.id);
  subjectModel.deleteSubject(id);
  res.redirect('/');
};
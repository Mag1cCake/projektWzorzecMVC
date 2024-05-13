const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');

router.get('/', subjectController.getAllSubjects);
router.post('/add', subjectController.addSubject);
router.post('/edit/:id', subjectController.editSubject);
router.post('/delete/:id', subjectController.deleteSubject);

module.exports = router;
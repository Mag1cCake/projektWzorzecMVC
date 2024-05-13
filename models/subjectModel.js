let subjects = [];

module.exports = {
  getAllSubjects: () => subjects,
  getSubjectById: (id) => {
    console.log('All subjects:', subjects);
    const foundSubject = subjects.find(subject => subject.id === +id);
    console.log('Found subject:', foundSubject);
    return foundSubject;
  },
  addSubject: (subject) => {
    if (!Array.isArray(subject.achievements)) {
      subject.achievements = [subject.achievements];
    }
    subjects.push(subject);
  },
  
  updateSubject: (id, updatedSubject) => {
    const index = subjects.findIndex(subject => subject.id === id);
    if (index !== -1) {
      subjects[index] = updatedSubject;
      if (!Array.isArray(updatedSubject.achievements)) {
        updatedSubject.achievements = [updatedSubject.achievements];
      }
    }
  },
  deleteSubject: (id) => {
    subjects = subjects.filter(subject => subject.id !== id);
  }
};
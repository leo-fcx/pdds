import RestAPIEndPoint from './restAPI';

const schoolAPI = new RestAPI('http://school.com', {
  teacher: new RestAPIEndPoint('/teachers'),
  students: new RestAPIEndPoint('/students')
});

const allStudents = schoolAPI.resources.students.fetch();
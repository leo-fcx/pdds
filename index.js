import RestAPIEndPoint from './restAPI';

const baseURL = 'http://school.com';

const schoolAPI = new RestAPI({
  teacher: new RestAPIEndPoint(`${baseURL}/teachers`),
  students: new RestAPIEndPoint(`${baseURL}/students`)
});

const allStudents = schoolAPI.resources.students.fetch();
const student = schoolAPI.resources.students.create({ name: 'Leo' });

allStudents.push(student);
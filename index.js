import EndPoint from './restAPI';

const baseURL = 'http://school.com';

const buildEndPoint = function(name) {
  return new EndPoint(`${baseURL}/${name}`);
};

const schoolAPI = new RestAPI({
  teachers: buildEndPoint('teachers'),
  students: buildEndPoint('students')
});

const allStudents = schoolAPI.resources.students.fetch();
const rawStudent = {name: 'Leo'};
const student = schoolAPI.resources.students.create(rawStudent);

allStudents.push(student);
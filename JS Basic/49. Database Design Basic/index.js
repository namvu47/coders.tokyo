// Classes Management
// split to different arrays
// give id

var classes = [
	{ 
		id: 0,
		name: '1A',
		teacher: 0,
	},
	{ 
		id: 1,
		name: '2A',
		teacher: 1,
	},
	{ 
		id: 2,
		name: '3A',
		teacher: 2
	},
	{ 
		id: 3,
		name: '4A',
		teacher: 3
	},
	{ 
		id: 4,
		name: '5A',
		teacher: 4
	},

]

var teachers = [
	{
		id: 0,
		name: 'Quynh',
		age: 30
	},
	{
		id: 1,
		name: 'Chinh',
		age: 55
	},
	{
		id: 2,
		name: 'Nguyet',
		age: 40
	},
	{
		id: 3,
		name: 'Huong',
		age: 45
	},
	{
		id: 4,
		name: 'Hai',
		age: 50
	}

]

var students = [
	{ id: 0, name: 'Minh', height: 120, class: 0 },
	{ id: 1, name: 'Phong', height: 115, class: 0},
	{ id: 2, name: 'Duy', height: 110, class: 0},
	{ id : 3, name: 'Thanh', height: 125, class: 1}
]

function getStudentsInClass(className) {
	var classObject = classes.find( x => x.name === className);
	var StudentsInClass = students.filter(student => student.class === classObject.id);
	return StudentsInClass;
}

console.log(getStudentsInClass('2A'));
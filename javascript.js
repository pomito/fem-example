const courses = [
	{ teacher: 'Kylie Jenner', course: 'JS Function Lite' },
	{ teacher: 'Sebastian Pomiklo', course: 'Intro to Vue' },
	{ teacher: 'Ala Kot', course: 'State Management' }
];

console.log(courses);

const subarray = courses.splice(2, 1, { teacher: 'Bob', course: 'Java' });

console.log(subarray);
console.log(courses);

const cities = [ 'Seattle', 'San Francisco', 'Salt Lake City', 'Amsterdam', 'Hong Kong' ];

for (let i = 0; i < cities.length; i++) {
	console.log(cities[i]);
}

cities.forEach(function(city) {
	console.log(city);
});

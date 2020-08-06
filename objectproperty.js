const students = [
    {id: 21, name:'omor sani'},
    {id: 31, name: 'manna'},
    {id: 41, name :'moyuri'},
    {id: 71, name:'dipjol'}
]
const names = students.map(s => s.name);
const ids = students.map(s => s.id)
const bigger = students.filter(s => s.id>40);

const biggerOne = students.find(s => s.id>40);
console.log(biggerOne);
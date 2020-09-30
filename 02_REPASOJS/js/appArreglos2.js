// Métodos en arreglos

const personas = [
    {nombre: 'Raymundo', edad: 23, aprendiendo: 'JavaScript'},
    {nombre: 'Antonio', edad: 20, aprendiendo: 'Python'},
    {nombre: 'Juan', edad: 50, aprendiendo: 'css'},
    {nombre: 'Ramon', edad: 15, aprendiendo: 'html'},
    {nombre: 'Cesar', edad: 30, aprendiendo: 'java'},
]

console.log(personas);

// Filtrar
// Mayores d e 28 años
const mayores = personas.filter(persona => {
    return persona.edad > 28;
});

console.log(mayores);

// Ver datos de una sola persona
const raymundo = personas.find(personas => {
    return personas.nombre == 'Raymundo';
});
console.log(raymundo);


console.log("Hola Mundo, JS desde el servidor.")


/* Operaciones */
let edad = 11
const edad2 = 42

console.log("Edad Promedio")
console.log((edad + edad2) / 2)

/* Medir Tiempo de un proceso */
console.time("miProceso")
for (let i = 0; i < 10; i++) {
}
console.timeEnd("miProceso")

/* Objetos tipo tabla */
let usuarios = [
    {
        nombre: "Luis",
        edad: 21
    },
    {
        nombre: "Alex",
        edad: 21
    }
];
console.table(usuarios);
//Template string
const n = (n1, n2) => `el num es: ${n1 + n2}`

console.log(n(10, 20))

//obj
const masacota = {
  nombre: 'Tom',
  comida: ['agua']
}

console.log(masacota)
masacota.comida.push('leshe')
//masacota.comida.pop('leshe')
//masacota.comida = ['leshe', 'wishcas']
console.log(masacota.comida)
console.log(masacota.comida[0])
console.log(masacota)

//Api
fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(res => res.json())
  //.then(data => console.log(data.results))
  .then(data => {
    data.results.forEach(element => {
      //console.log(element.name)
    });
  })
  .catch(error => console.log(error))

//async & await
/*const obtenerPokemones = async() => {
  try{
    const r = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const datos = await r.json()
    console.log(datos.results)
    datos.results.forEach(element => {
      //console.log(element.name)
    });
  }
  catch(e){
    console.log(e)
  }
}
obtenerPokemones() 
*/

//map
fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(res => res.json())
  //.then(data => console.log(data.results))
  .then(data => {
    let arrayNombres = []
    data.results.forEach(element => {
      //console.log(element.name)
      arrayNombres.push(element.name)
    });
    console.log(arrayNombres)
  })
  .catch(error => console.log(error))
//-----------------------------------------------

/*const obtenerPokemones = async() => {
  try{
    const r = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const datos = await r.json()
    console.log(datos.results)
    //datos.results.map(poke => console.log(poke.name))
    const pokeNombres = datos.results.map(poke => poke.name)
    console.log(pokeNombres)
  }
  catch(e){
    console.log(e)
  }
}
obtenerPokemones()
*/
//filter
const obtenerPokemones = async () => {
  try {
    const r = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const datos = await r.json()
    console.log(datos.results)
    //datos.results.map(poke => console.log(poke.name))
    const pokeNombres = datos.results.filter(poke => poke.name !== 'bulbasaur')
    console.log(pokeNombres)
  }
  catch (e) {
    console.log(e)
  }
}
obtenerPokemones()
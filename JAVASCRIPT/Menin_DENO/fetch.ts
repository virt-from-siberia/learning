window.addEventListener('load', () => {
    console.log('load');
})

window.addEventListener('unload', () => {
    console.log('unload');
})

const url = Deno.args[0]
console.log('Makinng request to url : ', url)
const response = await fetch(url)
const data = await response.json()

console.log(data)

//https://jsonplaceholder.typicode.com/todos/1
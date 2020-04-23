const icon = document.getElementById('icon')
const jokeText = document.getElementById('joke')
const btn = document.getElementById('btnAddJoke')

// const createJokes = () => {
// 	fetch('https://api.chucknorris.io/jokes/randomd')
// 		.then(response => response.json())
// 		.then(data => {
// 			console.log(data.error)
// 			let img = `<img src="${data.icon_url}"></img>`
// 			let text = `<div>${data.value}</div>`
// 			document.getElementById('icon').innerHTML = img
// 			document.getElementById('joke').innerHTML = text
// 		})
// 		.catch(err => console.log(err))
// }

const createJokes = async () => {
	try {
		const response = await fetch('https://api.chucknorris.io/jokes/random')
		const data = await response.json()
		console.log(data)
		let img = `<img src="${data.icon_url}"></img>`
		let text = `<div>${data.value}</div>`
		document.getElementById('icon').innerHTML = img
		document.getElementById('joke').innerHTML = text
	} catch (err) {
		console.log(err)
	}
}

btn.addEventListener('click', createJokes)

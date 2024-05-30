//DESARROLLA AQUI TUS SOLUCIONES
const getRandomPokemon = async () => {
    try {
        const aleatorio = Math.floor(Math.random() * 898)
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${aleatorio}`);
        if (respuesta.ok) {
            const data = await respuesta.json()
            return data
        }
    } catch (error) {
        console.error(error);
    }
}

const getImageAndName = async (pokemon) => {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        let data = await response.json();
        let name = data.name;
        let img = data.sprites.front_default;
        return { name, img }
    } catch (error) {
        console.error(error);
    }
}

const printImageAndName = async () => {
    try {
        const aleatorio = Math.floor(Math.random() * 898)
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${aleatorio}`)
        let data = await response.json();
        let img = data.sprites.front_default;
        let name = data.name;
        return `<section><img src="${img}" alt="${name}"><h1>${name}</h1></section>`;
    } catch (error) {

    }
}

const getRandomDogImage = async () => {
    try {
        let response = await fetch(`https://dog.ceo/api/breeds/image/random`)
        let data = await response.json();
        let url = data.message
        return url
    } catch (error) {
        console.error(error);
    }
}
const getRandomPokemonImage = async () => {
    try {
        const aleatorio = Math.floor(Math.random() * 898)
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${aleatorio}`)
        let data = await response.json();
        let url = data.sprites.back_default
        return url
    } catch (error) {
        console.error(error);
    }
}

// const printPugVsPikachu = async()=>{

// }

const getRandomCharacter = async () => {
    try {
        const aleatorio = Math.floor(Math.random() * 898)
        let response = await fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`)
        let data = await response.json()
        return data
    } catch (error) {
        console.error(error);
    }
}

const getRandomCharacterInfo = async () => {
    const aleatorio = Math.floor(Math.random()*898)
    try {
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`);
        if(respuesta.ok){
            const data = await respuesta.json();
            const img = data.image
            const name = data.name
            const episodes = data.episode

            const respuestaDos = await fetch(`${episodes[0]}`)
            if (respuestaDos.ok) {
                const data2 = await respuestaDos.json()
                const firstEpisode = data2.episode
                const dateEpisode = data2.air_date
                paintBody(img, name, episodes, firstEpisode, dateEpisode)
                return {img, name, episodes, firstEpisode, dateEpisode}

            }else{
                throw error
            }
        }else{
            throw error
        }
    } catch (error) {
        throw console.error(error);
    }
}

const paintBody = (img, name, episodes, firstEpisode, dateEpisode)=>{
    const body = document.querySelector('body')
    const div = document.createElement('DIV')
    div.innerHTML = `<img src="${img}"></img><p>${name}</p><p>${episodes}</p><p>${firstEpisode}</p><p>${dateEpisode}</p>`;
    body.append(div)
}
        
   

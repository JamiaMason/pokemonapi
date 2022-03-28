const getData = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/type/${type}/");
    const data = await res.json()
    const pokemonList = data.pokemon
    const pokemonNameList= []
    for (let pokObj of pokemonList){
        pokemonNameList.push(pokObj.pokemon.name)

    }
    console.log(pokemonNameList)
    return 

    
};


const createList = () => {
    const my_h4 = document.createElement('h4')
    my_h4.innerText = pokemonName
    my_h4.className = 'list-group-item list-group-item-action list-group-item-light'
    document.querySelector('section.list-group').insertAdjacentElement('beforeend', my_h4)

};

const loadData = async () => {
    const myInput = document.querySelector('input').value

const loadData = async () => {
    const myList = await getData(myInput);
    myList.forEach((name)=>{createList(name)})
};

const clearData = ()=>
    document.querySelector('section').innerHTML=' '

// select my clear data button
const clear = document.getElementsByClassName('btn-danger')[0]
//add event listener to button
clear.addEventListener('click', clearData)
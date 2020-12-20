let heroes = [];
function getHero () {
fetch("https://swapi.dev/api/films/2/")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const people = data.characters;
             people.forEach((i) =>{
             fetch(i)
             .then((response) => {
                return response.json();
            })
            .then((data) => {
            const protagonist = data;
            heroes.push(protagonist);
            })
            })    
        return   heroes;  
        
    }) 
   
   return  heroes;  
}
getHero ();
console.log(heroes);


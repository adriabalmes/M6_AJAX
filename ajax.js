const url = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
let pokeName;

var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onload = function() {

    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
      }
 

//   if (xhr.status === 200) {
//     console.log(xhr.responseText);
//   }
  else {
    console.log('Error al obtener los datos.');
  }
     };
};
xhr.send();
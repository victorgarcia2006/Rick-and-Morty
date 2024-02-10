const charactersContainer = document.getElementById("charactersContainer");
const url = "https://rickandmortyapi.com/api/character";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((character) => {
      const characterDiv = document.createElement("div");
      characterDiv.innerHTML += `      
            <div id="cart">
                <img src="${character.image}" alt="${character.name}">
                <div id="info">
                  <h2 id="name">${character.name}</h2>
                  <div id="descripcion">      
                    <div id="title">Status: </div>
                    <label id="response">${character.status}</label>
                    <div id="title">Species: </div>
                    <label id="response">${character.species}</label>
                    <div id="title">Gender: </div>  
                    <label id="response">${character.gender}</label>   
                    <div id="title">Origin: </div>  
                    <label id="response">${character.origin.name}</label>   
                    <div id="title">Location: </div>  
                    <label id="response">${character.location.name}</label>
                  </div>
                </div>    
            </div>
        `;
      charactersContainer.appendChild(characterDiv);
    });
  })
  .catch((e) => {
    console.log("Error: ", e);
  });
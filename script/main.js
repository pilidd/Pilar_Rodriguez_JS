const containerCard = document.querySelector('#container')

let generateCard = pushCard(data.events)

containerCard.innerHTML = generateCard

function pushCard(dataArray){
  let tarjetas= ''
  for (const event of dataArray){
    tarjetas += `<div class="card " style="width: 18rem;">
    <img class="card-img-top" src=${event.image} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text">${event.description}</p>
      <a href="#" class="btn btn-primary btn-card">$ ${event.price}</a>
    </div>
  </div>`
 

}
  return tarjetas
}


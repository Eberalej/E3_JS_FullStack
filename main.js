
const input = document.getElementById("input");;
const btn = document.getElementById("btn");
const cards = document.getElementById("cards");

class pizza {
    constructor(ID, nombre, ingredientes, precio, imagen) {
        this.ID = ID
        this.nombre = nombre
        this.ingredientes = ingredientes
        this.precio = precio
        this.imagen = imagen
    }
}

let pizzas = [pepperoni = new pizza(`1`, `Pizza de Pepperoni`, ingredientes = [" Pepperoni ", " Tomate ", " Queso ", " Orégano "], 15, 'https://www.silviocicchi.com/pizzachef/wp-content/uploads/2015/02/p-evid1.jpg'),
    cuatroEstaciones = new pizza(`2`, `Pizza Cuatro Estaciones`, ingredientes = [" Alcachofas ", " Jamón ", " Queso ", " Champiñones "], 20, 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/5D256C95-CEB8-4BAC-A299-59992B158F22/Derivates/B71ACB34-5587-46D1-9CF5-77643E96F22F.jpg'),
    hawaiana = new pizza(`3`, `Pizza Hawaiana`, ingredientes = [" Piña ", " Mozzarella ", " Jitomates ", " Jamón "], 17, 'https://www.cardamomo.news/__export/1644422142162/sites/debate/img/2022/02/09/pizza_hawaiana_crop1644421835991.jpeg_1902800913.jpeg'),
    marinara = new pizza(`4`, `Pizza Marinara`, ingredientes = [" Jitomates ", " Cebollas ", " Ajo ", " Hierbas Aromáticas "], 16, 'https://thumbs.dreamstime.com/b/pizza-marinara-42620021.jpg'),
    neoyorquina = new pizza(`5`, `Pizza Neoyorquina`, ingredientes = [" Jitomates ", " Verduras ", " Queso ", " Carnes "], 18, 'https://diariocorreo.pe/resizer/1E9GfGcDO1L8owNjckZ9S5HuEl8=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YOOICZNJDJD2ZBEI5WR6FFEFVY.jpg'),
    fugazza = new pizza(`6`, `Pizza Fugazza`, ingredientes = [" Cebolla ", " Tomate ", " Queso ", " Aceitunas "], 19, 'https://i0.wp.com/www.brasasysabores.com/wp-content/uploads/2016/12/Receta-para-preparar-fugazza-la-mejor-pizza-argentina.jpg'),
]


let pizzaLs = JSON.parse(localStorage.getItem('pizzaLs')) || [];

const saveLocalStorage = (laPizza) => {
    localStorage.setItem('pizzaLs', JSON.stringify(laPizza))
};


const renderCard = laPizza => {
  const {nombre, ingredientes, precio, imagen} = laPizza
  return `
    <div class="card">
    <img src="${imagen}" alt="${nombre}" class="card-img">
    <div class="card-body"> 
      <h3> ${nombre} </h3>
      <p> ${ingredientes} </p>
      <p> USD ${precio} </p>
    </div>
    </div>
  `
}

const renderCards = pizzas => {
    cards.innerHTML = pizzas.map(renderCard).join('');
  }


function filtro(inputID) {
    const laPizza = pizzas.filter((piza) => piza.ID == inputID)
    for (piza of laPizza) {
        input.value = '';  
        renderCards(laPizza);
        saveLocalStorage(laPizza);
    }
}

function error() {
 /*   alert('No existe pizza para el número ingresado');*/
 Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'No existe pizza para el número ingresado!',
    footer: 'Intenta Ingresar Otro Valor</a>'
  });
    }


btn.addEventListener('click', button)

function button(e) {
    e.preventDefault();
    var inputID = input.value.trim();
    inputID <= pizzas.length && inputID > 0 ? filtro(inputID) : error();
    input.value = ""
}

window.addEventListener('DOMContentloaded', renderCards(pizzaLs));
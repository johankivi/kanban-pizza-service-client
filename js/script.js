const pizzas = [
    {
        name: 'Margherita',
        base: null,
        ingredients: [
            'ost',
            'tomatsås'
        ]
    },
    {
        name: 'Hawaii',
        base: null,
        ingredients: [
            'ost',
            'tomatsås',
            'skinka',
            'ananas'
        ]
    },{
        name: 'Capriciosa',
        base: null,
        ingredients: [
            'ost',
            'tomatsås',
            'skinka'
        ]
    },{
        name: 'Parma',
        base: null,
        ingredients: [
            'ost',
            'tomatsås',
            'mozarella',
            'parmaskinka',
            'ruccula'
        ]
    },{
        name: 'Africana',
        base: null,
        ingredients: [
            'ost',
            'tomatsås',
            'skinka',
            'banan',
            'jordnötter',
            'curry'
        ]
    },{
        name: 'Romana',
        base: null,
        ingredients: [
            'ost',
            'tomatsås',
            'fläskfilé',
            'skinka',
            'vitlök',
            'färska tomater'
        ]
    },{
        name: 'Laguna',
        base: null,
        ingredients: [
            'ost',
            'tomatsås',
            'räkor',
            'skinka'
        ]
    },{
        name: 'Kebab Pizza',
        base: null,
        ingredients: [
            'ost',
            'tomatsås',
            'kebabkött',
            'feferoni',
            'gurka',
            'tomat',
            'lök'
        ]
    },{
        name: 'Bacon Deluxe',
        base: null,
        ingredients: [
            'ost',
            'tomatsås',
            'bacon',
            'oliver',
            'ruccula',
            'skinka',
            'vitlök'
        ]
    },{
        name: 'Hot Chicken',
        base: null,
        ingredients: [
            'ost',
            'tomatsås',
            'kyckling',
            'piri piri',
            'oliver'
        ]
    },{
        name: 'Florida',
        base: null,
        ingredients: [
            'ost',
            'tomatsås',
            'räkor',
            'skinka',
            'ananas'
        ]
    },{
        name: 'Gelgamesh',
        base: null,
        ingredients: [
            'ost',
            'tomatsås',
            'paprika',
            'skinka',
            'oxfilé',
            'pepperoni'
        ]
    },{
        name: 'Super',
        base: null,
        ingredients: [
            'ost',
            'tomatsås',
            'skinka',
            'bacon',
            'basilika'
        ]
    },{
        name: 'Vagabond',
        base: null,
        ingredients: [
            'ost',
            'tomatsås',
            'ägg',
            'oxfile'
        ]
    },{
        name: 'Stallone',
        base: null,
        ingredients: [
            'ost',
            'tomatsås',
            'pepperoni',
            'ruccula',
            'oliver'
        ]
    },{
        name: 'Tabula Rasa',
        base: null,
        ingredients: [
            'ost'
        ]
    }
]

function orderNr() {
    return `KNBN${Date.now().toString().substr(8)}X`;
}

function base() {

    let bases = ['regular', 'fullkorn', 'glutenfri', 'vitlökssmord kant' ];

    return bases[Math.floor(Math.random()*bases.length)];
}



function generateOrder() {

    let maxItemsPerOrder = 5,
        orderLength = Math.floor(Math.random()*maxItemsPerOrder);

    let order = {
        orderNr: orderNr(),
        timeStamp: Date.now(),
        items: []
    }

    for(i=0; i <= orderLength; i++) {

        let rand = Math.floor(Math.random()*pizzas.length);
        let pizza = pizzas[rand];
        pizza.base = base();
        order.items.push(pizza);

    }

    return order;

}

function updateUI(order){

    let orderEl = document.querySelector('.order');
    orderEl.innerHTML = '';

    let title = document.createElement('h2')
    title.innerHTML = `Beställning #${order.orderNr}`;
    
    orderEl.append(title)

    order.items.forEach(pizza => {
        
        let pizzaEl = document.createElement('article');
        pizzaEl.classList.add('pizza');

        let pizzaTitle = document.createElement('h3')
        pizzaTitle.innerHTML = pizza.name;
        pizzaEl.append(pizzaTitle);
      
        
        // deg
        let pizzaDough = document.createElement('h4')
        pizzaDough.innerHTML = `Pizzagrund: ${pizza.base}`;
        console.log(pizzaDough)
        pizzaEl.append(pizzaDough);

        let toppingsEl = document.createElement('ul');

        pizza.ingredients.forEach(ingredient => {
            let el = document.createElement('li');
            el.innerHTML = ingredient;

            toppingsEl.appendChild(el);

        })

        pizzaEl.appendChild(toppingsEl)
        
        // Add to order
        orderEl.appendChild(pizzaEl);

    })

}

document.querySelector('#neworder').addEventListener('click', () => {

    let order = generateOrder();

    updateUI(order)


})
const productList = document.querySelector('.product-list');

eventListeners();

function eventListeners() {
    window.addEventListener('DOMContentLoaded', () =>{
        loadJSON();
    })
}

function loadJSON(){
    fetch('nout.json')
    .then(response => response.json())
    .then(data =>{
        let html = '';
        data.forEach(product =>{
            html += `
                <div class = "product-item">
                    <div class = "product-img">
                        <img src =  "${product.img}" alt = "product image">
                    </div>
                    <hr>
                    <div class = "product-content">
                        <h3 class = "product-name">${product.title}</h3>
                        <p class= "product-price">Цена: ${product.price} $</p>
                        <p class = "product-desc">${product.desc}</p>
                    </div>
                </div>
            `;
        })
        productList.innerHTML = html;
    })
}
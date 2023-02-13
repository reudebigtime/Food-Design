import { menuArray } from './data.js'

console.log(menuArray[0])


function getFeedHtml(){
    let feedHtml = ''
menuArray.forEach(function(item){
    feedHtml +=
    `<div class="product">
                <div class="product-img">
                    <p>${item.emoji}</p>
                </div>
                <div class="description">
                    <h2 class="title">${item.name}</h2>
                    <p class="ingredients">${item.ingredients}</p>
                    <p class="price">$${item.price}</p>
                </div>
                <div class="add-cart">
                    <button>+</button>
                </div>
            </div>`
})
return feedHtml
console.log(feedHtml)
}

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()





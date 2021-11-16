// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Eshita Islam" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0
let qtygb = document.querySelector("#qty-gb")
let qtycc = document.querySelector("#qty-cc")
let qtysugar = document.querySelector("#qty-sugar")
let qtytotal = document.querySelector("#qty-total")
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

let buttongbup = document.querySelector("#add-gb")
buttongbup.addEventListener('click',function(){
    console.log('gb plus button was pressed')
    gb = gb +1
    qtygb.textContent = gb
    total = total + 1
    qtytotal.textContent = total
})

let buttongbdown = document.querySelector("#minus-gb")
buttongbdown.addEventListener('click',function(){
    console.log('gb minus button was pressed')
    if (gb > 0)
    {
        gb = gb - 1
        qtygb.textContent = gb
        total = total - 1
        qtytotal.textContent = total
    }
})

let buttonccup = document.querySelector("#add-cc")
buttonccup.addEventListener('click',function(){
    console.log('cc plus button was pressed')
    cc = cc +1
    qtycc.textContent = cc
    total = total + 1
    qtytotal.textContent = total
})

let buttonccdown = document.querySelector("#minus-cc")
buttonccdown.addEventListener('click',function(){
    console.log('cc minus button was pressed')
    if (cc > 0)
    {   
        cc = cc - 1
        qtycc.textContent = cc
        total = total - 1
        qtytotal.textContent = total

    }
    
})

let buttonsugarup = document.querySelector("#add-sugar")
buttonsugarup.addEventListener('click',function(){
    console.log('sugar plus button was pressed')
    sugar = sugar +1
    qtysugar.textContent = sugar
    total = total + 1
    qtytotal.textContent = total
})

let buttonsugardown = document.querySelector("#minus-sugar")
buttonsugardown.addEventListener('click',function(){
    console.log('sugar minus button was pressed')
    if(sugar > 0)
    {   
        sugar = sugar - 1
        qtysugar.textContent = sugar
        total = total - 1
        qtytotal.textContent = total

    }
    
})
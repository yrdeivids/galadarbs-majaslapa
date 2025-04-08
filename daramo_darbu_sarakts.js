// Input field and Add Button
let input = document.querySelector('input')
let addBtn = document.querySelector('.addButton')

// List Items
let ul = document.querySelector('ul')
let li = document.querySelectorAll('li')

// List Button
let deleteBtn = document.querySelectorAll('button.delete')
let editBtn = document.querySelectorAll('button')[2]


// Add New Item
let addNewItem = function () {
    // Create New Item
    let li = document.createElement('li')
    let deleteBtn = document.createElement('button')
    let editBtn = document.createElement('button')

    // Button Need to modify
    deleteBtn.innerText = 'Delete'


    // Appending buttons to LI
    li.innerText = input.value
    li.appendChild(deleteBtn)


    // Append LI to UL
    ul.appendChild(li)

    //Clear The Input Field
    input.value = ''
    
}

// Set Add button to add new itema
addBtn.addEventListener('click', addNewItem)

// Delete Items From list
let deleteItem = function () {
    
    let li = this.parentNode
    ul.removeChild(li)

}

deleteBtn.forEach(b => b.addEventListener('click', deleteItem))


const nameArray = [] //Create a list to store names


function addName() {
    //get a trimmed version of the name from the input box
    const nameInput = getElementById('nameInput')
    const document.nameInput.value.trim()
    nameArray.push(name)
    displayName()
    nameInput.value = ''
}

document.getElementById('addNameBtn').addEventListener('click', addName)

function displayName() {
    const nameList = document.getElementById('nameList') //get UL element 
    nameList.innerHTML = ' ' //clears the List 

    for (let i = 0; i < nameArray.length; i++) {
        const name = nameArray[i]
        const li = document.createElement('li')
        li.className = 'list-group-item'
        const span = document.createElement('span')
        span.textContent= name
        
        li.appendChild(span)
        nameList.appendChild(li)

    }
}
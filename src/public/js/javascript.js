// import { response } from "express"

// console.log('hiiii')
const btn = document.querySelector('.btn')
btn.onclick =()=>{
    fetch('/images/a1.jpg')
    .then((response) => {
        if (response.ok) {
            return response.blob()
        }
        throw new Error('response was not OK')
    })
    .then(imageBlob => {
        const imageUrl = URL.createObjectURL(imageBlob)
        const img = document.createElement('img')
        img.src = imageUrl
        document.body.appendChild(img)
        img.style.width = '200px'
        img.style.height = '200px'
        img.style.margin = '20px'
    })
    .catch(error => {
        console.log(error)
    })

}
    
// ************************** info theo ID

const xemBtn = document.querySelector('.xem-btn')
const idInput = document.querySelector('.id-input')
const tdArr = document.querySelectorAll('.id-td')

let dataBase
xemBtn.onclick = ()=>{
    fetch('/api/data')
    .then((response)=>{
        return response.json()

    })
    .then(data => {
        console.log(typeof data)
        dataBase = data
        idInput.id = Number(idInput.value)

        tdArr[0].innerHTML = idInput.id
        tdArr[1].innerHTML = dataBase[idInput.id]["firstName"]
        tdArr[2].innerHTML = dataBase[idInput.id]['lastName']
        tdArr[3].innerHTML = dataBase[idInput.id]['email']
        tdArr[4].innerHTML = dataBase[idInput.id]['address']
    })

}

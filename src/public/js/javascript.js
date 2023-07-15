// import { response } from "express"

// console.log('hiiii')
const btn = document.querySelector('.btn')
btn.onclick = () => {
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
// xemBtn.onclick = () => {
//     fetch('/api/data')
//         .then((response) => {
//             return response.json()

//         })
//         .then(data => {
//             console.log(typeof data)
//             dataBase = data
//             idInput.id = Number(idInput.value)

//             tdArr[0].innerHTML = idInput.id
//             tdArr[1].innerHTML = dataBase[idInput.id]["firstName"]
//             tdArr[2].innerHTML = dataBase[idInput.id]['lastName']
//             tdArr[3].innerHTML = dataBase[idInput.id]['email']
//             tdArr[4].innerHTML = dataBase[idInput.id]['address']
//         })

// }

// *************************************************************************

const form = document.querySelector('.form')
const submit = document.querySelector('#submit')

const firstName = document.querySelector('#firstname')
const lastName = document.querySelector('#lastname')
const email = document.querySelector('#email')
const address = document.querySelector('#address')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    const formData = new FormData(form, submit)
    const data = {}
    for( const [key,value] of formData.entries()){
        data[key] = value
    }
    let encodeData = []
    for(const property in data ){
        const encodeK = encodeURIComponent(property)
        const encodeV = encodeURIComponent(data[property])
        encodeData.push(encodeK + '='+encodeV)
    }
    encodeData= encodeData.join('&')
    console.log(typeof encodeData)

    fetch('/router/add-info', {
        method: 'POST',
        headers :{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        body: encodeData
    })

})
function AddNewPhone() {
    let element = document.querySelector("form#phones") // retorna o primeiro elemento da busca
    let newPhone = phoneGroup.children[0].cloneNode(true)
    let phonePosition = phoneGroup.children.length + 1
    newPhone.querySelector("label"), innerText = "Telefone" + phonePosition + ":"
    phoneForm.appendChild(newPhone)
    console.log(phoneForm.children)



}

function printPhones() {
    let message = ""
    const phones = document.querySelectorAll("input[name='phone']")
    phones.forEach((phone, index) => {
        message += 'telefone' + (index + 1) + ":" + phone.value
    })
}
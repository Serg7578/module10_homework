const wsUrl = 'wss://echo-ws-service.herokuapp.com'
const input = document.querySelector('.header__send_msg')
const btn = document.querySelector('.header__send_btn')
const text = document.querySelector('.main')
let websocket = new WebSocket(wsUrl)
websocket.onmessage = function (evt) {
   getMessage(evt.data, 'flex-start')
}

websocket.onerror = function (evt) {
   getMessage(evt.data, 'flex-start')
}

btn.addEventListener('click', () => {
   let message = input.value
   getMessage(message, 'flex-end')
   websocket.send(message)

})

function getMessage(message, position) {
   let elem = `<p class='main__text' style='align-self:${position}'>
${message}
</p>`
   let result = text.innerHTML
   text.innerHTML = result + elem
   input.value = ''
}
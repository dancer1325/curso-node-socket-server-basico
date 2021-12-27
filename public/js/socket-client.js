// File to custom the events via WebSocket between the client and the server
// Referencias del HTML
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');


const socket = io(); // Comes from /socket.io/socket.io library



socket.on('connect', () => { // Listener to the "connect" event. Launched in case the socket client connects to the server
    // console.log('Conectado');

    lblOffline.style.display = 'none'; // Not to show this html element
    lblOnline.style.display  = ''; // Show this html element

});

socket.on('disconnect', () => { // Launched in case the socket server is down
    // console.log('Desconectado del servidor');

    lblOnline.style.display  = 'none'; // Not to show this html element
    lblOffline.style.display = ''; // Show this html element
});


socket.on('enviar-mensaje', (payload) => { // Launched in case the socket server emit the event "enviar-mensaje"
    console.log( payload )
})


btnEnviar.addEventListener( 'click', () => { // Add event listener to the "btnEnviar" HTML element under action "click"

    const mensaje = txtMensaje.value; // Get the value of the "txtMensaje" HTML element
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }
    
    socket.emit( 'enviar-mensaje', payload, ( id ) => { // Emit events
        console.log('Desde el server', id ); // Add callback function to check in the client side if the socket connection was fine
    });

});



const socketController = (socket) => { // Socket object represents just the client (not for all) connected to the server which triggers the call to the server
    
    console.log('Cliente conectado', socket.id ); // This log appears each time a connection with some client is established. socket.id : Socket's id

    socket.on('disconnect', () => { // Socket to listen on 'disconnect' event. This event is launched each time a client disconnects . Example : Refreshing a webpage
        console.log('Cliente desconectado', socket.id );
    });

    socket.on('enviar-mensaje', ( payload, callback ) => { // Socket to listen on 'enviar-mensaje' event
        
        const id = 123456789;
        callback( id ); // Execute callback function to check in the client side if the socket connection was fine.
        // It will be executed just for the client which launched the event, not for all
        console.log(payload)

        //socket.emit('enviar-mensaje', payload ); // It will launch the event and it will be listened just by the client which triggers the call to the server
        socket.broadcast.emit('enviar-mensaje', payload ); // To be launched to all clients connected to the server via socket, not just the one which trigger the call to the server

    })

}



module.exports = {
    socketController
}


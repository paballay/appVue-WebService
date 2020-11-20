const express = require('express')
const app = express()

const port = process.env.PORT || 3000; // Si se corre localmente usa el puerto 3000.

app.use( express.static( __dirname + '/public') );

app.listen(port, () => {
    console.log(`Escuchando puerto ${ port }`);
})


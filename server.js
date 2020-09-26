const app = require('./src/app');
const port = 8080;

app.listen(port, () => {
    console.log(`App já está rodando na porta ${port}`)
});
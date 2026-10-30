const express = require('express');
const estudanteRoutes = require('./src/routes/estudanteRoutes');
const cursoRoutes = require('./src/routes/cursoRoutes');

const app = express();
const PORT = 4000;

app.use(express.json());

// Registra as rotas da aplicação
app.use('/estudantes', estudanteRoutes);
app.use('/cursos', cursoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
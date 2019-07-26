const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando a aplicação
const app = express();
app.use(express.json());
app.use(cors());

// Conectando ao mongo
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');

// Define as rotas
app.use('/api', require('./src/routes'));

app.listen(4200);
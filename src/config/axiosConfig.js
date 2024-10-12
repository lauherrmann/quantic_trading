// axiosConfig.js

import axios from 'axios';

// Crie uma instância do Axios com configurações personalizadas
const axiosInstance = axios.create({
  baseURL: 'http://44.210.221.206:80/api/v1/', // URL base da sua API
  timeout: 5000, // Tempo limite para a requisição (em milissegundos)
  headers: {
    'Content-Type': 'application/json', // Tipo de conteúdo das requisições
    'Authorization': 'Bearer ' + localStorage.getItem('id_token'),
    'Access-Token': localStorage.getItem('access_token'),
    // Outros cabeçalhos personalizados, se necessário
  },
});

// Interceptor para manipular requisições antes de serem enviadas
axiosInstance.interceptors.request.use(
  config => {
    // Você pode fazer manipulações na configuração da requisição, se necessário
    return config;
  },
  error => {
    // Trata erros relacionados às requisições antes do envio
    return Promise.reject(error);
  }
);

// Interceptor para manipular respostas de requisições
axiosInstance.interceptors.response.use(
  response => {
    // Você pode fazer manipulações na resposta antes de retorná-la, se necessário
    return response;
  },
  error => {
    // Trata erros relacionados às respostas das requisições
    return Promise.reject(error);
  }
);

export default axiosInstance;

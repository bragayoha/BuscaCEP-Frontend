import axios from 'axios'

// cep-inserido/formato-resposta/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api
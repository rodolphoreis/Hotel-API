## Documentação da API

Para mais informações sobre como utilizar a API, consulte a documentação em [API Documentation](#).

### Listar Reservas

- **Endpoint**: `/hotel`
- **Método HTTP**: GET
- **Descrição**: Retorna a lista de todas as reservas de quartos existentes no hotel.

### Criar uma Reserva

- **Endpoint**: `/hotel`
- **Método HTTP**: POST
- **Descrição**: Cria uma nova reserva de quarto no hotel.
- **Parâmetros do Corpo da Requisição**:
  - `checkInDate`: Data de check-in da reserva (formato: "YYYY-MM-DD").
  - `checkOutDate`: Data de check-out da reserva (formato: "YYYY-MM-DD").
  - `name`: Nome do cliente.
  - `numberOfGuests`: Número de hóspedes.
  - `roomType`: Tipo de quarto desejado.

### Atualizar uma Reserva

- **Endpoint**: `/hotel/{id}`
- **Método HTTP**: PUT
- **Descrição**: Atualiza informações de uma reserva de quarto existente no hotel.
- **Parâmetros da URL**:
  - `id`: ID da reserva a ser atualizada.
- **Parâmetros do Corpo da Requisição**:
  - `name`: Novo nome do cliente.

### Cancelar uma Reserva

- **Endpoint**: `/hotel/{id}`
- **Método HTTP**: DELETE
- **Descrição**: Cancela uma reserva de quarto existente no hotel.
- **Parâmetros da URL**:
  - `id`: ID da reserva a ser cancelada.

### Testes com Postman

Você pode testar a API utilizando o Postman. Siga os passos abaixo:

1. Faça o download e instale o [Postman](https://www.postman.com/downloads/).
2. Importe a coleção de requisições do Postman [aqui](link_para_o_seu_arquivo_de_colecao.postman_collection.json).
3. Abra o Postman e importe a coleção clicando em `File` > `Importar` e selecione o arquivo da coleção.
4. Agora você pode executar as requisições na API usando o Postman.

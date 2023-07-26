# LabeCommerce API Documentation

Welcome to the LabeCommerce API documentation! Here you will find all the information you need to interact with the API and make the most out of the LabeCommerce system.

## Documentation link:
https://documenter.getpostman.com/view/26594016/2s93sgXqoh#cc8b9684-d649-496c-a8ca-5c4b9e02c76

## What is LabeCommerce?

LabeCommerce is an e-commerce platform that allows you to create online stores. With the LabeCommerce API, you can manage users, products, and purchases, as well as perform various operations related to your virtual business.

## How to Use the API

The LabeCommerce API is based on HTTP requests and returns responses in JSON format. To get started, you need the base URL: `http://localhost:3003`. From there, you can explore the different endpoints available to create, view, edit, and delete users, products, and purchases.

## Authentication

Currently, the LabeCommerce API does not require authentication. However, please note that this may change in the future to ensure the security and protection of data.

## Available Endpoints

Here are the main endpoints available in the LabeCommerce API:

- **Users:**
    - `POST /users`: Create a new user in the platform.
    - `GET /users`: Get information about all users or filter them by name.
    - `PUT /users/:id`: Edit the information of an existing user.
    - `DELETE /users/:id`: Delete a user from the platform.

- **Products:**
    - `POST /products`: Add a new product to your store.
    - `GET /products`: Get information about all products or filter them by name.
    - `PUT /products/:id`: Update the information of an existing product.
    - `DELETE /products/:id`: Remove a product from your store.

- **Purchases:**
    - `POST /purchases`: Make a new purchase in your store.
    - `GET /purchases/:id`: Get details about a specific purchase.
    - `DELETE /purchases/:id`: Cancel a completed purchase.

## Examples and Resources

In the `examples` directory, you will find practical examples of how to use the API endpoints, including cURL commands for each operation. Additionally, feel free to explore the additional resources provided in this documentation to get a comprehensive understanding of the possibilities of the LabeCommerce API.

## Contribution

If you encounter any issues or have suggestions to improve the LabeCommerce API, feel free to open an issue or submit a pull request. We value and appreciate your contribution in making the platform even better!


## TRADUZIDO EM PORTUGUES


# LabeCommerce API Documentation

Bem-vindo à documentação da API do LabeCommerce! Aqui você encontrará todas as informações necessárias para interagir com a API e aproveitar ao máximo o sistema LabeCommerce. 

## O que é o LabeCommerce?

O LabeCommerce é uma plataforma de comércio eletrônico que permite a criação de lojas online. Com a API do LabeCommerce, você pode gerenciar usuários, produtos e compras, além de realizar diversas operações relacionadas ao seu negócio virtual.

## Como Usar a API

A API do LabeCommerce é baseada em requisições HTTP e retorna respostas em formato JSON. Para começar, você precisa da URL base: `http://localhost:3003`. A partir daí, você pode explorar os diferentes endpoints disponíveis para criar, visualizar, editar e excluir usuários, produtos e compras.

## Autenticação

Atualmente, a API do LabeCommerce não requer autenticação. No entanto, lembre-se de que isso pode ser alterado no futuro para garantir a segurança e a proteção dos dados.

## Endpoints Disponíveis

Aqui estão os principais endpoints disponíveis na API do LabeCommerce:

- **Usuários:**
    - `POST /users`: Crie um novo usuário na plataforma.
    - `GET /users`: Obtenha informações sobre todos os usuários ou filtre-os por nome.
    - `PUT /users/:id`: Edite as informações de um usuário existente.
    - `DELETE /users/:id`: Exclua um usuário da plataforma.

- **Produtos:**
    - `POST /products`: Adicione um novo produto à sua loja.
    - `GET /products`: Obtenha informações sobre todos os produtos ou filtre-os por nome.
    - `PUT /products/:id`: Atualize as informações de um produto existente.
    - `DELETE /products/:id`: Remova um produto da sua loja.

- **Compras:**
    - `POST /purchases`: Realize uma nova compra em sua loja.
    - `GET /purchases/:id`: Obtenha detalhes sobre uma compra específica.
    - `DELETE /purchases/:id`: Cancele uma compra realizada.

## Exemplos e Recursos

No diretório `exemplos`, você encontrará exemplos práticos de como utilizar os endpoints da API, incluindo comandos cURL para cada operação. Além disso, sinta-se à vontade para explorar os recursos adicionais fornecidos nesta documentação para obter uma compreensão completa das possibilidades da API do LabeCommerce.

## Contribuição

Se você encontrar algum problema ou tiver sugestões para melhorar a API do LabeCommerce, fique à vontade para abrir uma issue ou enviar um pull request. Valorizamos e agradecemos sua contribuição para tornar a plataforma ainda melhor!

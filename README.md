# Avaliação Angular

## Objetivo
Este projeto tem como objetivo avaliar habilidades no desenvolvimento de aplicações web utilizando o framework **Angular**. O desafio consiste em criar uma aplicação completa que permita listar, cadastrar, editar e excluir Pessoas, seguindo boas práticas e padrões recomendados.

------------------------------------------------------------------------------------------------------------------------------------

## Funcionalidades Implementadas

### 1. Configuração do Projeto
- Criado um projeto Angular 16 e publicado no GitHub.

### 2. Listagem de Pessoas
- Criada uma página que exibe uma lista de Pessoas, buscando os dados de uma API.
- A listagem é exibida em uma tabela contendo as seguintes colunas:
  - **ID**
  - **Nome**
  - **Endereço**
  - **CEP**
  - **UF**
  - **Ativo**
  - **Contatos** (Números de celular)
  - **Ações** (Editar e Excluir)
- O botão **Editar** redireciona para a página de edição.
- O botão **Excluir** exibe uma confirmação antes de remover a pessoa da lista.

### 3. Cadastro de Pessoas
- Criada uma página para cadastrar novas Pessoas com os seguintes campos:
  - **Nome** (obrigatório, tipo string)
  - **CEP** (obrigatório, tipo string)
  - **Endereço** (obrigatório, tipo string)
  - **Cidade** (obrigatório, tipo string)
  - **UF** (obrigatório, tipo string)

### 4. Edição de Pessoas
- Criada uma página para edição de Pessoas, com os mesmos campos do cadastro.
- Permite alterar e atualizar os dados de uma Pessoa existente.

### 5. Integração com a API ViaCEP
- Ao digitar um CEP no formulário de cadastro ou edição, os dados de endereço são buscados automaticamente na API **[ViaCEP](https://viacep.com.br)**.

### 6. Diretrizes Seguidas
- Uso de **interface/type** para tipagem do objeto Pessoa (evitando `any`).
- Validações no cadastro e edição, garantindo obrigatoriedade e tamanho correto dos campos.
- O componente de tabela recebe o Array de Pessoas através de **@Input**.



------------------------------------------------------------------------------------------------------------------------------------

## Tecnologias Utilizadas
- **Angular 16**
- **TypeScript**
- **HTML5 e CSS3**
- **Bootstrap** (para estilização)
- **API ViaCEP** (para busca de endereços via CEP)
- **JSON Server** (para mock de API de Pessoas, se necessário)

------------------------------------------------------------------------------------------------------------------------------------

## Como Executar o Projeto

### 1. Clone o repositório
```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio](https://github.com/lucianorvk7/Projeto-Angular.git
```

### 2. Instale as dependências
```sh
   npm install
```

### 3. Inicie o servidor local
```sh
   ng serve
```
A aplicação estará disponível em `http://localhost:4200/`.


---

## Melhorias Futuras
- Implementar autenticação de usuários.
- Adicionar paginação na listagem de Pessoas.
- Melhorar a interface com um design mais moderno.

---

## Contato
Caso tenha dúvidas ou sugestões, sinta-se à vontade para abrir uma **Issue** ou entrar em contato:

- **Seu Nome** - https://linkedin.com/in/seu-perfil)](https://www.linkedin.com/in/lucianoconstantino
- **E-mail**: luciano.constantino@gmail.com


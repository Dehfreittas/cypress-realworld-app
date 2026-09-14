# Casos de Teste - Exercício 1
## CT-001 - Login com sucesso

**Objetivo:**

Validar que um usuário cadastrado consegue acessar sua conta utilizando credenciais válidas.

**Pré-condição:**

O usuário `Heath93`está cadastrado no sistema.

**Dados de Teste:**

- Usuário: Heath93
- Senha: `s3cret`

**Passos:**

1. Acessar o Real World App.
2. Informar o usuário `Heath93`.
3. Informar a senha `s3cret`.
4. Acionar o botão de login.

**Resultado Esperado:**

O usuário é autenticado com sucesso e a página inicial da conta é apresentada, exibindo o usuário autenticado.

## CT-002 - Login com credenciais inválidas

**Objetivo:**

Verificar se o sistema impede o login quando são utilizadas credenciais inválidas e exibe uma mensagem de erro.

**Pré-Condição**

O usuário está na tela de login do Real World App.

**Dados de Teste:**
- Usuário: invalidUserName
- Senha: invalidPa$$word

**Passos:**

1. Acessar o Real World App.
2. Informar o usuário `invalidUserName`.
3. Informar a senha `invalidPa$$word`.
4. Acionar o botão de login.

**Resultado esperado:**

O sistema deve impedir o login e exibir a mensagem de erro `Username or password is invalid`.

## CT-003 - Registro de novo usuário com sucesso

**Objetivo:**

Validar que um novo usuário consegue realizar o cadastro com sucesso e utilizar as credenciais cadastradas para acessar o sistema.

**Pré-Condição**

O usuário ainda não está cadastrado no sistema.

**Dados de Teste:**

- Nome: `Paul`
- Sobrenome: `Mark`
- Usuário: `paulM`
- Senha: `MarkP`


**Passos:**

1. Acessar o Real World App.
2. Clicar 2x na mensagem Don't have an account? Sign Up.
3. Digitar o primeiro nome.
4. Digitar o sobrenome.
5. Digitar o username.
6. Digitar a senha.
7. Confirmar a senha.
8. Clicar no botão Sign Up.
9. Informar o username cadastrado.
10. Informar a senha cadastrada.
11. Clicar no botão `Sign In`.

**Resultado Esperado:**

O login deve ser realizado com sucesso utilizando as credenciais cadastradas, e o usuário deve ser direcionado para a página inicial da conta.

## CT-004 - Registro com dados incompletos

**Objetivo:**

Validar que o sistema impeça o cadastro quando faltam informações obrigatórias.

**Pré-condição**

O usuário está na tela de cadastro do Real World App.

**Dados de Teste:**

- Nome: `Paul`
- Sobrenome: `Mark`
- Usuário: *(em branco)*
- Senha: `MarkP`

**Passos:**

1. Acessar o Real World App.
2. Clicar 2x em `Don't have an account? Sign Up`.
3. Digitar o primeiro nome.
4. Digitar o sobrenome.
5. Não preencher o campo `Username`.
6. Digitar a senha.
7. Confirmar a senha.


**Resultado esperado:**

O sistema deve impedir o cadastro enquanto o campo obrigatório `Username` estiver vazio, mantendo o botão `Sign Up` desabilitado.


**Resultado obtido:**

O sistema manteve o botão `Sign Up` desabilitado quando o campo `Username` permaneceu vazio.


**Automação:**

O comportamento foi validado automaticamente pelo Cypress por meio da verificação de que o botão `Sign Up` está desabilitado.

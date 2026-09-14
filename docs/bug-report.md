# Bug Report

## BUG-001 - Sistema permite transferência com saldo insuficiente

**Severidade:** Alta

**Prioridade:** Alta

**Status:** Aberto

### Ambiente

- Aplicação Cypress Real World App (RWA)
- Execução: Ambiente Local
- URL: http://localhost:3000/

### Pré-condição

Usuário autenticado com saldo disponível de $1,509.53.

### Passos para reproduzir

1. Acessar a aplicação.
2. Realizar login com um usuário válido.
3. Acessar a opção **New $**.
4. Selecionar um usuário para realizar a transferência.
5. Informar o valor de $99,999.00.
6. Informar uma descrição.
7. Clicar em **Pay**.

### Resultado esperado

O sistema deve impedir a transferência quando o valor informado for superior ao saldo disponível e apresentar uma mensagem informando que o saldo é insuficiente.

### Resultado obtido

O sistema permite a transferência de $99,999.00 mesmo com saldo disponível de apenas $1,509.53.

O sistema exibe a mensagem:

**Paid $99,999.00 for Teste de transferencia**

Após a operação, o saldo é apresentado como $0.00.

### Evidência

A transferência foi concluída com sucesso mesmo com o valor da operação sendo muito superior ao saldo disponível da conta.
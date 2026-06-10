Aplicação web que gera páginas de landing page responsivas utilizando Inteligência Artificial a partir de prompts em texto.

---

## 📌 Sobre o projeto

O PageCraft AI é uma ferramenta que transforma descrições em linguagem natural em páginas web completas automaticamente.

O usuário descreve o tipo de página desejada e a IA gera o código HTML/CSS estruturado.

Desenvolvimento full-stack, APIs e integração com Inteligência Artificial.

---

## ✨ Funcionalidades

- Geração de páginas via prompt de texto
- Integração com Inteligência Artificial
- Retorno de código HTML/CSS
- Interface simples e intuitiva
- Possibilidade de regenerar páginas

---

## 🧱 Tecnologias

**Frontend:**
- HTML
- CSS
- JavaScript

**Backend:**
- Node.js
- Express

**IA:**
- GROQ_API_KEY=sua_chave_aqui

---

## 📁 Estrutura do projeto

pagecraft-ai/
├── backend/
├── frontend/
├── .gitignore
└── README.md

---

## ⚙️ Como funciona

1. Usuário digita um prompt
2. Frontend envia para o backend
3. Backend chama a API de IA
4. IA gera o código da página
5. Resultado é exibido na tela

---
## 🧪 Qualidade e Testes

Durante o desenvolvimento foram aplicadas práticas de Garantia da Qualidade (QA), incluindo:

- Testes manuais da interface do usuário
- Validação de respostas da API
- Testes de cenários positivos e negativos
- Verificação de tratamento de erros
- Validação de campos obrigatórios
- Testes de integração Frontend ↔ Backend
- Registro e análise de defeitos encontrados

- ## 📋 Casos de Teste

### CT001 - Gerar página com prompt válido
**Dado** que o usuário informa um prompt válido

**Quando** solicitar a geração da página

**Então** o sistema deve retornar uma página gerada pela IA

---

### CT002 - Prompt vazio

**Dado** que o campo de prompt está vazio

**Quando** o usuário tentar gerar uma página

**Então** o sistema deve exibir uma mensagem de validação

---

### CT003 - Falha na API

**Dado** que a API esteja indisponível

**Quando** o usuário solicitar uma geração

**Então** o sistema deve exibir uma mensagem de erro amigável

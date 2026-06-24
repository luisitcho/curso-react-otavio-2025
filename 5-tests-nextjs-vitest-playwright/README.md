# Next.js Testing Mastery: Vitest & Playwright

**Link do Repositório Oficial:** [luisitcho/curso-react-otavio-2025/5-tests-nextjs-vitest-playwright](https://github.com/luisitcho/curso-react-otavio-2025/tree/main/5-tests-nextjs-vitest-playwright)

Uma base profissional e robusta construída com **Next.js 16.2.9**, focada na implementação de uma estratégia de testes completa e eficiente. Este projeto demonstra como configurar e estruturar testes unitários, de integração e End-to-End (E2E) em aplicações modernas, empregando princípios de arquitetura limpa.

## Tecnologias e Stack

- **Framework Core**: [Next.js](https://nextjs.org/) (Versão 16.2.9)
- **Biblioteca de UI**: [React](https://react.dev/) (Versão 19.2.4)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Banco de Dados & ORM**: [Better SQLite3](https://github.com/WiseLibs/better-sqlite3) + [Drizzle ORM](https://orm.drizzle.team/)
- **Documentação de Componentes**: [Storybook](https://storybook.js.org/)
- **Ícones**: [Lucide React](https://lucide.dev/)

### Ferramentas de Teste
- **Unitários & Integração**: [Vitest](https://vitest.dev/)
- **End-to-End (E2E)**: [Playwright](https://playwright.dev/)
- **Cobertura de Testes**: `@vitest/coverage-v8`
- **Utilitários de Teste**: React Testing Library

## Arquitetura e Escopo do Projeto

O código-fonte da aplicação (`src`) é dividido estrategicamente para promover a separação de responsabilidades, testabilidade e escalabilidade:

- **App Router (`src/app`)**: Camada de apresentação que utiliza a infraestrutura moderna do Next.js (Server Components e Client Components). Contém os layouts, páginas principais e estilos globais (`globals.css`).
- **Core / Regras de Negócio (`src/core/todo`)**: Camada de domínio agnóstica de framework. Aqui reside o domínio principal (Todo), incluindo factories (ex: `make-new-todo.ts`) que encapsulam a lógica de criação e validação de tarefas. Este módulo é amplamente coberto por testes unitários focados unicamente na regra de negócio pura, isolada da interface.
- **Utilitários (`src/utils`)**: Funções compartilhadas e helpers para a aplicação. Possui utilitários puros como o `sanetize-str.ts`, com suas respectivas suítes de testes isoladas (`sanetize-str.spec.ts`).
- **Persistência de Dados**: Estrutura robusta configurada com **Drizzle ORM** usando **Better SQLite3**, garantindo uma integração rápida, leve e 100% tipada com o banco de dados relacional.

## Estrutura de Scripts

O projeto conta com um conjunto robusto de scripts para facilitar o fluxo de desenvolvimento, testes e banco de dados.

### Desenvolvimento & Build
- `npm run dev` - Inicia o servidor Next.js em modo de desenvolvimento.
- `npm run build` - Cria o build de produção da aplicação.
- `npm run start` - Inicia o servidor Next.js com o build de produção.
- `npm run lint` - Executa a verificação estática do código com ESLint.

### Banco de Dados (Drizzle)
- `npm run drizzle:generate` - Gera as migrações do banco de dados baseadas no schema.
- `npm run drizzle:migrate` - Aplica as migrações no banco de dados SQLite.

### Testes
A estratégia de testes é dividida por ambientes usando o `dotenv` para separar as variáveis de ambiente (`.env.test` e `.env.e2e`).

**Testes Unitários & Integração (Vitest)**
- `npm run test` - Roda os testes unitários e de integração uma vez.
- `npm run test:watch` - Roda os testes em modo watch.
- `npm run test:unit` - Executa apenas testes unitários.
- `npm run test:int` - Executa apenas testes de integração (sem paralelismo).
- `npm run test:cov` - Roda os testes e gera o relatório de cobertura de código.

**Testes End-to-End (Playwright)**
- `npm run test:e2e` - Roda os testes E2E em modo headless.
- `npm run test:e2e:ui` - Roda os testes E2E abrindo a UI do Playwright.
- `npm run test:e2e:headed` - Roda os testes E2E abrindo os navegadores visivelmente.
- `npm run test:e2e:debug` - Roda os testes E2E em modo debug.

**Testes Totais**
- `npm run test:all` - Executa a suíte completa de testes (Unitários, Integração e E2E).

### Storybook
- `npm run storybook` - Inicia o servidor do Storybook na porta 6006.
- `npm run build-storybook` - Cria o build estático do Storybook.

---

*Esta documentação reflete a estrutura profissional atual do projeto, focada na alta qualidade de código e confiabilidade garantida por múltiplas camadas de testes e uma arquitetura bem definida.*
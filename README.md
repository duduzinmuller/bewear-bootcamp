## Bewear Bootcamp — E-commerce com Next.js 15

Projeto de e-commerce construído com Next.js (App Router), focado em uma arquitetura moderna, tipada e escalável. O app inclui autenticação, catálogo de produtos, carrinho, checkout e páginas de pedidos.

### Stack

- **Next.js 15 (App Router)**
- **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- **React Query** (consumo de Server Actions)
- **React Hook Form** + **Zod**
- **BetterAuth** (autenticação)
- **PostgreSQL** + **Drizzle ORM**

### Funcionalidades

- Catálogo de produtos e variantes (`app/product-variant/[slug]`)
- Carrinho, identificação e confirmação (`app/cart/...`)
- Checkout (sucesso e cancelamento) (`app/checkout/success` e `app/checkout/cancel`)
- Área do usuário com pedidos (`app/my-orders`)
- Autenticação e sessão de usuário

---

## Estrutura de Pastas (App Router)

Principais diretórios em `app/`:

- `app/layout.tsx`: Layout raiz da aplicação
- `app/page.tsx`: Home
- `app/_components/`: Componentes compartilhados (ex.: `header`, `footer`)
- `app/cart/`: Fluxos do carrinho
  - `identification/`: Identificação e endereços
  - `confirmation/`: Resumo e confirmação
- `app/checkout/`: Feedback do checkout
  - `success/` e `cancel/`
- `app/my-orders/`: Pedidos do usuário
- `app/product-variant/[slug]/`: Página de produto/variante
- `app/actions/`: Server Actions (cada ação em uma pasta com `index.ts` e `schema.ts`)
- `app/_db/`: Configuração do banco (`index.ts`, `schema.ts`)
- `app/hooks/`: Hooks do React Query (queries e mutations)

Outros arquivos importantes:

- `app/globals.css`: Estilos globais (Tailwind CSS)

---

## Padrões e Convenções

- **TypeScript** em todo o projeto
- **Nomes descritivos** para variáveis e funções
- **Pastas e arquivos** em `kebab-case`
- **Server Actions**: sempre em `app/actions/<nome-da-acao>/{index.ts,schema.ts}`
- **Formulários**: React Hook Form + Zod
- **UI**: componentes do `shadcn/ui`
- **React Query**: crie hooks em `app/hooks/queries` e `app/hooks/mutations` e exporte uma `queryKey`/`mutationKey`
- **Conventional Commits** para mensagens de commit

Exemplo de layout com Footer no rodapé:

```tsx
<div className="flex min-h-screen flex-col">
  <Header />
  <main className="flex-1">{children}</main>
  <Footer />
</div>
```

---

## Configuração

### Pré-requisitos

- Node.js 18+
- PostgreSQL

### Variáveis de Ambiente

Crie um `.env` na raiz com, por exemplo:

```
DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/DB
BETTER_AUTH_SECRET=uma_chave_segura
BETTER_AUTH_URL=http://localhost:3000
```

> Ajuste valores conforme seu ambiente. Podem existir outras variáveis específicas do projeto.

### Instalação

```bash
npm install
# ou
pnpm install
```

### Banco de Dados (Drizzle)

Gere e rode migrations (exemplos):

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

---

## Desenvolvimento

```bash
npm run dev
```

Aplicação em `http://localhost:3000`.

### Build e Produção

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Guias Rápidos

### Criar uma Server Action

1. Crie a pasta `app/actions/<nome-da-acao>`
2. Defina `schema.ts` com Zod para entrada/saída
3. Implemente a lógica no `index.ts` usando o `app/_db`

### Consumir Server Action no Client com React Query

1. Crie um hook em `app/hooks/queries` ou `app/hooks/mutations`
2. Exporte também a `queryKey`/`mutationKey`
3. Use o hook no componente (ex.: componentes do carrinho)

### Formulários

- Use React Hook Form com resolver do Zod
- Utilize componentes do `shadcn/ui` para campos e `react-number-format` quando precisar de máscaras

---

## Commits

Use **Conventional Commits**:

- `feat: ...` nova funcionalidade
- `fix: ...` correção de bug
- `chore: ...` tarefas diversas
- `refactor: ...` refatorações sem mudança de comportamento
- `docs: ...` documentação

---

## Licença

Este projeto é de uso educacional. Defina a licença conforme a necessidade do seu repositório.

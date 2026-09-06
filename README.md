# Barbershop Accessible Booking💈

Sistema de agendamento para uma barbearia pensada especialmente para atender pessoas autistas, com foco em ambiente sensorial adequado, horários exclusivos e experiência de agendamento simples e previsível.

## 📖 Sobre o projeto

Muitas pessoas autistas enfrentam dificuldades em ambientes tradicionais de barbearia devido a estímulos sensoriais (barulho, luz, toque, tempo de espera imprevisível). Este projeto tem como objetivo criar uma plataforma de agendamento que:

- Permita marcar horários de forma clara e sem sobrecarga de informação;
- Facilite a comunicação entre cliente e barbearia antes do atendimento;
- Torne o processo de visita mais previsível e tranquilo.

> 🚧 **Status atual:** o projeto está em fase inicial. Até o momento, foi feita apenas a **modelagem de dados** com Prisma. As funcionalidades de interface e regras de negócio ainda serão implementadas.

## 🛠️ Tecnologias utilizadas

- [Next.js](https://nextjs.org/) — framework React para o frontend e backend (API routes / server actions)
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática
- [Prisma](https://www.prisma.io/) — ORM para modelagem e acesso ao banco de dados
- [Supabase](https://supabase.com/) — banco de dados PostgreSQL gerenciado

## 📂 Estrutura do projeto

```
.
├── prisma/
│   └── schema.prisma      # Modelagem do banco de dados
├── src/
│   ├── app/                # Rotas e páginas (Next.js App Router)
│   ├── components/         # Componentes reutilizáveis
│   ├── lib/                 # Utilitários e configuração (ex: cliente Prisma)
│   └── ...
├── .env.example
├── package.json
└── README.md
```

> Ajuste esta estrutura conforme o projeto for evoluindo.

## 🚀 Como rodar o projeto localmente

### Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm
- Conta no [Supabase](https://supabase.com/) com um projeto criado

### Passo a passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/barbearia-tea.git
   cd barbearia-tea
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```
   Preencha o `.env` com a connection string do Supabase (`DATABASE_URL`) e demais variáveis necessárias.

4. Gere o client do Prisma e aplique as migrations:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. Rode o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

6. Acesse [http://localhost:3000](http://localhost:3000)

## 🗄️ Modelagem de dados

A modelagem atual (`prisma/schema.prisma`) já contempla as entidades principais do sistema, incluindo clientes, barbeiros, serviços e agendamentos. As preferências sensoriais dos clientes fazem parte do modelo para permitir personalização do atendimento.

## 🗺️ Roadmap

- [x] Modelagem do banco de dados com Prisma
- [ ] Autenticação de usuários
- [ ] CRUD de agendamentos
- [ ] Cadastro de preferências sensoriais no perfil
- [ ] Painel administrativo para a barbearia
- [ ] Notificações de lembrete de horário
- [ ] Deploy em produção

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues com sugestões, especialmente relacionadas à acessibilidade e experiência sensorial.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Defina aqui a licença do projeto (ex: MIT).

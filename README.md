# IDLE DEV

> Um jogo incremental (idle game) para desenvolvedores. Comece consertando bugs, termine refatorando o universo.

![Capa do Jogo](todo) ---

## 🎮 Sobre o Jogo

`IDLE DEV` é um jogo idle/incremental inspirado no clássico *NGU Idle*, mas com uma temática 100% focada no universo da programação e na vida de um desenvolvedor.

Comece como um "Estagiário Ocioso" (Idle Intern) e treine suas *skills* (como `Attack` e `Defence`), lute contra *bosses*, ganhe *gold* e veja seus números subirem até o infinito!

## ✨ Funcionalidades Planejadas

Baseado no diagrama original, o jogo planeja incluir:

* **🏋️ Training:** Treine seus status básicos (Attack, Defence, etc.) usando Energia.
* **👹 Fight Boss:** Lute contra bosses para ganhar XP, Ouro e Itens.
* **🗺️ Adventure:** Um modo de jogo AFK para farmar itens e gold automaticamente.
* **⛏️ Miners:** Compre mineradoras de bitcoin para gerar gold passivamente.
* **🎓 Online Course:** Treine status de "conhecimento" como `attack` e `defence`.
* **... e muito mais!** (Pit, Sr. Training, Sass, Virtual Box, etc.)

## 💻 Tech Stack (Tecnologias Utilizadas)

Este projeto foi construído com uma stack moderna de front-end, pensando em performance e na possibilidade de se tornar um PWA publicado na Play Store e APP store:

* **[Vue.js 3](https://vuejs.org/):** O framework reativo principal.
* **[Vite](https://vitejs.dev/):** Build tool de alta performance para desenvolvimento e build.
* **[Pinia](https://pinia.vuejs.org/):** A solução de gerenciamento de estado para o Vue.
* **[Vue Router](https://router.vuejs.org/):** Para a navegação entre paginas.

---

## 🚀 Rodando o Projeto Localmente

Você precisa ter o [Node.js](https://nodejs.org/en/) (v18+ ou superior) instalado.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/FelipeBockMagagnin/idle_dev.git](https://github.com/FelipeBockMagagnin/idle_dev.git)
    cd idle_dev
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  Abra `http://localhost:5173` (ou a porta indicada no terminal) no seu navegador.

### Scripts Disponíveis

* `npm run dev`: Inicia o servidor de desenvolvimento.
* `npm run build`: Compila o projeto para produção (na pasta `/dist`).
* `npm run lint`: Executa o linter (ESLint) para verificar a qualidade do código.

---
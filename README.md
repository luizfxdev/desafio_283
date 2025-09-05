# 🏰✨ Reino dos Arrays — Organizador de Tesouros

📌 *Repositório:* github.com/luizfxdev/desafio_283

🎮 *Inspiração:* Legend of Zelda

## 📖 Descrição

O Reino dos Arrays é uma página interativa que organiza números mágicos (tesouros) em um array.
⚔️ A missão do herói é destacar e ordenar os números primos, mantendo-os nas mesmas posições.

💡 O projeto traz uma ambientação de fantasia:

🎥 Vídeo de fundo (background.mp4) criando a atmosfera mística.

🎶 Trilha sonora (theme.mp3) para acompanhar a jornada.

🧩 Visual inspirado no universo de Legend of Zelda.

## 🗂️ Estrutura dos Arquivos
```
DESAFIO_283/
│── assets/
│   ├── background.mp4   🎥 vídeo de fundo
│   └── theme.mp3        🎶 música tema
│
│── index.html           🌐 interface principal
│── styles.css           🎨 estilos da aplicação
│── script.js            ⚙️ lógica de interação

```

## 🖥️ Visão Geral da Interface

✅ O usuário insere números separados por vírgula.

✅ Ao clicar em "ORGANIZAR", os números primos são identificados, ordenados e reinseridos nas posições originais.

✅ Controles disponíveis para tocar/pausar a trilha sonora, sem afetar o vídeo de fundo.

## ⚡ Como Usar (Execução Local)

📂 Coloque a pasta DESAFIO_283 em um servidor estático ou abra index.html diretamente no navegador.

🌍 Recomenda-se usar um servidor HTTP simples para evitar problemas de CORS.

🎥 O vídeo inicia automaticamente (loop, muted, fullscreen).

🎶 Se o áudio não iniciar automaticamente, clique em qualquer lugar da página e use os botões de controle.

## 🎛️ Controles e Mídia

Vídeo de fundo: autoplay, loop, muted e fullscreen (object-fit: cover).

Música tema: loop, com botões de play/pause.

Independência multimídia: ajustes de áudio não afetam o vídeo.

## 🛠️ Boas Práticas e Recomendações

🔹 Comprima os arquivos de mídia para melhorar o carregamento.
🔹 Forneça formatos alternativos (ex.: .webm, .ogg).
🔹 Teste em navegadores modernos: Chrome, Firefox, Edge, Safari.
🔹 Verifique em dispositivos móveis para garantir responsividade.

## 🧩 Problemas Comuns e Soluções

❌ Áudio não reproduz → Clique na página e use o botão de reprodução; confirme se theme.mp3 está acessível.

❌ Vídeo pequeno ou ausente → Ajuste CSS (object-fit: cover, z-index).

❌ Erro CORS ou arquivo não encontrado → Verifique caminhos relativos e permissões no servidor.

## 🏹 Créditos e Licença

🎨 Estética inspirada em Legend of Zelda (projeto não oficial e sem afiliação).
👨‍💻 Autor: Luiz Felipe de Oliveira (@luizfx.dev)

📜 Escolha de licença recomendada: MIT (ou outra de sua preferência).

## 🌟 Notas Finais

Este projeto une lógica de programação e imersão visual/sonora, transformando um desafio de arrays em uma aventura épica no estilo Zelda.

💬 Sugestões e contribuições são bem-vindas!


// Verifica se um número é primo
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

// Função principal para organizar os tesouros
function organizarTesouros(tesouros) {
  // Encontrar índices e valores dos números primos
  const primeIndices = [];
  const primeValues = [];
  tesouros.forEach((num, index) => {
    if (isPrime(num)) {
      primeIndices.push(index);
      primeValues.push(num);
    }
  });
  // Ordenar os valores primos
  primeValues.sort((a, b) => a - b);
  // Criar uma cópia do array original para modificar
  const resultado = [...tesouros];
  // Substituir os primos pelos valores ordenados
  primeIndices.forEach((index, i) => {
    resultado[index] = primeValues[i];
  });
  return {
    original: [...tesouros],
    primeIndices,
    primeValues,
    sortedPrimes: [...primeValues].sort((a, b) => a - b),
    resultado
  };
}

// Processa a entrada quando o botão é clicado
document.addEventListener('DOMContentLoaded', function () {
  const organizarBtn = document.getElementById('organizar-btn');
  const retornarBtn = document.getElementById('retornar-btn');
  const tesourosInput = document.getElementById('tesouros-input');
  const resultadoContainer = document.getElementById('resultado-container');
  const playAudioBtn = document.getElementById('play-audio');
  const pauseAudioBtn = document.getElementById('pause-audio');
  const themeAudio = document.getElementById('theme-audio');

  // Configurar controles de áudio
  if (playAudioBtn && pauseAudioBtn && themeAudio) {
    playAudioBtn.addEventListener('click', function () {
      themeAudio.play().catch(e => {
        console.log('Reprodução de áudio impedida pelo navegador:', e);
        alert('Por favor, interaja com a página para habilitar o áudio.');
      });
      playAudioBtn.style.display = 'none';
      pauseAudioBtn.style.display = 'flex';
    });

    pauseAudioBtn.addEventListener('click', function () {
      themeAudio.pause();
      playAudioBtn.style.display = 'flex';
      pauseAudioBtn.style.display = 'none';
    });

    // Inicialmente esconder o botão de pausar
    pauseAudioBtn.style.display = 'none';
  }

  // Configurar o botão Retornar
  retornarBtn.addEventListener('click', function () {
    tesourosInput.value = '';
    resultadoContainer.innerHTML = '<p class="instruction">Clique em ORGANIZAR para ver o resultado</p>';
  });

  // Configurar o botão Organizar
  organizarBtn.addEventListener('click', function () {
    // Obter e validar a entrada
    const inputVal = tesourosInput.value.trim();
    if (!inputVal) {
      resultadoContainer.innerHTML =
        '<p class="instruction" style="color:#ff6b6b;">Por favor, insira alguns números.</p>';
      return;
    }

    // Converter a entrada em array de números
    let numeros;
    try {
      numeros = inputVal
        .split(',')
        .map(num => num.trim())
        .filter(num => num !== '')
        .map(num => {
          const parsed = parseInt(num);
          if (isNaN(parsed)) throw new Error(`"${num}" não é um número válido`);
          return parsed;
        });
    } catch (error) {
      resultadoContainer.innerHTML = `<p class="instruction" style="color:#ff6b6b;">Erro: ${error.message}</p>`;
      return;
    }

    if (numeros.length === 0) {
      resultadoContainer.innerHTML =
        '<p class="instruction" style="color:#ff6b6b;">Por favor, insira alguns números válidos.</p>';
      return;
    }

    // Processar os números
    const processamento = organizarTesouros(numeros);

    // Exibir o resultado
    let html = `
            <div class="result-output">
                <span class="result-title">Entrada:</span>
                <div class="array-display">[${processamento.original.join(', ')}]</div>
            </div>
            <div class="result-output">
                <span class="result-title">Passo a Passo:</span>
                <div class="step">
                    <p>1. Identificando números primos (Joias Mágicas):</p>
                    <div class="array-display">
                        ${processamento.original
                          .map((num, i) =>
                            isPrime(num) ? `<span class="prime">${num}</span>` : `<span class="non-prime">${num}</span>`
                          )
                          .join(', ')}
                    </div>
                    <p>Primos encontrados nas posições: [${processamento.primeIndices.join(', ')}]</p>
                </div>
                <div class="step">
                    <p>2. Valores primos encontrados:</p>
                    <div class="array-display">[${processamento.primeValues.join(', ')}]</div>
                </div>
                <div class="step">
                    <p>3. Ordenando os primos em ordem crescente:</p>
                    <div class="array-display">[${processamento.sortedPrimes.join(', ')}]</div>
                </div>
                <div class="step">
                    <p>4. Mantendo não primos (Relíquias Antigas) nas posições originais:</p>
                    <div class="array-display">
                        ${processamento.original
                          .map((num, i) =>
                            isPrime(num)
                              ? `<span class="non-prime">${processamento.primeIndices.includes(i) ? 'X' : num}</span>`
                              : `<span class="non-prime">${num}</span>`
                          )
                          .join(', ')}
                    </div>
                </div>
                <div class="step">
                    <p>5. Substituindo primos pelos valores ordenados:</p>
                    <div class="array-display">
                        ${processamento.resultado
                          .map((num, i) =>
                            processamento.primeIndices.includes(i)
                              ? `<span class="prime">${num}</span>`
                              : `<span class="non-prime">${num}</span>`
                          )
                          .join(', ')}
                    </div>
                </div>
            </div>
            <div class="final-result">
                <span class="result-title">Saída Esperada:</span>
                <div class="array-display">[${processamento.resultado.join(', ')}]</div>
            </div>
        `;
    resultadoContainer.innerHTML = html;
  });
});

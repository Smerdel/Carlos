import { useEffect, useRef } from 'react'
import Stencil from 'react-pageflip'
import './App.css'

// Imagens em public/assets - usar URLs diretas
const page1 = '/assets/page1.jpg'
const page2 = '/assets/page2.jpg'
const page3 = '/assets/page3.jpg'
const page4 = '/assets/page4.jpg'
const cover = '/assets/cover.jpg'

function App() {
  const stencilRef = useRef(null)
  const bookRef = useRef(null)

  useEffect(() => {
    if (stencilRef.current && !bookRef.current) {
      const book = stencilRef.current.getPageFlip()
      bookRef.current = book
      
      // Configurações do livro
      book.updateFromHtml(document.getElementById('book'))
      
      // Evento quando vira a página
      book.on('flip', (e) => {
        console.log('Página virada:', e.pageIndex)
      })
    }
  }, [])

  const goToPage = (pageIndex) => {
    if (bookRef.current) {
      bookRef.current.flip(pageIndex)
    }
  }

  return (
    <div className="grimorio-container">
      <div className="ambient-bg">
        <div className="particles" id="particles"></div>
        <div className="candle-glow"></div>
        <div className="candle-glow right"></div>
      </div>
      
      <Stencil
        ref={stencilRef}
        width={900}
        height={600}
        size="fixed"
        minWidth={320}
        maxWidth={1000}
        minHeight={200}
        maxHeight={700}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={false}
        startZIndex={0}
        autoSize={true}
        showCover={true}
        mobileScrollSupport={true}
        clickEventForward={true}
      >
        <div id="book" className="grimorio-book">
          
          {/* CAPA */}
          <div className="page cover" data-page="0" data-density="hard">
            <div className="page-content cover-content">
              <div className="cover-design">
                <div className="cover-emblem">
                  <div className="wolf-silhouette">🐺</div>
                  <div className="vampire-silhouette">🦇</div>
                  <div className="fallen-wings">👼</div>
                </div>
                <h1 className="cover-title">Grimório dos Caídos</h1>
                <p className="cover-subtitle">Crônicas de um Lobisomem e uma Vampira<br/>que escolheram cair por amor</p>
                <div className="cover-divider">
                  <span className="rune">ᚠ</span>
                  <span className="rune">ᚢ</span>
                  <span className="rune">ᚦ</span>
                </div>
                <p className="cover-hint">Clique na borda ou arraste para virar a página</p>
              </div>
            </div>
          </div>

          {/* PÁGINA 1 - A História */}
          <div className="page" data-page="1" data-density="hard">
            <div className="page-content">
              <div className="page-ornament top-left">✦</div>
              <div className="page-ornament top-right">✦</div>
              <div className="page-text">
                <h2 className="page-title">O Início</h2>
                <div className="illuminated-letter">N</div>
                <p className="story-text">
                  <span className="first-words">No reino das sombras</span>, onde a lua rege os lobos e a noite abraça os vampiros, 
                  nossos caminhos se cruzaram. Eu era fera, instinto puro, lealdade à matilha. 
                  Tu eras noite, elegância eterna, sede contida.
                </p>
                <p className="story-text">
                  Não deveríamos nos entender. Lobos caçam, vampiros dominam. 
                  Mas nos olhamos e vimos não o inimigo — vimos o espelho.
                </p>
                <div className="page-image">
                  <img src={page1} alt="Primeiro encontro" />
                </div>
              </div>
              <div className="page-ornament bottom-left">✦</div>
              <div className="page-ornament bottom-right">✦</div>
              <div className="page-number">1</div>
            </div>
          </div>

          {/* PÁGINA 2 - A Transformação */}
          <div className="page" data-page="2" data-density="hard">
            <div className="page-content">
              <div className="page-ornament top-left">✦</div>
              <div className="page-ornament top-right">✦</div>
              <div className="page-text">
                <h2 className="page-title">A Queda</h2>
                <div className="illuminated-letter">P</div>
                <p className="story-text">
                  <span className="first-words">Por ti, deixei a matilha.</span> Minha pele de lobo se rasgou, 
                  e do sangue nasceram asas negras. Cai do céu não como punição — 
                  mas como escolha. Meu uivo virou prece. Minha garras, proteção.
                </p>
                <p className="story-text">
                  <span className="first-words">Por mim, deixaste a corte.</span> Teu sangue frio aqueceu. 
                  Teus dentes guardaram apenas beijos. Caíste ao meu lado, 
                  e juntas nossas asas formaram um só par.
                </p>
                <div className="page-image">
                  <img src={page2} alt="Transformação" />
                </div>
              </div>
              <div className="page-ornament bottom-left">✦</div>
              <div className="page-ornament bottom-right">✦</div>
              <div className="page-number">2</div>
            </div>
          </div>

          {/* PÁGINA 3 - Memórias */}
          <div className="page" data-page="3" data-density="hard">
            <div className="page-content">
              <div className="page-ornament top-left">✦</div>
              <div className="page-ornament top-right">✦</div>
              <div className="page-text">
                <h2 className="page-title">Memórias Gravadas</h2>
                <div className="illuminated-letter">E</div>
                <p className="story-text">
                  <span className="first-words">Cada batalha</span> lado a lado. Cada silêncio compartilhado. 
                  Cada vez que suas asas me abrigaram da chuva. 
                  Cada vez que meu pelo aqueceu tuas noites frias.
                </p>
                <p className="story-text">
                  O tempo nos separou. O orgulho falou mais alto. 
                  Mas a queda nos ensinou: anjos caídos não sabem voar sozinhos.
                </p>
                <div className="gallery">
                  <img src={page3} alt="Memória 1" />
                  <img src={page4} alt="Memória 2" />
                </div>
              </div>
              <div className="page-ornament bottom-left">✦</div>
              <div className="page-ornament bottom-right">✦</div>
              <div className="page-number">3</div>
            </div>
          </div>

          {/* PÁGINA 4 - O Pedido */}
          <div className="page" data-page="4" data-density="hard">
            <div className="page-content final-page">
              <div className="page-ornament top-left">✦</div>
              <div className="page-ornament top-right">✦</div>
              <div className="page-text">
                <h2 className="page-title final-title">O Pacto Eterno</h2>
                <div className="illuminated-letter final-letter">A</div>
                <p className="story-text final-text">
                  <span className="first-words">Agora, diante das cinzas</span> do que fomos e da luz do que somos, 
                  eu te pergunto com a alma nua:
                </p>
                <div className="the-question">
                  <p className="question-text">Aceita voltar a ser meu par eterno?</p>
                  <p className="question-sub">Minha loba, minha vampira, meu anjo caído.</p>
                </div>
                <div className="answer-buttons">
                  <button className="btn-yes" onClick={() => celebrateYes()}>
                    <span className="btn-icon">👼</span>
                    Sim, por toda eternidade
                  </button>
                  <button className="btn-no" onClick={() => celebrateNo()}>
                    <span className="btn-icon">🖤</span>
                    Preciso de tempo
                  </button>
                </div>
                <div className="signature">
                  <p>Com todo meu amor,</p>
                  <p className="name">Teu Lobo Caído 🐺👼</p>
                </div>
              </div>
              <div className="page-ornament bottom-left">✦</div>
              <div className="page-ornament bottom-right">✦</div>
              <div className="page-number">4</div>
            </div>
          </div>

          {/* CONTRA CAPA */}
          <div className="page cover back-cover" data-page="5" data-density="hard">
            <div className="page-content cover-content">
              <div className="cover-design back-design">
                <div className="united-wings">👼👼</div>
                <h1 className="cover-title">Duas Almas, Uma Queda</h1>
                <p className="cover-subtitle">Onde quer que a noite nos leve,<br/>cairmos juntos será sempre o voo.</p>
                <div className="cover-divider">
                  <span className="rune">ᛟ</span>
                  <span className="rune">ᛞ</span>
                  <span className="rune">ᛚ</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Stencil>

      {/* Overlay de celebração */}
      <div id="celebration-overlay" className="celebration-hidden">
        <div className="celebration-content">
          <div className="celebration-wings">👼👼</div>
          <h1 className="celebration-title">Para Sempre</h1>
          <p className="celebration-text">Dois anjos caídos, unidos pela escolha,<br/>eternos na noite, infinitos no amor.</p>
          <div className="celebration-runes">ᛟ ᛞ ᛚ ᛟ ᛞ ᛚ</div>
        </div>
      </div>

      <audio id="page-turn-sound" src="/page-turn.mp3" preload="auto"></audio>
      <audio id="ambient-sound" src="/ambient.mp3" loop preload="auto"></audio>
    </div>
  )
}

function celebrateYes() {
  const overlay = document.getElementById('celebration-overlay')
  overlay.className = 'celebration-visible'
  
  // Confetti/partículas
  createCelebrationParticles()
  
  // Toca som especial
  const audio = new Audio('/success.mp3')
  audio.play().catch(() => {})
}

function celebrateNo() {
  const overlay = document.getElementById('celebration-overlay')
  const content = overlay.querySelector('.celebration-content')
  content.innerHTML = `
    <div className="celebration-wings">🖤</div>
    <h1 className="celebration-title">Sem Pressa</h1>
    <p className="celebration-text">O tempo de um anjo caído é eterno.<br/>Estarei aqui quando estiver pronta.</p>
    <button className="btn-close" onClick="closeCelebration()">Fechar</button>
  `
  overlay.className = 'celebration-visible'
}

function closeCelebration() {
  document.getElementById('celebration-overlay').className = 'celebration-hidden'
}

function createCelebrationParticles() {
  const colors = ['#d4a574', '#f5e6c8', '#c9b896', '#fff8e7', '#e8d5b7']
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div')
    particle.className = 'celebration-particle'
    particle.style.left = Math.random() * 100 + 'vw'
    particle.style.background = colors[Math.floor(Math.random() * colors.length)]
    particle.style.animationDelay = Math.random() * 2 + 's'
    particle.style.animationDuration = (3 + Math.random() * 2) + 's'
    document.body.appendChild(particle)
    setTimeout(() => particle.remove(), 5000)
  }
}

export default App


import './App.css'

function App() {
  const projetos = [
    {
      numero: '01',
      nome: 'Rifa Solidária',
      categoria: 'Sistema Web',
      descricao:
        'Sistema de gerenciamento de rifas online, com reservas de números, controle administrativo e integração com Pix.',
      tecnologias: ['React', 'Supabase', 'JavaScript'],
      link: 'https://rifa-solidaria-c0q.pages.dev/',
    },
    {
      numero: '02',
      nome: 'Em breve',
      categoria: 'Novo projeto',
      descricao:
        'Novas soluções digitais, projetos de design e criações personalizadas estarão disponíveis aqui.',
      tecnologias: ['Web', 'Design', 'Criatividade'],
      link: null,
    },
  ]

  const servicos = [
    {
      icon: '</>',
      titulo: 'Criação de Sites',
      descricao:
        'Sites modernos, responsivos e personalizados para apresentar empresas e fortalecer sua presença digital.',
      categoria: 'TECNOLOGIA',
    },
    {
      icon: '⌘',
      titulo: 'Sistemas Web',
      descricao:
        'Plataformas online, sistemas administrativos e soluções personalizadas para facilitar processos.',
      categoria: 'TECNOLOGIA',
    },
    {
      icon: '↗',
      titulo: 'Aplicações Digitais',
      descricao:
        'Ferramentas e produtos digitais desenvolvidos para resolver problemas e atender necessidades específicas.',
      categoria: 'TECNOLOGIA',
    },
    {
      icon: '✳',
      titulo: 'Criação de Logotipos',
      descricao:
        'Logotipos personalizados para transmitir a personalidade e os valores de cada marca.',
      categoria: 'DESIGN',
    },
    {
      icon: '◈',
      titulo: 'Identidade Visual',
      descricao:
        'Desenvolvimento de marcas, paletas de cores, tipografia e elementos gráficos.',
      categoria: 'DESIGN',
    },
    {
      icon: '✎',
      titulo: 'Design Gráfico',
      descricao:
        'Artes para redes sociais, banners, materiais promocionais e conteúdos visuais.',
      categoria: 'DESIGN',
    },
    {
      icon: '▧',
      titulo: 'Impressão 3D',
      descricao:
        'Produção de peças personalizadas, objetos decorativos, protótipos e projetos sob medida.',
      categoria: 'FABRICAÇÃO DIGITAL',
    },
  ]

  return (
    <main>
      <header className="header">
        <a href="#inicio" className="logo">
          RENGAH<span>DEV</span>
        </a>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a
            href="https://github.com/RengahDev"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a href="#contato" className="nav-contact">
            Contato
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <span className="eyebrow">
            TECNOLOGIA • DESIGN • IMPRESSÃO 3D
          </span>

          <h1>
            Transformando ideias em
            <span> soluções reais.</span>
          </h1>

          <p>
            Desenvolvimento web, criação visual e impressão 3D.
            Unimos tecnologia e criatividade para transformar
            ideias em projetos personalizados.
          </p>

          <div className="hero-buttons">
            <a href="#projetos" className="button primary">
              Conheça nossos projetos <span>↗</span>
            </a>

            <a href="#contato" className="button secondary">
              Solicitar orçamento
            </a>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="code-card">
            <div className="code-header">
              <span></span><span></span><span></span>
              <small>rengah.dev</small>
            </div>

            <div className="code-content">
              <p><span>01</span> const rengahDev = {'{'}</p>
              <p><span>02</span> &nbsp; technology: <b>true</b>,</p>
              <p><span>03</span> &nbsp; design: <b>true</b>,</p>
              <p><span>04</span> &nbsp; 3dPrinting: <b>true</b>,</p>
              <p><span>05</span> {'}'}</p>
              <br />
              <p className="code-comment">
                // Ideias transformadas em realidade.
              </p>
            </div>
          </div>

          <div className="decoration-circle"></div>
        </div>
      </section>

      <section className="services section" id="servicos">
        <div className="section-heading">
          <span className="eyebrow">O QUE FAZEMOS</span>
          <h2>Soluções para diferentes ideias.</h2>
          <p>
            Da criação digital à fabricação de objetos físicos,
            oferecemos soluções para transformar seus projetos em realidade.
          </p>
        </div>

        <div className="services-grid">
          {servicos.map((servico) => (
            <article className="service-card" key={servico.titulo}>
              <span className="eyebrow">{servico.categoria}</span>

              <div className="service-icon">
                {servico.icon}
              </div>

              <h3>{servico.titulo}</h3>

              <p>{servico.descricao}</p>

              <a href="#contato">
                Solicitar orçamento <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="about-content">
          <span className="eyebrow">QUEM SOMOS</span>

          <h2>Sobre a Rengah Dev</h2>

          <p>
            A Rengah Dev é uma empresa focada no desenvolvimento
            de soluções tecnológicas, criativas e personalizadas.
          </p>

          <p>
            Atuamos em três áreas principais: desenvolvimento web,
            design gráfico e impressão 3D, unindo tecnologia,
            criatividade e inovação para transformar ideias em
            projetos reais.
          </p>

          <p>
            Nosso compromisso é oferecer soluções funcionais,
            identidade visual de qualidade e produtos personalizados,
            sempre buscando atender às necessidades de cada projeto.
          </p>

          <strong>
            Rengah Dev — Tecnologia, criatividade e soluções sem limites.
          </strong>
        </div>

        <div className="about-decoration">
          <div className="about-symbol">
            <span>R</span>
            <span className="about-symbol-dot">.</span>
          </div>

          <div className="about-caption">
            <span>TECNOLOGIA</span>
            <span>CRIATIVIDADE</span>
            <span>INOVAÇÃO</span>
          </div>
        </div>
      </section>

      <section className="projects section" id="projetos">
        <div className="section-heading">
          <span className="eyebrow">PORTFÓLIO</span>
          <h2>Projetos desenvolvidos.</h2>
          <p>
            Conheça algumas das soluções desenvolvidas pela
            Rengah Dev.
          </p>
        </div>

        <div className="projects-grid">
          {projetos.map((projeto) => (
            <article className="project-card" key={projeto.numero}>
              <div className="project-preview">
                <span className="project-number">
                  {projeto.numero}
                </span>

                <div className="preview-logo">
                  RENGAH<span>DEV</span>
                </div>

                <span className="preview-category">
                  {projeto.categoria}
                </span>
              </div>

              <div className="project-info">
                <span className="eyebrow">
                  {projeto.categoria}
                </span>

                <h3>{projeto.nome}</h3>

                <p>{projeto.descricao}</p>

                <div className="tags">
                  {projeto.tecnologias.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {projeto.link ? (
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Visitar projeto ↗
                  </a>
                ) : (
                  <span className="coming-soon">
                    Em desenvolvimento
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contato">
        <span className="eyebrow">VAMOS CONVERSAR?</span>

        <h2>Tem uma ideia? Vamos tirar ela do papel.</h2>

        <p>
          Seja um site, uma identidade visual ou um projeto de
          impressão 3D, vamos conversar sobre como transformar
          sua ideia em realidade.
        </p>

        <div className="contact-buttons">
          <a
            href="https://wa.me/5543998011746?text=Ol%C3%A1!%20Conheci%20a%20Rengah%20Dev%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="button primary"
          >
            Falar pelo WhatsApp ↗
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rengahgameplay%40protonmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary"
          >
            Enviar e-mail ↗
          </a>
        </div>
      </section>

      <footer className="footer">
        <a href="#inicio" className="logo">
          RENGAH<span>DEV</span>
        </a>

        <p>
          © {new Date().getFullYear()} Rengah Dev.
          Todos os direitos reservados.
        </p>

        <a
          href="https://github.com/RengahDev"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  )
}

export default App

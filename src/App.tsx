const services = [
  ["IVSS", "Seguridad social"],
  ["INCES", "Capacitación y obligaciones empresariales"],
  ["FONACIT", "Ciencia, tecnología e innovación"],
  ["FONA", "Fondo Nacional Antidrogas"],
  ["CONAPDIS", "Personas con discapacidad"],
  ["RUPDAE", "Registro de unidades y entidades"],
  ["RNET", "Registro de entidades de trabajo"],
  ["INPSASEL", "Seguridad y salud laboral"],
  ["FND", "Fondo Nacional del Deporte"],
];

const mainServices = [
  ["Trámites legales", "Orientación y acompañamiento en gestiones administrativas ante los organismos correspondientes."],
  ["Deberes formales y fiscales", "Apoyo para organizar y atender obligaciones formales y fiscales según cada caso."],
  ["Servicios contables", "Asistencia contable para mantener información, documentos y procesos organizados."],
];

const steps = [
  ["01", "Cuéntanos tu caso", "Revisamos el trámite que necesitas y su situación actual."],
  ["02", "Recibe orientación", "Te indicamos requisitos y próximos pasos de forma clara."],
  ["03", "Gestionamos contigo", "Acompañamos el proceso y mantenemos todo organizado."],
];

const whatsappUrl =
  "https://wa.me/584142436397?text=Hola%2C%20quisiera%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20gesti%C3%B3n.";

const whatsappAdminTwoUrl =
  "https://wa.me/584143895429?text=Hola%2C%20quisiera%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20gesti%C3%B3n.";

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function Check() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m5 12 4 4L19 6" /></svg>;
}

export default function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Mile Servicios, inicio">
          <span className="brand-mark">M</span><span>Mile <strong>Servicios</strong></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Cómo funciona</a>
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Consultar</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Asesoría y gestión administrativa</p>
          <h1>Trámites claros.<br /><em>Gestiones confiables.</em></h1>
          <p className="hero-lead">Trámites legales, deberes formales y fiscales, y servicios contables con atención cercana y seguimiento organizado.</p>
          <p className="coverage"><strong>Caracas</strong> · Asesoría remota en toda Venezuela</p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar por WhatsApp <Arrow /></a>
            <a className="button button-ghost" href="#servicios">Ver servicios</a>
          </div>
          <ul className="trust-list">
            <li><Check /> Orientación personalizada</li>
            <li><Check /> Información clara</li>
            <li><Check /> Seguimiento del proceso</li>
          </ul>
        </div>

        <div className="hero-card">
          <div className="flag-line"><span /><span /><span /></div>
          <p className="card-kicker">Gestión integral</p>
          <h2>Tu trámite, en buenas manos.</h2>
          <div className="mini-grid">
            <span>Legal</span><span>Fiscal</span>
            <span>Contable</span><span>Registros</span>
          </div>
          <div className="hero-card-footer"><span className="pulse" /> Atención por consulta</div>
        </div>
      </section>

      <section className="services-section" id="servicios">
        <div className="section-heading main-services-heading">
          <div>
            <p className="eyebrow"><span /> Nuestros servicios</p>
            <h2>Soluciones para personas<br />y organizaciones</h2>
          </div>
          <p>Atención desde Caracas y acompañamiento remoto para clientes en toda Venezuela.</p>
        </div>
        <div className="main-services-grid">
          {mainServices.map(([title, description], index) => (
            <article className="main-service-card" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Áreas de gestión</p>
            <h2>Organismos con los que<br />te ayudamos a gestionar</h2>
          </div>
          <p>Orientación y acompañamiento administrativo según las características de cada caso.</p>
        </div>
        <div className="services-grid">
          {services.map(([acronym, name], index) => (
            <article className="service-card" key={acronym}>
              <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
              <strong>{acronym}</strong><p>{name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="proceso">
        <div className="section-heading light">
          <div>
            <p className="eyebrow"><span /> Proceso sencillo</p>
            <h2>Te acompañamos<br />paso a paso</h2>
          </div>
          <p>Comenzamos entendiendo tu necesidad antes de indicarte requisitos o tiempos.</p>
        </div>
        <div className="steps-grid">
          {steps.map(([number, title, description]) => (
            <article className="step" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div>
          <p className="eyebrow"><span /> Atención personalizada</p>
          <h2>¿Necesitas realizar<br />alguno de estos trámites?</h2>
        </div>
        <div className="contact-card">
          <p>Escríbenos para revisar tu caso y recibir orientación inicial.</p>
          <div className="coverage-detail">
            <strong>Atención desde Caracas</strong>
            <span>Asesoría remota disponible a nivel nacional.</span>
          </div>
          <div className="contact-buttons">
            <a className="whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer">
              Administrador 1: +58 414-2436397 <Arrow />
            </a>
            <a className="whatsapp-button whatsapp-button-secondary" href={whatsappAdminTwoUrl} target="_blank" rel="noreferrer">
              Administrador 2: +58 414-3895429 <Arrow />
            </a>
          </div>
        </div>
      </section>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar a Mile Servicios por WhatsApp">
        WA
      </a>

      <footer>
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark">M</span><span>Mile <strong>Servicios</strong></span></a>
        <p>Servicio privado e independiente de asesoría y gestión. No somos un organismo gubernamental ni representamos oficialmente a las instituciones mencionadas.</p>
        <span>© 2026 Mile Servicios</span>
      </footer>
    </main>
  );
}

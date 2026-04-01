"use client";

import ServicePage from "../../components/ServicePage";

export default function CabinaPage() {
  return (
    <ServicePage
      title="Cabina de Fotos"
      subtitle="Diversión, recuerdos y fotos instantáneas para tu evento"
    >

      {/* TEXTO */}
      <section className="intro-text-block">
        <h2>La experiencia de la cabina</h2>

        <p>
          Nuestra cabina de fotos es uno de los servicios más elegidos para
          cumpleaños de 15, bodas y eventos sociales. Los invitados pueden
          sacarse fotos divertidas, recibir impresiones al instante y llevarse
          un recuerdo único del evento.
        </p>
      </section>

      {/* FOTOS */}
      <section className="gallery-block">
        <div className="gallery-grid">
          <img src="/servicios/cabina1.jpg" />
          <img src="/servicios/cabina2.jpg" />
        </div>
      </section>

      {/* INCLUDES */}
      <section className="includes">
        <div className="includes-container">

          <h2>¿Qué incluye el servicio?</h2>

          <div className="includes-grid">
            {[
              {
                icon: "📸",
                title: "Fotos ilimitadas",
                text: "Capturas sin límite durante el tiempo contratado con cámara profesional Nikon"
              },
              {
                icon: "🖨️",
                title: "Impresión instantánea",
                text: "Fotos en el momento con calidad profesional Kodak"
              },
              {
                icon: "🎭",
                title: "Cotillón premium",
                text: "Accesorios divertidos y de calidad para cada foto"
              },
              {
                icon: "🧑‍💼",
                title: "Asistente incluido",
                text: "Acompañamos toda la experiencia para que todo salga perfecto"
              },
              {
                icon: "📲",
                title: "Easy Share",
                text: "Escaneá y llevate tu foto al instante en tu celular"
              }
            ].map((item, i) => (
              <div key={i} className="card">
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="how">
        <div className="how-container">

          <h2>¿Cómo funciona la cabina?</h2>

          <div className="how-grid">

            <div className="how-card">
              <div className="icon">📸</div>
              <h3>Entrá a la cabina</h3>
              <p>Ingresá con amigos y presioná el botón rojo 🔴</p>
            </div>

            <div className="how-card">
              <div className="icon">😄</div>
              <h3>Posá y divertite</h3>
              <p>Usá el cotillón y dejá que la cabina capture las poses</p>
            </div>

            <div className="how-card">
              <div className="icon">🖨</div>
              <h3>Recibí tu foto</h3>
              <p>Las tiras se imprimen al instante para llevarte el recuerdo</p>
            </div>

          </div>

        </div>
      </section>

    </ServicePage>
  );
}
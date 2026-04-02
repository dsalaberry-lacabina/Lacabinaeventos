"use client";

import ServicePage from "../../components/ServicePage";

export default function Plataforma360Page() {
  return (
    <ServicePage
      title="Plataforma 360°"
      subtitle="Videos increíbles en cámara lenta para tu evento"
    >

      {/* TEXTO */}
      <section className="intro-text-block">
        <h2>La experiencia 360</h2>

        <p>
          La plataforma 360 captura videos espectaculares girando alrededor
          de los invitados mientras posan y se divierten. El resultado son
          clips dinámicos en cámara lenta que se vuelven virales en redes sociales.
        </p>
      </section>

      {/* VIDEO */}
      <section className="video-block">
        <div className="video-container">
           <video
            src="/servicios/plataforma360.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="how">
        <div className="how-container">

          <h2>¿Cómo funciona la Plataforma 360?</h2>

          <div className="how-grid">

            <div className="how-card">
              <div className="icon">🎥</div>
              <h3>Subite a la plataforma</h3>
              <p>Parate en el centro y preparate para el video</p>
            </div>

            <div className="how-card">
              <div className="icon">✨</div>
              <h3>Posá y divertite</h3>
              <p>La cámara gira a tu alrededor capturando el momento</p>
            </div>

            <div className="how-card">
              <div className="icon">📱</div>
              <h3>Compartí tu video</h3>
              <p>Llevate el clip listo para subir a redes sociales</p>
            </div>

          </div>

        </div>
      </section>

      {/* INCLUDES (cards premium) */}
      <section className="includes">
        <div className="includes-container">

          <h2>¿Qué incluye el servicio?</h2>

          <div className="includes-grid">
            {[
              {
                icon: "🎥",
                title: "Plataforma profesional",
                text: "Equipo 360° de alta calidad"
              },
              {
                icon: "✨",
                title: "Slow motion + efectos",
                text: "Videos dinámicos listos para redes"
              },
              {
                icon: "💡",
                title: "Iluminación LED",
                text: "Mejor calidad visual en cada toma"
              },
              {
                icon: "🧑‍💼",
                title: "Asistente",
                text: "Coordinación durante todo el evento"
              },
              {
                icon: "📲",
                title: "Entrega inmediata",
                text: "Compartí tu video en el momento"
              },
              {
                icon: "📂",
                title: "Entrega digital",
                text: "Todos los videos al finalizar"
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

    </ServicePage>
  );
}
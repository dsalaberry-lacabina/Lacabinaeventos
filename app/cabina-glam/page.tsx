"use client";

import ServicePage from "../../components/ServicePage";

export default function GlamPage() {
  return (
    <ServicePage
      title="Cabina Glam"
      subtitle="Fotos elegantes en blanco y negro con estilo profesional"
    >

      {/* TEXTO */}
      <section className="intro-text-block">
        <h2>Fotos que parecen de revista</h2>

        <p>
          La Cabina Glam ofrece una experiencia elegante y moderna, con fotos en blanco y negro,
          fondo blanco y una iluminación suave que resalta lo mejor de cada persona.
          Ideal para eventos donde buscás un estilo sofisticado y recuerdos únicos.
        </p>
      </section>

      {/* FOTOS */}
      <section className="gallery-block">
        <div className="gallery-grid">
          <img src="/servicios/glam1.jpg" />
          <img src="/servicios/glam2.jpg" />
        </div>
      </section>

      {/* INCLUDES */}
      <section className="includes">
        <div className="includes-container">

          <h2>¿Qué incluye el servicio?</h2>

          <div className="includes-grid">
            {[
              {
                icon: "✨",
                title: "Fotos estilo Glam",
                text: "Blanco y negro con efecto profesional"
              },
              {
                icon: "🤍",
                title: "Fondo blanco",
                text: "Estética limpia y elegante"
              },
              {
                icon: "💡",
                title: "Iluminación suave",
                text: "Calidad de estudio"
              },
              {
                icon: "🖨️",
                title: "Impresión Kodak",
                text: "Fotos instantáneas premium"
              },
              {
                icon: "📲",
                title: "Easy Share",
                text: "Fotos digitales al instante"
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

          <h2>¿Cómo funciona la Cabina Glam?</h2>

          <div className="how-grid">

            <div className="how-card">
              <div className="icon">📸</div>
              <h3>Posá frente a cámara</h3>
              <p>Nos ubicamos frente al fondo blanco listo para la foto</p>
            </div>

            <div className="how-card">
              <div className="icon">✨</div>
              <h3>Captura profesional</h3>
              <p>Iluminación perfecta y efecto glam automático</p>
            </div>

            <div className="how-card">
              <div className="icon">🖨</div>
              <h3>Recibí tu foto</h3>
              <p>Impresión instantánea lista para llevar</p>
            </div>

          </div>

        </div>
      </section>

    </ServicePage>
  );
}
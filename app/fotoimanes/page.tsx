"use client";

import ServicePage from "../../components/ServicePage";

export default function FotoimanesPage() {
  return (
    <ServicePage
      title="Fotoimanes"
      subtitle="Un recuerdo único que tus invitados se llevan del evento"
    >

      {/* TEXTO */}
      <section className="intro-text-block">
        <h2> Un recuerdo que no se guarda en el celular… se queda con vos.</h2>

        <p>
          Los fotoimanes son un recuerdo físico del evento que cada invitado puede llevarse.
          Las fotos se imprimen en papel Kodak, se montan sobre imán y se exhiben para que
          cada persona elija la suya.
        </p>
      </section>

      {/* GALERÍA */}
      <section className="gallery-block">
        <div className="gallery-grid">
          <img src="/servicios/fotoimanes.jpg" />
          <img src="/servicios/fotoimanes2.jpg" />
          <img src="/servicios/fotoimanes3.jpg" />
         </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="how">
        <div className="how-container">

          <h2>¿Cómo funciona?</h2>

          <div className="how-grid">

            <div className="how-card">
              <div className="icon">📸</div>
              <h3>Capturamos las fotos</h3>
              <p>Durante el evento se toman las fotos de los invitados</p>
            </div>

            <div className="how-card">
              <div className="icon">🖨️</div>
              <h3>Se imprimen y preparan</h3>
              <p>Se imprimen en calidad Kodak y se montan sobre imán</p>
            </div>

            <div className="how-card">
              <div className="icon">🧲</div>
              <h3>Los invitados eligen</h3>
              <p>Se exhiben para que cada persona se lleve su recuerdo</p>
            </div>

          </div>

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
                title: "Fotos del evento",
                text: "Capturadas por fotógrafo durante la fiesta"
              },
              {
                icon: "🖨️",
                title: "Impresión Kodak",
                text: "Alta calidad fotográfica profesional"
              },
              {
                icon: "🧲",
                title: "Formato imán",
                text: "Listos para colocar en cualquier superficie"
              },
              {
                icon: "🖼️",
                title: "Exhibición",
                text: "Panel para que los invitados elijan su foto"
              },
              {
                icon: "🎁",
                title: "Souvenir único",
                text: "Un recuerdo personalizado del evento"
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
"use client";

import ServicePage from "../../components/ServicePage"

export default function Plataforma360Page() {
  return (
    <ServicePage
      title="Plataforma 360°"
      subtitle="Videos increíbles en cámara lenta para tu evento"
    >

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: "80px",
          alignItems: "start"
        }}
      >

        {/* VIDEO */}
        <div style={{ borderRadius: "12px", overflow: "hidden" }}>
          <video
            src="/servicios/360.mp4"
            autoPlay
            muted
            loop
            style={{
              width: "100%"
            }}
          />
        </div>

        {/* TEXTO */}
        <div style={{ marginTop: "30px" }}>

          <h2 style={{ marginBottom: "30px" }}>
            La experiencia 360
          </h2>

          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            La plataforma 360 captura videos espectaculares girando alrededor
            de los invitados mientras posan y se divierten. El resultado son
            clips dinámicos en cámara lenta que se vuelven virales en redes
            sociales.
          </p>

          {/* QUE INCLUYE */}
          <div style={{ marginTop: "120px" }}>

            <h2>¿Qué incluye el servicio?</h2>

            <div style={{ marginTop: "40px", fontSize: "16px", lineHeight: "1.4" }}>

              <p>🎥 Plataforma 360° profesional</p>
              <p>📹 Videos en cámara lenta</p>
              <p>💡 Iluminación LED para mejor calidad</p>
              <p>👨‍💼 Asistente durante todo el servicio</p>
              <p>📱 Compartí tu video en el momento</p>
              <p>📂 Entrega digital de todos los videos</p>

            </div>

          </div>

        </div>

      </div>


      {/* COMO FUNCIONA */}
      <div style={{ marginTop: "70px" }}>

        <h2 style={{ marginBottom: "30px" }}>
          ¿Cómo funciona la Plataforma 360?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "30px",
            marginTop: "30px"
          }}
        >

          <div
            style={{
              padding: "25px",
              borderRadius: "12px",
              background: "#f5f5f5"
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>🎥</div>
            <h3>Subite a la plataforma</h3>
            <p>Parate en el centro y preparate para el video.</p>
          </div>

          <div
            style={{
              padding: "25px",
              borderRadius: "12px",
              background: "#f5f5f5"
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>✨</div>
            <h3>Posá y divertite</h3>
            <p>La cámara gira a tu alrededor capturando el momento.</p>
          </div>

          <div
            style={{
              padding: "25px",
              borderRadius: "12px",
              background: "#f5f5f5"
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>📱</div>
            <h3>Compartí tu video</h3>
            <p>Llevate el clip listo para subir a redes sociales.</p>
          </div>

        </div>

      </div>

    </ServicePage>
  )
}

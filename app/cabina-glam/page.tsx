"use client";

import ServicePage from "../../components/ServicePage"

export default function CabinaGlamPage() {
  return (
    <ServicePage
      title="Cabina Glam"
      subtitle="Fotos elegantes en blanco y negro con estilo editorial"
    >

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: "80px",
          alignItems: "start"
        }}
      >

        {/* FOTOS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
        >

          <div style={{ overflow: "hidden", borderRadius: "12px" }}>
            <img
              src="/servicios/glam1.jpg"
              style={{
                width: "100%",
                transition: "transform 0.4s ease"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>

          <div style={{ overflow: "hidden", borderRadius: "12px" }}>
            <img
              src="/servicios/glam2.jpg"
              style={{
                width: "100%",
                transition: "transform 0.4s ease"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>

        </div>

        {/* TEXTO */}
        <div style={{ marginTop: "30px" }}>

          <h2 style={{ marginBottom: "30px" }}>
            La experiencia Glam
          </h2>

          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            La Cabina Glam ofrece una experiencia fotográfica elegante y moderna.
            Inspirada en las cabinas glam de celebridades, captura retratos en
            blanco y negro con iluminación suave y un acabado profesional que
            resalta la belleza natural de cada invitado.
          </p>

          {/* QUE INCLUYE */}
          <div style={{ marginTop: "170px" }}>

            <h2>¿Qué incluye el servicio?</h2>

            <div style={{ marginTop: "30px", fontSize: "16px", lineHeight: "1.3" }}>

              <p>📸 Fotos glam en blanco y negro</p>
              <p>✨ Filtro Glam con acabado profesional</p>
              <p>💡 Iluminación suave tipo estudio</p>
              <p>🖨 Impresiones instantáneas Kodak</p>
              <p>👨‍💼 Asistente durante todo el evento</p>
              <p>📂 Galería digital con todas las fotos</p>

            </div>

          </div>

        </div>

      </div>


      {/* COMO FUNCIONA */}
      <div style={{ marginTop: "70px" }}>

        <h2 style={{ marginBottom: "30px" }}>
          ¿Cómo funciona la Cabina Glam?
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
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>📸</div>
            <h3>Entrá al set Glam</h3>
            <p>Parate frente al fondo blanco y preparate para tu retrato.</p>
          </div>

          <div
            style={{
              padding: "25px",
              borderRadius: "12px",
              background: "#f5f5f5"
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>✨</div>
            <h3>Posá como una estrella</h3>
            <p>La iluminación glam resalta cada detalle del retrato.</p>
          </div>

          <div
            style={{
              padding: "25px",
              borderRadius: "12px",
              background: "#f5f5f5"
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>🖨</div>
            <h3>Recibí tu foto Glam</h3>
            <p>Las fotos se imprimen al instante con estilo editorial.</p>
          </div>

        </div>

      </div>

    </ServicePage>
  )
}
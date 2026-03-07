"use client";

import ServicePage from "../../components/ServicePage"

export default function CabinaPage() {
  return (
    <ServicePage
      title="Cabina de Fotos"
      subtitle="Diversión, recuerdos y fotos instantáneas para tu evento"
    >

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: "80px",
          alignItems: "start",
          marginTop: "0px"
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

         <img
           src="/servicios/cabina1.jpg"
             style={{
             width: "100%",
             borderRadius: "12px",
             transition: "transform 0.4s ease"
           }}
             onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
             onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />

         <img
            src="/servicios/cabina2.jpg"
              style={{
              width: "100%",
              borderRadius: "12px",
              transition: "transform 0.4s ease"
            }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
         />

</div>
        
        {/* TEXTO */}
        <div style={{ marginTop: "30px" }}>

          <h2 style={{ marginBottom: "30px" }}>
            La experiencia de la cabina
          </h2>

          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            Nuestra cabina de fotos es uno de los servicios más elegidos para
            cumpleaños de 15, bodas y eventos sociales. Los invitados pueden
            sacarse fotos divertidas, recibir impresiones al instante y llevarse
            un recuerdo único del evento.
          </p>

          {/* QUE INCLUYE */}
          <div style={{ marginTop: "140px" }}>

            <h2>¿Qué incluye el servicio?</h2>

            <div style={{ marginTop: "40px", fontSize: "16px", lineHeight: "1.4" }}>

              <p>📸 Fotos ilimitadas durante el evento con camara profesional Nikon</p>
              <p>🖨 Impresiones instantáneas de calidad Kodak</p>
              <p>🎭 Cotillón premium para las fotos</p>
              <p>👨‍💼 Asistente durante todo el servicio</p>
              <p>📱 Servicio "Easy Share" Podes llevarte la foto digital en el momento!</p>
              <p>📂 Galería digital con todas las fotos</p>

            </div>

          </div>

        </div>

      </div>


      {/* COMO FUNCIONA */}
      <div style={{ marginTop: "70px" }}>

        <h2 style={{ marginBottom: "30px" }}>
          ¿Cómo funciona la cabina?
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
            <h3>Entrá a la cabina</h3>
            <p>Ingresá con amigos y presioná el boton rojo. 🔴</p>
          </div>

          <div
            style={{
              padding: "25px",
              borderRadius: "12px",
              background: "#f5f5f5"
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>😄</div>
            <h3>Posá y divertite</h3>
            <p>Usá el cotillón y dejá que la cabina capture las poses.</p>
          </div>

          <div
            style={{
              padding: "25px",
              borderRadius: "12px",
              background: "#f5f5f5"
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>🖨</div>
            <h3>Recibí tu foto</h3>
            <p>Las tiras de fotos se imprimen al instante para que te lleves el recuerdo.</p>
          </div>

        </div>

      </div>

    </ServicePage>
  )
}
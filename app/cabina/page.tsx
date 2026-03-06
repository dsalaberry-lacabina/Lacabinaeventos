export default function CabinaPage() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <section
         style={{
           padding: "100px 20px",
           background: "#111",
           color: "white"
         }}
     >

    <div
      style={{
      maxWidth: "900px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: "25px",
      justifyContent: "center"
    }}
   >

    <img
      src="/servicios/cabina-logo.png"
      style={{
        width: "500px"
      }}
    />

    <div style={{ textAlign: "left" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        Cabina de Fotos
      </h1>

      <p style={{ fontSize: "20px", opacity: 0.8 }}>
        Diversión, recuerdos y fotos instantáneas para tu evento
      </p>
    </div>

  </div>

</section>


      {/* FOTO */}
      <section
        style={{
          padding: "60px 20px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <img
          src="/galeria/foto1.jpg"
          style={{
            maxWidth: "900px",
            width: "100%",
            borderRadius: "12px"
          }}
        />
      </section>


      {/* DESCRIPCIÓN */}
      <section
        style={{
          padding: "60px 20px",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >

        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          La experiencia de la Cabina
        </h2>

        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Nuestra cabina de fotos es uno de los servicios más elegidos para
          cumpleaños, bodas y eventos. Los invitados pueden sacarse fotos
          divertidas, recibir impresiones al instante y llevarse un recuerdo
          único del evento.
        </p>

      </section>


      {/* QUE INCLUYE */}
      <section
        style={{
          padding: "80px 20px",
          background: "#f5f5f5",
          textAlign: "center"
        }}
      >

        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
          ¿Qué incluye el servicio?
        </h2>

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "left",
            fontSize: "18px",
            lineHeight: "1.8"
          }}
        >

          <p>📸 Fotos ilimitadas durante el evento</p>
          <p>🖨 Impresiones instantáneas</p>
          <p>🎭 Cotillón divertido para las fotos</p>
          <p>👨‍💼 Asistente durante todo el servicio</p>
          <p>📂 Galería digital con todas las fotos</p>

        </div>

      </section>


      {/* CTA */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center"
        }}
      >

        <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>
          ¿Querés la cabina en tu evento?
        </h2>

        <a
          href="https://wa.me/5493446642745"
          target="_blank"
          style={{
            display: "inline-block",
            padding: "16px 30px",
            background: "#25D366",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "18px"
          }}
        >
          Consultar disponibilidad
        </a>

      </section>

    </main>
  )
}
"use client";

import ServicePage from "../../components/ServicePage";

export default function MemoryPhonePage() {
  return (
    <ServicePage
      title="Memory Phone"
      subtitle="Mensajes que vas a poder escuchar para siempre"
    >

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: "80px",
          alignItems: "start",
          marginTop: "40px"
        }}
         >

        {/* IMAGEN / VIDEO */}
        <div>
          <img
            src="/servicios/memory-phone.jpg"
            style={{
              width: "100%",
              borderRadius: "20px"
            }}
          />
        </div>

        {/* TEXTO */}
        <div>
          <div
               style={{
               fontSize: "16px",
               lineHeight: "30px",
               marginBottom: "30px",
               maxWidth: "500px",
              
               }}
            >
           <p style={{ marginBottom: "16px" }}>
               El Memory Phone es una forma original y emocionante de guardar los mensajes de tus invitados.
            </p>

           <p style={{ marginBottom: "16px" }}>
               En lugar de escribir en un libro, tus invitados dejan mensajes de voz que vas a poder escuchar una y otra vez.
            </p>

            <p>
               Risas, anécdotas y palabras que se convierten en recuerdos únicos para toda la vida.
            </p>
</div>
          {/* COMO FUNCIONA */}
          <h3 style={{ marginBottom: "10px" }}>¿Cómo funciona?</h3>

          <ul style={{ marginBottom: "30px", lineHeight: "28px", listStyle: "none", marginBottom: "8px", padding: 0  }}>
              
            <li>📞 Levantás el teléfono</li>
            <li>🎧 Escuchás un mensaje de bienvenida personalizado</li>
            <li>🎤 Después del tono, dejás tu mensaje</li>
            <li>💾 Al colgar, queda guardado automáticamente</li>
          </ul>

          {/* INCLUYE */}
          <h3 style={{ marginBottom: "10px" }}>¿Qué incluye?</h3>

          <ul style={{ marginBottom: "30px", lineHeight: "28px", listStyle: "none", marginBottom: "8px", padding: 0  }}>
            <li>☎️ Teléfono grabador con memoria ilimitada</li>
            <li>👨‍💼 Asistente durante el evento</li>
            <li>🌸 Mesa + cuadro instructivo + Cartel Neon "Deja tu mensaje"</li>
            <li>💾 Entrega digital de todos los audios</li>
            <li>🌐 Pagina de acceso exclusivo para compartir los audios</li>
          </ul>

        </div>

      </div>
            <p style={{ marginTop: "40px", fontSize: "18px", fontStyle: "italic", opacity: 0.8 }}>
             💡 Tip: combiná Memory Phone + Cabina de Fotos y llevate recuerdos visuales y de audio de tu evento.
            </p>
    </ServicePage>
  );
}
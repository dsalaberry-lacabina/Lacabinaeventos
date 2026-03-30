"use client";

import ServicePage from "../../components/ServicePage";

export default function FotoimanesPage() {
  return (
    <ServicePage
      title="Fotoimanes"
      subtitle="Un recuerdo listo para pegar y llevar"
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

        {/* IMAGEN */}
        <div>
          <img
            src="/servicios/fotoimanes2.jpg"
            style={{
              width: "100%",
              borderRadius: "20px"
            }}
          />
        </div>

        {/* TEXTO */}
        <div>

          {/* BLOQUE PRINCIPAL */}
          <div
            style={{
              fontSize: "18px",
              lineHeight: "30px",
              marginBottom: "30px",
              maxWidth: "500px"
            }}
          >
            <p style={{ marginBottom: "16px" }}>
              Convertimos las fotos del evento en recuerdos únicos que tus invitados se llevan al instante.
            </p>

            <p style={{ marginBottom: "16px" }}>
              Cada imagen se imprime en papel fotográfico de alta calidad y se transforma en un imán listo para colocar en cualquier superficie.
            </p>

            <p>
              Un detalle original, personalizado y súper valorado por todos.
            </p>
          </div>

          {/* COMO FUNCIONA */}
          <h3 style={{ marginBottom: "10px" }}>¿Cómo funciona?</h3>

          <ul
            style={{
              marginBottom: "30px",
              lineHeight: "28px",
              listStyle: "none",
              padding: 0
            }}
          >
            <li style={{ marginBottom: "8px" }}>📸 Las fotos se toman durante el evento</li>
            <li style={{ marginBottom: "8px" }}>🖨️ Se imprimen en papel fotográfico Kodak</li>
            <li style={{ marginBottom: "8px" }}>🧲 Se montan sobre imán</li>
            <li>🎁 Se exhiben para que cada invitado elija la suya</li>
          </ul>

          {/* INCLUYE */}
          <h3 style={{ marginBottom: "10px" }}>¿Qué incluye?</h3>

          <ul
            style={{
              marginBottom: "30px",
              lineHeight: "28px",
              listStyle: "none",
              padding: 0
            }}
          >
            <li style={{ marginBottom: "8px" }}>✨ Impresión en calidad fotográfica (Kodak)</li>
            <li style={{ marginBottom: "8px" }}>🧲 Imán adhesivo de alta calidad</li>
            <li style={{ marginBottom: "8px" }}>🖼️ Presentación en panel exhibidor</li>
            <li>🎉 Cantidad adaptada a tu evento</li>
          </ul>

          
          {/* UPSELL */}
          <p
            style={{
              marginTop: "40px",
              fontStyle: "italic",
              opacity: 0.8
            }}
          >
            💡 Tip: combiná Fotoimanes con Memory Phone y multiplicá los recuerdos.
          </p>

        </div>

      </div>

    </ServicePage>
  );
}
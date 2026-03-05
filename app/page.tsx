"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO CON VIDEO */}
      <section
        style={{
          position: "relative",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          overflow: "hidden"
        }}
      >

        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
            zIndex: -1
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div>
          <h1 style={{ fontSize: "52px", marginBottom: "10px" }}>
            La Cabina Eventos
          </h1>

          <p style={{ fontSize: "20px" }}>
            Cabina de Fotos · Plataforma 360 · Memory Phone · Fotoimanes
          </p>

          <a href="#servicios">
            <button
              style={{
                marginTop: "25px",
                padding: "15px 30px",
                fontSize: "18px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer"
              }}
            >
              Ver servicios
            </button>
          </a>
        </div>

      </section>


      {/* SERVICIOS */}
      <section id="servicios" style={{ padding: "80px 20px", textAlign: "center" }}>

        <h2 style={{ fontSize: "36px" }}>
          Nuestros Servicios
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "40px"
          }}
        >

          <Service
            title="Cabina de Fotos"
            text="Fotos ilimitadas, impresiones instantáneas y cotillón premium."
            link="/cabina"
            icon="📸"
          />

          <Service
            title="Cabina Glam"
            text="Fotos elegantes en blanco y negro con iluminación profesional."
            link="/cabina-glam"
            icon="✨"
          />

          <Service
            title="Plataforma 360°"
            text="Videos increíbles en cámara lenta para compartir en redes."
            link="/plataforma-360"
            icon="🎥"
          />

          <Service
            title="Memory Phone"
            text="Mensajes de audio de tus invitados como recuerdo del evento."
            link="/memory-phone"
            icon="☎️"
          />

          <Service
            title="Fotoimanes"
            text="Fotos impresas convertidas en imanes para llevar a casa."
            link="/fotoimanes"
            icon="🧲"
          />

        </div>

      </section>

      {/* GALERÍA */}
      <section
        style={{
        padding: "80px 20px",
        textAlign: "center"
      }}
      >

      <h2 style={{ fontSize: "36px" }}>
        Momentos de nuestros eventos
      </h2>

      <div
        style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "15px",
        marginTop: "40px"
      }}
      >

        <img src="/galeria/foto1.jpg" style={{ width: "100%", borderRadius: "10px" }} />
        <img src="/galeria/foto2.jpg" style={{ width: "100%", borderRadius: "10px" }} />
        <img src="/galeria/foto3.jpg" style={{ width: "100%", borderRadius: "10px" }} />
        <img src="/galeria/foto4.jpg" style={{ width: "100%", borderRadius: "10px" }} />
        <img src="/galeria/foto5.jpg" style={{ width: "100%", borderRadius: "10px" }} />

      </div>

</section>

      {/* COMBOS */}
      <section
        style={{
          padding: "80px 20px",
          background: "#f5f5f5",
          textAlign: "center"
        }}
      >

        <h2 style={{ fontSize: "36px" }}>
          Combos recomendados
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "40px"
          }}
        >

          <Combo
            title="Combo Fiesta"
            text="Cabina de Fotos + Fotoimanes"
          />

          <Combo
            title="Combo Experiencia"
            text="Cabina de Fotos + Plataforma 360°"
          />

          <Combo
            title="Combo Recuerdos"
            text="Cabina de Fotos + Memory Phone"
          />

        </div>

      </section>


      {/* CTA FINAL */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background: "#111",
          color: "white"
        }}
      >

        <h2 style={{ fontSize: "36px" }}>
          ¿Listo para tu evento?
        </h2>

        <p>
          Consultá disponibilidad para tu fecha
        </p>

        <a
          href="https://wa.me/5493446642745"
          target="_blank"
        >
          <button
            style={{
              marginTop: "30px",
              padding: "15px 30px",
              fontSize: "20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer"
            }}
          >
            Consultar por WhatsApp
          </button>
        </a>

      </section>


      {/* FOOTER */}
      <footer
        style={{
          padding: "30px",
          textAlign: "center",
          background: "#f5f5f5"
        }}
      >
        <p>@la.cabina.eventos</p>
      </footer>


      {/* BOTÓN WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/5493446642745"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "white",
          padding: "15px 20px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        WhatsApp
      </a>

    </main>
  );
}

function Service({
  title,
  text,
  link,
  icon
}: {
  title: string;
  text: string;
  link: string;
  icon: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <Link href={link} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          padding: "30px",
          borderRadius: "14px",
          background: "white",
          cursor: "pointer",
          transition: "all 0.25s ease",
          transform: hover ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hover
            ? "0 20px 40px rgba(0,0,0,0.15)"
            : "0 5px 15px rgba(0,0,0,0.06)",
          textAlign: "center"
        }}
      >
        <div style={{ fontSize: "42px", marginBottom: "10px" }}>
          {icon}
        </div>

        <h3 style={{ marginBottom: "10px" }}>{title}</h3>

        <p style={{ fontSize: "15px", opacity: 0.8 }}>
          {text}
        </p>

        <div style={{ marginTop: "15px", fontWeight: "bold" }}>
          Ver detalles →
        </div>
      </div>
    </Link>
  );
}


function Combo({ title, text }: { title: string; text: string }) {
  return (
    <div
      style={{
        padding: "25px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        background: "white"
      }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
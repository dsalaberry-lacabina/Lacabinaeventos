type Props = {
  title: string
  subtitle: string
  image?: string
  children?: React.ReactNode
}

"use client";
import Link from "next/link";

export default function ServicePage({
  title,
  subtitle,
  image,
  children
}: Props) {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>

      <style>
        {`
        @keyframes pulseWhatsapp {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
          } 
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        .hero-header {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 30px;
          padding: 20px 40px;
        }

        .hero-logo {
          width: 300px;
          max-width: 100%;
        }

        .hero-line {
          width: 2px;
          height: 70px;
          background: rgba(255,255,255,0.4);
        }

        .hero-text {
          text-align: left;
        }

        .hero-text h1 {
          font-size: 40px;
          margin-bottom: 10px;
        }

        .hero-text p {
          font-size: 20px;
          opacity: 0.8;
        }

        .service-image {
          display: flex;
          justify-content: center;
        }

        .service-img {
          max-width: 900px;
          width: 100%;
          border-radius: 12px;
        }

        .service-content {
          padding: 60px 20px;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {
          .hero-header {
            flex-direction: column;
            text-align: center;
            padding: 20px;
          }

          .hero-logo {
            width: 200px;
          }

          .hero-line {
            display: none;
          }

          .hero-text {
            text-align: center;
          }

          .hero-text h1 {
            font-size: 28px;
          }

          .hero-text p {
            font-size: 16px;
          }

          .service-content {
            padding: 40px 20px;
          }

          .service-img {
            border-radius: 0;
          }
        }
        `}
      </style>

      {/* HERO */}
      <section
        style={{
          padding: "0px 0px 30px 0px",
          background: "#111",
          color: "white"
        }}
      >
        <div className="hero-header">

          {/* LOGO */}
          <Link href="/" style={{ display: "block" }}>
            <img
              src="/servicios/cabina-logo.png"
              alt="La Cabina"
              className="hero-logo"
              style={{ cursor: "pointer" }}
            />
          </Link>

          {/* LINEA */}
          <div className="hero-line" />

          {/* TEXTO */}
          <div className="hero-text">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>

        </div>
      </section>

      {/* FOTO */}
      {image && (
        <section className="service-image">
          <img src={image} className="service-img" />
        </section>
      )}

      {/* CONTENIDO */}
      <section className="service-content">
        {children}
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "10px 10px",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "34px", marginBottom: "40px" }}>
          Consultá disponibilidad para tu evento
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
          Consultar por WhatsApp
        </a>
      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/5493446642745"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          background: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "pulseWhatsapp 2.2s infinite",
          boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
          zIndex: 999
        }}
      >
        <img
          src="/whatsapp.svg"
          style={{
            width: "30px",
            height: "30px"
          }}
        />
      </a>

    </main>
  )
}
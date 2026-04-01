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
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37,211,102,0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 14px rgba(37,211,102,0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }

       /* HERO */
          .hero {
            background: #111;
            padding: 50px 20px;
          }

          .hero-inner {
            max-width: 1100px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: 40px;
            align-items: center;
          }

          .intro-text-block {
            max-width: 900px;
            margin: 0 auto;
            padding: 10px 20px 20px; /* 👈 más aire abajo */
          }

          .gallery-block {
            padding: 20px 20px 60px; /* 👈 separa de arriba */
          }

          /* LOGO */
          .hero-logo {
            width: 220px;
          }

          /* TEXTO */
          .hero-text h1 {
            font-size: 42px;
            margin-bottom: 10px;
            color: white;
          }

          .hero-text p {
            font-size: 18px;
            opacity: 0.8;
            color: white;
          }
      

        /* CONTENT */
        .content {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        /* CTA */
        .cta {
          text-align: center;
          padding: 60px 20px;
        }

        .cta h2 {
          font-size: 32px;
          margin-bottom: 25px;
        }

        .cta-btn {
          display: inline-block;
          padding: 16px 30px;
          background: #25D366;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-size: 18px;
        }

        /* WHATSAPP FLOAT */
        .whatsapp-float {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulseWhatsapp 2.2s infinite;
          box-shadow: 0 6px 15px rgba(0,0,0,0.3);
          z-index: 999;
        }

        /* INCLUDES */
          .includes {
            padding: 80px 20px;
            background: #fafafa;
          }

          .includes-container {
            max-width: 1100px;
            margin: 0 auto;
          }

          .includes h2 {
            text-align: center;
            font-size: 34px;
            margin-bottom: 50px;
          }

          /* GRID */
          .includes-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
          }

          /* CARD */
          .card {
            background: white;
            border-radius: 14px;
            padding: 25px;
            transition: 0.3s ease;
            box-shadow: 0 8px 25px rgba(0,0,0,0.05);
          }

          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          }

          .card .icon {
            font-size: 28px;
            margin-bottom: 10px;
          }

          .card h3 {
            font-size: 18px;
            margin-bottom: 8px;
          }

          .card p {
            font-size: 14px;
            opacity: 0.7;
            line-height: 1.4;
          }

          .portal {
            padding: 20px 20px;
            text-align: center;
            background: #111;
            color: white;
          }

          .portal-container {
            max-width: 700px;
            margin: 0 auto;
          }

          .portal h2 {
            font-size: 32px;
            margin-bottom: 15px;
          }

          .portal p {
            font-size: 16px;
            opacity: 0.8;
            margin-bottom: 25px;
          }

          .portal-btn {
            display: inline-block;
            padding: 14px 28px;
            background: white;
            color: black;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: 0.3s;
          }

          .portal-btn:hover {
            transform: scale(1.05);
          }

        /* SECCION */
          .audio-demo {
            padding: 80px 20px;
            background: #0d0d0d;
            color: white;
            text-align: center;
          }

          .audio-container {
            max-width: 600px;
            margin: 0 auto;
          }

          .audio-demo h2 {
            font-size: 32px;
            margin-bottom: 10px;
          }

          .audio-demo p {
            opacity: 0.7;
            margin-bottom: 30px;
          }

          /* LISTA */
          .audio-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          /* CARD */
          .audio-card {
            background: #1a1a1a;
            padding: 18px;
            border-radius: 12px;
            text-align: left;
            transition: 0.3s;
          }

          .audio-card:hover {
            background: #222;
          }

          /* TITULO */
          .audio-title {
            font-size: 14px;
            margin-bottom: 10px;
            opacity: 0.8;
          }

          /* PLAYER */
          .audio-card audio {
            width: 100%;
            filter: invert(1) grayscale(1); /* 🔥 estilo oscuro */
          }

        /* MOBILE */
        /* 📱 MOBILE */
          @media (max-width: 768px) {

            .hero-inner {
              grid-template-columns: 1fr;
              text-align: center;
              gap: 20px;
            }

            .hero-logo {
              margin: 0 auto;
            }

            .intro-text-block {
            max-width: 900px;
            margin: 0 auto;
            padding: 10px 20px 20px; /* 👈 más aire abajo */
          }

          .gallery-block {
            padding: 20px 20px 10px; /* 👈 separa de arriba */
          }

            .hero-text h1 {
              font-size: 28px;
              color: white;
            }

            .hero-text p {
              font-size: 15px;
              color: white;
            }
          }

          .includes {
            padding: 50px 20px;
          }

          .includes h2 {
            font-size: 26px;
            text-align: left;
          }

          .includes-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .card {
            padding: 18px;
          }
            }

          .how {
            padding: 80px 20px;
          }

          .how-container {
            max-width: 1100px;
            margin: 0 auto;
          }

          .how h2 {
            font-size: 32px;
            margin-bottom: 40px;
            text-align: center;
          }

          .how-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
          }

          .how-card {
            background: #f5f5f5;
            padding: 25px;
            border-radius: 12px;
            text-align: left;
          }

          .how-card .icon {
            font-size: 32px;
            margin-bottom: 10px;
          }

          @media (max-width: 768px) {
            .how-grid {
              grid-template-columns: 1fr;
            }

            .how h2 {
              font-size: 24px;
              text-align: left;
            }
          }

        .gallery-grid img {
          width: 100%;
          height: 500px; /* 🔥 clave */
          object-fit: cover; /* 🔥 recorta sin deformar */
          border-radius: 12px;
        }

        `}
      </style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">

        <Link href="/">
        <img
          src="/servicios/cabina-logo.png"
          alt="La Cabina"
          className="hero-logo"
        />
        </Link>

          <div className="hero-text">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>

          </div>
        </section>

      {/* IMAGE */}
      {image && (
        <section className="image-section">
          <div className="image-container">
            <img src={image} className="service-img" />
          </div>
        </section>
      )}

      {/* CONTENT */}
      <section className="content">
        {children}
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Consultá disponibilidad para tu evento</h2>

        <a
          href="https://wa.me/5493446642745"
          target="_blank"
          className="cta-btn"
        >
          Consultar por WhatsApp
        </a>
      </section>

      {/* FLOAT */}
      <a
        href="https://wa.me/5493446642745"
        target="_blank"
        className="whatsapp-float"
      >
        <img src="/whatsapp.svg" width={30} />
      </a>

    </main>
  )
}
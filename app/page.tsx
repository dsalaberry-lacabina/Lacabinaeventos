"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>

      <style>
        {`
          @keyframes fadeLogo {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
          color: "white"
        }}
      >

        {/* VIDEO */}
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
            zIndex: -2
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.55)",
            top: 0,
            left: 0,
            zIndex: -1
          }}
        />

        <div>

          <img
            src="/logo.png"
            style={{
              width: "100%",
              maxWidth: "600px",
              marginBottom: "1px",
              opacity: 0,
              animation: "fadeLogo 1.5s ease forwards"
            }}
          />

          <p style={{ fontSize: "20px" }}>
            Cabina de Fotos · Plataforma 360 · Memory Phone · Fotoimanes
          </p>

          <a href="#servicios">
            <button
              style={{
                marginTop: "25px",
                padding: "16px 34px",
                fontSize: "18px",
                borderRadius: "10px",
                border: "none",
                background: "white",
                fontWeight: "600",
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
            link="/cabina"
            image="/servicios/cabina.jpg"
          />

          <Service
            title="Cabina Glam"
            link="/cabina-glam"
            image="/servicios/glam.jpg"
          />

          <Service
            title="Plataforma 360°"
            link="/plataforma-360"
            image="/servicios/plataforma360.jpg"
            video="/servicios/plataforma360.mp4"
          />

          <Service
            title="Memory Phone"
            link="/memory-phone"
            image="/servicios/memoryphone.jpg"
          />

          <Service
            title="Fotoimanes"
            link="/fotoimanes"
            image="/servicios/fotoimanes.jpg"
          />

        </div>
      </section>


      {/* GALERÍA */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px" }}>
           Momentos de nuestros eventos
        </h2>

        <div
           style={{
           display: "grid",
           gridTemplateColumns: "repeat(6, 1fr)",
           gap: "10px",
           marginTop: "40px"
          }}
         >

          <GalleryImage src="/galeria/foto1.jpg" index={0} />
          <GalleryImage src="/galeria/foto2.jpg" index={1} />
          <GalleryImage src="/galeria/foto3.jpg" index={2} />
          <GalleryImage src="/galeria/foto4.jpg" index={3} />
          <GalleryImage src="/galeria/foto5.jpg" index={4} />
          <GalleryImage src="/galeria/foto6.jpg" index={5} />

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

          <Combo title="Combo Fiesta" text="Cabina de Fotos + Fotoimanes" />

          <Combo title="Combo Experiencia" text="Cabina de Fotos + Plataforma 360°" />

          <Combo title="Combo Recuerdos" text="Cabina de Fotos + Memory Phone" />

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

        <a href="https://wa.me/5493446642745" target="_blank">
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
 
      {/* INSTAGRAM */}
      <section
        style={{
        padding: "80px 20px",
        textAlign: "center"
      }}
     >

      <h2 style={{ fontSize: "34px", marginBottom: "10px" }}>
        Seguinos en Instagram
      </h2>

      <a
        href="https://instagram.com/la.cabina.eventos"
        target="_blank"
        style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        fontSize: "18px",
        textDecoration: "none",
        marginBottom: "40px"
      }}
    >
      📸 @la.cabina.eventos
    </a>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "10px",
        maxWidth: "1100px",
        margin: "0 auto"
      }}
    >

    <img src="/instagram/1.jpg" style={{ width: "100%" }} />
    <img src="/instagram/2.jpg" style={{ width: "100%" }} />
    <img src="/instagram/3.jpg" style={{ width: "100%" }} />
    <img src="/instagram/4.jpg" style={{ width: "100%" }} />
    <img src="/instagram/5.jpg" style={{ width: "100%" }} />
    <img src="/instagram/6.jpg" style={{ width: "100%" }} />

    </div>

</section>


{/* FOOTER */}
<footer
  style={{
    padding: "30px",
    textAlign: "center",
    background: "#f5f5f5"
  }}
>  
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
  link,
  image,
  video
}: {
  title: string
  link: string
  image: string
  video?: string
}) {

  const [hover, setHover] = useState(false)

  return (
    <Link href={link} style={{ textDecoration: "none", color: "white" }}>
      
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "relative",
          width: "100%",
          height: "260px",
          borderRadius: "14px",
          overflow: "hidden",
          cursor: "pointer",
          transform: hover ? "translateY(-4px)" : "translateY(0)",
          transition: "all 0.3s ease",
          boxShadow: hover
            ? "0 15px 35px rgba(0,0,0,0.25)"
            : "0 5px 15px rgba(0,0,0,0.08)"
        }}
      >

        {/* IMAGEN */}
        <img
          src={image}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: hover && video ? 0 : 1,
            transform: hover ? "scale(1.08)" : "scale(1)",
            transition: "all 0.6s ease"
          }}
        />

        {/* VIDEO */}
        {video && (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: hover ? 1 : 0,
              transition: "opacity 0.4s ease"
            }}
          />
        )}

        {/* OVERLAY */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.75))"
          }}
        />

        {/* TEXTO */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px"
          }}
        >
          <h3 style={{ fontSize: "22px", marginBottom: "5px" }}>
            {title}
          </h3>

          <span style={{ fontWeight: "bold", fontSize: "14px" }}>
            Ver detalles →
          </span>
        </div>

      </div>

    </Link>
  )
}

function Service360({
  title,
  link,
  image,
  video
}: {
  title: string
  link: string
  image: string
  video: string
}) {

  const [hover, setHover] = useState(false)

  return (
    <Link href={link} style={{ textDecoration: "none", color: "white" }}>

      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "relative",
          width: "100%",
          height: "260px",
          borderRadius: "14px",
          overflow: "hidden",
          cursor: "pointer",
          transform: hover ? "translateY(-4px)" : "translateY(0)",
          transition: "all 0.3s ease"
        }}
      >

        {/* FOTO */}
        <img
          src={image}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: hover ? 0 : 1,
            transition: "opacity 0.4s ease"
          }}
        />

        {/* VIDEO */}
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: hover ? 1 : 0,
            transition: "opacity 0.4s ease"
          }}
        />

        {/* OVERLAY */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.75))"
          }}
        />

        {/* TEXTO */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px"
          }}
        >
          <h3 style={{ fontSize: "22px", marginBottom: "5px" }}>
            {title}
          </h3>

          <span style={{ fontWeight: "bold", fontSize: "14px" }}>
            Ver detalles →
          </span>
        </div>

      </div>

    </Link>
  )
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
  )
}

function GalleryImage({ src, index }: { src: string; index: number }) {

  const images = [
    "/galeria/foto1.jpg",
    "/galeria/foto2.jpg",
    "/galeria/foto3.jpg",
    "/galeria/foto4.jpg",
    "/galeria/foto5.jpg",
    "/galeria/foto6.jpg"
    
  ]

  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(index)

  const next = () => {
    setCurrent((current + 1) % images.length)
  }

  const prev = () => {
    setCurrent((current - 1 + images.length) % images.length)
  }

  return (
    <>
      {/* MINIATURA */}
      <img
        src={src}
        onClick={() => {
          setCurrent(index)
          setOpen(true)
        }}
        style={{
          width: "100%",
          height: "140px",
          objectFit: "cover",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      />

      {/* VISOR */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999
          }}
        >

          {/* BOTON ANTERIOR */}
          <div
            onClick={prev}
            style={{
              position: "absolute",
              left: "30px",
              fontSize: "40px",
              color: "white",
              cursor: "pointer",
              userSelect: "none"
            }}
          >
            ‹
          </div>

          {/* FOTO */}
          <img
            src={images[current]}
            style={{
              maxWidth: "92%",
              maxHeight: "92%",
              borderRadius: "10px"
            }}
          />

          {/* BOTON SIGUIENTE */}
          <div
            onClick={next}
            style={{
              position: "absolute",
              right: "30px",
              fontSize: "40px",
              color: "white",
              cursor: "pointer",
              userSelect: "none"
            }}
          >
            ›
          </div>

          {/* CERRAR */}
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              fontSize: "30px",
              color: "white",
              cursor: "pointer"
            }}
          >
            ✕
          </div>

        </div>
      )}
    </>
  )
}
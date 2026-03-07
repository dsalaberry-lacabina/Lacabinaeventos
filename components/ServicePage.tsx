type Props = {
  title: string
  subtitle: string
  image?: string
  children?: React.ReactNode
}

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
       `}
      </style>

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
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: "30px",
    paddingLeft: "40px"
  }}
 >

  {/* LOGO */}
  <img
     src="/servicios/cabina-logo.png"
     style={{
     width: "300px"
    }}
  />

  {/* LINEA */}
  <div
    style={{
      width: "2px",
      height: "70px",
      background: "rgba(255,255,255,0.4)"
    }}
  />

  {/* TEXTO */}
  <div style={{ textAlign: "left" }}>
    <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
      {title}
    </h1>

    <p style={{ fontSize: "20px", opacity: 0.8 }}>
      {subtitle}
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
          src={image}
          style={{
            maxWidth: "900px",
            width: "100%",
            borderRadius: "12px"
          }}
        />
      </section>

      {/* CONTENIDO */}
      <section
        style={{
          padding: "60px 20px",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        {children}
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>
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
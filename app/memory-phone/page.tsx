"use client";

import ServicePage from "../../components/ServicePage";
import AudioPro from "../../components/AudioPro";

export default function MemoryPhonePage() {
  return (
    <ServicePage
      title="Memory Phone"
      subtitle="Mensajes que vas a poder escuchar para siempre"
    >
     
     <section className="intro-text-block">
            <h2>Un recuerdo en forma de voz</h2>
            <p>
              Nuestro Memory Phone transforma los mensajes de tus invitados en recuerdos únicos.
              Como un libro de visitas, pero con audio. Emoción, risas y momentos que vas a poder
              escuchar para siempre.
            </p>
          </section>

          <section className="gallery-block">
            <div className="gallery-grid">
              <img src="/servicios/memoryphone.jpg" />
              <img src="/servicios/memory-phone.jpg" />
            </div>
          </section>

          <section className="includes">
            <div className="includes-container">
              <h2>¿Qué incluye el servicio?</h2>

              <div className="includes-grid">
                {[
                  { icon: "☎️", title: "Teléfono grabador", text: "Mensajes ilimitados" },
                  { icon: "🎙️", title: "Mensaje personalizado", text: "Bienvenida grabada por vos" },
                  { icon: "🌸", title: "Setup decorado", text: "Mesa + Cartel Neón + Cuadro instructivo" },
                  { icon: "🧑‍💼", title: "Asistente", text: "Ayuda a los invitados a conocer el servicio" },
                  { icon: "☁️", title: "Entrega digital", text: "Audios listos para descargar" }
                ].map((item, i) => (
                  <div key={i} className="card">
                    <div className="icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="how">
            <div className="how-container">

              <h2>Así funciona la experiencia</h2>

              <div className="how-grid">

                <div className="how-card">
                  <div className="icon">☎️</div>
                  <h3>Levantá el teléfono</h3>
                  <p>
                    Al levantar el tubo, se reproduce automáticamente un mensaje de bienvenida personalizado.
                  </p>
                </div>

                <div className="how-card">
                  <div className="icon">🎙️</div>
                  <h3>Dejá tu mensaje</h3>
                  <p>
                    Después del tono, los invitados pueden grabar su saludo, anécdota o dedicatoria.
                  </p>
                </div>

                <div className="how-card">
                  <div className="icon">💾</div>
                  <h3>Queda guardado</h3>
                  <p>
                    Todos los mensajes quedan almacenados y luego se entregan en formato digital.
                  </p>
                </div>

              </div>

            </div>
          </section>

          <section className="audio-demo">
              <div className="audio-container">

                <h2>Escuchá lo que queda para siempre</h2>

                <div className="audio-list">

                  <AudioPro
                    title="😂 Mensaje divertido"
                    src="/audios/demo1.mp3"
                  />

                  <AudioPro
                    title="❤️ Mensaje emotivo"
                    src="/audios/demo2.mp3"
                  />

                </div>

              </div>
            </section>

          <section className="portal">
            <div className="portal-container">

              <h2>Accedé a tus recuerdos</h2>

              <p>
                Si ya viviste la experiencia Memory Phone, podés ingresar al portal y escuchar
                todos los mensajes grabados de tu evento.
              </p>

              <a
                href="https://memoryphone.lacabinaeventos.com.ar/"
                target="_blank"
                className="portal-btn"
              >
                Ingresar al portal de audios
              </a>

            </div>
          </section>
      
    </ServicePage>
  );
}
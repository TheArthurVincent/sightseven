import React from "react";
import AppFooter from "./Footer";

function App() {
  return (
    <div className="container">
      <section className="hero-section thesection-1">
        <div>
          <div style={{ padding: "1rem" }}>
            <img
              src="https://ik.imagekit.io/vjz75qw96/assets/icons/sight.png"
              alt="Sight 7 Logo"
              style={{ maxWidth: 240 }}
            />
            <h2
              className="hero-title"
              style={{
                fontWeight: 700,
                fontSize: "2.2rem",
                marginBottom: 8,
              }}
            >
              Veja além dos dados.
            </h2>
            <p
              className="hero-subtitle"
              style={{ fontSize: "1.2rem", color: "#3A4A6C" }}
            >
              Transformamos dados em informação útil — para você gastar menos,
              vender mais e tomar decisões com confiança.
              <br />
              Entenda o comportamento do seu cliente com clareza e transforme
              números em ação.
            </p>

            <a
              onClick={(e) => {
                e.preventDefault();
                const contato = document.getElementById("contato");
                if (contato) {
                  contato.scrollIntoView({ behavior: "smooth" });
                }
              }}
              style={{
                backgroundColor: "#1B2A4D", // Azul-escuro
                color: "#fff",
                marginTop: 18,
                fontWeight: 600,
                letterSpacing: 1,
              }}
              href="#contato"
              className="cta-button"
            >
              Solicite uma demonstração
            </a>
          </div>
        </div>
      </section>
      <section className="benefits-section thesection-2">
        <h2 className="section-title">Missão, Visão e Valores</h2>
        <div className="benefits-cards">
          <div className="benefit-card">
            <h3>Missão</h3>
            <p>
              Ajudar empresas a enxergarem o que os dados sozinhos não mostram.
              Transformamos informação em ação — com foco em economia,
              eficiência e resultados reais.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Visão</h3>
            <p>
              Ser referência em inteligência de dados aplicada. Queremos tornar
              simples o que é complexo, conectando marcas e pessoas com clareza,
              precisão e propósito.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Valores</h3>
            <ul style={{ paddingLeft: 18 }}>
              <li>
                <b>Clareza</b> – traduzimos dados em decisões fáceis de
                entender.
              </li>
              <li>
                <b>Inovação</b> – tecnologia de ponta com foco no que importa.
              </li>
              <li>
                <b>Precisão</b> – tudo baseado em dados reais e impacto
                mensurável.
              </li>
              <li>
                <b>Parceria</b> – crescemos com quem confia na gente.
              </li>
              <li>
                <b>Ética</b> – tratamos os dados com o respeito que eles
                merecem.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        id="contato"
        className="hero-section thesection-1"
        style={{
          color: "#fff",
          textAlign: "center",
          padding: "48px 20px",
        }}
      >
        <h2 className="section-title">Fale com a Sight 7 no WhatsApp</h2>
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto 32px auto",
            fontSize: "1.15rem",
            color: "#0f3e65",
            textAlign: "center",
            lineHeight: 1.6,
            fontFamily: "'Roboto','Poppins',Arial,sans-serif",
          }}
        >
          <p>
            Atendimento rápido e direto com nossos especialistas.
            <br />
            Tire dúvidas, solicite orçamento ou agende uma demonstração.
          </p>
        </div>
        <a
          href="https://wa.me/5511943816642"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "#25D366",
            color: "#fff",
            fontWeight: 700,
            fontFamily: "'Poppins','Roboto',Arial,sans-serif",
            fontSize: "1.15rem",
            borderRadius: 8,
            padding: "14px 32px",
            textDecoration: "none",
            boxShadow: "0 2px 8px #0002",
            letterSpacing: 1,
            transition: "background 0.2s",
            gap: 12,
          }}
        >
          <img
            src="https://ik.imagekit.io/vjz75qw96/assets/icons/wpppppp"
            alt="WhatsApp"
            style={{ width: 28, height: 28, marginRight: 8 }}
          />
          Falar no WhatsApp: (11) 94381-6642
        </a>
      </section>
      {/* <section className="benefits-section thesection-2">
            <h2 className="section-title">O que nossos clientes dizem</h2>
            <div className="testimonial-scroller">
              <div className="testimonial-video">
                <blockquote>
                  “Com a Sight 7, conseguimos enxergar oportunidades que antes
                  passavam despercebidas. A clareza dos relatórios fez toda a
                  diferença para nosso negócio.”
                  <br />
                  <span style={{ fontWeight: 600 }}>
                    — Cliente do setor varejista
                  </span>
                </blockquote>
              </div>
              <div className="testimonial-video">
                <blockquote>
                  “A equipe é consultiva e sempre traz soluções inovadoras.
                  Recomendo para quem busca precisão e resultados mensuráveis.”
                  <br />
                  <span style={{ fontWeight: 600 }}>
                    — Cliente do setor de serviços
                  </span>
                </blockquote>
              </div>
            </div>
          </section> */}
      <AppFooter see={true} />
    </div>
  );
}

export default App;

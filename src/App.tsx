import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./Application/SelectLanguage/SelectLanguage";
import AppFooter from "./Routes/Footer/Footer";
import { LogoSVG } from "./Resources/UniversalComponents";
import { primaryColor, secondaryColor } from "./Styles/Styles";

function App() {
  const routes = [
    {
      path: "/*",
      element: (
        // ...existing code...
        <div className="container">
          {/* HERO */}
          <section className="hero-section thesection-1">
            <div className="hero-grid">
              <div
                style={{
                  padding: "1rem",
                  display: "grid",
                  justifyContent: "right",
                  alignContent: "center",
                  alignItems: "center",
                  justifyItems: "center",
                }}
                className="hero-text"
              >
                <img
                  src="https://ik.imagekit.io/vjz75qw96/assets/icons/sight.png"
                  alt="Sight 7 Logo"
                  style={{ maxWidth: 180, marginBottom: 16 }}
                />
                <h1
                  className="hero-title"
                  style={{
                    fontWeight: 700,
                    fontSize: "2.2rem",
                    marginBottom: 8,
                  }}
                >
                  Visão além dos dados.
                </h1>
                <p
                  className="hero-subtitle"
                  style={{ fontSize: "1.2rem", color: "#3A4A6C" }}
                >
                  Transforme dados em decisões inteligentes.
                  <br />
                  Otimize fluxos, aumente vendas e entenda o comportamento do
                  seu cliente com clareza e precisão.
                </p>
                <a
                  style={{
                    backgroundColor: "#1B2A4D", // Azul-escuro
                    color: "#fff",
                    marginTop: 18,
                    fontWeight: 600,
                    letterSpacing: 1,
                  }}
                  target="_blank"
                  href="https://sight7.com.br/contato"
                  className="cta-button"
                >
                  Solicite uma demonstração
                </a>
              </div>
            </div>
          </section>

          {/* MISSÃO, VISÃO, VALORES */}
          <section className="benefits-section thesection-2">
            <h2 className="section-title">Missão, Visão e Valores</h2>
            <div className="benefits-cards">
              <div className="benefit-card">
                <h3>Missão</h3>
                <p>
                  Transformar dados em decisões inteligentes, ajudando empresas
                  a otimizarem seus fluxos e aumentarem vendas com análise de
                  comportamento do cliente.
                </p>
              </div>
              <div className="benefit-card">
                <h3>Visão</h3>
                <p>
                  Ser referência global em soluções de inteligência de dados que
                  conectam marcas aos seus clientes com clareza e precisão.
                </p>
              </div>
              <div className="benefit-card">
                <h3>Valores</h3>
                <ul style={{ paddingLeft: 18 }}>
                  <li>
                    <b>Clareza</b> – traduzimos dados complexos em ações
                    simples.
                  </li>
                  <li>
                    <b>Inovação</b> – usamos tecnologia de ponta com propósito.
                  </li>
                  <li>
                    <b>Precisão</b> – análises baseadas em dados reais e
                    resultados mensuráveis.
                  </li>
                  <li>
                    <b>Parceria</b> – crescemos junto com nossos clientes.
                  </li>
                  <li>
                    <b>Ética</b> – tratamos os dados com responsabilidade e
                    respeito.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* SOBRE A SIGHT 7 */}
          <section className="hero-section thesection-1 padding-yes">
            <h2 className="section-title">Sobre a Sight 7</h2>
            <div
              style={{
                maxWidth: "700px",
                margin: "0 auto",
                fontSize: "1.1rem",
                color: "#3A4A6C",
                textAlign: "center",
                lineHeight: 1.6,
              }}
            >
              <p>
                A Sight 7 oferece soluções inteligentes de análise de dados e
                monitoramento para empresas que buscam clareza, segurança e
                resultados. Combinamos tecnologia de ponta, visão estratégica e
                atendimento consultivo para transformar dados em oportunidades
                reais de crescimento.
              </p>
            </div>
            <a
              style={{
                textAlign: "center",
                backgroundColor: "#7CF4A2", // Verde-limão/azul-claro para destaque
                color: "#1B2A4D",
                marginTop: 24,
                fontWeight: 600,
              }}
              target="_blank"
              href="https://sight7.com.br/contato"
              className="cta-button"
            >
              Fale com um especialista
            </a>
          </section>

          {/* DEPOIMENTOS OU CASES */}
          <section className="benefits-section thesection-2">
            <h2 className="section-title">O que nossos clientes dizem</h2>
            <div className="testimonial-scroller">
              {/* Substitua por vídeos ou depoimentos reais */}
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
          </section>
          <AppFooter see={true} />
        </div>
        // ...existing code...
      ),
    },
  ];

  return (
    <div>
      <UserProvider>
        <Router>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;

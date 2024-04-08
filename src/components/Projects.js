import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Tecnologias",
      description: "HTML, CSS, JS, PHP, JAVA, REACT E MYSQL.",
      imgUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    },
    {
      title: "Softskills",
      description: "Comunicação eficaz, trabalho em equipe e proatividade",
      imgUrl: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Hardskills",
      description: "Desenvolvimento Web, Orientação a objetos e Bancos de dados relacionais",
      imgUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Jornada na Programação</h2>
                <p>

                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projetos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Cursos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Grade</Nav.Link>
                    </Nav.Item>
                    {/* altera para experiencia */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="first">
  <ul>
  <li><a href="https://github.com/eduardosaatkamp/conversor-react"> Aplicativo de "citação do dia" integrando o backend e o frontend para exibir citações diárias de forma responsiva.</a></li>
  <li><a href="https://github.com/eduardosaatkamp/conversor-react">Conversor de unidades de temperatura com React: realizado integração entre backend e o React para uma interface interativa.</a></li>
  <li><a href="https://github.com/eduardosaatkamp/Task-list">Uma lista de tarefas realizada em parceria com as tecnologias HTML, CSS e JS como Exemplo de aplicação frontend básica.</a></li>
  <li><a href="https://github.com/eduardosaatkamp/CriandoUmBancoDigitalcomJava">Um banco digital em Java construído com base nos pilares da programação orientada a objetos.</a></li>
  <li><a href="https://github.com/eduardosaatkamp/login">Um login simples em CodeIgniter, PHP e MySQL seguindo a arquitetura MVC, incluindo autenticação e integração com banco de dados.</a></li>
</ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <h4>Cursos de Frontend</h4>
<ul>
  <li>React JS: Introdução (8h), DevMedia;</li>
  <li>Introdução ao Angular (5H), Digital Innovation One;</li>
  <li>Curso de JavaScript (24h), DevMedia;</li>
  <li>Criando um site usando HTML, CSS e JavaScript (2h), Fundação Bradesco;</li>
  <li>Construindo páginas para internet com Bootstrap (4h), DIO;</li>
</ul>

<h4>Cursos de Backend</h4>
<ul>
  <li>Curso de Java (16H), Digital Innovation One;</li>
  <li>Projetos Práticos de Java (4H), Digital Innovation One;</li>
  <li>Curso de PHP (21h), DevMedia;</li>
  <li>Introdução à Linguagem SQL (4h), DevMedia;</li>
</ul>

<h4>Cursos de Computação e Programação</h4>
<ul>
  <li>Programação Orientada a Objetos (3h), DIO;</li>
  <li>Introdução ao Git e ao GitHub (5h), DIO;</li>
  <li>Lógica de Programação Essencial (4h), DIO;</li>
  <li>Pensamento Computacional (2h), DIO;</li>
  <li>Linux: Introdução ao Sistema Operacional e Terminal (2h);</li>
  <li>Introdução à Informática, Fundação Bradesco Escola Virtual;</li>
</ul>

<h4>Cursos Extras</h4>
<ul>
  <li>Introdução à Automotivação (5h), iPED;</li>
  <li>Histórias de vida: Mulheres na Tecnologia, LinkedIn Learning;</li>
  <li>Feedback: tudo o que você precisa saber, DATAPREV;</li>
  <li>Inglês Básico (180h), SENAC;</li>
</ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
      <h4>Quinto período</h4>                   
                    <ul>
    <li>Gerência de Projetos em TI;</li>
    <li>Gestão de Processos de negócios;</li>
    <li>Gestão de Serviço em TI;</li>
    <li>Programação para dispositivos móveis em Android;</li>
</ul>

<h4>Quarto Período</h4>
<ul>
    <li>Engenharia de Software;</li>
    <li>Modelagem de Sistemas com UML;</li>
    <li>Padrões de Projeto de Software com Java;</li>
    <li>Programação Cliente Servidor;</li>
</ul>

<h4>Terceiro Período</h4>
<ul>
    <li>Análise de Dados;</li>
    <li>Estrutura de Dados em C;</li>
    <li>Matemática e Lógica;</li>
    <li>Programação Orientada a Objetos em Java;</li>
    <li>Sistemas Operacionais com prática em Linux;</li>
</ul>

<h4>Segundo Período</h4>
<ul>
    <li>Banco de dados;</li>
    <li>Computação em nuvem e web services em Linux;</li>
    <li>Desenvolv. Web em HTML5, CSS, JAVASCRIPT e PHP;</li>
    <li>Pensamento computacional;</li>
    <li>Paradigmas de ling. de programação em Python;</li>
</ul>

<h4>Primeiro Período</h4>
<ul>
    <li>Fundamentos de redes de computadores;</li>
    <li>Introdução a programação estruturada em C;</li>
    <li>Introdução a Segurança da Informação;</li>
    <li>Organização e arquitetura de computadores;</li>
    <li>Planejamento de carreira e sucesso profissional;</li>
</ul>

                   </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

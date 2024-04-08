
import meter1 from "../assets/img/php.jpeg";
import meter2 from "../assets/img/java.jpg";
import meter3 from "../assets/img/javascript.png";
import meter4 from "../assets/img/sql.webp";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Profissional com mais de 1 ano de experiência atuando no desenvolvimento frontend e backend. Realizou manutenção de aplicações web, testes, consultas SQL e PL/SQL, desenvolveu serviços RESTful, e contribuiu para a documentação da API com Swagger. Atuou com HTML, CSS, Javascript, PHP, Java, Spring Boot, React e Codeigniter. É um experiente usuário no Windows, e com bons conhecimentos de pacote office e Linux. Possui inglês de nível intermediário e mais de 100h em cursos voltados para programação em temas como javascript, react, java, PHP, SQL, dentre outros. Além disso, possui boa comunicação, capacidade de trabalhar de forma autônoma e em grupo, proatividade e muita vontade de aprender mais.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

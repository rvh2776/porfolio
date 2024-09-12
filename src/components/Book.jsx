/* eslint-disable react/prop-types */
import React, { createRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import SkillsPage from './SkillsPage/SkillsPage';
import { NavBar } from './NavBar/NavBar';
import './Book.css';

// eslint-disable-next-line react/display-name
const PageCover = React.forwardRef((props, ref) => {
  return (
    <div
      className="page page-cover page-cover-top"
      ref={ref}
      data-density="hard"
    >
      <div className="page-content page-cover-content">
        <div className="cover-photo">
          <img src="/images/portada.jpeg" alt="Rafael" />
        </div>
        <h2 className="cover-title text-center m-auto">{props.children}</h2>
        <p className="cover-description text-center mt-4">Soy desarrollador fullstack con experiencia en <br/>JavaScript, NodeJs, React, NestJs, CSS, HTML y tecnologías asociadas...<br/>
        Especializado en Back-end con conocimientos significativos en Front-end, lo que me permite tener una comprensión integral de todo el ciclo de desarrollo.</p>
      </div>
    </div>
  );
});

// eslint-disable-next-line react/display-name
const PageCoverBack = React.forwardRef((props, ref) => {
  return (
    <div
      className="page page-cover page-cover-top"
      ref={ref}
      data-density="hard"
    >
      <div className="page-content page-cover-content">
        {/* <div className="cover-photo">
          <img src="/images/portada.jpeg" alt="Rafael" />
        </div> */}
        <h2 className="cover-title text-center">{props.children}</h2>
        <p className="cover-description text-center m-auto">Descubre las habilidades de un desarrollador full stack especializado en back-end, enfocado en crear soluciones eficientes y escalables.<br/> A través de proyectos reales y ejemplos prácticos,<br/> este libro te guía por un recorrido de desarrollos <br/>que abordan los desafíos actuales del sector. <br/>Desde la integración de APIs<br/> hasta la optimización de sistemas complejos,<br/> cada página refleja el compromiso con el trabajo<br/> y la búsqueda de la mejor solución para cada cliente.</p>
      </div>
    </div>
  );
});

// Componente Page
// eslint-disable-next-line react/display-name
const Page = React.forwardRef((props, ref) => {
  return (
    <>
      <div className="page" ref={ref}>
        <div className="page-content">
          <h2 className="page-header">{props.number}</h2>
          <div className="page-image"></div>
          <div className="page-text">{props.children}</div>
        </div>
      </div>
      <div className="page-footer">{props.number}</div>
    </>
  );
});

// Componente DemoBook
class Book extends React.Component {
  constructor(props) {
    super(props);
    this.bookRef = createRef(); // Creamos la referencia del libro
    // this.state = {
    //   page: 2,
    //   totalPage: 6,
    // };
  }

  //? Método para manejar la navegación a una página específica
  // handleNavigate = (pageIndex) => {
  //   if (this.bookRef.current) {
  //     this.bookRef.current.pageFlip().flip(pageIndex); // Cambia a la página indicada
  //   }
  // };

  //? Método para manejar la navegación a una página específica con animación de paso por paso
  handleNavigate = (targetPage) => {
    if (this.bookRef.current) {
      const currentPage = this.bookRef.current.pageFlip().getCurrentPageIndex();
      const step = currentPage < targetPage ? 1 : -1; // Determina si avanza o retrocede

      // Recorre páginas de una en una
      const flipPages = (current, target) => {
        if (current !== target) {
          this.bookRef.current.pageFlip().flip(current + step); // Pasa una página
          setTimeout(() => flipPages(current + step, target), 1000); // Llama recursivamente con un retardo en ms
        }
      };

      flipPages(currentPage, targetPage); // Inicia la animación de paso por paso
    }
  };

  nextButtonClick = () => {
    this.flipBook.getPageFlip().flipNext();
  };

  prevButtonClick = () => {
    this.flipBook.getPageFlip().flipPrev();
  };

  // onPage = (e) => {
  //   this.setState({
  //     page: e.data,
  //   });
  // };

  componentDidMount() {
    if (this.flipBook && this.flipBook.getPageFlip) {
      this.setState({
        totalPage: this.flipBook.getPageFlip().getPageCount(),
      });
    }
  }

  render() {
    return (
      <>
      <NavBar onNavigate={this.handleNavigate} />
      <div className='demo-block bg-lightx pt-3 pb-3 overflow-hidden' id='demoBlock'>
        <div>
          <div className='container-md'>

            <HTMLFlipBook
              className="flip-book html-book demo-book"
              width={550}
              height={640}
              size="stretch" // "stretch" "fixed"
              minWidth={315}
              maxWidth={900}
              minHeight={400}
              maxHeight={1200}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              onFlip={this.onPage}
              // ref={(el) => (this.flipBook = el)}
              ref={this.bookRef}
              autoSize={true}
            >
              <PageCover number={0}>Rafael Velazquez</PageCover>
              <Page number={''}></Page>
              <SkillsPage number={1} />
              <SkillsPage number={2} />
              <SkillsPage number={3} />
              <SkillsPage number={4} />
              <Page number={''}></Page>
              <PageCoverBack number={7}>Contactame!</PageCoverBack>

            </HTMLFlipBook>

          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Book;

/* eslint-disable react/prop-types */
import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './Book.css';
import SkillsPage from './SkillsPage/SkillsPage';

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
        <h2 className="cover-title text-center">{props.children}</h2>
        <p className="cover-description text-center">Soy desarrollador fullstack con experiencia en <br/>JavaScript, NodeJs, React, NestJs, CSS, HTML y tecnologías asociadas...<br/>
        Especializado en Back-end con conocimientos significativos en Front-end, lo que me permite tener una comprensión integral de todo el ciclo de desarrollo.</p>
      </div>
    </div>
  );
});

// Componente Page
// eslint-disable-next-line react/display-name
const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">{props.number}</h2>
        <div className="page-image"></div>
        <div className="page-text mb-1">{props.children}</div>
        <div className="page-footer">{props.number }</div>
      </div>
    </div>
  );
});

// Componente DemoBook
class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 0,
    };
  }

  nextButtonClick = () => {
    this.flipBook.getPageFlip().flipNext();
  };

  prevButtonClick = () => {
    this.flipBook.getPageFlip().flipPrev();
  };

  onPage = (e) => {
    this.setState({
      page: e.data,
    });
  };

  componentDidMount() {
    // Asegúrate de que `flipBook` esté correctamente referenciado antes de llamar a `getPageFlip`
    if (this.flipBook && this.flipBook.getPageFlip) {
      this.setState({
        totalPage: this.flipBook.getPageFlip().getPageCount(),
      });
    }
  }

  render() {
    return (
      <div className='demo-block bg-lightx pt-3 pb-3 overflow-hidden'id='demoBlock'>
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
          ref={(el) => (this.flipBook = el)}
          autoSize={true}
        >
          <PageCover>Rafael Velazquez</PageCover>
          <Page number={''}></Page>
          <SkillsPage number={1} />
          <SkillsPage number={2} />
          <SkillsPage number={3} />
          <SkillsPage number={4} />
          <Page number={''}></Page>
          <PageCover>Contactame!</PageCover>

        </HTMLFlipBook>

        
      </div>
      </div>
      </div>
    );
  }
}

export default Book;

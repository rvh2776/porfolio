/* eslint-disable react/prop-types */
import React from 'react';
import PageBase from '../PageBase/PageBase';
import './SkillsPage.css';

// eslint-disable-next-line react/display-name
const SkillsPage = React.forwardRef((props, ref) => {
  return (
    <PageBase
        ref={ref}
        title="Mis Habilidades"
        number={props.number}
        className="skills-page"
    >
        <ul className="skills-list">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>NestJS</li>
            {/* Añade más habilidades */}
        </ul>
    </PageBase>
  );
});

export default SkillsPage;

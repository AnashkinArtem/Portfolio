import React from 'react'
import html from '../../../../image/Skills/html.svg'
import css from '../../../../image/Skills/css.svg'
import js from '../../../../image/Skills/js.svg'
import react from '../../../../image/Skills/react.svg'
import redux from '../../../../image/Skills/redux.svg'
import git from '../../../../image/Skills/git.svg'
import sass from '../../../../image/Skills/sass.svg'
import bootstrap from '../../../../image/Skills/bootstrap.svg'
import ts from '../../../../image/Skills/ts.svg'
import webpack from '../../../../image/Skills/webpack.svg'

import styles from './skills.module.scss'

// const dataSkills = [
//   {
//     poster: `url('${htmlposter}')`,
//     title: 'HTML',
//     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero possimus tempora molestias dolores facilis quis perspiciatis quia obcaecati vel nemo.'
//   },
//   {
//     poster: '',
//     title: 'CSS',
//     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero possimus tempora molestias dolores facilis quis perspiciatis quia obcaecati vel nemo.'
//   },
//   {
//     poster: '',
//     title: 'GIT',
//     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero possimus tempora molestias dolores facilis quis perspiciatis quia obcaecati vel nemo.'
//   }
// ]


const Skills: React.FC = () => {
  return (
    <>
      <div className={styles.skills}>
        <div className={styles.skills__wrapper}>

          <div className={styles.skills__item}>
            <div className={styles.skills__img}><img src={html} alt="html" /></div>
            <div className={styles.skills__title}>HTML</div>
            <div className={styles.skills__descr}>HTML (HyperText Markup Language) is a standardized document markup language for viewing web pages in a browser.</div>   
          </div>  

          <div className={styles.skills__item}>
            <div className={styles.skills__img}><img src={css} alt="css" /></div>
            <div className={styles.skills__title}>CSS</div>
            <div className={styles.skills__descr}>CSS (Cascading Style Sheets) or cascading style sheets is a language for describing the appearance of a document written using a markup language. Typically used to describe the design of web pages written using the HTML markup language.</div>   
          </div>  

          <div className={styles.skills__item}>
            <div className={styles.skills__img}><img src={js} alt="js" /></div>
            <div className={styles.skills__title}>Java Script</div>
            <div className={styles.skills__descr}>JavaScript is a fully fledged dynamic programming language that is applied to an HTML document and can provide dynamic interactivity on websites. It was developed by Brendan Eich, co-founder of the Mozilla Project, Mozilla Foundation and Mozilla Corporation.</div>   
          </div>  

          <div className={styles.skills__item}>
            <div className={styles.skills__img}><img src={react} alt="react" /></div>
            <div className={styles.skills__title}>React</div>
            <div className={styles.skills__descr}>React (sometimes React.js or ReactJS) is an open source JavaScript library for developing user interfaces. React is developed and maintained by Facebook, Instagram, and a community of individual developers and corporations.</div>   
          </div>  

          <div className={styles.skills__item}>
            <div className={styles.skills__img}><img src={redux} alt="redux" /></div>
            <div className={styles.skills__title}>Redux</div>
            <div className={styles.skills__descr}>Redux is an open source JavaScript library for managing application state. Most often used in conjunction with React or Angular for front-end development. Contains a number of tools to greatly simplify the transfer of storage data through the context.</div>   
          </div>  

          <div className={styles.skills__item}>
            <div className={styles.skills__img}><img src={git} alt="git" /></div>
            <div className={styles.skills__title}>Git</div>
            <div className={styles.skills__descr}>
            Git is a set of console utilities that track and commit changes to files (most often it's about program source code, but you can use it for any files you like). Git was originally created by Linus Torvalds while developing the Linux kernel.</div>   
          </div>  

          <div className={styles.skills__item}>
            <div className={styles.skills__img}><img src={sass} alt="sass" /></div>
            <div className={styles.skills__title}>Sass</div>
            <div className={styles.skills__descr}>
              Sass (Syntactically Awesome Stylesheets) is a module included with Haml. Sass is a CSS-based metalanguage designed to increase the abstraction level of CSS code and simplify cascading style sheet files.</div>   
          </div>  

          <div className={styles.skills__item}>
            <div className={styles.skills__img}><img src={bootstrap} alt="bootstrap" /></div>
            <div className={styles.skills__title}>Bootstrap</div>
            <div className={styles.skills__descr}>Bootstrap is a free set of tools for building websites and web applications. Includes HTML and CSS design templates for typography, web forms, buttons, labels, navigation blocks, and other web interface components, including JavaScript extensions.</div>   
          </div>  

          <div className={styles.skills__item}>
            <div className={styles.skills__img}><img src={ts} alt="ts" /></div>
            <div className={styles.skills__title}>Type Script</div>
            <div className={styles.skills__descr}>TypeScript is a programming language introduced by Microsoft in 2012 and positioned as a web application development tool that extends the capabilities of JavaScript.</div>   
          </div> 

          <div className={styles.skills__item}>
            <div className={styles.skills__img}><img src={webpack} alt="webpack" /></div>
            <div className={styles.skills__title}>Webpack</div>
            <div className={styles.skills__descr}>Webpack is a tool that allows you to compile, for example, JavaScript modules into a single JS file. Webpack is also known as a module builder. With a large number of files, it creates one large file (or several files) to run your application.</div>   
          </div> 

        </div>
      </div>       
    </>
  )
}

export default Skills
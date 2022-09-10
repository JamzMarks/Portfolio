import React from 'react'
import '../home.scss'
import CV from '../../../../assets/documents/CV-JamesMarques.pdf'

export function About() {
  return (
    <div className='about'>
        <div className='a_container'>
            <div className='a_content'>
                <div className='a_part'>
                    <div className='a_title'>
                        <h3 className='divisoria'>Sobre mim</h3>
                    </div>
                    <div className='a_desc'>
                        <p>
                            Sou Desenvolvedor Full Stack Web, atualmente estou
                            cursando o superior em Ciência da Computação pela UNIP de Alphaville.
                            Estou tentando ingressar no mercado de tecnologia, possuo conhecimento em
                            HTML5, SASS, Python, JavaScript e React. Conhecimentos básicos em AWS e banco de dados MySQL.

                        </p>
                    </div>
                    <div className='a_cv'>
                            <a href={CV} downdload className='btn bt_down'>
                                <i className="fa-solid fa-download"></i>
                                Download CV 
                            </a>
    
                    </div>
                </div>
                <div className='a_part'>
                    <div className='a_profile'>
                        <div className="img_up">
                            <img src="./bg.jpg" alt="" />
                        </div>
                        <div className="img_over"></div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}



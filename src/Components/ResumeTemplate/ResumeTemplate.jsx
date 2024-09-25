"use client"

import React from 'react'
import Styles from './ResumeTemplate.module.css'
import { usePDF } from 'react-to-pdf';

const ResumeTemplate = () => {
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  return (
    <>
    <button style={{position:'absolute', right: 20}} onClick={() => toPDF()}>Download PDF</button>
        <div className={Styles.Resumecon} ref={targetRef}>
            <div className={Styles.basiccol}>
                <p className={Styles.namehead}>Rohit</p>
                <p>Frontend Developer</p>
                <p style={{fontSize: 12, color: '#9f5bff'}}>A-862/4 Sangam Vihar, New Delhi 110062</p>

                <div className={Styles.connect}>
                    <div>
                        <p>+91 9898988889</p>
                    </div>
                    <div>
                        <p>example@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className={Styles.objective}>
                <p className={Styles.fade}>Recent programming program graduate planning to use my internship experience and desire to learn in a front-end developer role where I can create influential coding solutions.</p>
            </div>

            <div className={Styles.Educational}>
                <p className={Styles.title}>Educational Qualification</p>

                <div className={Styles.educationcon}>
                    <div className={Styles.educationhead}>
                        <p>Bachelor of Computers of Application</p>
                        <span>Jan 2021 - Jan 2024</span>
                    </div>
                    <ul>
                        <li>Pursuing BCA From Indira Gandhi National Open University (IGNOU) | 2022 - 2025</li>
                        <li>Pursuing BCA From Indira Gandhi National Open University (IGNOU) | 2022 - 2025</li>
                    </ul>
                </div>
                <div className={Styles.educationcon}>
                    <div className={Styles.educationhead}>
                        <p>Bachelor of Arts</p>
                        <span>Jan 2018 - Jan 2021</span>
                    </div>
                    <ul>
                        <li>Completed BA From University of Delhi (DU) | Shaheed Bhagat Singh College | 2018 - 2021.</li>
                        <li>Completed BA From University of Delhi (DU) | Shaheed Bhagat Singh College | 2018 - 2021.</li>
                    </ul>
                </div>
            </div>

            <div className={Styles.Project}>
                <p className={Styles.title}>Projects</p>

                <div className={Styles.Skills}>
                    <div className={Styles.projecthead}>
                        <p>Foodo - A Food Web Application</p>
                        <span>Jan 2021 - Jan 2024</span>
                    </div>
                    <ul>
                        <li>Developed abasic dynamic food ordering website using NextJS.</li>
                        <li>Utilized HTML, CSS, and JavaScript for crafting an engaging user interface.</li>
                        <li>Implemented the React Context API for efficient state management.</li>
                        <li>Integrated a basic yet secure login and logout functionality.</li>
                        <li>Seamlessly Used APIs for fetching and displaying real-time data.</li>
                        <li>Demonstrated proficiency in combining front-end technologies, state management, and data integration to create an interactive and user-centric web experience.</li>
                    </ul>
                </div>
                <div className={Styles.educationcon}>
                    <div className={Styles.educationhead}>
                        <p>Shopingo - E- Commerce Web Application</p>
                        <span>Jan 2018 - Jan 2021</span>
                    </div>
                    <ul>
                        <li>Developed a basic dynamic e-commerce web application using ReactJs.</li>
                        <li>Proficient in HTML, CSS, and JavaScript.</li>
                        <li>Implemented React Context API for efficient state management.</li>
                        <li>Integrated basic login and logout functionality for user convenience.</li>
                        <li>Utilized third-party APIs for fetching product data.</li>
                    </ul>
                </div>
            </div>

            <div className={Styles.Achievements}>
                <p className={Styles.title}>Achievements</p>

                <div className={Styles.achievementscon}>
                    <ul>
                        <li>Integrated advanced features into a web platform, such as a custom CMS and interactive user interfaces.</li>
                        <li>Developed a new application feature that increased user engagement by 30%.</li>
                        <li>Revamped a major website, improving load time by 60% and enhancing user experience.</li>
                        <li>Built a responsive e-commerce website that increased the client's sales conversion rate by 20%.</li>
                    </ul>
                </div>
            </div>

            <div className={Styles.Skills}>
                <p className={Styles.title}>Skills</p>

                <div className={Styles.skillscon}>
                    <li>Html</li>
                    <li>Css</li>
                    <li>javascript</li>
                    <li>java</li>
                    <li>redux</li>
                    <li>reactjs</li>
                    <li>nextjs</li>
                    <li>nodejs</li>
                </div>
            </div>

            <div className={Styles.Languages}>
                <p className={Styles.title}>Languages</p>

                <div className={Styles.languagescon}>
                    <li>Hindi</li>
                    <li>English</li>
                    <li>french</li>
                    <li>spanish</li>
                </div>
            </div>

            <div className={Styles.Hobbies}>
                <p className={Styles.title}>Hobbies</p>

                <div className={Styles.hobbiescon}>
                    <li>Movies</li>
                    <li>Coding</li>
                    <li>Music</li>
                    <li>Games</li>
                </div>
            </div>
        
        </div>
    </>
  )
}

export default ResumeTemplate
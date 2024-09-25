import Form from '@/src/Components/Form/Form'
import Navbar from '@/src/Components/Navbar/Navbar'
import ResumeTemplate from '@/src/Components/ResumeTemplate/ResumeTemplate'
import React from 'react'

const sections = {
  basicinfo : "Basic Information",
  Introduction : "Introduction",
  Education : "Education",
  Skills : "Skills",
  Achievements : "Achievements",
  Projects : "Projects",
  Others : "Others"
}

const editor = () => {
  return (
    <section>
        <Navbar />
        <div style={{display: 'flex',gap: 50, justifyContent: 'space-between', width: '95%', margin: '50px auto'}}>
          <Form sections={sections} />
          
          <ResumeTemplate />
        </div>
    </section>
  )
}

export default editor
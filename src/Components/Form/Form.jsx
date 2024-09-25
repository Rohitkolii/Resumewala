'use client'
import React, { useState } from 'react'
import Styles from './Form.module.css'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { MdSaveAlt } from "react-icons/md";



const Form = ({sections}) => {

  const personalInfo = () => {
    return <div className={Styles.formcontainer}>
    <p>Personal information</p>
    <div className={Styles.row}>
      <div>
        <label htmlFor="">First Name :</label>
        <input type="text" placeholder='Enter your first name' name="" id="" />
      </div>

      <div>
        <label htmlFor="">Last Name :</label>
        <input type="text" placeholder='Enter your last name if any' name="" id="" />
      </div>
    </div>

    <div className={Styles.column}>
      <div>
        <label htmlFor="">Job title :</label>
        <input type="text" placeholder='Enter job title ex. Data entry' name="" id="" />
      </div>
    </div>

    <div className={Styles.row}>
      <div>
        <label htmlFor="">Mail :</label>
        <input type="mail" placeholder='example@demo.com' name="" id="" />
      </div>

      <div>
        <label htmlFor="">Contact :</label>
        <input type="text" placeholder='ex. 9999XXXX88' name="" id="" />
      </div>
    </div>

    <div className={Styles.column}>
      <div>
        <label htmlFor="">Linked in :</label>
        <input type="text" placeholder='linkedin.com/username123' name="" id="" />
      </div>
    </div>
  </div>
  }

  const educationalQualification = () => {
    return <div className={Styles.formcontainer}>
    <p>Education Qualification</p>
    <div className={Styles.column}>
      <div>
        <label htmlFor="">University or Institute Name : </label>
        <input type="text" placeholder='Enter your University name' name="" id="" />
      </div>
    </div>

    <div className={Styles.row}>
      <div>
        <label htmlFor="">Degree name</label>
        <input type="mail" placeholder='Enter Degree name' name="" id="" />
      </div>

      <div>
        <label htmlFor="">Speciality :</label>
        <input type="text" placeholder='ex. computer or law' name="" id="" />
      </div>
    </div>

    <div className={Styles.row}>
      <div>
        <label htmlFor="">Start Date :</label>
        <input type="date" placeholder='Enter Degree name' name="" id="" />
      </div>

      <div>
        <label htmlFor="">End Date :</label>
        <input type="date" placeholder='ex. computer or law' name="" id="" />
      </div>
    </div>

    <div className={Styles.column}>
      <div>
        <label htmlFor="">Summary : </label>
        <input type="text" placeholder='Enter your University name' name="" id="" />
      </div>
    </div>
  </div>
  }

  const Experience = () => {
    return <div className={Styles.formcontainer}>
    <p>Experience</p>
    <div className={Styles.column}>
      <div>
        <label htmlFor="">Job title :</label>
        <input type="text" placeholder='Ex. Frontend Dev.' name="" id="" />
      </div>
    </div>

    <div className={Styles.row}>
    <div>
        <label htmlFor="">Company :</label>
        <input type="text" placeholder='Company name' name="" id="" />
      </div>

      <div>
        <label htmlFor="">City :</label>
        <input type="text" placeholder='Enter job city' name="" id="" />
      </div>
    </div>
    <div className={Styles.row}>
      <div>
        <label htmlFor="">Start Date :</label>
        <input type="date" placeholder='Enter Degree name' name="" id="" />
      </div>

      <div>
        <label htmlFor="">End Date :</label>
        <input type="date" placeholder='ex. computer or law' name="" id="" />
      </div>
    </div>

    <div className={Styles.column}>
      <div>
        <label htmlFor="">Summary : </label>
        <input type="text" placeholder='Enter summary' name="" id="" />
      </div>
    </div>
  </div>
  }

  const projects = () => {
    return <div className={Styles.formcontainer}>
    <p>Projects</p>
    <div className={Styles.column}>
      <div>
        <label htmlFor="">Project Title: </label>
        <input type="text" placeholder='Ex. Todo App' name="" id="" />
      </div>
    </div>

    <div className={Styles.row}>
      <div>
        <label htmlFor="">Start Date :</label>
        <input type="date" placeholder='Enter Degree name' name="" id="" />
      </div>

      <div>
        <label htmlFor="">End Date :</label>
        <input type="date" placeholder='ex. computer or law' name="" id="" />
      </div>
    </div>

    <div className={Styles.column}>
      <div>
        <label htmlFor="">Summary : </label>
        <input type="text" placeholder='Enter Summary of your project' name="" id="" />
      </div>
    </div>
  </div>
  }

  const skills = () => {
    return <div className={Styles.formcontainer}>
    <p>Skills</p>

    <div className={Styles.column}>
      <div>
        <label htmlFor="">Skills : </label>
        <input type="text" placeholder='Ex. Html or Excel' name="" id="" />
      </div>
    </div>
    
    <button>Add +</button>

    <div className={Styles.chips}>
      <span>Html</span>
      <span>Html</span>
      <span>Html</span>
      <span>Html</span>
      <span>Html</span>
      <span>Html</span>
      <span>Html</span>
      <span>Html</span>
      <span>Html</span>
      <span>Html</span>
      <span>Html</span>
      <span>Html</span>
      <span>Html</span>
      <span>Html</span>
    </div>
  </div>
  }

  const languages = () => {
    return <div className={Styles.formcontainer}>
    <p>Languages</p>

    <div className={Styles.column}>
      <div>
        <label htmlFor="">Language : </label>
        <input type="text" placeholder='Ex. English' name="" id="" />
      </div>
    </div>
    
    <button>Add +</button>

    <div className={Styles.chips}>
      <span>English</span>
      <span>English</span>
      <span>English</span>
      <span>English</span>
    </div>
  </div>
  }

  const Achivements = () => {
    return <div className={Styles.formcontainer}>
    <p>Achievements : </p>

    <div className={Styles.column}>
      <div>
        <label htmlFor="">Language : </label>
        <input type="text" placeholder='Achievement 1' name="" id="" />
        <input type="text" placeholder='Achievement 2' name="" id="" />
        <input type="text" placeholder='Achievement 3' name="" id="" />
        <input type="text" placeholder='Achievement 4' name="" id="" />
      </div>
    </div>
  </div>
  }

  const Hobies = () => {
    return <div className={Styles.formcontainer}>
    <p>Hobies : </p>

    <div className={Styles.column}>
      <div>
        <label htmlFor="">Hobbies : </label>
        <input type="text" placeholder='Hobie 1' name="" id="" />
        <input type="text" placeholder='Hobie 2' name="" id="" />
        <input type="text" placeholder='Hobie 3' name="" id="" />
        <input type="text" placeholder='Hobie 4' name="" id="" />
      </div>
    </div>
  </div>
  }

  let ar = [personalInfo(), educationalQualification(),skills(),Experience(),projects(),languages(), Achivements(), Hobies()];
  const [count, setCOunt] = useState(0);

  const bodyGenerator = (event) => {
    // if(count >=0 && count <=7){
    switch(count){
      case 0:
        return personalInfo();
      case 1:
        return educationalQualification();
      case 2:
        return Experience();
      case 3:
        return projects();
      case 4:
        return skills();
      case 5:
        return languages();
      case 6:
        return Achivements();
      case 7:
        return Hobies();
        case 8:
          return <h1>Done</h1>
    }
  // }
    console.log(count)
    console.log(ar[count])
  }



  return (
    <div>
      <div className={Styles.btncon} style={{ display: 'flex', justifyContent: 'end', gap:5, margin: "20px 0"}}>
        {count != 0 ? <button onClick={count >=0 ? ()=> setCOunt(count-1) : setCOunt(0)} style={{backgroundColor: '#EE4266'}}><FaArrowLeft /></button> : '' }
        {count == 7 ? "" : <button onClick={count <=7 ? ()=> setCOunt(count+1) : setCOunt(7)} style={{backgroundColor: '#9f5bff'}}>Next <FaArrowRight /></button>}
      </div>
      {bodyGenerator()}

      <button style={{marginTop: 20, float: 'right'}} className={Styles.savebtn}>Save <MdSaveAlt /></button>
    </div>
  )
}

export default Form
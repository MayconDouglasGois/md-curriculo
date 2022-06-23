import React from 'react'
import "./style.scss";




const Skills = () => {


    const skills = [
        {
          liguagem: "HTML5",
          nivel: 4,
        },
        {
          liguagem: "CSS3",
          nivel: 4,
        },
        {
          liguagem: "JavaScript",
          nivel: 3,
        },
        {
          liguagem: "React",
          nivel: 3,
        },
        {
          liguagem: "Next",
          nivel: 2,
        },
        {
          liguagem: 'sass',
          nivel:4
          },
          {
            liguagem: 'Git & GitHub',
            nivel:2
            },
      ];

  return (
    <ul>
    {skills.map((item)=>{
        return(
        <div>
        <span>{item.liguagem}</span>

        <div className='barraNivel' style={{width:'10rem'}}>

            <div className='MarcadorNivel' style={{width:2*item.nivel+'rem'}}>
            </div>

        </div>



        </div>)
    })}
    </ul>
  )
}

export default Skills
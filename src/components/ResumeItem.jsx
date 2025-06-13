import React from 'react'
import parse from 'html-react-parser';

function ResumeItem({icon,year,title,desc,details,item1,item2,item3,item4}) {
  return (
    <>
      <div className="resume__item">
        <div className="resume__icon">{icon}</div>
        
        <span className='resume__date'>{year}</span>
        {/* Using parse to render HTML content */}
        <h3 className='resume_subtitle'>{parse(title)}</h3>
        <p className="resume_desc">{desc}</p>
        <p className='resume__description'>{item1}</p>
        <p className='resume__description'>{item2}</p>
        <p className='resume__description'>{item3}</p>
        <p className='resume__description'>{item4}</p>
      </div>
    </>
  )
}

export default ResumeItem

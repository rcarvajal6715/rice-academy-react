import React from 'react';
import styles from './ProgramCard.module.css';

const ProgramCard = ({ imageSrc, altText, title, description, schedule }) => {
  return (
    <div className={styles.program}>
      <img src={imageSrc} alt={altText} className={styles.programImg} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        {/* For schedule, if it's a simple string with <br>, it's tricky.
            A better way would be to pass schedule as an array of lines or structured data.
            For now, let's assume schedule is a string that might need simple formatting,
            or it's passed as pre-formatted JSX/string array.
            If schedule is an array of strings:
            {schedule.map((line, index) => <p key={index}><strong>{line.split(':')[0]}:</strong> {line.split(':')[1]}</p>)}
            If it's a single string and we trust its source / it's simple:
        */}
        {typeof schedule === 'string' ? (
          <p dangerouslySetInnerHTML={{ __html: schedule }}></p>
        ) : Array.isArray(schedule) ? (
          schedule.map((line, index) => <p key={index} dangerouslySetInnerHTML={{ __html: line }}></p>)
        ) : null}
      </div>
    </div>
  );
};

export default ProgramCard;

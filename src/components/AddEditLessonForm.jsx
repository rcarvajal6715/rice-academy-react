import React, { useState } from 'react';

const AddEditLessonForm = () => {
  const [lessonId, setLessonId] = useState('');
  const [program, setProgram] = useState('');
  const [studentNames, setStudentNames] = useState(['']); // Start with one student input
  const [referralSource, setReferralSource] = useState('');
  const [coach, setCoach] = useState('');
  const [coach2, setCoach2] = useState('');
  const [coach3, setCoach3] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [lessonPrice, setLessonPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic will be added later
    console.log('Form submitted with:', {
      lessonId,
      program,
      studentNames,
      referralSource,
      coach,
      coach2,
      coach3,
      date,
      time,
      lessonPrice,
    });
  };

  // Simplified student name input for now
  const handleStudentNameChange = (index, value) => {
    const updatedStudentNames = [...studentNames];
    updatedStudentNames[index] = value;
    setStudentNames(updatedStudentNames);
  };

  return (
    <section>
      <h2>Add / Edit Lesson</h2>
      <form id="lesson-form" onSubmit={handleSubmit}>
        <input type="hidden" id="lesson-id" value={lessonId} onChange={(e) => setLessonId(e.target.value)} />

        <div className="full-width">
          <label htmlFor="program">Program</label>
          <select id="program" required value={program} onChange={(e) => setProgram(e.target.value)}>
            <option value="" disabled>Choose a program</option>
            <option value="Private Lesson">Private Lesson</option>
            <option value="Summer Camp - Day Pass">Summer Camp - Day Pass</option>
            <option value="Summer Camp - Week Pass">Summer Camp - Week Pass</option>
            <option value="Kids Camp - Day Pass">Kids Camp - Day Pass</option>
            <option value="Kids Camp - Week Pass">Kids Camp - Week Pass</option>
            <option value="Adult Clinics">Adult Clinics</option>
          </select>
        </div>

        {/* Student Name Container - static for now */}
        <div id="student-name-container" className="full-width">
          <label htmlFor="student-names-list">Student Name(s)</label>
          <div id="student-names-list">
            {studentNames.map((name, index) => (
              <div key={index}>
                <input
                  type="text"
                  className="student-name-entry"
                  name="student_names[]"
                  required
                  placeholder="Student Name"
                  value={name}
                  onChange={(e) => handleStudentNameChange(index, e.target.value)}
                />
                {/* Remove button will be added later */}
              </div>
            ))}
          </div>
          {/* Add student button will be added later and styled */}
          <button type="button" id="add-student-btn" style={{ display: 'none' }}>+ Add Student</button>
        </div>

        {/* Referral Source Container - visibility will be dynamic later */}
        <div id="referral-source-container" className="full-width" style={{ display: 'none' }}>
          <label htmlFor="referral_source">Referral Source</label>
          <select id="referral_source" name="referral_source" value={referralSource} onChange={(e) => setReferralSource(e.target.value)}>
            <option value="" >None</option>
            <option value="Ricardo">Referred by Ricardo</option>
            <option value="Jacob">Jacob's Own</option>
            <option value="Paula">Paula's Own</option>
            <option value="Zachary Capone">Zachary Capone’s Own (10%)</option>
            <option value="RicardoOwn">Ricardo's Own</option>
          </select>
        </div>

        <div id="coach-container">
          <label htmlFor="coach">Coach #1</label>
          <select id="coach" required value={coach} onChange={(e) => setCoach(e.target.value)}>
            <option value="" disabled>Choose a coach</option>
            <option>Ricardo Carvajalino</option>
            <option>Jacob Capone</option>
            <option>Zachary Capone</option>
            <option>Paula Carvajalino</option>
          </select>
        </div>

        <div id="coach2-container" style={{ display: 'none' }}>
          <label htmlFor="coach2">Coach #2</label>
          <select id="coach2" value={coach2} onChange={(e) => setCoach2(e.target.value)}>
            <option value="" >None</option>
            <option>Ricardo Carvajalino</option>
            <option>Jacob Capone</option>
            <option>Zach Capone</option> {/* Ensure consistency if this is different from Zachary Capone */}
            <option>Paula Carvajalino</option>
          </select>
        </div>

        <div id="coach3-container" style={{ display: 'none' }}>
          <label htmlFor="coach3">Coach #3</label>
          <select id="coach3" value={coach3} onChange={(e) => setCoach3(e.target.value)}>
            <option value="" >None</option>
            <option>Ricardo Carvajalino</option>
            <option>Jacob Capone</option>
            <option>Zach Capone</option> {/* Ensure consistency */}
            <option>Paula Caravajalino</option> {/* Typo from HTML, correct to Carvajalino if that's standard */}
          </select>
        </div>

        <div>
          <label htmlFor="date">Date</label>
          {/* Date input will be replaced/enhanced with flatpickr or similar later */}
          <input type="text" id="date" placeholder="Select Date" required value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div>
          <label htmlFor="time">Time</label>
          {/* Time select population will be handled later */}
          <select id="time" required value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="" disabled>Select Time</option>
            {/* Options will be populated dynamically */}
          </select>
        </div>

        <div>
          <label htmlFor="lesson-price">Price</label>
          <input type="number" id="lesson-price" name="lesson_price" placeholder="Enter price" step="0.01" min="0" value={lessonPrice} onChange={(e) => setLessonPrice(e.target.value)} />
        </div>

        <div className="full-width form-actions">
          <button type="submit">Save Lesson</button>
        </div>
      </form>
    </section>
  );
};

export default AddEditLessonForm;

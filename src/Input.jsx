import React, { useState } from 'react';
import axios from 'axios';

function Input() {
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [education, setEducation] = useState(null);
  const [personalComputer, setPersonalComputer] = useState(null);
  const [employed, setEmployed] = useState(null);
  const [disabled, setDisabled] = useState(null);
  const [internetAccess, setInternetAccess] = useState(null);
  const [parents, setParents] = useState(null);
  const [gapInResume, setGapInResume] = useState(null);
  const [unemployed, setUnemployed] = useState(null);
  const [readsOutsideWorkSchool, setReadsOutsideWorkSchool] = useState(null);
  const [difficultyConcentrating, setDifficultyConcentrating] = useState(null);
  const [anxiety, setAnxiety] = useState(null);
  const [depression, setDepression] = useState(null);
  const [obsessiveThoughts, setObsessiveThoughts] = useState(null);
  const [fluctuatingMood, setFluctuatingMood] = useState(null);
  const [panicEpisodes, setPanicEpisodes] = useState(null);
  const [compulsiveHabits, setCompulsiveHabits] = useState(null);
  const [fatigue, setFatigue] = useState(null);

  const [result, setresult] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const ddata = {
        age,
        gender,
        education,
        personal_computer: personalComputer,
        employed,
        disabled,
        internet_access: internetAccess,
        parents,
        gap_in_resume: gapInResume,
        unemployed,
        reads_outside_work_school: readsOutsideWorkSchool,
        difficulty_concentrating: difficultyConcentrating,
        anxiety,
        depression,
        obsessive_thoughts: obsessiveThoughts,
        fluctuating_mood: fluctuatingMood,
        panic_episodes: panicEpisodes,
        compulsive_habits: compulsiveHabits,
        fatigue
    };
    
      const response = await axios.post(`https://mental-backend.onrender.com/predict/${ddata}`, JSON.stringify(ddata), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setresult(response.data.prediction);

      setTimeout(() => {
        console.log("Response:", response.data); 
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  

  return (
    <div className="flex flex-col items-center justify-center h-fit text-white bg-black">
      <h1 className=' text-2xl'>Predict Mental Illness</h1>
      <form className='flex flex-col items-center justify-center' >
        <label className='text-3xl text-red-600 m-2'>Age</label>
        <ul className='flex flex-col text-xl gap-1 text-center border-gray-500 border-2 p-4 rounded'>
          <li onClick={() => { setAge(1) }}>18-29</li>
          <li onClick={() => { setAge(2) }}>30-44</li>
          <li onClick={() => { setAge(3) }}>45-60</li>
          <li onClick={() => { setAge(4) }}>  more than 60</li>
        </ul>

        <label className='text-3xl text-red-600 m-2'>Gender</label>
        <ul className='flex flex-col text-xl gap-1 text-center border-gray-500 border-2 p-4 rounded'>
          <li className='cursor-pointer' onClick={() => setGender(1)}>Male</li>
          <li className='cursor-pointer' onClick={() => setGender(0)}>Female</li>
        </ul>


        <label className='text-3xl text-red-600 m-2'>Education Level</label>
        <ul className='flex flex-col text-xl gap-1 text-center border-gray-500 border-2 p-4 rounded'>
          <li className='cursor-pointer' onClick={() => setEducation(1)}>Some highschool</li>
          <li className='cursor-pointer' onClick={() => setEducation(2)}>High School or GED</li>
          <li className='cursor-pointer' onClick={() => setEducation(3)}>Some Undergraduate</li>
          <li className='cursor-pointer' onClick={() => setEducation(4)}>Completed Undergraduate</li>
          <li className='cursor-pointer' onClick={() => setEducation(5)}>Some Masters</li>
          <li className='cursor-pointer' onClick={() => setEducation(6)}>Completed Masters</li>
          <li className='cursor-pointer' onClick={() => setEducation(7)}>Some Phd</li>
          <li className='cursor-pointer' onClick={() => setEducation(8)}>Completed Phd</li>
        </ul>

        <label className='text-3xl text-red-600 m-2'>Owns a Personal Computer</label>
        <div className="flex items-center gap-2">
          <div className={`rounded-full w-12 h-6 focus:outline-none ${personalComputer === 1 ? 'bg-green-500' : 'bg-gray-300'}`} onClick={() => setPersonalComputer(1)}>Yes</div>
          <div className={`rounded-full w-12 h-6 focus:outline-none ${personalComputer === 0 ? 'bg-red-500' : 'bg-gray-300'}`} onClick={() => setPersonalComputer(0)}>No</div>
        </div>

        <label className='text-3xl text-red-600 m-2'>Is Currently Employed at least Part-Time</label>
        <div className="flex items-center gap-2">
          <div className={`rounded-full w-12 h-6 focus:outline-none ${employed === 1 ? 'bg-green-500' : 'bg-gray-300'}`} onClick={() => setEmployed(1)}>Yes</div>
          <div className={`rounded-full w-12 h-6 focus:outline-none ${employed === 0 ? 'bg-red-500' : 'bg-gray-300'}`} onClick={() => setEmployed(0)}>No</div>
        </div>




        <label className='text-3xl text-red-600 m-2'>Is Legally Disabled</label>
        <div className="flex items-center gap-2">
          <div className={`rounded-full w-12 h-6 focus:outline-none ${disabled === 1 ? 'bg-green-500' : 'bg-gray-300'}`} onClick={() => setDisabled(1)}>Yes</div>
          <div className={`rounded-full w-12 h-6 focus:outline-none ${disabled === 0 ? 'bg-red-500' : 'bg-gray-300'}`} onClick={() => setDisabled(0)}>No</div>
        </div>

        <label className='text-3xl text-red-600 m-2'>Has Regular Access to the Internet</label>
        <div className="flex items-center gap-2">
          <div className={`rounded-full w-12 h-6 focus:outline-none ${internetAccess === 1 ? 'bg-green-500' : 'bg-gray-300'}`} onClick={() => setInternetAccess(1)}>Yes</div>
          <div className={`rounded-full w-12 h-6 focus:outline-none ${internetAccess === 0 ? 'bg-red-500' : 'bg-gray-300'}`} onClick={() => setInternetAccess(0)}>No</div>
        </div>

        <label className='text-3xl text-red-600 m-2'>Lives with Parents</label>
        <div className="flex items-center gap-2">
          <div className={`rounded-full w-12 h-6 focus:outline-none ${parents === 1 ? 'bg-green-500' : 'bg-gray-300'}`} onClick={() => setParents(1)}>Yes</div>
          <div className={`rounded-full w-12 h-6 focus:outline-none ${parents === 0 ? 'bg-red-500' : 'bg-gray-300'}`} onClick={() => setParents(0)}>No</div>
        </div>

        <label className='text-3xl text-red-600 m-2'>Has a Gap in Resume</label>
        <div className="flex items-center gap-2">
          <div className={`rounded-full w-12 h-6 focus:outline-none ${gapInResume === 1 ? 'bg-green-500' : 'bg-gray-300'}`} onClick={() => setGapInResume(1)}>Yes</div>
          <div className={`rounded-full w-12 h-6 focus:outline-none ${gapInResume === 0 ? 'bg-red-500' : 'bg-gray-300'}`} onClick={() => setGapInResume(0)}>No</div>
        </div>

        <label className='text-3xl text-red-600 m-2'>Is Unemployed</label>
        <div className="flex items-center gap-2">
          <div className={`rounded-full w-12 h-6 focus:outline-none ${unemployed === 1 ? 'bg-green-500' : 'bg-gray-300'}`} onClick={() => setUnemployed(1)}>Yes</div>
          <div className={`rounded-full w-12 h-6 focus:outline-none ${unemployed === 0 ? 'bg-red-500' : 'bg-gray-300'}`} onClick={() => setUnemployed(0)}>No</div>
        </div>


        <label className='text-3xl text-red-600 m-2'>Reads Outside of Work and School</label>
        <div className="flex items-center gap-2">
          <div className={`rounded-full w-12 h-6 focus:outline-none ${readsOutsideWorkSchool === 1 ? 'bg-green-500' : 'bg-gray-300'}`} onClick={() => setReadsOutsideWorkSchool(1)}>Yes</div>
          <div className={`rounded-full w-12 h-6 focus:outline-none ${readsOutsideWorkSchool === 0 ? 'bg-red-500' : 'bg-gray-300'}`} onClick={() => setReadsOutsideWorkSchool(0)}>No</div>
        </div>

        <label className='text-3xl text-red-600 m-2'>Difficulty Concentrating</label>
        <div className="flex items-center gap-2">
          <div className={`rounded-full w-12 h-6 focus:outline-none ${difficultyConcentrating === 1 ? 'bg-green-500' : 'bg-gray-300'}`} onClick={() => setDifficultyConcentrating(1)}>Yes</div>
          <div className={`rounded-full w-12 h-6 focus:outline-none ${difficultyConcentrating === 0 ? 'bg-red-500' : 'bg-gray-300'}`} onClick={() => setDifficultyConcentrating(0)}>No</div>
        </div>


        <label className='text-3xl text-red-600 m-2'>Feelings of Anxiety</label>
        <div className="flex items-center gap-2">
          <div className={`rounded-full w-12 h-6 focus:outline-none ${anxiety === 1 ? 'bg-green-500' : 'bg-gray-300'}`} onClick={() => setAnxiety(1)}>Yes</div>
          <div className={`rounded-full w-12 h-6 focus:outline-none ${anxiety === 0 ? 'bg-red-500' : 'bg-gray-300'}`} onClick={() => setAnxiety(0)}>No</div>
        </div>

        <label className='text-3xl text-red-600 m-2'>Symptoms of Depression</label>
        <div className="flex items-center gap-2">
          <div className={`rounded-full w-12 h-6 focus:outline-none ${depression === 1 ? 'bg-green-500' : 'bg-gray-300'}`} onClick={() => setDepression(1)}>Yes</div>
          <div className={`rounded-full w-12 h-6 focus:outline-none ${depression === 0 ? 'bg-red-500' : 'bg-gray-300'}`} onClick={() => setDepression(0)}>No</div>
        </div>

        <label className='text-3xl text-red-600 m-2'>Obsessive Thoughts</label>
        <div className="flex items-center gap-2">
          <div className={`rounded-full w-12 h-6 focus:outline-none ${obsessiveThoughts === 1 ? 'bg-green-500' : 'bg-gray-300'}`} onClick={() => setObsessiveThoughts(1)}>Yes</div>
          <div className={`rounded-full w-12 h-6 focus:outline-none ${obsessiveThoughts === 0 ? 'bg-red-500' : 'bg-gray-300'}`} onClick={() => setObsessiveThoughts(0)}>No</div>
        </div>

        <label className='text-3xl text-red-600 m-2'>Fluctuating Mood</label>
        <div className="flex items-center gap-2">
          <div className={`rounded-full w-12 h-6 focus:outline-none ${fluctuatingMood === 1 ? 'bg-green-500' : 'bg-gray-300'}`} onClick={() => setFluctuatingMood(1)}>Yes</div>
          <div className={`rounded-full w-12 h-6 focus:outline-none ${fluctuatingMood === 0 ? 'bg-red-500' : 'bg-gray-300'}`} onClick={() => setFluctuatingMood(0)}>No</div>
        </div>

        <label className='text-3xl text-red-600 m-2'>Episodes of Panic</label>
        <div className="flex items-center gap-2">
          <div className={`rounded-full w-12 h-6 focus:outline-none ${panicEpisodes === 1 ? 'bg-green-500' : 'bg-gray-300'}`} onClick={() => setPanicEpisodes(1)}>Yes</div>
          <div className={`rounded-full w-12 h-6 focus:outline-none ${panicEpisodes === 0 ? 'bg-red-500' : 'bg-gray-300'}`} onClick={() => setPanicEpisodes(0)}>No</div>
        </div>

        <label className='text-3xl text-red-600 m-2'>Compulsive Habits</label>
        <div className="flex items-center gap-2">
          <div className={`rounded-full w-12 h-6 focus:outline-none ${compulsiveHabits === 1 ? 'bg-green-500' : 'bg-gray-300'}`} onClick={() => setCompulsiveHabits(1)}>Yes</div>
          <div className={`rounded-full w-12 h-6 focus:outline-none ${compulsiveHabits === 0 ? 'bg-red-500' : 'bg-gray-300'}`} onClick={() => setCompulsiveHabits(0)}>No</div>
        </div>

        <label className='text-3xl text-red-600 m-2'>Fatigue</label>
        <div className="flex items-center gap-2">
          <div className={`rounded-full w-12 h-6 focus:outline-none ${fatigue === 1 ? 'bg-green-500' : 'bg-gray-300'}`} onClick={() => setFatigue(1)}>Yes</div>
          <div className={`rounded-full w-12 h-6 focus:outline-none ${fatigue === 0 ? 'bg-red-500' : 'bg-gray-300'}`} onClick={() => setFatigue(0)}>No</div>
        </div>







        <div onClick={handleSubmit} className=" bg-white text-black p-2 mt-6  rounded">Submit</div>
      </form>

      <div className="uppercase text-3xl text-green-600">result</div>
      <div className="">{result}</div>

    </div>
  );
}

export default Input;

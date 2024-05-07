import React, { useEffect, useState } from 'react';
import axios from 'axios';
import m1 from './assets/6.jpg'
import './index.css'
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
  const [showresult, setshowresult] = useState(false)
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
            setshowresult(true)

      }, 2000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${m1})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', // Prevent image from repeating  
    height: '100vh', // Set height to fill the entire viewport
  };


  

  return (
    <div className="flex  items-center justify-center h-full text-white bg-[#faf7f7]  overflow-y-hidden">
      <div style={backgroundStyle} className="flex flex-col w-full items-start justify-center ">
        <h1 className='text-[#462626] m-4 mt-16 alfa-slab-one tracking-[2px] text-7xl'>Mental <br /> Illness <br /> Predictor</h1>
      </div>
      {!showresult && (
        <div className="flex flex-col mt-10 w-full max-h-[600px] overflow-y-scroll">
          <div className='flex flex-col items-center  overflow-scroll' >
            <label className='satisfy-regular text-3xl  text-red-600 '>Age</label>
            <ul className='flex flex-col text-xl gap-1 text-center   p-4 rounded'>
              <li className={`text-2xl text-black cursor-pointer p-1 px-2 rounded-xl ${age === 1 ? 'bg-red-500 text-white' : ' '} poetsen-one-regular`} onClick={() => { setAge(1) }}>18-29</li>
              <li className={`text-2xl text-black cursor-pointer p-1 px-2 rounded-xl ${age === 2 ? 'bg-red-500 text-white' : ' '} poetsen-one-regular`} onClick={() => { setAge(2) }}>30-44</li>
              <li className={`text-2xl text-black cursor-pointer p-1 px-2 rounded-xl ${age === 3 ? 'bg-red-500 text-white' : ' '} poetsen-one-regular`} onClick={() => { setAge(3) }}>45-60</li>
              <li className={`text-2xl text-black cursor-pointer p-1 px-2 rounded-xl ${age === 4 ? 'bg-red-500 text-white' : ' '} poetsen-one-regular`} onClick={() => { setAge(4) }}>more than 60</li>
            </ul>



            <label className='satisfy-regular text-3xl text-red-600 m-2'>Gender</label>
            <ul className='flex flex-col text-xl gap-1 text-center p-4 rounded'>
              <li className={`text-2xl text-black cursor-pointer p-1 px-2 rounded-xl ${gender === 1 ? 'bg-red-500 text-white' : 'hover:bg-black hover:text-white poetsen-one-regular'}`} onClick={() => setGender(1)}>Male</li>
              <li className={`text-2xl text-black cursor-pointer p-1 px-2 rounded-xl ${gender === 0 ? 'bg-red-500 text-white' : 'hover:bg-black hover:text-white poetsen-one-regular'}`} onClick={() => setGender(0)}>Female</li>
            </ul>



            <label className='satisfy-regular text-3xl  text-red-500 m-2 '>Education Level</label>
            <ul className='flex flex-col text-xl gap-1 text-center p-4 rounded'>
              <li className={`text-2xl text-black cursor-pointer p-1 px-2 rounded-xl ${education === 1 ? 'bg-red-500 text-white' : ''} poetsen-one-regular`} onClick={() => setEducation(1)}>Some highschool</li>
              <li className={`text-2xl text-black cursor-pointer p-1 px-2 rounded-xl ${education === 2 ? 'bg-red-500 text-white' : ''} poetsen-one-regular`} onClick={() => setEducation(2)}>High School or GED</li>
              <li className={`text-2xl text-black cursor-pointer p-1 px-2 rounded-xl ${education === 3 ? 'bg-red-500 text-white' : ''} poetsen-one-regular`} onClick={() => setEducation(3)}>Some Undergraduate</li>
              <li className={`text-2xl text-black cursor-pointer p-1 px-2 rounded-xl ${education === 4 ? 'bg-red-500 text-white' : ''} poetsen-one-regular`} onClick={() => setEducation(4)}>Completed Undergraduate</li>
              <li className={`text-2xl text-black cursor-pointer p-1 px-2 rounded-xl ${education === 5 ? 'bg-red-500 text-white' : ''} poetsen-one-regular`} onClick={() => setEducation(5)}>Some Masters</li>
              <li className={`text-2xl text-black cursor-pointer p-1 px-2 rounded-xl ${education === 6 ? 'bg-red-500 text-white' : ''} poetsen-one-regular`} onClick={() => setEducation(6)}>Completed Masters</li>
              <li className={`text-2xl text-black cursor-pointer p-1 px-2 rounded-xl ${education === 7 ? 'bg-red-500 text-white' : ''} poetsen-one-regular`} onClick={() => setEducation(7)}>Some Phd</li>
              <li className={`text-2xl text-black cursor-pointer p-1 px-2 rounded-xl ${education === 8 ? 'bg-red-500 text-white' : ''} poetsen-one-regular`} onClick={() => setEducation(8)}>Completed Phd</li>
            </ul>


            <label className='satisfy-regular text-3xl  text-red-600 m-2 '>Owns a Personal Computer</label>
            <div className="flex items-center gap-2">
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${personalComputer === 1 ? 'bg-green-500' : ''}`} onClick={() => setPersonalComputer(1)}>Yes</div>
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${personalComputer === 0 ? 'bg-red-500' : ''}`} onClick={() => setPersonalComputer(0)}>No</div>
            </div>

            <label className='satisfy-regular text-3xl  text-red-600 m-2'>Is Currently Employed at least Part-Time</label>
            <div className="flex items-center gap-2">
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${employed === 1 ? 'bg-green-500' : ''}`} onClick={() => setEmployed(1)}>Yes</div>
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${employed === 0 ? 'bg-red-500' : ''}`} onClick={() => setEmployed(0)}>No</div>
            </div>




            <label className='satisfy-regular text-3xl  text-red-600 m-2'>Is Legally Disabled</label>
            <div className="flex items-center gap-2">
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${disabled === 1 ? 'bg-green-500' : ''}`} onClick={() => setDisabled(1)}>Yes</div>
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${disabled === 0 ? 'bg-red-500' : ''}`} onClick={() => setDisabled(0)}>No</div>
            </div>

            <label className='satisfy-regular text-3xl  text-red-600 m-2'>Has Regular Access to the Internet</label>
            <div className="flex items-center gap-2">
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${internetAccess === 1 ? 'bg-green-500' : ''}`} onClick={() => setInternetAccess(1)}>Yes</div>
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${internetAccess === 0 ? 'bg-red-500' : ''}`} onClick={() => setInternetAccess(0)}>No</div>
            </div>

            <label className='satisfy-regular text-3xl  text-red-600 m-2'>Lives with Parents</label>
            <div className="flex items-center gap-2">
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${parents === 1 ? 'bg-green-500' : ''}`} onClick={() => setParents(1)}>Yes</div>
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${parents === 0 ? 'bg-red-500' : ''}`} onClick={() => setParents(0)}>No</div>
            </div>

            <label className='satisfy-regular text-3xl  text-red-600 m-2'>Has a Gap in Resume</label>
            <div className="flex items-center gap-2">
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${gapInResume === 1 ? 'bg-green-500' : ''}`} onClick={() => setGapInResume(1)}>Yes</div>
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${gapInResume === 0 ? 'bg-red-500' : ''}`} onClick={() => setGapInResume(0)}>No</div>
            </div>

            <label className='satisfy-regular text-3xl  text-red-600 m-2'>Is Unemployed</label>
            <div className="flex items-center gap-2">
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${unemployed === 1 ? 'bg-green-500' : ''}`} onClick={() => setUnemployed(1)}>Yes</div>
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${unemployed === 0 ? 'bg-red-500' : ''}`} onClick={() => setUnemployed(0)}>No</div>
            </div>


            <label className='satisfy-regular text-3xl  text-red-600 m-2'>Reads Outside of Work and School</label>
            <div className="flex items-center gap-2">
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${readsOutsideWorkSchool === 1 ? 'bg-green-500' : ''}`} onClick={() => setReadsOutsideWorkSchool(1)}>Yes</div>
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${readsOutsideWorkSchool === 0 ? 'bg-red-500' : ''}`} onClick={() => setReadsOutsideWorkSchool(0)}>No</div>
            </div>

            <label className='satisfy-regular text-3xl  text-red-600 m-2'>Difficulty Concentrating</label>
            <div className="flex items-center gap-2">
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${difficultyConcentrating === 1 ? 'bg-green-500' : ''}`} onClick={() => setDifficultyConcentrating(1)}>Yes</div>
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${difficultyConcentrating === 0 ? 'bg-red-500' : ''}`} onClick={() => setDifficultyConcentrating(0)}>No</div>
            </div>


            <label className='satisfy-regular text-3xl  text-red-600 m-2'>Feelings of Anxiety</label>
            <div className="flex items-center gap-2">
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${anxiety === 1 ? 'bg-green-500' : ''}`} onClick={() => setAnxiety(1)}>Yes</div>
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${anxiety === 0 ? 'bg-red-500' : ''}`} onClick={() => setAnxiety(0)}>No</div>
            </div>

            <label className='satisfy-regular text-3xl  text-red-600 m-2'>Symptoms of Depression</label>
            <div className="flex items-center gap-2">
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${depression === 1 ? 'bg-green-500' : ''}`} onClick={() => setDepression(1)}>Yes</div>
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${depression === 0 ? 'bg-red-500' : ''}`} onClick={() => setDepression(0)}>No</div>
            </div>

            <label className='satisfy-regular text-3xl  text-red-600 m-2 '>Obsessive Thoughts</label>
            <div className="flex items-center gap-2">
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${obsessiveThoughts === 1 ? 'bg-green-500' : ''}`} onClick={() => setObsessiveThoughts(1)}>Yes</div>
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${obsessiveThoughts === 0 ? 'bg-red-500' : ''}`} onClick={() => setObsessiveThoughts(0)}>No</div>
            </div>

            <label className='satisfy-regular text-3xl  text-red-600 m-2'>Fluctuating Mood</label>
            <div className="flex items-center gap-2">
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${fluctuatingMood === 1 ? 'bg-green-500' : ''}`} onClick={() => setFluctuatingMood(1)}>Yes</div>
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${fluctuatingMood === 0 ? 'bg-red-500' : ''}`} onClick={() => setFluctuatingMood(0)}>No</div>
            </div>

            <label className='satisfy-regular text-3xl  text-red-600 m-2'>Episodes of Panic</label>
            <div className="flex items-center gap-2">
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${panicEpisodes === 1 ? 'bg-green-500' : ''}`} onClick={() => setPanicEpisodes(1)}>Yes</div>
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${panicEpisodes === 0 ? 'bg-red-500' : ''}`} onClick={() => setPanicEpisodes(0)}>No</div>
            </div>

            <label className='satisfy-regular text-3xl  text-red-600 m-2'>Compulsive Habits</label>
            <div className="flex items-center gap-2">
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${compulsiveHabits === 1 ? 'bg-green-500' : ''}`} onClick={() => setCompulsiveHabits(1)}>Yes</div>
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${compulsiveHabits === 0 ? 'bg-red-500' : ''}`} onClick={() => setCompulsiveHabits(0)}>No</div>
            </div>

            <label className='satisfy-regular text-3xl  text-red-600 m-2'>Fatigue</label>
            <div className="flex items-center gap-2">
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${fatigue === 1 ? 'bg-green-500' : ''}`} onClick={() => setFatigue(1)}>Yes</div>
              <div className={`text-2xl text-black cursor-pointer  p-1 px-2 rounded-xl hover:bg-black hover:text-white poetsen-one-regular focus:outline-none ${fatigue === 0 ? 'bg-red-500' : ''}`} onClick={() => setFatigue(0)}>No</div>
            </div>







            <div onClick={handleSubmit} className=" bg-black text-white poiret-one-regular text-3xl m-4 p-2 mt-6  rounded-lg cursor-pointer">Submit</div>
          </div>

        </div>
      )}
      {showresult && (
        <div className="flex flex-col items-center justify-center w-full text-center">
          <div className="uppercase text-7xl text-black alfa-slab-one">Result</div>
          <div className="text-black text-4xl poetsen-one-regular m-4">
            Based on the provided information, the model predicts that the individual <br />
            <span className='text-5xl text-[#927575]'> {result == 0 ? 'DOES NOT IDENTIFIES' : 'IDENTIFIES '}</span>
             <br />as having a mental illness.
          </div>
        </div>
      )}




    </div>
  );
}

export default Input;

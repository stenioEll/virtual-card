import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap';

import { useForm, useFieldArray} from 'react-hook-form'
import { z } from  'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createCardFormSchema = z.object({ // like a structure of date 
  job: z.string(),
  about: z.string()
    .max(180, 'Please note that the description should not exceed 180 characters'),
  linkedin: z.string(),
  github: z.string(),
  portfolio: z.string(),
  email: z.string()
  .nonempty('o e-mail é obrigatório')
  .email('Formato de e-mail inválido')
  .toLowerCase(),
  techs: z.array(z.object({
    title: z.string().nonempty('O Título é obrigatório'),
    knowledge: z.number().min(1).max(100),
  }))
})

/**
 * To-do
 *  
 * [x] Validation / Tranformação 
 * [] Field Arrays
 * [] Uploud de Arquivos 
 * [] Composition Pattern
 */

function Register() {

  const [output, setOutput] = useState('');


  const {
    register,
    handleSubmit,
    formState : {errors, control, ...formState}} 
    = useForm({
    resolver: zodResolver(createCardFormSchema),
  });

  const {fields, append, remove} = useFieldArray({
    control,
    name: 'techs',

  })

  console.log(formState.errors)

  function createCard(data) { 
    setOutput(JSON.stringify(data, null, 2));
  }
  

  function addNewTech() {
    append({ title: '', knowledge: 0})
  }

  
  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });
    timeline
      .to('.bg-gradient-animate', { duration: 3, background: 'linear-gradient(to right, #34D399, #3B82F6)' })
      .to('.bg-gradient-animate', { duration: 3, background: 'linear-gradient(to right, #3B82F6, #EC4899)' })
      .to('.bg-gradient-animate', { duration: 3, background: 'linear-gradient(to right, #EC4899, #F59E0B)' })
      .to('.bg-gradient-animate', { duration: 3, background: 'linear-gradient(to right, #F59E0B, #34D399)' });
  }, []);


  return (
    <div className='bg-gradient-animate flex items-center justify-center h-screen font-poppins font-light'>
      <div className='bg-opacity-10 bg-white bg-blur-md backdrop-filter backdrop-blur-md p-6 pb-0 rounded-lg shadow-lg  w-1.5/6 h-5/6 flex flex-col'>
        <header className='flex flex-col justify-center items-center'>
              <h1 className='text-gray-200 font-normal animate-fade-down mb-4'>Register</h1>
        </header>
        <div>
          <form onSubmit={handleSubmit(createCard)} action=''>
            <div className='flex flex-col text-gray-100 gap-4 '>
              <label className='text-left'>Job:</label>
              <input
                type='text' 
                className='input-transparent shadow rounded w-96 h-10'
                {...register('job')}
              />
              <label className='text-left'>About You:</label>
              <input
                type='text' 
                className='input-transparent shadow rounded w-96 h-20'
                {...register('about')}
              />
              {errors.about && <span>{errors.about.message}</span>}
              <label className='text-left'>Linkedin</label>
              <input
                type='text' 
                className='input-transparent shadow rounded w-96 h-10'
                {...register('linkedin')}
              />
              <label className='text-left'>GitHub</label>
              <input
                type='text' 
                className='input-transparent shadow rounded w-96 h-10'
                {...register('github')}
              />
              <label className='text-left'>Portfolio</label>
              <input
                type='text' 
                className='input-transparent shadow rounded w-96 h-10'
                {...register('portfolio')}
              />
              
              <label className='text-left'>Email</label>
              <input
                type='email' 
                className='input-transparent shadow rounded w-96 h-10'
                {...register('email')}
              />
              {errors.email && <span className='break-words whitespace-normal '>{errors.email.message}</span>}


              <label className='text-left'>
                Tecnologies
                <button onClick={addNewTech} className='text-emerald-500 text-sm'>
                  Add
                </button>
              
              </label>


              {fields.map((field, index) => {
                return (
                  <div>
                      <input
                        key={field.id}
                        type='text' 
                        className='input-transparent shadow rounded w-96 h-10'
                        {...register(`techs.${index}.title`)} 
                      />

                      
                      <input
                        type='number' 
                        className='input-transparent shadow rounded w-96 h-10'
                        {...register(`techs.${index}.knowledge`)} 
                      />
                  </div>
                )
              })}
            </div>


            <div className='flex justify-center items-center mt-12'>
              <button 
                type="submit" 
                class="bg-opacity-10 bg-white font-normal bg-blur-md backdrop-filter backdrop-blur-md shadow-lg text-white p-2 px-4 w-96 rounded-lg hover:shadow-md transition-all duration-300">
                Register
              </button>

            </div>
          </form>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
}
export default Register;


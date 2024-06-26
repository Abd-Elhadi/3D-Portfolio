import {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import {styles} from '../styles'
import {EarthCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import { slideIn } from '../utils/motion'

// tIBlqvY3-j-8WZ5Yg
// template_m0o7fpc
// service_wnbw6u4

const Contact = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => { 
    const {name, value} = e.target;

    setForm({...form, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!form.name || !form.email || !form.message) {
      setErrorMessage('Please fill in all fields before sending.');
      // alert('Please fill in all fields before sending.');
      return;
    }

    setLoading(true);

    emailjs.send(
      'service_wnbw6u4',
      'template_m0o7fpc', {
        form_name: form.name,
        to_name: 'Abdelhadi',
        from_email: form.email,
        to_email: 'abdelhadioumar@gmail.com',
        message: form.message
      },
      'tIBlqvY3-j-8WZ5Yg'
    )
      .then(res => {
        setLoading(false);
        // alert('Thank you. I will get back to you as soon as possible.');
        setErrorMessage('Thank you. I will get back to you as soon as possible.');
        setForm({
          name: '',
          email: '',
          message: '',
        });
      }, (err) => {
        setLoading(false);
        console.log(err);
        setErrorMessage('Something went wrong. Please try again later.');
        // alert('Something went wrong.');
      });
  };


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type='text'
              name='name'
              placeholder="What's your name"
              value={form.name}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type='email'
              name='email'
              placeholder="What's your email"
              value={form.email}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
              rows={7}
              name='message'
              placeholder="What do you want to say"
              value={form.message}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none'
            />
          </label>
          {errorMessage && (
            <p className="text-red-500">{errorMessage}</p>
          )}
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas 

        />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
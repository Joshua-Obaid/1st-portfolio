import {motion} from 'framer-motion'
import {useRef,useState} from 'react'
import emailjs from '@emailjs/browser'
import { SectionWrapper } from './hoc'
import { slideIn } from '../utils/motion'
import { EarthCanvas } from './canvas'

// import earth canvas

function Contacts(){
    const [form,setForm] = useState({
        name:'',
        email:'',
        message:'',
    })
    const [loading,setLoading] = useState(false)
    const formRef = useRef()
    const handleChange = (e)=>{
        const {name,value} = e.target
        setForm({...form,[name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setLoading(true)
        emailjs.send(
            'service_i1c6a6v',
            'template_5wg7wsm',
            {
                from_name:form.name,
                to_name:'Joshua',
                from_email:form.email,
                to_email:'joshuaobaid7@gmail.com',
                message:form.message
            },
            'kIT1q-Zas_dvEUn3X'
            )
            .then(
                () => {
                  setLoading(false);
                  alert("Thank you. I will get back to you as soon as possible.");
        
                  setForm({
                    name: "",
                    email: "",
                    message: "",
                  });
                },
                (error) => {
                  setLoading(false);
                  console.error(error);
        
                  alert("Ahh, something went wrong. Please try again.");
                }
              );
            
    }
    // template_5wg7wsm
    // service_i1c6a6v
    // pbKey : kIT1q-Zas_dvEUn3X
    
    return(
        <div className="contact-cont flex">
            
            <motion.div 
            variants={slideIn('left','tween',0.2,1)} 
            className='contacts'>
                <h2 className="contact-title section-title ">Contacts</h2>
                <form
                onSubmit={handleSubmit}
                ref={formRef}
                className=''
                >
                    <label className="contact-label">
                        <span className="contact-label-span">Your Name</span>
                        <input 
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder='name'
                        />
                        <span className="contact-label-span">Your Email</span>
                         <input 
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder='email'
                        />
                        <span className="contact-label-span">Your message</span>
                        <textarea
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                        placeholder='hit me up!'
                        />
                    </label>
                    <button type='submit' className='contact-form-btn'>
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>
            <motion.div
            variants={slideIn('right','tween',0.2,1)} 
            className='earth-model'>
                <EarthCanvas/>

            </motion.div>
           
        </div>
    )
}
export default SectionWrapper(Contacts,'contacts')


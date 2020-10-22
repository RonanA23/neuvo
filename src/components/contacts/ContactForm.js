import React,{useState,useContext,useEffect} from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactForm = () => {
    const contactContext = useContext(ContactContext)
    const {addContact}= contactContext

    const [contact,setContact]=useState({
        name:'',email:'',phone:'',type:'personal'
    })

    const {name,email,phone,type}= contact

    const onChange= e =>
        setContact({...contact,[e.target.name]:e.target.value})
    
    const onSubmit= e =>{
        e.preventDefault()
        contactContext.addContact(contact)
        setContact({name:'',email:'',phone:'',type:'personal'
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'> Add Contact
            </h2>
            <input type='text' name='name' value={name} placeholder='Name' onChange={onChange}/>
            <input type='text' name='email' value={email} placeholder='Email' onChange={onChange}/>
            <input type='text' name='phone' value={phone} placeholder='Phone' onChange={onChange}/>
            <h2>Contact Type</h2>
            <input type='radio' name='radio' value='personal' checked={type==='personal'} onChange={onChange}/>Personal
            <input type='radio' name='radio' value='professional' checked={type==='professional'} onChange={onChange}/>Professional
            <div>
               <button className='btn btn-primary btn-block'>Add Contact</button>
            </div>
        </form>
    )
}

export default ContactForm

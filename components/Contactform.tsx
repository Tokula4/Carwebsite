import React from 'react'
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { useForm, SubmitHandler } from "react-hook-form";

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import ButtonOutline from './misc/ButtonOutline.';

type Inputs = {
 name : string,
 email: string,
 subject: string,
 message: string,
};


function ContactForm() {
    const { register, 
         handleSubmit,  } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href =`mailto:emmanueltokula03@gmail.com?subject=${formData.subject}&body=Hi my name is${formData.name}.${formData.message}(${formData.message})  `
    }
  return (

    <section id="Contactpage" >

<div className="container p-3 px-6 mx-auto my-24 " >
    <section className="p-2 mb-32 text-white-800" >
      
      <div className="flex flex-wrap mx-auto mt-8 md:-mx-4" >
        <div>
          <img  width={1000} height={1000}  src="/email-bg.png" />
        </div>
  
       
       <div  className="w-full px-3 mb-12 grow-0 shrink-0 basis-auto md:mb-0 md:w-6/12 lg:px-6" >
        
        <form onSubmit={handleSubmit(onSubmit)} className="" >
        <div className="mb-6 form-group" >

                <input {...register('name')} placeholder='Name'  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" />
              
        </div>

        <div className="mb-6 form-group" >
        <input {...register('email')} placeholder='Email'  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"  type="email" />
        </div>

        <div className="mb-6 form-group" >
        <input {...register('subject')}   placeholder='Subject' className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"  type="text" />

        </div>

         <div className="mb-6 form-group" >

              <textarea {...register('message')}  placeholder='Message' className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" /> 
                
           </div>

              
               
                 <ButtonOutline>Submit </ButtonOutline>           
        </form>
        </div>
        
      </div>
    </section>
    </div>





 

    </section>
  )
}

export default ContactForm

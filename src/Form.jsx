import Head from 'next/head';
import { useState } from 'react';
import Script from 'next/script'

const FORM_DEFAULT_VALUES = {
    name: '',
    email: ''
}

export default function Form() {
    const [formValues, setFormValues] = useState(FORM_DEFAULT_VALUES);

    const handleChange = (e) => setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target

        // This is the important part, test if form is valid
        if (form.checkValidity() === false){
            // This is the magic function that displays the validation errors to the user
            return form.reportValidity();
        }

        setFormValues(FORM_DEFAULT_VALUES)
        alert('Form submitted!')
    };

    return (
      <form onSubmit={handleSubmit} className='flex-column'>
        <Head>
            <script>
               {`function recaptchaCallback () {
                   const form = document.querySelector('form');
                   const event = new Event('submit', { 'bubbles': true, 'cancelable': true });
                   form.dispatchEvent(event);
                }`}
            </script>
        </Head>
        <Script src='https://www.google.com/recaptcha/api.js' />

        <label>
          Name
          <input type="text" value={formValues.name} name='name' onChange={handleChange} />
        </label>

        <label>
          Email <span className='color-red'>&#42;</span>
          <input type="email" value={formValues.email} name='email' onChange={handleChange} required />
        </label>

        <button 
          type="submit"
          className="g-recaptcha" 
          data-sitekey={process.env.NEXT_LOCAL_RECAPTCHA_SITE_KEY} 
          data-callback='recaptchaCallback'
          data-action='submit'
        >Submit</button>
      </form>
    );
}
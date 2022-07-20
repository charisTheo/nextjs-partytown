import { useState } from 'react';

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
        setFormValues(FORM_DEFAULT_VALUES)
        alert('Form submitted!')
    };

    return (
      <form onSubmit={handleSubmit} className='flex-column'>
        <label>
          Name
          <input type="text" value={formValues.name} name='name' onChange={handleChange} />
        </label>

        <label>
          Email <span className='color-red'>&#42;</span>
          <input type="email" value={formValues.email} name='email' onChange={handleChange} required />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
}
import React from 'react';

import { Form } from '../main-stylesheet';

export const ServiceForm = ({ service, handleChange, handleSubmit, services }) => (
    <Form onSubmit={handleSubmit}>
        <label>Services</label>
        <select 
            placeholder="select a service" 
            value={service} 
            name="service"
            onChange={handleChange}
            defaultValue=""
        >
            <option value="" disabled> Select A Service</option>
            {services
                .filter(s => s.category.includes('Instagram') && s.category.includes('Likes') || s.category.includes('Comments'))
                .map(s => {
                    return <option value={s.service} > ${s.rate} per 1000 || {s.name}  </option>
                })  
            }
        </select>
        <label>Amount</label>
        <input 
            type="number" 
            name="quantity" 
            placeholder="Amount" 
            onChange={handleChange}
        />
        <button type="sumbit">
            Start Sending Traffic
        </button>
</Form>
)

export default ServiceForm;
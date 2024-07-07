import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    const [guests,setGuests] = useState("");
    const [occasion,setOccasion] = useState("");

    const handleSubmit = (e)=>{
        props.SubmitForm(e);

    }
    const handleChange = (e)=>{
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input type="date" value={date} id="book-date" onChange={(e)=> handleChange(e.target.value)} 
                            required/>
                        
                        </div>

                        {/* time selection */}
                        <div>
                        <label htmlFor="book-time">Choose Time:</label>
                        <select name="" id="book-time" value={time} onChange={(e)=> setTime(e.target.value)}>
                            <option value="">Select a time</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes =>{
                                    return <option key={availableTimes}>{availableTimes}</option>
                                })
                            }
                        </select>
                        </div>
                        
                        {/* No. of Guest */}
                        <div>
                            <label htmlFor="book-guest">Number of Guests:</label>
                            <input  id='book-guest' min='1' value={guests} onChange={(e)=>setGuests(e.target.value)}/>
                        </div>

                        {/* Occasion */}
                        <div>
                        <label htmlFor="book-occasion">Occasion:</label>
                        <select id="book-occasion" key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>

                        </select>

                        </div>

                        {/* Submit */}
                        <div className='btnReceive'>
                            <input type="submit" aria-label='On Click' value={"Make Your Reservation"}/>
                        </div>
                    </fieldset>

                </form>
            </section>
        </header>
    );
};

export default BookingForm;
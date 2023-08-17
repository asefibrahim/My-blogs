"use client"

import Swal from "sweetalert2";

const page = () => {
    const submitContact = (event) => {
        event.preventDefault();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Contact Message sent Successfully!',
            showConfirmButton: false,
            timer: 1500
        });
        event.target.reset();
    };
    return (
        <div className='  '>

            <div>
                <h1 className='text-2xl font-bold'>Contact with us</h1>
                <p className='text-xs mb-5'>Feel free to reach out to us if you have any questions, suggestions, or feedback. We value your input and are committed to providing you with the best experience possible.</p>
                <form onSubmit={submitContact}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-3'>
                        <input className='border px-2 text-sm py-1 rounded-sm outline-none text-gray-500 w-full' type="text" placeholder='name' />
                        <input className='border px-2 text-sm py-1 rounded-sm outline-none text-gray-500 w-full' type="text" placeholder='Email' />
                    </div>
                    <textarea className='border px-2 text-sm py-1 rounded-sm outline-none text-gray-500 w-full' name="message" id="" cols="30" rows="5" placeholder='Message'></textarea>
                    <input className='w-full py-2 bg-blue-500 rounded-sm shadow-sm mt-3 font-bold text-white' type="submit" value="Message Sent" />
                </form>
            </div>
        </div>
    );
};

export default page;
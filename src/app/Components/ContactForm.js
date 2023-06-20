'use client'

import styles from "@/app/contact/contact.module.css"
import { Mulish } from "next/font/google";
import { useState } from "react";
const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})

const ContactForm = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: ""
    })


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({ ...prevUser, [name]: value }))
    }

    return (
        <form className={styles.contact_form} >
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Enter your name
                    <input type="text" name="username" id="username"
                        placeholder="Enter your name"
                        className={mulish.className}
                        value={user.username}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Email
                    <input type="text" name="email" id="email"
                        placeholder="Enter your email"
                        className={mulish.className}
                        value={user.email}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Phone Number
                    <input type="number" name="phone" id="phone"
                        placeholder="Enter your phone"
                        className={mulish.className}
                        value={user.phone}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea name="message" id="message" rows={5}
                        placeholder="Enter your Message"
                        className={mulish.className}
                        value={user.message}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>
            <div>
                <button
                    type="submit"
                    className={mulish.className}
                >
                    Submit
                </button>
            </div>



        </form>
    );
};

export default ContactForm;
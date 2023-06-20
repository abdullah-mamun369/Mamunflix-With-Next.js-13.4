import ContactCard from "../Components/ContactCard";
import ContactForm from "../Components/ContactForm";
import styles from './contact.module.css'


const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We would love to hear <span> from you </span></h2>
                    <ContactForm />
                </section>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1829.9977285989903!2d91.17979373884606!3d23.460628355200043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f257a5c27a1%3A0xdb283623c6521e63!2sKandirpar%2C%20Cumilla!5e0!3m2!1sen!2sbd!4v1687277399261!5m2!1sen!2sbd" width={200} height={350} style={{ border: 0 }} allowfullscreen="" loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>


        </>
    );
};

export default Contact;
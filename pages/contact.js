import SideMenu from "../components/sideMenu";
import styles from '../styles/contact.module.scss';
const Contact = () => {
    return ( <>
<div className={styles.container}>
<div className={styles.title}>
    <h1>GET IN <span>TOUCH</span></h1>
    <span>CONTACT</span>
</div>
<div className={styles.contactContainer}>
<div className={styles.contact}>sss</div>
<div className={styles.contactForm}>
<form action="/" id="contactForm">
<div className={styles.nameAndEmail}> <input type="text" className={styles.itemGrid1}name="NAME"  placeholder="YOUR NAME"/><input type="text" className={styles.itemGrid2}name="EMAIL" placeholder="YOUR EMAIL"/></div>

<div className={styles.subject}><input type="text" className={styles.itemGrid3}name="SUBJECT" placeholder="YOUR SUBJECT"/></div>
<div> <textarea name="" className={ styles.itemGrid4}id="" cols="30" rows="10" placeholder="YOUR MESSAGE"></textarea></div>
   
    
    
   
    <button type="submit">submit</button>
</form>
</div>
</div>

</div>
<SideMenu/>
    </> );
}
 
export default Contact;
import Image from 'next/legacy/image';
import Link from 'next/link';
import styles from '../landing/Landing.module.css';
import backgroundImage from '/public/images/bakgrund.jpg';
import myPhoto from '/public/images/Photo.jpg';

export default function About() {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.overlay}></div>
                <div className={styles.landingimage}>
                    <Image
                        src={backgroundImage}
                        alt="background image"
                        layout="fill"
                        objectFit="cover"
                        priority="true"
                    />
                </div>

                <div className={styles.myPhoto}>
                    <Image src={myPhoto} alt="photo" />
                </div>

                <div className={styles.text}>
                    <span>About me</span>
                    <p>
                        Frontend developer <br /> <br />
                        Here you will find more information about me, what I do,
                        and my current skills mostly in terms of programming.{' '}
                        <br /> <br />
                    </p>
                </div>

                <div className={styles.textDiv}>
                    <p className={styles.text1}>
                        Here you can find my contacts: <br />
                        E-post: alisiia.ryzhykova@icloud.com <br />
                        Telefon: 0734916116 <br />
                        Linkedin: https://www.linkedin.com/in/alisiia-ryzhykova
                    </p>
                </div>
            </div>
        </>
    );
}

import Image from "next/legacy/image"
import Link from 'next/link'
import styles from '../landing/Landing.module.css'
import backgroundImage from '/public/images/bakgrund.jpg'
import myPhoto from '/public/images/Photo.jpg'
import assignment from '/public/images/work1.jpg'
import work from '/public/images/work2.jpg'
import photo from '/public/images/work3.jpg'
import image from '/public/images/work4.jpg'

export default function Landing() {
  return (
    <>
      <div className={styles.mainContainer}>
        
        <div className={styles.overlay}>
        </div>
        <div className={styles.landingimage}>
          <Image src={backgroundImage}
            alt="background image"
            layout='fill'
            objectFit='cover'
            priority='true'
          />
        </div>

        <div className={styles.myPhoto}>
          <Image src={myPhoto}
            alt="photo"
          />
        </div>

        <div className={styles.work1}>
        <Link href="https://github.com/alisiia2601/React.git" >
          <Image src={assignment}
            alt="photo"
          />
          </Link>
        </div>

        <div className={styles.work2}>
        <Link href="https://github.com/alisiia2601/reactAssignment2.git" >
          <Image src={work}
            alt="photo"
          />
          </Link>
        </div>

        <div className={styles.work3}>
        <Link href="https://react-assignment3-2b6p6uea0-alisiia2601.vercel.app/" >
          <Image src={photo}
            alt="photo"
          />
          </Link>
        </div>

        <div className={styles.work4}>
        <Link href="https://prov-jabs6hd7m-alisiia2601.vercel.app/" >
          <Image src={image}
            alt="photo"
          />
          </Link>
        </div>


        <div className={styles.text}>
          <p>Portfolio</p>
          <span>Welcome!</span>
          <p>Frontend developer <br /> <br />
            I design and code beautifully things, and I love what I do.</p>
        </div>

        <div className={styles.text1}>
          <p>Click to explore</p>
        </div>

        <div className={styles.buttonDiv}>
          <Link href="/About">
          <button className={styles.button}>Go to About</button>
          </Link>
        </div>
      </div>
    </>
  )
}
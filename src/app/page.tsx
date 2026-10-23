import Link from 'next/link';
import styles from './page.module.css';
import Header from './components/ui/header/Header';
import Traditional from './build-cv/choose-template/templates/Traditional/Traditional';
import { cvData } from './build-cv/choose-template/templates/data';
import { schoolCVData } from './build-cv/choose-template/templates/schoolCvData';

export default function Home() {
  return (
    <>
      <Header />
      <div className={`${styles.page} page-width`}>
        <Traditional cvData={schoolCVData}/>
        {/* <section className={styles.buildCvBtn}>
          <Link href="/build-cv" className="link-button">
            Build a new CV
          </Link>

          <Link href="/build-cv/choose-template" className="link-button">
            Upload an existing CV
          </Link>
        </section> */}
      </div>
    </>
  );
}

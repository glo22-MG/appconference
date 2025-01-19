import Image from 'next/image';
import styles from './page.module.css';
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
export default function Home() {
    return (
        <main className={styles.main}>
            <div className="text-blue-500 flex-col gap-y-20 flex w-full items-center bg-blue-50 text-2xl">
                Soyez la bienvenue sur conf-app
                <Section1 />
                <Section2 />
                <Section3 />
            </div>
        </main>
    );
}

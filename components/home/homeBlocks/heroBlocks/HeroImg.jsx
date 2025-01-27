// Composant AboutSection
import Image from "next/image";

export default function HeroImage() {
    return (

        <div className="absolute inset-0">
            <Image
                src="/images/techimage.webp"
                alt="Conference background"
                className="object-cover mix-blend-overlay"
                fill
                priority
            />
        </div>

    );
}
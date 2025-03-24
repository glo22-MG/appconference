import AboutFooter from '@/components/footer/footercomponents/AboutFooter';
import LienRapideFooter from '@/components/footer/footercomponents/LienRapideFooter';
import ContactFooter from '@/components/footer/footercomponents/ContactFooter';
import NewsLetterFooter from '@/components/footer/footercomponents/NewsLetterFooter';
export default function Footer() {
  return (
    <footer className="bg-footerBg text-footerText">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <AboutFooter />
          <NewsLetterFooter />
          <ContactFooter />
          <LienRapideFooter />
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 TechConf. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

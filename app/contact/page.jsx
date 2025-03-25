import Contact from "@/components/Contact";

export const metadata = {
  metadataBase: new URL('http://acme.com'),
  title: 'Contact | app Conference',
  description: 'Page de Contact',
  openGraph: {
    title: 'Contact | app Conference',
    description: 'Page de Contact',
  },
};

export default function Page() {
 return <Contact />;
}

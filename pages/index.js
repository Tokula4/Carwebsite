import Feature from '../components/Feature';
import Pricing from '../components/Pricing';
import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import SeoHead from '../components/SeoHead';
import ContactForm from '../components/Contactform';

export default function Home() {
  return (
    <>
      <SeoHead title="Sanko Autos Mobile" />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
        <ContactForm />
      </Layout>
    </>
  );
}

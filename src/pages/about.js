import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`Nocciola \n Une marque française d'accessoires faits main`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Fondée in 2023, Nocciola est une marque terre-à-terre d'un couple qui vient du sud de la France et qui s'est lancée dans son aventure parisienne.
              Nous vendons nos créations sur demande.
            </p>
            <br />
            <br />
            <p>
              Nous créons nos produits à la main avec une attention particulière sur le choix des produits et sur le détail de la réalisation.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/about1.png'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Nos valeurs</h3>
            <div ref={valuesRef}>
              <p>
              Les produits faits à la main par des créatrices indépendantes sont souvent porteurs de fortes valeurs. 
              Tout d'abord, ils sont confectionnés avec soin et minutie, ce qui reflète la passion et l'engagement de la créatrice envers son travail. 
              De plus, les produits faits à la main sont souvent fabriqués à partir de matériaux durables et respectueux de l'environnement, 
              ce qui s'inscrit dans une démarche écologique et responsable. 
              Enfin, acheter des produits faits à la main auprès de créatrices indépendantes permet de soutenir l'artisanat local et l'économie locale, 
              ce qui renforce la préservation des savoir-faire traditionnels.
              </p>
              <ol>
                <li>Soin et minutie</li>
                <li>Respectueux de l'environnement</li>
                <li>Artisanat local</li>
              </ol>
              <img alt={'fanny pack'} src={'/about2.png'}></img>
            </div>
            <h3>Notre personnalité</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                Notre fondatrice, Noémie, a la volonté de créer des produits
                avec un design à la fois pratique et un grande attention du détail.
                Elle souhaite apporter des accessoires élégants et durable. 
              </p>
              <p>
                La praticité est primordiale car un produit d'accessoire 
                doit faciliter la vie de son propriétaire au quotidien. 
                Il doit être facile à utiliser, à transporter et à entretenir.
              </p>
              <p>
                Avec sa machine Bernina et ses produits sélectionnés individuellement,
                vous reconnaitrez la fine touche d'Atelier Nocciola.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'sewing handmade'} src={'/about3.png'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

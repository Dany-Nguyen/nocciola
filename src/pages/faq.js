import React from 'react';
import * as styles from './faq.module.css';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';

const FaqPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={`Frequently Asked Questions`}
          bgImage={'/faqCover.png'}
          color={'var(--standard-white)'}
          height={'350px'}
        />
        <Container>
          <div className={styles.section}>
            <span>Votre commande</span>
            <div className={styles.subSection}>
              <h3>Livraison</h3>
              <p>
                Nous livrons de particulier à particulier
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Retours & Échanges</h3>
              <p>
                Nous traitons cas par cas.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <span>Paiement</span>
            <div className={styles.subSection}>
              <h3>Frais de livraison</h3>
              <p>
                En France: inclu dans le prix d'achat pour une livraison standard.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Devise</h3>
              <p>
                Notre boutique et notre site étant 100% français
                nous facturons uniquement en Euros (€).
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default FaqPage;

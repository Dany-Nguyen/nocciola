import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={'Première collection Montaigne'}
        subtitle={'Créée à la main, avec amour et Nocciola'}
        ctaText={'shop now'}
        ctaAction={goToShop}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          Boutique Atelier Nocciola, boutique made by{' '}
          <span className={styles.gold}>Dany - Nocciola's cofounder.</span>
        </p>
        <p>
          accessories made by {' '}
          <span className={styles.gold}>Noémie - Nocciola's cofounder.</span>
        </p>
      </div>

      {/* Collection Container */}
      {/* <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Premiers essais'} />
          <ProductCollectionGrid />
        </Container>
      </div> */}

      {/* New Arrivals */}
      {/* <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'Notre première banane'} link={'/shop'} textLink={'view all'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div> */}

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini highlight image'}
            title={'Notre première banane'}
            description={`Cette banane a été créée à la main depuis un atelier du 4ème arrondissement de Paris`}
            textLink={'shop now'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Promotion */}
      {/* <div className={styles.promotionContainer}>
        <Hero image={'/banner2.png'} title={`-50% off \n All Essentials`} />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>WOMAN</Link>
          <Link to={'/shop'}>MAN</Link>
        </div>
      </div> */}

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'à propos de Nocciola'}
        quote={
          '“Marque créée par Noémie et Dany.”'
        }
      />

      {/* Blog Grid */}
      {/* <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Journal'} subtitle={'Notes on life and style'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div> */}

      {/* Promotion */}
      {/* <div className={styles.sustainableContainer}>
        <Hero
          image={'/banner3.png'}
          title={'We are Sustainable'}
          subtitle={
            'From caring for our land to supporting our people, discover the steps we’re taking to do more for the world around us.'
          }
          ctaText={'read more'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div> */}

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Styled by You'}
          subtitle={'Tag @ateliernocciola to be featured.'}
        />
        {/* <div className={styles.socialContentGrid}>
          <img src={`/social/socialMedia1.png`} alt={'social media 1'} />
          <img src={`/social/socialMedia2.png`} alt={'social media 2'} />
          <img src={`/social/socialMedia3.png`} alt={'social media 3'} />
          <img src={`/social/socialMedia4.png`} alt={'social media 4'} />
        </div> */}
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;

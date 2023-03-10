import React, { useState } from 'react';
import * as styles from './shopV2.module.css';

import Accordion from '../components/Accordion';
import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import Checkbox from '../components/Checkbox';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';
import LayoutOption from '../components/LayoutOption';
import ProductCardGrid from '../components/ProductCardGrid';
import Button from '../components/Button';

import Config from '../config.json';
import { generateMockProductData } from '../helpers/mock';

const ShopV2Page = (props) => {
  const data = generateMockProductData(9, 'woman');
  const filters = Config.filters;

  const [filterState, setFilterState] = useState(filters);

  const filterTick = (e, categoryIndex, labelIndex) => {
    const filterStateCopy = [...filterState];
    filterStateCopy[categoryIndex].items[labelIndex].value = !e.target.value;
    setFilterState(filterStateCopy);
  };

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs
            crumbs={[{ link: '/', label: 'Menu' }, { label: 'Bananes' }]}
          />
        </Container>
        <Banner
          maxWidth={'650px'}
          name={`Bananes`}
          subtitle={
            'Avec notre banane tendance et pratique, vous pouvez garder vos affaires en sécurité et à portée de main tout en ajoutant une touche de style à votre tenue.'
          }
        />
        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <div className={styles.filterContainer}>
              {filterState.map((category, categoryIndex) => {
                return (
                  <div key={categoryIndex}>
                    <Accordion customStyle={styles} title={category.category}>
                      {category.items.map((item, itemIndex) => {
                        return (
                          <div key={itemIndex} className={styles.filters}>
                            <Checkbox
                              size={'sm'}
                              action={(e) =>
                                filterTick(e, categoryIndex, itemIndex)
                              }
                              label={item.name}
                              value={item.value}
                              id={item.name}
                              name={item.name}
                            />
                          </div>
                        );
                      })}
                    </Accordion>
                  </div>
                );
              })}
            </div>
            <div>
              <div className={styles.metaContainer}>
                <span className={`standardSpan`}>476 items</span>
              </div>
              <ProductCardGrid height={'440px'} data={data}></ProductCardGrid>
            </div>
          </div>
          <div className={styles.loadMoreContainer}>
            <span>1 page sur 1</span>
            <Button fullWidth level={'secondary'}>
              Charger plus
            </Button>
          </div>
        </Container>
      </div>
      <LayoutOption />
    </Layout>
  );
};

export default ShopV2Page;

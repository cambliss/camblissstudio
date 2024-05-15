import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import PortfolioMasonary from '@components/portfolio-masonary'

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle='CAMBLISS' />
            <PortfolioMasonary />
        </Wrapper>
    );
};

export default index;
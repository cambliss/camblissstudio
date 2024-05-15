import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import Pricing from '@components/pricing'

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="CAMBLISS" />
            <Pricing />
        </Wrapper>
    );
};

export default index;
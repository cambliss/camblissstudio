import React from 'react';
import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import RefundCancellationPolicy from '@components/refunds-cancellation/refund-cancellation-policy';
import { Header } from '@layout/index';
import TermsConditionMain from '@components/terms-conditions/terms-condition-main';
import FooterOne from '@layout/footers/footer-one';

const RefundsCancellationPage = () => {
    return (
        <Wrapper>
            <Header />
            <SEO pageTitle="Refunds and Cancellation Policy" />
            <RefundCancellationPolicy />
<FooterOne/>
        </Wrapper>
    );
};

export default RefundsCancellationPage;

import { Fragment, type FC, type ReactNode } from 'react';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import CheckoutForm from './CheckoutForm';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

interface CheckoutPageProps {
    children?: ReactNode;
}

const CheckoutPage: FC <CheckoutPageProps> = (_props) => {
    return (
        <Fragment>
            <GsapAnimetion/>
            <HeaderArea className={'th-header header-layout1'} />
            <PageTitle pageTitle={'Checkout'} pagesub={'Checkout'} />
            <div className="th-checkout-wrapper space-top space-extra-bottom">
                <div className="container">
                    <CheckoutForm/>
                </div>
            </div>

            <FooterArea className={'footer-wrapper footer-layout1 black-bg space-top'} />
            <Scrollbar />
        </Fragment>
    );
};

export default CheckoutPage;
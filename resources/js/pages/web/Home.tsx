import WebLayouts from '@/layouts/WebLayouts';
import Banner from '@/web-components/Banner';
import MapCustom from '@/web-components/MapCustom';
import OurWork from '@/web-components/OurWork';
import RequestQuote from '@/web-components/RequestQuote';
import Service from '@/web-components/Service';
import TechWeUse from '@/web-components/TechWeUse';
import Testimonials from '@/web-components/Testimonials';
import WhoWeAre from '@/web-components/WhoWeAre';
import WhyChoose from '@/web-components/WhyChoose';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <WebLayouts>
            <Head title="Home" />
            <Banner />
            <WhoWeAre />
            <Service />
            <OurWork />
            <TechWeUse />
            <WhyChoose/>
            <Testimonials />
            <MapCustom />
            <RequestQuote />
        </WebLayouts>
    );
}

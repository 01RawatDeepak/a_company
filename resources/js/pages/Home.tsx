import { Head } from "@inertiajs/react";
import WebLayouts from "@/layouts/WebLayouts";
import Banner from "@/web-components/Banner";
import WhoWeAre from "@/web-components/WhoWeAre";
import Service from "@/web-components/Service";
import OurWork from "@/web-components/OurWork";
import TechWeUse from "@/web-components/TechWeUse";
import Testimonials from "@/web-components/Testimonials";

export default function Home() {
    return (
        <WebLayouts>
            <Head title="Home" />
            <Banner/>
            <WhoWeAre/>
            <Service/>
            <OurWork/>
            <TechWeUse/>
            <Testimonials/>

        </WebLayouts>
    );
}

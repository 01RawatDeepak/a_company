
import { type ReactNode } from 'react';
import { Head } from '@inertiajs/react';
import TopMenu from '@/web-components/TopMenu';
import Header from '@/web-components/Header';
import Footer from '@/web-components/Footer';


interface WebLayouts {
    children: ReactNode;
}

export default ({ children, ...props }: WebLayouts) => (
    <>
        <Head title="Your Page Title" />
        <TopMenu />
        <Header />
        <main>{children}</main>
        <Footer />
    </>
);

import { Tab } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const tabs = [
    {
        name: 'Experienced Team',
        iconimage: '/build/assets/web/icon/icon1.svg',
        heading: 'Work with Experts',
        content: 'Our experienced professionals bring years of domain expertise to deliver powerful software solutions tailored to your needs.',
        image: '/build/assets/web/background/teamwork_business_character_1_.svg',
    },
    {
        name: 'Cost-Effective Solutions',
        iconimage: '/build/assets/web/icon/icon2.svg',
        heading: 'Save More, Do More',
        content: 'Our cost-effective services help you achieve more with less. We provide high-quality solutions without breaking your budget.',
        image: '/build/assets/web/background/cost effective.png',
    },
    {
        name: 'On-Time Delivery',
        iconimage: '/build/assets/web/icon/icon3.svg',
        heading: 'We Respect Your Time',
        content: 'We ensure every project is delivered within the promised timeframe, keeping your business on track and agile.',
        image: '/build/assets/web/background/Group 283107@2x.png',
    },
    {
        name: 'Custom Solutions',
        iconimage: '/build/assets/web/icon/icon4.svg',
        heading: 'Tailored Just for You',
        content: 'Every business is unique. That’s why we create custom software that fits perfectly with your goals and workflows.',
        image: '/build/assets/web/background/Group 283277.svg',
    },
    {
        name: 'Agile Development',
        iconimage: '/build/assets/web/icon/icon5.svg',
        heading: 'Adapt. Iterate. Improve.',
        content: 'Our agile process ensures continuous improvement and feedback loops, so you get the best version, faster.',
        image: '/build/assets/web/background/Group 283815.svg',
    },
    {
        name: '24/7 Support',
        iconimage: '/build/assets/web/icon/icon6.svg',
        heading: 'Always Here to Help',
        content: 'Whether it’s midnight or a holiday, our support team is always available to solve your issues instantly.',
        image: '/build/assets/web/background/Mask Group 283156.svg',
    },
];

export default function WhyChoose() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="w-full bg-white py-12">
            <div className="container mx-auto max-w-6xl px-4">
                <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                    <Tab.List className="mb-6 flex flex-wrap justify-between rounded-xl bg-white p-4 shadow">
                        {tabs.map((tab, index) => (
                            <Tab key={index} className="w-full md:w-auto outline-none">
                                {({ selected }) => (
                                    <div
                                        className={classNames(
                                            'flex flex-col items-center px-3 py-2 transition duration-300 ease-in-out',
                                            selected
                                                ? 'border-b-4 border-purple-500 font-bold text-purple-600'
                                                : 'border-b-4 border-transparent text-gray-500 hover:text-purple-500'
                                        )}
                                    >
                                        <img src={tab.iconimage} alt={`${tab.name} Icon`} className="mb-1 h-8" />
                                        <span className="text-sm">{tab.name}</span>
                                    </div>
                                )}
                            </Tab>
                        ))}
                    </Tab.List>

                    <div className="relative overflow-hidden rounded-2xl min-h-[360px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                                className="flex w-full flex-col items-center gap-6 rounded-xl bg-white p-6 md:flex-row"
                            >
                                <div className="space-y-3 md:w-1/2 text-center md:text-left">
                                    <h3 className="text-2xl font-bold text-black">{tabs[selectedIndex].heading}</h3>
                                    <p className="text-gray-700">{tabs[selectedIndex].content}</p>
                                </div>
                                <div className="md:w-1/2">
                                    <img
                                        src={tabs[selectedIndex].image}
                                        alt={tabs[selectedIndex].name}
                                        className="max-h-[300px] w-full object-contain"
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </Tab.Group>
            </div>
        </div>
    );
}

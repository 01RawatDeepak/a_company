import { Tab } from '@headlessui/react';

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
    return (
        <div className="w-full bg-white py-12">
            <div className="container mx-auto max-w-6xl px-4">
                <Tab.Group>
                    <Tab.List className="mb-6 flex flex-wrap justify-between rounded-xl bg-white p-4 shadow">
                        {tabs.map((tab, index) => (
                            <Tab
                                key={index}
                                className={({ selected }) =>
                                    classNames('w-full px-4 py-2 text-center text-sm font-medium text-purple-500 transition md:w-auto outline-0')
                                }
                            >
                                {({ selected }) => (
                                    <div
                                        className={classNames(
                                            'flex flex-col items-center px-3 py-2',
                                            selected ? 'border-b-4 border-purple-500 font-bold' : 'border-b-4 rounded-   border-transparent',
                                        )}
                                    >
                                        <img src={tab.iconimage} alt={`${tab.name} Icon`} className="mb-1 h-8" />
                                        <span className="text-sm">{tab.name}</span>
                                    </div>
                                )}
                            </Tab>
                        ))}
                    </Tab.List>

                    <Tab.Panels className="rounded-2xl md:flex-row">
                        {tabs.map((tab, index) => (
                            <Tab.Panel key={index} className="flex w-full flex-col items-center gap-6 rounded-xl bg-white p-6 md:flex-row">
                                <div className="space-y-3 md:w-1/2">
                                    <h3 className="text-2xl font-bold text-black">{tab.heading}</h3>
                                    <p className="text-gray-700">{tab.content}</p>
                                </div>
                                <div className="md:w-1/2">
                                    <img src={tab.image} alt={tab.name} className="max-h-[300px] w-full object-contain" />
                                </div>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    );
}

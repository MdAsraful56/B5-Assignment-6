interface AchievementsProps {
    title?: string;
    description?: string;
    companiesTitle?: string;
    companies?: Array<{
        src: string;
        alt: string;
    }>;
    achievementsTitle?: string;
    achievementsDescription?: string;
    achievements?: Array<{
        label: string;
        value: string;
    }>;
}

const defaultCompanies = [
    {
        src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg',
        alt: 'Arc',
    },
    {
        src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg',
        alt: 'Descript',
    },
    {
        src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg',
        alt: 'Mercury',
    },
    {
        src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg',
        alt: 'Ramp',
    },
    {
        src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg',
        alt: 'Retool',
    },
    {
        src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg',
        alt: 'Watershed',
    },
];

const defaultAchievements = [
    { label: 'Companies Supported', value: '300+' },
    { label: 'Projects Finalized', value: '800+' },
    { label: 'Happy Customers', value: '99%' },
    { label: 'Recognized Awards', value: '10+' },
];

const Achievements = ({
    title = 'About Us',
    description = 'RideshareX is a passionate team dedicated to making everyday travel safer, faster, and more affordable. Our mission is to connect riders with reliable drivers through technology that empowers people to move freely in their city.',
    companiesTitle = 'Supported Companies',
    companies = defaultCompanies,
    achievementsTitle = 'Our Achievements in Numbers',
    achievementsDescription = 'Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.',
    achievements = defaultAchievements,
}: AchievementsProps = {}) => {
    return (
        <section className='py-32'>
            <div className='container'>
                <div className='mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left'>
                    <h1 className='text-5xl font-semibold'>{title}</h1>
                    <p className='text-muted-foreground'>{description}</p>
                </div>
                <div className='py-32'>
                    <p className='text-center text-lg'>{companiesTitle} </p>
                    <div className='mt-8 flex flex-wrap justify-center gap-8 bg-muted-foreground p-10 rounded-xl'>
                        {companies.map((company, idx) => (
                            <div
                                className='flex items-center gap-3'
                                key={company.src + idx}
                            >
                                <img
                                    src={company.src}
                                    alt={company.alt}
                                    className='h-6 w-auto md:h-8'
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='relative overflow-hidden rounded-xl bg-muted p-10 md:p-16'>
                    <div className='flex flex-col gap-4 text-center md:text-left'>
                        <h2 className='text-4xl font-semibold'>
                            {achievementsTitle}
                        </h2>
                        <p className='max-w-xl text-muted-foreground'>
                            {achievementsDescription}
                        </p>
                    </div>
                    <div className='mt-10 flex flex-wrap justify-between gap-10 text-center'>
                        {achievements.map((item, idx) => (
                            <div
                                className='flex flex-col gap-4'
                                key={item.label + idx}
                            >
                                <p>{item.label}</p>
                                <span className='text-4xl font-semibold md:text-5xl'>
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className='pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block'></div>
                </div>
            </div>
        </section>
    );
};

export { Achievements };

type SectionProps = {
    heading: string;
    description: string;
};

const Section = ({ heading, description }: SectionProps) => {
    return (
        <div>
            <div className='text-center lg:p-10 md:p-6 p-3'>
                <h1 className='text-4xl font-bold'>{heading}</h1>
                <div className='border-2  my-5'></div>
                <div className='lg:px-32 md:px-20 px-3 py-3'>
                    <p className='text-muted-foreground'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Section;

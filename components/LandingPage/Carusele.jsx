'use client'
import { OpinionCarusele } from './components/opinionCarusele'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
const opinionsArrey = [
    {
        name: 'Anna',
        image: '/RandomDude.jpg',
        opinion:
            'Mateusz jest niezwykle zaangażowanym trenerem, który motywuje mnie do osiągania moich celów fitnessowych. Jego indywidualne podejście i cenne wskazówki sprawiają, że każda sesja treningowa jest wyjątkowa.',
        id: 0,
        rk: 10,
    },
    {
        name: 'Michał',
        image: '/RandomDude.jpg',
        opinion:
            'Zdecydowanie polecam Mateusza jako personalnego trenera! Dzięki jego profesjonalnemu podejściu i wsparciu udało mi się znacznie poprawić swoją kondycję i sylwetkę. Jest cierpliwy, a jednocześnie potrafi mnie zmotywować do dawania z siebie wszystkiego.',
        id: 1,
        rk: 11,
    },
    {
        name: 'Katarzyna',
        image: '/RandomDude.jpg',
        opinion:
            'Mateusz to wyjątkowy trener, który potrafi dopasować trening do moich indywidualnych potrzeb. Jego wiedza i doświadczenie są nieocenione, a przy tym atmosfera podczas treningów jest zawsze pozytywna i motywująca.',
        id: 2,
        rk: 12,
    },
    {
        name: 'Piotr',
        image: '/RandomDude.jpg',
        opinion:
            'Dzięki Mateuszowi, moje treningi stały się bardziej efektywne i przyjemne. Jego profesjonalizm, cierpliwość i umiejętność słuchania sprawiają, że czuję się pewniej i zmotywowana do dążenia do swoich celów.',
        id: 3,
        rk: 13,
    },
    {
        name: 'Magdalena',
        image: '/RandomDude.jpg',
        opinion:
            'Mateusz jest nie tylko świetnym trenerem, ale także inspirującą osobą. Jego pozytywne podejście i energia są zaraźliwe, a dzięki niemu zyskałem nową pasję do regularnej aktywności fizycznej. Naprawdę polecam!',
        id: 4,
        rk: 14,
    },
]

const Carusele = () => {
    return (
        <div className="w-full grainy flex flex-col border-t-2 border-r-2 rounded-xl  border-prime items-center pb-20">
            {' '}
            <h2 className="titleSize font-sans textShadowPrime p-5">
                ZOBACZ OPINIE KLIENTÓW
            </h2>
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={2000}
                showArrows={true}
                showStatus={false}
                className="relative sm:px-10 py-5 sm:pt-20 pb-5 max-w-[800px]  rounded-[30px] sm:mx-auto"
            >
                {opinionsArrey.map((opinion, index) => (
                    <OpinionCarusele key={index} opinion={opinion} />
                ))}{' '}
            </Carousel>
        </div>
    )
}

export default Carusele

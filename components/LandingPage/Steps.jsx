'use client'

import React from 'react'
import Step from './components/step'

const steps = [
    {
        content:
            ' Wspólnie ustalimy Twoje cele i terminy, aby stworzyć klarowny plan działania. Przez szczegółową analizę Twoich oczekiwań i priorytetów,ustalimy realistyczne cele, które będą motywować Cię do działania.',
        buttonText: 'Zrób pierwszy krok',
        title: true,
        buttonHrev: '/Contact',
    },
    {
        stepNumber: '1',
        description: 'Ustalanie celu i terminów',
        content:
            ' Wspólnie ustalimy Twoje cele i terminy, aby stworzyć klarowny plan działania. Przez szczegółową analizę Twoich oczekiwań i priorytetów,ustalimy realistyczne cele, które będą motywować Cię do działania.',
        buttonText: 'Zrób pierwszy krok',
        image: 'bg-flex',
        title: false,
        buttonHrev: '/Contact',
    },
    {
        stepNumber: '2',
        description: 'Trening i Wsparcie',
        content:
            'Rozpoczniemy trening, który będzie dostosowany do Twoich celów iindywidualnych potrzeb. Będę Cię motywować, wspierać i dostarczaćcennych wskazówek, abyś osiągnął/a najlepsze rezultaty. Zapewniampełne zaangażowanie i profesjonalizm podczas każdej sesji treningowej.',
        buttonText: 'Zobacz Oferte',
        image: 'bg-flex',
        title: false,
        buttonHrev: '/My-services',
    },
    {
        stepNumber: '3',
        description: 'Efekty!!!',
        content:
            ' Przez systematyczne i konsekwentne działanie, zobaczysz imponująceefekty swojej pracy. Zmiany w sile, wytrzymałości i sylwetce stanąsię widoczne. Będziesz odczuwać lepsze samopoczucie i większą pewność siebie. Razem osiągniemy zamierzone cele i wprowadzimy trwałe zmiany w Twoim życiu.',
        buttonText: 'Zobacz Przemiany',
        image: 'bg-flex',
        buttonHrev: '/My-services',
        title: false,
    },
]

const Steps = () => {
    return (
        <div className="h-[210vh] bg-bench bg-cover w-full flex flex-col items-center">
            <div className="sticky"></div>
            {steps.map((steps, index) => (
                <Step
                    key={index}
                    stepNumber={steps.stepNumber}
                    description={steps.description}
                    content={steps.content}
                    img={steps.image}
                    title={steps.title}
                />
            ))}
        </div>
    )
}
export default Steps

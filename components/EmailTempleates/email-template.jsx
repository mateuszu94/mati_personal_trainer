import * as React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from '@react-email/components'

import { Tailwind } from '@react-email/tailwind'

export const EmailTemplate = ({ firstName, email, title, message }) => (
    <Html>
        <Preview>
            Dostałeś Wiadomość z od {firstName} w sprawie Treningu{' '}
        </Preview>
        <Tailwind>
            <Body className="bg-gray-400 text-black ">
                <Section className="bg-white border-black border-2    px-20 py-10 rounded-xl">
                    <Heading className="leading-tight">
                        Wiadomość jest w sprawie : {title}
                    </Heading>
                    <Hr />
                    <Text>
                        <Text className="text-blue-800">{firstName}</Text> chce
                        wiedzieć : {message}
                    </Text>
                    <Hr />
                    <Text>
                        Email tej osoby to :{' '}
                        <Text className="text-red-600">{email}</Text>
                    </Text>
                </Section>
            </Body>
        </Tailwind>
    </Html>
)

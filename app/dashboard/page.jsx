import DisplayDashboard from '@/components/DashbordComponents/DisplayDashboard'
import prisma from '@/lib/db/prisma'

export default async function page() {
    const allOffers = await prisma.offer.findMany()
    const dashboardOptions = [
        { name: 'Oferty', Objects: allOffers },
        { name: 'Cwiczenia' },
        { name: 'Przpisy' },
    ]

    return (
        <>
            <DisplayDashboard dashboardOptions={dashboardOptions} />
        </>
    )
}

F

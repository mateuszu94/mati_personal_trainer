'use client'
import { useState } from 'react'
import AddOrChange from './addOrChange'
import DashboardButtons from './DashboardButtons'
import DisplayCard from './DisplayCard'

export default function DisplayDashboard({ dashboardOptions }) {
    const [open, setOpen] = useState('Oferty')

    return (
        <div>
            <DashboardButtons
                dashboardOptions={dashboardOptions}
                open={open}
                setOpen={setOpen}
            />
            {dashboardOptions.map((Option) => (
                <div key={Option.name}>
                    {open === Option.name && (
                        <div>
                            <div className="w-full h-full border-t-4 first-letter:first-line:">
                                <div className=" flex flex-row gap-10 justify-center items-center">
                                    <p className="font-sans font-bold text-center  text-2xl">
                                        {' '}
                                        {Option.name}
                                    </p>
                                    <AddOrChange
                                        name={Option.name}
                                        object={null}
                                    />
                                </div>
                            </div>
                            <DisplayCard
                                open={open}
                                cardOption={Option.name}
                                object={Option.Objects}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

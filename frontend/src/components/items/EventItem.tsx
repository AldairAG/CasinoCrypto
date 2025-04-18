import { twMerge } from "tailwind-merge";
import { Event } from "../../types/Event";
import { Card, CardContent, CardHead } from "../cards/Card";
import { CalendarIcon, ExclamationCircleIcon, ClockIcon } from "@heroicons/react/24/outline";
import React from "react";

type EventItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    event: Event;
    classNameCard?: string;
};

const EventItem = ({ event, classNameCard, ...props }: EventItemProps) => {

    return (
        <button
            type="button"
            className="w-full"
            {...props}
        >
            <Card className={twMerge("p-0", classNameCard)}>
                <CardHead className="m-0 bg-gray-200 px-2 py-3 flex justify-start items-center gap-2 rounded-md">
                    <CalendarIcon className="w-5 h-5 text-gray-400" />
                    <label className="font-bold text-gray-600">{event.dateEvent}</label>
                </CardHead>

                <CardContent className="p-2 flex flex-col gap-2">
                    <div className="flex justify-between items-center mb-2 w-full">
                        <div className="flex justify-center items-center gap-2">
                            <img src={event.strHomeTeamBadge} alt="local" className="w-15 h-15" />
                            <label className="text-2xl font-bold text-gray-500">{event.strHomeTeam}</label>
                        </div>

                        <h1 className="text-2xl font-bold text-gray-600 bg-gray-200 p-1 rounded-md">VS</h1>

                        <div className="flex justify-center items-center gap-2">
                            <label className="text-2xl font-bold text-gray-500">{event.strAwayTeam}</label>
                            <img src={event.strAwayTeamBadge} alt="local" className="w-15 h-15" />
                        </div>
                    </div>



                    <div className="flex justify-between items-center mb-2 w-full">
                        <label className="flex gap-2 items-center">
                            <ExclamationCircleIcon className="h-5 w-5 text-gray-500" />
                            {event.strVenue}
                        </label>
                        <label className="font-bold text-gray-400 flex gap-1 items-center">
                            <ClockIcon className="h-5 w-5 text-gray-500" />
                            {event.strTime}
                        </label>
                    </div>
                </CardContent>
            </Card>
        </button>
    );
}
export default EventItem;
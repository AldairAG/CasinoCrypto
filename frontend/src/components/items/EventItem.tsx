import { Event } from "../../types/Event";
import { Card, CardContent, CardHeader, CardHead } from "../cards/Card";

type EventItemProps = {
    event: Event;
    id?: string; // Add the id prop to the type definition
    checked?: boolean; // Add checked prop if used
    onChange?: () => void; // Add onChange prop if used
};

const EventItem = ({ event, ...props }: EventItemProps) => {
    return (
        <Card className="p-0">
            <CardHead className="m-0 bg-gray-200 px-2 py-3">
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
                    <label className="">{event.strOfficial}</label>
                    <label className="font-bold text-gray-400">{event.strTime}</label>
                </div>
            </CardContent>
            <input
                type="checkbox"
                className="w-4 h-4 hidden"
                id={`event-${event.idEvent}`}
                {...props} // Propiedades adicionales
            />
        </Card>
    );
}
export default EventItem;
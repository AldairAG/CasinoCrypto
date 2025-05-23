import { Card } from "../cards/Card";
import { Event } from '../../types/Event';
import { ShieldCheckIcon, TrophyIcon } from "@heroicons/react/24/outline";
import Input from "../ui/Input";
import React from "react";

interface ItemValues {
    item: Event;
    modificarPrediccion: (name: string, value: string | number, idEvento: number) => void;
}

const TeamDisplay = ({
    badge,
    name,
    reverse = false,
}: {
    badge: string;
    name: string;
    reverse?: boolean;
}) => (
    <div className={`flex flex-col items-center justify-center gap-2 ${reverse ? '' : ''}`}>
        <img className="w-20 h-20" src={badge} />
        <h3 className="text-xl font-bold">{name}</h3>
    </div>
);

const VersusTeams = ({ item }: { item: Event }) => (
    <div className="flex items-center gap-2 border-r-2 border-gray-300">
        <div className="flex items-center gap-1">
            <img className="w-8 h-8" src={item.strAwayTeamBadge} />
            <h3 className="text-lg">{item.strHomeTeam}</h3>
        </div>
        <span>VS.</span>
        <div className="flex items-center gap-1">
            <h3 className="text-lg">{item.strAwayTeam}</h3>
            <img className="w-8 h-8" src={item.strHomeTeamBadge} />
        </div>
    </div>
);

const OptionButton = ({
    name,
    value,
    label,
    borderColor,
    checked,
    onChange,
}: {
    name: string;
    value: string;
    label: string;
    borderColor: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
    <label className="flex flex-col items-center cursor-pointer">
        <input
            type="checkbox"
            className="hidden peer"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
        />
        <span
            className={`flex items-center justify-center w-24 h-10 rounded border-2 ${borderColor} peer-checked:bg-${borderColor.split('-')[1]}-500 peer-checked:text-white transition-colors font-semibold text-sm`}
        >
            {label}
        </span>
    </label>
);

export const MarcadorExactoItem = ({ item, modificarPrediccion }: ItemValues) => {
    const handleMarcadorExacto = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        modificarPrediccion(name, value, Number(item.idEvent));
    };

    return (
        <Card className="grid grid-cols-3 gap-4">
            <TeamDisplay badge={item.strAwayTeamBadge} name={item.strHomeTeam} />
            <div className="flex flex-col items-center justify-center gap-2">
                <span>{item.dateEvent}</span>
                <span className="font-black">{item.strTimeLocal}</span>
                <span>{item.strVenue}</span>
                <ShieldCheckIcon className="h-6 w-6 text-blue-500" />
                <TrophyIcon className="h-6 w-6 text-purple-600" />
                <div className="flex items-center justify-center gap-2">
                    <Input
                        name="intResultadoLocal"
                        type="number"
                        placeholder="0"
                        className="w-20"
                        onChange={handleMarcadorExacto}
                    />
                    <span>-</span>
                    <Input
                        name="intResultadoVisitante"
                        type="number"
                        placeholder="0"
                        className="w-20"
                        onChange={handleMarcadorExacto}
                    />
                </div>
            </div>
            <TeamDisplay badge={item.strHomeTeamBadge} name={item.strAwayTeam} />
        </Card>
    );
};

const options = [
    { value: "equipo1", label: "Equipo 1", borderColor: "border-blue-500" },
    { value: "empate", label: "Empate", borderColor: "border-gray-500" },
    { value: "equipo2", label: "Equipo 2", borderColor: "border-green-500" },
];

const SelectorOpciones = ({
    name,
    selected,
    onChange,
}: {
    name: string;
    selected?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
    <div className="flex items-center justify-center gap-4">
        {options.map(opt => (
            <OptionButton
                key={opt.value}
                name={name}
                value={opt.value}
                label={opt.label}
                borderColor={opt.borderColor}
                checked={selected === opt.value}
                onChange={onChange}
            />
        ))}
    </div>
);

export const PrimeroEnMarcarItem = ({ item }: { item: Event }) => (
    <Card className="grid grid-cols-2 gap-4">
        <VersusTeams item={item} />
        <SelectorOpciones name="primeroEnMarcar" />
    </Card>
);

export const ResultadoGeneralItem = ({ item }: { item: Event }) => (
    <Card className="grid grid-cols-2 gap-4">
        <VersusTeams item={item} />
        <SelectorOpciones name="resultadoGeneral" />
    </Card>
);

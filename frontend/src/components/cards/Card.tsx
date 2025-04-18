import React from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps{
    children?:React.ReactNode,
    className?:string
}

const Card:React.FC<CardProps> = ({ children, className}) => {
    return (
        <div className={twMerge("bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-300 space-x-2", className)}>
            {children}
        </div>
    )
}

const CardDescription:React.FC<CardProps> = ({ children, className }) => {
    return (
        <p className={twMerge("text-sm text-gray-500", className)}>
            {children}
        </p>
    )
}
const CardHeader:React.FC<CardProps> = ({ children, className }) => {
    return (
        <h3 className={twMerge("text-3xl font-semibold leading-none tracking-tight", className)}>
            {children}
        </h3>
    )
}

const CardHead:React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={twMerge("space-y-1 mb-8", className)}>
            {children}
        </div>
    )
}

const CardContent:React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={twMerge("flex", className)}>
            {children}
        </div>
    )
}

const Badge:React.FC<CardProps> = ({ children, className }) => {
    return (
        <span className={twMerge("border border-gray-300 text-xs font-semibold px-2 py-1 rounded-full", className)}>
            {children}
        </span>
    )
}



export { Card, CardHeader, CardDescription,Badge,CardHead,CardContent };
"use client"
import React from 'react'
import Search from "@/app/_components/Search"
import { DogsProvider } from '../_context/DogsContext'
import DogList from '@/app/_components/DogList'





export default function Content() {
    return (
        <DogsProvider>
            <Search />
            <DogList />
        </DogsProvider>
    )
}

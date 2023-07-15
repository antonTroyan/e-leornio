"use client"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import React, { useState, useEffect } from 'react';
import Data from './data';
import { entity } from '../types';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function Game() {

    const [currentData, setCurrentData] = useState({
        correct: {
            meaning: "",
            example: "",
            word: ""
        },
        wrong: [
            "", "", "", ""
        ]
    });

    const [generalCounter, setGeneralCounter] = useState(0)
    const [correctCounter, setCorrectCounter] = useState(0)
    const [percentCounter, setPercentCounter] = useState(0)

    useEffect(() => {
        initData(Data); //called once, on init
    }, []);

    const { toast } = useToast()

    const getRandom = (array: Array<entity>): entity => {
        return array[Math.floor(Math.random() * array.length)]
    }

    const initData = (array: Array<entity>) => {
        const randomCorrect: entity = getRandom(array)
        const randomWrongResult: string[] = []

        let wrongElementsCounter: number = 0
        while (wrongElementsCounter < 2) {
            let randomWrong: entity = getRandom(array)
            if (randomWrong !== randomCorrect && !randomWrongResult.some(e => e === randomWrong.word)) {
                randomWrongResult[wrongElementsCounter] = randomWrong.word
                wrongElementsCounter++
            }
        }
        setCurrentData(e => ({ ...e, correct: randomCorrect, wrong: randomWrongResult }))
    }

    const handleNext = (wasCorrect:boolean) => {
        initData(Data)
        setGeneralCounter(prev => prev + 1)
        if (wasCorrect) {
            setCorrectCounter(prev => prev + 1)
        }
        const percent = correctCounter / generalCounter * 100
        setPercentCounter(Math.ceil(percent))
    }

    const createVariants = () => {
        const allVariants: string[] = currentData.wrong
        if (!allVariants.some(e => e === currentData.correct.word)) {
            allVariants.push(currentData.correct.word)
        }

        return currentData.wrong.map(element => {
            return (
                <>
                    <div key={element} onClick={() => {
                        const wasCorrect = element === currentData.correct.word
                        if (!wasCorrect) {
                            toast({
                                variant: "destructive",
                                title: currentData.correct.meaning,
                                description: currentData.correct.word,
                            })
                        }
                        handleNext(wasCorrect)
                    }}>{element}
                    </div>
                    <Separator orientation="vertical" />
                </>
            )
        })
    }

    return (
        <>
            <div className="absolute left-0 top-0  ...">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center">All</TableHead>
                            <TableHead className="text-center">Correct №</TableHead>
                            <TableHead className="text-center">Correct %</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-center">{generalCounter}</TableCell>
                            <TableCell className="text-center">{correctCounter}</TableCell>
                            <TableCell className="text-center">{percentCounter}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <main className="flex min-h-screen flex-col items-center justify-between pt-16">
                <div>
                    <div className="space-y-1">
                        <h4 className="text-2xl font-medium leading-none">{currentData.correct.meaning}</h4>
                        <p className="text-2xl text-muted-foreground">
                            {currentData.correct.example}
                        </p>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex h-5 items-center space-x-4 text-2xl">
                        {createVariants()}
                    </div>
                </div>
            </main>
        </>
    )
}

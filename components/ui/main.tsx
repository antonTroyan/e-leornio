"use client"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import React, { useState, useEffect } from 'react';
import Data from './data';
import { entity } from '../types';

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

    const [counter, setCounter] = useState(0)

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

    const handleNext = () => {
        initData(Data)
        setCounter(prev => prev + 1)
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
                        if (element !== currentData.correct.word) {
                            toast({
                                variant: "destructive",
                                title: currentData.correct.meaning,
                                description: currentData.correct.word,
                            })
                        }
                        handleNext()
                    }}>{element}
                    </div>
                    <Separator orientation="vertical" />
                </>
            )
        })
    }

    return (
        <>
            <div className="absolute left-0 top-0 h-16 w-16 ...">
                <p>Answers {counter}</p>
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

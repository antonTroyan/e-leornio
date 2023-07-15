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

    const { toast } = useToast()

    const getRandom = (array: Array<entity>): entity => {
        return array[Math.floor(Math.random() * array.length)]
    }

    const fillCurrentData = (array: Array<entity>) => {
        debugger
        const randomCorrect = getRandom(array)
        const randomWrongResult:string[] = []

        let wrongElementsCounter = 0
        while (wrongElementsCounter < 3) {
            let randomWrong = getRandom(array)
            if (randomWrong !== randomCorrect // add element only if it doesn match correct and was not added earlier
                && !currentData.wrong.some(element => element === randomWrong.word)) {

                randomWrongResult[wrongElementsCounter] = randomWrong.word
                wrongElementsCounter++
            }
        }
        setCurrentData({...currentData, correct: randomCorrect, wrong: randomWrongResult})
    }

    const handleNext = () => {

    }

    const createVariants = (): React.JSX.Element[] => {
        if (currentData.correct.word == "") {
            debugger
            fillCurrentData(Data);
        }

        return currentData.wrong.map(element => {
            return (
                <div key={element}>
                    <div onClick={() => {
                        toast({
                            variant: "destructive",
                            title: "Thin, flexible string or rope made from several twisted strands",
                            description: "Cord",
                        })
                    }}>{element}</div>
                    <Separator orientation="vertical" />
                </div>
            )
        })
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-16">
            <div>
                <div className="space-y-1">
                    <h4 className="text-2xl font-medium leading-none">Thin, flexible string or rope made from several twisted strands</h4>
                    <p className="text-2xl text-muted-foreground">
                        Hang the picture from a rail on a length of [...].
                    </p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-2xl">
                    {createVariants()}
                </div>
            </div>
        </main>
    )
}

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
    const { toast } = useToast()

    const [currentData, setCurrentData] = useState({
        correct: {
            meaning: "",
            example: "",
            word: ""
        },
        wrong: ["", ""],
        allDataArray: [{
            meaning: "",
            example: "",
            word: "",
            tags: [""],
            complexity: 0
        }]
    });

    useEffect(() => {
        onNext(null)                                       // called once
    }, []);

    const getRandom = (array: Array<entity>): entity => {
        return array[Math.floor(Math.random() * array.length)]
    }

    const onNext = (wasCorrect:boolean | null) => {
        let currentArray: Array<entity>
        const wrongWords: string[] = []

        // fill array
        if (currentData.allDataArray.length <= 1)
            currentArray = Data                                 // get initial array
        else
            currentArray = currentData.allDataArray             // reuse array
        
        // change complexity of selected word
        if (wasCorrect !== null) {  // if new do nothing
            currentArray.map(e => {
                if (e.word === currentData.correct.word) {
                    return wasCorrect ? e.complexity-- : e.complexity++ 
                }
            })
        }
        currentArray.sort(() => Math.random() - 0.5)                 // shuffle             
        currentArray.sort((e1, e2) => e2.complexity - e1.complexity) // sort by complexity
        console.log(currentArray)

        // fill correct    
        const correct = currentArray
            .find(e => (Math.random() * 100) < e.complexity)    // get random by complexity

        // fill wrong
        let numberWrongVariant = 3
        while (numberWrongVariant > 0) {
            const randomWrong = getRandom(currentArray)
            if (randomWrong !== correct
                && !wrongWords.includes(randomWrong.word)) {

                wrongWords.push(randomWrong.word)
                numberWrongVariant--
            }
        }

        setCurrentData({
            correct: {
                meaning: correct !== undefined ? correct.meaning : "no data",
                example: correct !== undefined ? correct.example : "no data",
                word: correct !== undefined ? correct.word : "no data"
            },
            wrong: wrongWords,
            allDataArray: currentArray
        })
    }

    const createVariants = () => {
        const allVariants: string[] = currentData.wrong
        allVariants.push(currentData.correct.word)
        allVariants.sort(() => Math.random() - 0.5) 

        return allVariants.map(element => {
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
                        onNext(wasCorrect)
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
                            <TableCell className="text-center">0</TableCell>
                            <TableCell className="text-center">0</TableCell>
                            <TableCell className="text-center">0</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <main className="flex min-h-screen flex-col items-center justify-between pt-16">
                <div>
                    <div className="space-y-1">
                        <h4 className="text-2xl font-medium leading-none">{currentData.correct.meaning} </h4>
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
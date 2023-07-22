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
        readyAnswers: ["", ""],
        allDataArray: [{
            meaning: "",
            example: "",
            word: "",
            tags: [""],
            complexity: 0
        }]
    });

    const [allCounter, setAllCounter] = useState(0)
    const [correctCounter, setCorrectCounter] = useState(0)
    const [correctPercentCounter, setCorrectPercentCounter] = useState(0)

    useEffect(() => {
        onNext(null)
    }, []);

    const getRandom = (array: Array<entity>): entity => {
        return array[Math.floor(Math.random() * array.length)]
    }

    const changeCounters = (wasCorrect:boolean | null) => {
        if (wasCorrect !== null) {
        	const newAllValue = allCounter + 1
        	const newCorrectValue = correctCounter + 1
        	const newPercentValue = Math.round(correctCounter / newAllValue * 100)
        	
            setAllCounter(newAllValue)
            if (wasCorrect)
                setCorrectCounter(newCorrectValue)
            setCorrectPercentCounter(newPercentValue)
        }
    }

    const onNext = (wasCorrect:boolean | null) => {
        let currentArray: Array<entity> = prepareArray()     
        changeComplexityIfNeed(wasCorrect, currentArray)
        changeCounters(wasCorrect)

        const correct = currentArray
            .find(e => (Math.random() * 100) < e.complexity) 

        const wrongWords: string[] = prepareWrongWords(currentArray, correct)
        const readyAnswers: string[] = prepareReadyAnswers(correct, wrongWords)

        setCurrentData({
            correct: {
                meaning: correct !== undefined ? correct.meaning : "no data",
                example: correct !== undefined ? correct.example : "no data",
                word: correct !== undefined ? correct.word : "no data"
            },
            wrong: wrongWords,
            readyAnswers: readyAnswers,
            allDataArray: currentArray
        })
    }

    const createVariants = () => {
        return currentData.readyAnswers.map(element => {
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

    function prepareArray() {
        let currentArray: Array<entity>;
        if (currentData.allDataArray.length <= 1)
            currentArray = Data;                     // init array
        else
            currentArray = currentData.allDataArray; // reuse array
        return currentArray;
    }

    function prepareReadyAnswers(correct: entity | undefined, wrongWords: string[]) {
        let readyAnswers: string[] = [];
        readyAnswers.push(correct !== undefined ? correct.word : "no data");
        readyAnswers.push(...wrongWords);
        readyAnswers.sort(() => Math.random() - 0.5);
        return readyAnswers;
    }

    function prepareWrongWords(currentArray: entity[], correct: entity | undefined) {
        const result: string[] = []
        let numberWrongVariant = 3;
        while (numberWrongVariant > 0) {
            const randomWrong = getRandom(currentArray);
            if (randomWrong !== correct
                && !result.includes(randomWrong.word)) {

                result.push(randomWrong.word);
                numberWrongVariant--;
            }
        }
        return result
    }

    function changeComplexityIfNeed(wasCorrect: boolean | null, currentArray: entity[]) {
        if (wasCorrect !== null) { // if new do nothing
            currentArray.map(e => {
                if (e.word === currentData.correct.word) {
                    return wasCorrect ? e.complexity-- : e.complexity++;
                }
            });
        }
        currentArray.sort(() => Math.random() - 0.5); // shuffle             
        currentArray.sort((e1, e2) => e2.complexity - e1.complexity);
        console.log(currentArray);
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
                            <TableCell className="text-center">{allCounter}</TableCell>
                            <TableCell className="text-center">{correctCounter}</TableCell>
                            <TableCell className="text-center">{correctPercentCounter}</TableCell>
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

"use client"
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import React, { useState } from 'react';
import { type } from 'os';

export default function Game() {

    type entity = {
        meaning: string,
        example: string,
        word: string
    }

    const data = () => {
        [
            {
                meaning: "Thin, flexible string or rope made from several twisted strands",
                example: "Hang the picture from a rail on a length of [...].",
                word: "Cord"
            },
            {
                meaning: "Push or shake (someone or something) abruptly and roughly",
                example: "A surge in the crowd behind him [...]ed him forwards.",
                word: "Jolt"
            },
            {
                meaning: "Silly / foolish",
                example: "Don't ask such [...] questions",
                word: "Daft"
            },
            {
                meaning: "An uncomfortable sensation on the skin that causes a desire to scratch ",
                example: "The bite [...]ed like crazy",
                word: "Itch"
            }
        ]
    }

    const currentData = {
        correct: {
            meaning: "",
            example: "",
            word: ""
        },
        wrong: [
            "", "", "", ""
        ]
    }

    const { toast } = useToast()
    const [count, setCount] = React.useState(0);

    const getRandom = (array: Array<entity>): entity => {
        return array[Math.floor(Math.random() * array.length)]
    }

    const fillCurrentData = (array: Array<entity>) => {
        const randomCorrect = getRandom(array)

        currentData.correct = randomCorrect
        let wrongElementsCounter = 0
        while (wrongElementsCounter < 2) {
            let randomWrong = getRandom(array)
            if (randomWrong !== randomCorrect) {
                currentData.wrong[wrongElementsCounter] = randomWrong.word
            }
            wrongElementsCounter++
        }
    }

    const handleNext = () => {

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
                    <div onClick={() => {
                        toast({
                            variant: "destructive",
                            title: "Thin, flexible string or rope made from several twisted strands",
                            description: "Cord",
                        })
                    }}>Cord</div>
                    <Separator orientation="vertical" />
                    <div>Feather</div>
                    <Separator orientation="vertical" />
                    <div>Source</div>
                    <Separator orientation="vertical" />
                    <div>Test</div>
                    <Separator orientation="vertical" />
                    <div>Java</div>
                </div>
            </div>
        </main>
    )
}

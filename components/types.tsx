
export type entity = {
    meaning: string,
    example: string,
    word: string
    tags: string[]
    complexity: number
}

export type rawEntity = {
    meaning: string,
    example: string,
    word: string
    tags: string[]
}

export type currentDataType = {
    correct: {
        meaning: string,
        example: string,
        word: string,
        tags: string[]
    },
    wrong: string[],
    readyAnswers: string[],
    allDataArray: Array<entity>,
   }

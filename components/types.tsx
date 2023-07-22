
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

// export type currentData = {
//     correct: {
//         meaning: string,
//         example: string,
//         word: string
//     },
//     wrong: string,
//     allDataArray: Array<entity>
// }
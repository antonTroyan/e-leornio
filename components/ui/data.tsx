import { entity } from "../types"
import { rawEntity } from "../types"

// @ts-ignore
import wordsYml from "./words.holder.yml"

const DEFAULT_COMPLEXITY = 40;

const prepareData = (rawData:rawEntity[]) => {

    return Object.keys(wordsYml).map(e => ({
        meaning: wordsYml[e].meaning,
        example: wordsYml[e].example,
        word: e,
        tags: wordsYml[e].tags,
        complexity: DEFAULT_COMPLEXITY
    }))

}

const Data = prepareData(rawData)

export default Data

import { entity } from "../types"
import { rawEntity } from "../types"

// @ts-ignore
import wordsYml from "./words.holder.en.yml"

const DEFAULT_COMPLEXITY = 40;

const prepareData = () => {
    return Object.keys(wordsYml).map(e => ({
        meaning: wordsYml[e].meaning,
        example: wordsYml[e].example,
        word: e,
        tags: wordsYml[e].tags,
        complexity: DEFAULT_COMPLEXITY
    }))
}

const Data = prepareData()

export default Data

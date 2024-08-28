import { entity } from "../types"
import { rawEntity } from "../types"

// @ts-ignore
import songsPl from "../../words/polish/songs/songs.pl.yml"

const DEFAULT_COMPLEXITY = 40;

const prepareData = () => {
    return Object.keys(songsPl).map(e => ({
        meaning: songsPl[e].meaning,
        example: songsPl[e].example,
        word: e,
        tags: songsPl[e].tags,
        complexity: DEFAULT_COMPLEXITY
    }))
}

const Data = prepareData()

export default Data

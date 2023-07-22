import { entity } from "../types"
import { rawEntity } from "../types"

const rawData: rawEntity[] =
    [
        {
            meaning: "The crux or central point of a matter",
            example: "The [...] of the problem lies elsewhere",
            word: "Nub",
            tags: ["brickleberry"]
        },
        {
            meaning: "A hard grey rock consisting of nearly pure silica (chert), occurring chiefly as nodules in chalk",
            example: "Houses built of brick and [...]",
            word: "Flint",
            tags: ["brickleberry"]
        },
        {
            meaning: "A woman who serves as an adult leader or supervisor of a cub scout den",
            example: "The official [...] climbed slowly, carrying a heavy hamper of food.",
            word: "Den mother",
            tags: ["brickleberry"]
        },
        {
            meaning: "A state of total disorder",
            example: "My career was in a [...]",
            word: "Shambles",
            tags: ["brickleberry"]
        },
        {
            meaning: "Comfortable, warm, and cosy",
            example: "She had to stay in her [...] bed until the last second",
            word: "Snuggly",
            tags: ["brickleberry"]
        },
        {
            meaning: "A large farm, especially in North America or Australia, where cattle or other animals are bred",
            example: "A beef cattle [...]",
            word: "Ranch",
            tags: ["brickleberry"]
        },
        {
            meaning: "Agreeing with or consenting to a statement or request; Supportive, hopeful, or encouraging",
            example: "An [...] answer",
            word: "Affirmative",
            tags: ["brickleberry"]
        },
        {
            meaning: "The health, happiness, and fortunes of a person or group",
            example: "They don't give a damn about the [...] of their families",
            word: "Welfare",
            tags: ["brickleberry"]
        },
        {
            meaning: "A small axe with a short handle for use in one hand",
            example: "If you are a boy, go and get your [...]",
            word: "Hatchet",
            tags: ["brickleberry"]
        },
        {
            meaning: "A dish of cooked meat cut into small pieces and cooked again, usually with potatoes; To do something very badly",
            example: "He made a complete [...] of the last question",
            word: "Hash",
            tags: ["brickleberry"]
        },
        {
            meaning: "A fence or boundary formed by closely growing bushes or shrubs; A way of protecting oneself against financial loss or other adverse circumstances",
            example: "A privet [...]; Index-linked gilts are a useful [...] against inflation",
            word: "Hedge",
            tags: ["brickleberry"]
        },
        {
            meaning: "(of an item of food) having the cavity filled with a savoury or sweet mixture",
            example: "[...] green peppers",
            word: "Stuffed",
            tags: ["brickleberry"]
        },
        {
            meaning: "Rubbish such as paper, cans, and bottles left lying in an open or public place; Number of young animals born to an animal at one time",
            example: "Always clear up after a picnic and never drop [...]",
            word: "Litter",
            tags: ["brickleberry"]
        },
        {
            meaning: "A minor wrongdoing",
            example: "The player can expect a suspension for his latest [...]",
            word: "Misdemeanor",
            tags: ["brickleberry"]
        },
        {
            meaning: "In a way that is against the rules of a religion or morally wrong",
            example: "Even those projects that were successful were [...] wasteful.",
            word: "Sinfully",
            tags: ["shiki"]
        },
        {
            meaning: "Move in a quivering way; flicker; Become weaker; falter.",
            example: "The flame [...] in the draught",
            word: "Waver",
            tags: ["shiki"]
        },
        {
            meaning: "Pull or knock down (a building)",
            example: "The house was [...] to make way for the shopping centre",
            word: "Demolished",
            tags: ["shiki"]
        },
        {
            meaning: "Unfair play in a game or sport",
            example: "The referee sent off two players for [...]",
            word: "Foul play",
            tags: ["shiki"]
        },
        {
            meaning: "(of something intended to be entertaining) uninspiring and dull",
            example: "I found the programme pretty [...] and not very informative",
            word: "Lame",
            tags: ["shiki"]
        },
        {
            meaning: "A strip of plastic, metal, or wood with a row of narrow teeth, used for untangling or arranging the hair.",
            example: "She [...] her hair and put some lipstick on",
            word: "Comb",
            tags: ["shiki"]
        },
        {
            meaning: "Begin a journey",
            example: "They [...] together in the small car",
            word: "Set off",
            tags: ["shiki"]
        },
        {
            meaning: "Changing frequently, especially as regards one's loyalties or affections",
            example: "Celebs trying to appeal to an increasingly [...] public",
            word: "Fickle",
            tags: ["shiki"]
        },
    ]


const DEFAULT_COMPLEXITY = 40;

const prepareData = (rawData:rawEntity[]) => {

    return rawData.map(e => ({...e, complexity: DEFAULT_COMPLEXITY}))
}

const Data = prepareData(rawData)

export default Data

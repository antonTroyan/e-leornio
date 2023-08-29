import { entity } from "../types"
import { rawEntity } from "../types"

// @ts-ignore
import wordsYml from "words.holder.yml"

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
        {
            meaning: "(of land) too poor to produce much or any vegetation",
            example: "The plains of Kyrenia were [...]",
            word: "Barren",
            tags: ["shiki"]
        },
        {
            meaning: "Walk in a specified way",
            example: "Rosa [...] as lightly as she could",
            word: "Trod",
            tags: ["shiki"]
        },
        {
            meaning: "Have a harmonious or friendly relationship",
            example: "They seem to [...] pretty well",
            word: "Get along",
            tags: ["shiki"]
        },
        {
            meaning: "Cause to feel sudden shock or alarm",
            example: "A sudden sound in the doorway [...] her",
            word: "Startle",
            tags: ["shiki"]
        },
        {
            meaning: "The action of getting rid of a troublesome or unwanted person or thing",
            example: "The new movement emphasized discipline, not [...] or punishment as a method of solving the criminal problem",
            word: "Riddance",
            tags: ["weird_al_yankovic"]
        },
        {
            meaning: "(of two people) meet or form a relationship; link someone or something to an object",
            example: "He [...] with a friend in Budapest",
            word: "Hook up",
            tags: ["weird_al_yankovic"]
        },
        {
            meaning: "The technical skill of a jazz or rock musician; a person's or animal's mouth or jaws",
            example: "When I'm on tour my [...] go down",
            word: "Сhops",
            tags: ["weird_al_yankovic"]
        },
        {
            meaning: "Saliva falling from the mouth",
            example: "A fine trickle of [...] leaked from the corner of his mouth",
            word: "Drool",
            tags: ["weird_al_yankovic"]
        },
        {
            meaning: "A small flow of liquid",
            example: "A [...] of blood",
            word: "Trickle",
            tags: ["weird_al_yankovic"]
        },
        {
            meaning: "Heavy-duty waterproof cloth, originally of tarred canvas",
            example: "A stretch of roof is covered with [...]",
            word: "Tarpaulin",
            tags: ["weird_al_yankovic"]
        },
        {
            meaning: "A firm rejection or dismissal",
            example: "I am concerned that audiences might give the film a [...]",
            word: "Hard pass",
            tags: ["weird_al_yankovic"]
        },
        {
            meaning: "A light blow or a jolting collision",
            example: "A nasty [...] on the head",
            word: "Bump",
            tags: ["weird_al_yankovic"]
        },
        {
            meaning: "Push or shake (someone or something) abruptly and roughly",
            example: "A surge in the crowd behind him [...] him forwards",
            word: "Jolt",
            tags: ["weird_al_yankovic"]
        },
        {
            meaning: "Pieces of grain husk separated from flour after milling",
            example: "Oat [...]",
            word: "Bran",
            tags: ["weird_al_yankovic"]
        },
        {
            meaning: "Lose or be deprived of (property or a right or privilege) as a penalty for wrongdoing",
            example: "Those unable to meet their taxes were liable to [...] their estates",
            word: "Forfeit",
            tags: ["jujutsu_kaisen"]
        },
        {
            meaning: "Leave (a place that one previously occupied)",
            example: "Rooms must be [...] by noon on the last day of your holiday",
            word: "Vacate",
            tags: ["jujutsu_kaisen"]
        },
        {
            meaning: "Lose sleep over something; exp. worry about something;",
            example: "Quite [...] everything",
            word: "Snap over",
            tags: ["jujutsu_kaisen"]
        },
        {
            meaning: "Not sufficiently strict, severe, or careful",
            example: "[...] security arrangements at the airport",
            word: "Lax",
            tags: ["jujutsu_kaisen"]
        },
        {
            meaning: "To move from one place to another without any particular purpose or energy, because you are unhappy or disappointed",
            example: "He was driving me crazy, [...] the house all day.",
            word: "Mope around",
            tags: ["jujutsu_kaisen"]
        },
        {
            meaning: "To criticize someone harshly",
            example: "My father gave me a [...] for coming home late",
            word: "Give someone a roasting",
            tags: ["jujutsu_kaisen"]
        },
        {
            meaning: "The expression of sorrow for someone's death",
            example: "She's still in [...] after the death of her husband",
            word: "Mourning",
            tags: ["jujutsu_kaisen"]
        },
        {
            meaning: "Severe suffering or privation",
            example: "Intolerable levels of hardship",
            word: "Hardship",
            tags: ["jujutsu_kaisen"]
        },
        {
            meaning: "The quality or power that something or someone has that makes it, him, or her attractive",
            example: "He could not resist the [...] of great riches.",
            word: "Lure",
            tags: ["jujutsu_kaisen"]
        },
        {
            meaning: "A trace of a bad or undesirable substance or quality",
            example: "The lingering [...] of creosote",
            word: "Taint",
            tags: ["jujutsu_kaisen"]
        },
        {
            meaning: "Arrogantly superior and disdainful.",
            example: "A look of haughty disdain",
            word: "Haughty",
            tags: ["jujutsu_kaisen"]
        },
        {
            meaning: "A stake is a wooden stick, sharpened on one end and used to mark property lines (or slay a vampire).",
            example: "The corner of the lot was indicated by a [...]",
            word: "Stake",
            tags: ["hells_paradise"]
        },
        {
            meaning: "The criminal act of deliberately setting fire to property",
            example: "Police are treating the fire as [...]",
            word: "Arson",
            tags: ["hells_paradise"]
        },
]


const DEFAULT_COMPLEXITY = 40;

const prepareData = (rawData:rawEntity[]) => {

    const result = Object.keys(wordsYml).map(e => ({
        meaning: wordsYml[e].meaning,
        example: wordsYml[e].example,
        word: e,
        tags: wordsYml[e].tags,
        complexity: DEFAULT_COMPLEXITY
    }))
    return result

    // return rawData.map(e => ({...e, complexity: DEFAULT_COMPLEXITY}))
}

const Data = prepareData(rawData)

export default Data

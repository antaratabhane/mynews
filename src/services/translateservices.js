const cache = {}
export async function translate(text, target_lang){
    if(!text) return text

    const key = `${text}_${target_lang}`
    if(cache[key]) return cache[key]

    try {
        const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${target_lang}&dt=t&q=${encodeURIComponent(text)}`)
        const data = await res.json()
        cache[key] = data[0][0][0]
        console.log(cache[key])
        return cache[key]
    } catch (error) {
        console.error("failed to translate", error)
        return text
    }
}

export async function translateCard(cards, target_lang="hi"){
    return await Promise.all(
        cards.map(async(card) => ({...card,
        title: await translate(card.title, target_lang),
        description: await translate(card.description, target_lang)
        }
    ) 
    ))
}
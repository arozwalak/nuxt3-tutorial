export default defineEventHandler(async (event) => {

    // handle query params
    // const { name } = getQuery(event)

    // handle body params
    // const { age } = await readBody(event)
    const { currencyApiKey } = useRuntimeConfig()

    const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyApiKey}`)

    return data;
})
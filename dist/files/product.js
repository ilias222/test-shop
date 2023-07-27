let localProduct = []
let i = 0
export function LocalProduct (link) {
    localProduct.push({
        image: `${link}`,
        id: `local${i}`
    })
    i++
    console.log(localProduct)
}
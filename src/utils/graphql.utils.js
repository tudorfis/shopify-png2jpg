import { gql, useQuery } from "@apollo/client"
import * as objectUtils from '/src/utils/object.utils'

export function fetch(query) {
    const FETCH_QUERY = gql``
    // const { loading, data } = useQuery(GET_PRODUCTS_QUERY)

    // if (loading) return <Page>Loading...</Page>

    // const products = gqlutils.extractEdges(data, 'products')
    // gqlutils.extractInnerEdges(products, 'images')
}

export function query() {
    return `
        ${arguments[0]}    
        {
            edges {
                node {
                    ${arguments[1]}
                }
            }
        }
    `
}

export function extractEdges(obj = {}, objkey = {}, props = ['edges', 'node']) {
    return objectUtils.deepclone(obj[objkey][props[0]].map(item => item[props[1]]))
}

export function extractInnerEdges(arr = [], objkey = {}, props = ['edges', 'node']) {
    arr.forEach(item => item[objkey] = extractEdges(item, objkey, props))
}

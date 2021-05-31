
const API_URL = 'http://localhost:5001/'

// default get/set

const getFromAPIFunc = (request: string) => {

    const getCall = async (setter?: Function, parameters: Object = {}, loading?: Function, callback?: Function) => {
        const response = await fetch(`${API_URL}${request}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(parameters)
            })

        if (setter && response.status !== 404 && response.status !== 520) {
            
            const parsedResponse = await response.json()
            setter(parsedResponse)
            if (callback) callback(parsedResponse)
        
        }
        if (loading) loading(false)
        return response
    }
    return getCall

}

const REQUESTS = [
    'setPaitent',
    'getPaitent',
    'getPaitentCode',
    'getPaitentFromCode'
]

var calls: {[key: string]: Function} = {}

for (const key of REQUESTS) {
    calls[key] = getFromAPIFunc(key)
}

export default calls
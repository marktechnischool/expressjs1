const awesomeKey = process.env.API_TOKEN

const authenticateApiKey = (req, resp, next) => {
    const apiKey = req.get('x-api-key')

    if(!apiKey || apiKey !== awesomeKey) {
        return resp.status(401).json({
            error: "Unauthorized"
        })
    }

    next()
}

module.exports = {
    authenticateApiKey
}
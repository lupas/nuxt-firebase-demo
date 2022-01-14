const middleware = {}

middleware['testMiddleware'] = require('../middleware/testMiddleware.ts')
middleware['testMiddleware'] = middleware['testMiddleware'].default || middleware['testMiddleware']

export default middleware

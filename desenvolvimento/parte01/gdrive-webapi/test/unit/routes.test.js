import {
    describe,
    test,
    expect,
    jest
} from '@jest/globals'
import Routes from './../../src/routes.js'

describe('#Route test suite', () => {

    describe('#setSocketInstance', () => {
        test('setSocket should store io instance', () => {
            const routes = new Routes()
            const ioObj = {
                to: (id) => ioObj,
                emit: (event, message) => {}
            }

            routes.setSocketInstance(ioObj)
            expect(routes.io).toStrictEqual(ioObj)
        })
    })

    describe('#handler', () => {
        const defaultParams = {
            request: {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                method: '',
                body: {}
            },
            response: {
                setHeader: jest.fn(),
                writeHead: jest.fn(),
                end: jest.fn()
            },
            values: () => Object.values(defaultParams)
        }

        test('given an inexistent route is should choose default route', () => {
            const routes = new Routes()
            const params = {
                ...defaultParams
            }

            params.request.method = 'inexistent'
            routes.handler(...params.values())
            expect(params.response.end).toHaveBeenCalledWith('Hello World')
        })

        test('it should set any request with CORS enabled', () => {
            const routes = new Routes()
            const params = {
                ...defaultParams
            }

            params.request.method = 'inexistent'
            routes.handler(...params.values())
            expect(params.response.setHeader)
                .toHaveBeenCalledWith('Access-Control-Allow-Origin', '*')
        })

        test('given method OPTIONS it should choose options route', async() => {
            const routes = new Routes()
            const params = {
                ...defaultParams
            }

            params.request.method = 'OPTIONS'
            await routes.handler(...params.values())
            expect(params.response.writeHead).toHaveBeenCalledWith(204)
            expect(params.response.end).toHaveBeenCalled()
        })

        test('given method OPTIONS it should choose post route', async() => {
            const routes = new Routes()
            const params = {
                ...defaultParams
            }

            params.request.method = 'POST'
            jest.spyOn(routes, routes.post.name).mockResolvedValue()

            await routes.handler(...params.values())
            expect(routes.post).toHaveBeenCalled()
        })

        test('given method OPTIONS it should choose get route', async() => {
            const routes = new Routes()
            const params = {
                ...defaultParams
            }

            params.request.method = 'GET'
            jest.spyOn(routes, routes.get.name).mockResolvedValue()

            await routes.handler(...params.values())
            expect(routes.get).toHaveBeenCalled()
        })
    })

    describe('#get', () => {
        test.skip('given method GET it should list all files downloaded', () => {

        })
    })
})
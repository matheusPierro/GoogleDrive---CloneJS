import {
    describe,
    test,
    expect,
    jest
} from '@jest/globals'
import fs from 'fs'
import FileHelper from '../../src/fileHelper.js'
import Routes from './../../src/routes.js'

describe('#Routes Integration Test', () => {

    describe('#getFileStatus', () => {
        test('should upload file to the folder', async() => {
            const filename = 'miranha.jpg'
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
        })
    })
})
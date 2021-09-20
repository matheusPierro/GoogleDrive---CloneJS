import {
    describe,
    test,
    expect,
    jest
} from '@jest/globals'
import fs from 'fs'
import FileHelper from '../../src/fileHelper.js'

import Routes from './../../src/routes.js'
import FormData from 'form-data'
import TestUtil from '../_util/testUtil.js'

describe('#Routes Integration Test', () => {

    describe('#getFileStatus', () => {
        test('should upload file to the folder', async() => {
            const filename = 'miranha.jpg'
            const fileStream = fs.createReadStream(`./test/integration/mocks/${filename}`)
            const response = TestUtil.generateWritableStream(() => {})

            const form = new FormData()
            form.append('photo', fileStream)

            const defaultParams = {
                request: Object.assign(form, {
                    headers: form.getHeaders(),
                    method: 'POST',
                    url: '?socketId=10'
                }),
                response: Object.assign(response, {
                    setHeader: jest.fn(),
                    writeHead: jest.fn(),
                    end: jest.fn()
                }),
                values: () => Object.values(defaultParams)
            }
        })
    })
})
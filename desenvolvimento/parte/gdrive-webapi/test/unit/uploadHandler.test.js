import {
    describe,
    test,
    expect,
    jest
} from '@jest/globals'
import Routes from './../../src/routes.js'

describe('#UploadHandler test suite', () => {
    const ioObj = {
        to: (id) => ioObj,
        emit: (event, message) => {}
    }

    describe('#registerEvents', () => {
        test.todo('should call onFile and onFinish functions on Busboy instance', () => {

        })

    })
})
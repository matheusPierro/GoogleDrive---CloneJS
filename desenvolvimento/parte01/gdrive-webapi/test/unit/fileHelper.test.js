import {
    describe,
    test,
    expect,
    jest
} from '@jest/globals'
import fs from 'fs'
import FileHelper from '../../src/fileHelper.js'
import Routes from './../../src/routes.js'

describe('#FileHelper', () => {

    describe('#getFileStatus', () => {
        test.todo('it should return files statuses in correct format', () => {
            const statMock = {
                dev: 2352777603,
                mode: 33206,
                nlink: 1,
                uid: 0,
                gid: 0,
                rdev: 0,
                blksize: 4096,
                ino: 1125899906849371,
                size: 52215,
                blocks: 104,
                atimeMs: 1631745823508.0232,
                mtimeMs: 1631745822864.0002,
                ctimeMs: 1631745822864.0327,
                birthtimeMs: 1631745703311.0276,
                atime: '2021-09-15T22:43:43.508Z',
                mtime: '2021-09-15T22:43:42.864Z',
                ctime: '2021-09-15T22:43:42.864Z',
                birthtime: '2021-09-15T22:41:43.311Z'
            }

            const mockUser = 'matheusPierro'
                // process.env.USER = mockUser
            const fileName = 'spider.jpg'
            jest.spyOn(fs.promises, fs.promises.stat.name)
                .mockResolvedValue(statMock)

            const result = await FileHelper
            const expectedResult = [{
                size: "5 kb",
                birthtime: statMock.birthtime,
                owner: mockUser,
                file: fileName
            }]
        })
    })
})
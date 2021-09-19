import Busboy from 'busboy'
import fs from 'fs'
import { emit } from 'process'
import { pipeline } from 'stream/promises'
import { logger } from './logger'
export default class UploadHandler {
    constructor({ io, socketId, downloadsFolder, messageTimeDelay = 200 }) {
        this.io = io,
            this.socketId = socketId,
            this.downloadsFolder = downloadsFolder,
            this.ON_UPLOAD_EVENT = 'file-upload',
            this.messageTimeDelay = messageTimeDelay
    }

    canExecute(lastExecution) {
        return (Date.now() - lastExecution) > this.messageTimeDelay
    }

    handleFileBytes(filename) {
        this.lastMessageSent = Date.now()

        async function* handleData(source) {
            let processedAlredy = 0

            for await (const chunk of source) {
                yield chunk

                processedAlredy += chunk.length
                if (!this.canExecute(this.lastMessageSent)) {
                    continue
                }

                this.io.to(this.socketId).emit(this.ON_UPLOAD_EVENT, { processedAlredy, filename })
                logger.info(`File [${filename}] got ${processedAlredy} bytes to ${this.socketId}`)
            }
        }

        return handleData.bind(this)
    }
    async onFile(fieldname, file, filename) {
        const saveTo = `${this.downloadsFolder}/${filename}`

        await pipeline(
            file,
            this.handleFileBytes.apply(this, [filename]),
            fs.createWriteStream(saveTo)
        )

        logger.info(`File [${filename}] finished`)
    }

    registerEvents(headers, onFinish) {
        const busboy = new Busboy({ headers })
        busboy.on("file", this.onFile.bind(this))
        busboy.on("finish", onFinish)

        return busboy
    }

}
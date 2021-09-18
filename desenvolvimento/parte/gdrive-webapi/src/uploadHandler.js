import Busboy from 'busboy'
import { pipeline } from 'stream/promises'
export default class UploadHandler {
    constructor({ io, socketId, downloadsFolder }) {
        this.io = io,
            this.socketId = socketId,
            this.downloadsFolder = downloadsFolder
    }

    handleFileBytes() {

    }
    async onFile(fieldname, file, filename) {
        await pipeline
    }

    registerEvents(headers, onFinish) {
        const busboy = new Busboy({ headers })
        busboy.on("file", this.onFile.bind(this))
        busboy.on("finish", onFinish)

        return busboy
    }

}
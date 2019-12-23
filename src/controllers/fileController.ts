import { Post, Request, Response, Route, SuccessResponse, Tags } from 'tsoa'
import * as express from 'express'
import * as multer from 'multer'
// import { StatusError } from '../models/StatusError'

@Route('files')
export class FilesController {
  @Tags('File')
  @SuccessResponse('204', 'successful')
  @Response('400', 'invalid file supplied')
  @Post('uploadFile')
  public async uploadImageFile (@Request() request: express.Request): Promise<void> {
    await this.handleFile(request, 'imageFile', 'zip', 'tmp', 'img.zip')
    // file will be in request.imageFile, it is a buffer
  }
  private async handleFile (request: express.Request,
                            requestField: string,
                            filterExt: string,
                            storePath: string,
                            fileName?: string): Promise <void> {

          console.log("Le fichier est bien au format attendu");


  }
}

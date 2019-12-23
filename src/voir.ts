
uploadImageFile () {
  return callback(new Error(‘Only zip files are allowed!’), false) }
   callback(null, true) } // store at disk


///
///
///  STUPID
///
///

uploadImageFile () {
   return callback(new Error(‘Only zip files are allowed!’), false)
}
callback(null, true) } // store at disk

    const storage = multer.diskStorage({
      destination: (req, file, callback) => {callback(null, `${storePath}/`) },
      filename: (req, file, callback) => { callback(null, fileName ? fileName : file.originalname) }
      }
    )
    const upload = multer({ storage, fileFilter })
    const multerSingle = upload.single(requestField)
    try {
      await new Promise(async (resolve, reject) => {
        try {
          multerSingle(request, undefined, async (error) => {
            if (error) { reject(error) } resolve()
            }
          )
        }
        catch (error) {
          reject(error)
        }
      })
    }
    catch (error) {
      throw new StatusError(400, ‘invalid upload’, error.toString())
    }
  }
}

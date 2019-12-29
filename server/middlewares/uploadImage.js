const gcsUpload = require('../gcs-upload')

module.exports = gcsUpload({
  limits: {
    fileSize: 0.5e7, // in bytes => 5MB
  },
  gcsConfig: {
    keyFilename: process.env.KEY_FILENAME,
    bucketName: process.env.BUCKET_NAME,
  },
})

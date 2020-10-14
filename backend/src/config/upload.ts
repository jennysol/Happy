import { request } from 'express';
import multer from  'multer';
import path from 'path' // forma de lidar com caminhos alternativos no node

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..','..', 'uploads'),
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;

      cb(null, fileName);
    },
  })
};
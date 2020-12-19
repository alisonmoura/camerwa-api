import mongoose from 'mongoose';

const {
  DB_PROTOCOL,
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_OPTIONS
} = process.env;

export default class DB {
  static connect() {
    const url = `${DB_PROTOCOL}://${DB_USER ? DB_USER + ':' : ''}${
      DB_PASS ? DB_PASS + '@' : ''
    }${DB_HOST}${DB_PORT ? ':' + DB_PORT : ''}/${DB_NAME}${
      DB_OPTIONS ? '?' + DB_OPTIONS : ''
    }`;

    return mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true
    });
  }
}

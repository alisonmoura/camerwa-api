import mongoose from 'mongoose';

export default mongoose.model('Photo', {
  filename: {
    type: String,
    require: true
  }
});

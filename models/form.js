import mongoose , {Schema} from 'mongoose';

const formSchema = new Schema({
  name: String,
  email: String,
  interested: String,
  githubLink: String,
  domain: String,
});

const Form = mongoose.models.Form || mongoose.model('Form', formSchema);

export default Form;
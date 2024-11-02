import mongoose, { Document, Model, Schema } from "mongoose";

interface IHadith extends Document {
  hadith: string;
  narrator: string;
  source: string;
  reference: string;
}

const hadithSchema: Schema<IHadith> = new mongoose.Schema({
  hadith: { type: String, required: true },
  narrator: { type: String, required: true },
  source: { type: String, required: true },
  reference: { type: String, required: true },
});

const Hadith: Model<IHadith> =
  mongoose.model < IHadith > ("Hadith", hadithSchema);

export default Hadith;

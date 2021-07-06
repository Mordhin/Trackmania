import mongoose from "mongoose";

const sessionSchema = mongoose.Schema({
  date: String /* temporary */,
  duration: Number,
  cardios: [
    {
      activity: String,
      distance: Number,
      duration: Number,
    },
  ],
  strengths: [
    {
      activity: String,
      duration: Number,
      series: [
        {
          weight: Number,
          repetition: Number,
        },
      ],
    },
  ],
  name: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Session = mongoose.model("Session", sessionSchema);

export default Session;

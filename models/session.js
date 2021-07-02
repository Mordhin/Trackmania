import mongoose from "mongoose";

const sessionSchema = mongoose.Schema({
  date: String /* temporary */,
  duration: Number,
  activities: {
    cardio: [
      {
        duration: Number,
        activity: String,
        distance: Number,
      },
    ],
    strength: {
      duration: Number,
      strActivities: [
        {
          activity: String,
          series: [
            {
              weight: Number,
              repetition: Number,
            },
          ],
        },
      ],
    },
  },
  name: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Session = mongoose.model("Session", sessionSchema);

export default Session;

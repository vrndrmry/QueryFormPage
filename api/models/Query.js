import mongoose from "mongoose";
var { Schema } = mongoose;

const QueryFormSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
    },
    phoneNumber: {
      type: Number,
      required: true,
      min: 10,
    },
    highestQualification: {
      type: Object,
      description: "Terms and conditions",
      properties: {
        whatsApp: {
          type: Boolean,
          description: "I want to receive updates directly on WhatsApp",
        },
        privacyPolicy: {
          type: Boolean,
          description:
            "I hereby agree to the Terms & Conditions and Privacy Policy of Sepnoty",
        },
      },
    },
  },
  { timestamps: true }
);


const QueryModel = new mongoose.model("QueryModel",QueryFormSchema)

export default QueryModel
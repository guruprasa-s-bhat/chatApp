const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

// Define indexes
chatModel.index({ users: 1 }); // Creates an index on the users field
chatModel.index({ isGroupChat: 1 }); // Creates an index on the isGroupChat field

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;

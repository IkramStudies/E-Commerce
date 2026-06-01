import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: String,
  id: Number,
  number: Number,
  address: String,
  paymentMode: String,
  summary: Array,
  total: Number,
});

const Order = mongoose.model("Order", orderSchema);
export default Order;

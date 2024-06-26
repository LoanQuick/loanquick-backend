import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
    {
        client_id: {
            type: mongoose.Schema.ObjectId,
            required: [true, "Please enter your client id"]
        },
        vendor_id: {
            type: String,
        },
        vendor_name: {
            type: String,
        },
        total: {
            type: Number,
        },
        date: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

export const Invoice = mongoose.models.invoice || mongoose.model("invoice", invoiceSchema);

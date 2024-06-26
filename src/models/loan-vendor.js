import mongoose from "mongoose";

const loanVendorSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please enter your email"],
        },
        image: {
            type: String,
            default: "",
        },
        name: {
            type: String,
        },
        logo: {
            type: String,
        },
        approval_rate: {
            type: String,
            enum: ["Bad", "Medium", "Excellent"],
        },
        max_loan_amount: {
            type: Number,
        },
        min_rate: {
            type: Number,
        },
        tenure_in_months: {
            type: Number,
        },
        processing_fee: {
            type: Number,
        },
        redirect_url: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const LoanVendor =
    mongoose.models.loanVendor ||
    mongoose.model("loanVendor", loanVendorSchema);

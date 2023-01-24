const mongoose = require('mongoose')

const BalanceSchema = mongoose.Schema(
    {
        descripcion: {
            type: String,
            required: true,
        },
        tipo: {
            type: String,
            required: true,
        },
        monto: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

const Balance = mongoose.model('Balance', BalanceSchema)

module.exports = Balance
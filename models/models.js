const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AssetSchema = new Schema({
    name:{ //Name Of Asset
        type: String
    },
    class:{ //Class of Asset 
        type: String
    },
    asset_date:{ // Year Asset Had Been Purchased
        type: Date
    },
    SKU:{ //Stock Keeping Unit Of Asset
        type: String
    },
    description:{ //Description Of Asset
        type: String
    },
    Date: { //Date Automated For Entry
        type: Date,
        default: Date.now

    }
})

module.exports = mongoose.model('Asset',AssetSchema);
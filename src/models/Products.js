const moongose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProducstSchema = new moongose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

moongose.plugin(mongoosePaginate);

moongose.model('Product', ProducstSchema);
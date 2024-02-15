const mongoose= require('mongoose');
const schema= mongoose.Schema;

const TodoSchema = new schema({
    userId :{
        type: schema.Types.ObjectId,
        ref:"User",
        require:true,
    },
    title :{
        type:String,
        require:true,
    },
    completed:{
        type: Boolean,
        default:false,
    },
},{timestamps:true});

module.exports = mongoose.model('Todo',TodoSchema);
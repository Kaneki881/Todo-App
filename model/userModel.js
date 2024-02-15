const mongoose= require('mongoose');
const bcrypt=require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
},{timestamps:true});

UserSchema.pre("save",async (next) => {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
});

module.exports = mongoose.model("User",UserSchema);
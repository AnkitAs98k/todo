import mongoose,{ Schema} from "mongoose";
import bcrypt from "bcrypt"


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase:true,
        required:true,
        trim:true,
         unique:true
    },
    email:{
        type:String,
        lowercase:true,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    
});

userSchema.pre("save",async function(){
    if(!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password,10);
    
})


userSchema.methods.isPasswordCorrect = async function (password) {
     return await bcrypt.compare(password,this.password)
}

export const User = mongoose.model("User", userSchema);
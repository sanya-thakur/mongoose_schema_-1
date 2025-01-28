const mongoose= require('mongoose');

const userSchema= new mongoose.Schema({
    user_fields: {
        username: {
            type: String, 
            required: true, 
            unique: true,
        },
        email: {
            type: String, 
            required: true,
            unique: true,
        },
        password: {
            type: String, 
            required: true, 
        },
        roles: {
            type: [String],
        }
    },
    profile_fields: {
        firstname: {
            type: String, 
        },
        lastname:{
            type: String, 
        },
        age:{
            type: Number,
        }
    },
    activity_tracking: {
        last_login:{
            type: Date,
        }
    }
})

module.exports=mongoose.model('User', userSchema);
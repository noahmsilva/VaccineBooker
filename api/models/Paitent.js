import mongoose from 'mongoose'

const Paitent = mongoose.model('Paitent', {
    
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    healthId: {type: Number, required: true}

})

export default Paitent
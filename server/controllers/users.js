import User from "../models/User";

/*READ */
export const getUser = async(req, res) =>{
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch{
        res.status(404).json({message: err.message})
    }
}
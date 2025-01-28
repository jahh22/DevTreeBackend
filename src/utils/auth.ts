import bcrypt, { compare } from 'bcrypt'

export const hashPassword = async (password: string) =>{
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
    
}

export const checkPaswword = async (enteredPasword: string , hash: string) => {
    return bcrypt.compare(enteredPasword, hash)

}
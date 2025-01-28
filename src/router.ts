import { Router } from 'express'
import { createAcount, getUser, getUserbyHandle, login, updateProfile, uploadImage } from './handlers'
import { body } from 'express-validator'
import { handleImportErrors } from './middellware/validation'
import { autenticate } from './middellware/auth'

const router = Router()

//Routing
router.post('/auth/register',
    body('handle')
        .notEmpty()
        .withMessage('El hndle no puede ir vacio'),
    body('name')
        .notEmpty()
        .withMessage('El nomnbre no puede ir vacio'),
    body('email')
        .isEmail()
        .withMessage('E-mail no valido'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password no valido, minimo 8 caracteres'),
    handleImportErrors,
    createAcount
)

router.post('/auth/login',
    body('email')
        .isEmail()
        .withMessage('E-mail no valido'),
    body('password')
        .notEmpty()
        .withMessage('Password es obligatorio'),
    handleImportErrors,
    login

)

router.get('/user', autenticate, getUser)

router.patch('/user',
    body('handle')
        .notEmpty()
        .withMessage('El hndle no puede ir vacio'),
    body('description')
        .notEmpty()
        .withMessage('La descripcion no puede ir vacio'),
    handleImportErrors,
    autenticate,
    updateProfile
)


router.post('/user/image', autenticate, uploadImage)

router.get('/:handle', getUserbyHandle)


export default router
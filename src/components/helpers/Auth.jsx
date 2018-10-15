
import {usuarios} from '../../Data/usuarios.json'
import App from '../../components/'

let authed = false
let listausuarios = usuarios
let listaexternos = []
//const {listausuarios} = usuarios
const loginUser =  (e, p)=>{ 
    authed = false    
    authed = getListaUsers().find(u=>(u.correo === e && u.pass === p))  && true
    actualizarExternos()
    
    
}
const incluirExterno = (fn)=>listaexternos.push(fn)
const actualizarExternos = ()=>{
    listaexternos.map((ob)=>ob.fn.call(ob.escope))
}
const saveUser = (e,p)=>{
    console.log("llega")
    let user = {
        id:'id',
        pass:p,
        correo:e
    }
    listausuarios.push(user)
    authed = true
    
}
const logout = ()=> authed = false

const isLogued = ()=>authed

const changePassword = (email, pass)=>{
    let cambio = false
    listausuarios =  listausuarios.map(u=>{
        u.correo === email &&  pass && ((u.pass = pass) && (cambio = true))
    })

    return cambio
}
const getListaUsers = ()=>listausuarios



export {
    loginUser,
    saveUser,
    logout,
    isLogued,
    changePassword,
    getListaUsers,
    incluirExterno
}

    

    
   

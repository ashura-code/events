import Cookies from "js-cookie"




export function setToken(data) {
    console.log("came to setToken")
    

    if(typeof window === "undefined"){ 
        console.log("window is undefined")
        return;
    }
   
    console.log(data)
    Cookies.set('id',data.user.id)
    Cookies.set('username',data.user.username)
    Cookies.set('jwt',data.jwt)
    console.log("cookies have been set")


    if(Cookies.get('username')){ 
        console.log("username available , should redirect to home page")
        window.location.href = '/'; 
        console.log("success")
    }

};

export const unsetToken = ()=>{ 
    console.log("reached unset Token")

    if(typeof window === "undefined"){ 
        console.log("window is undefined")
        return;
        
    }

    console.log("before removing cookies")

    Cookies.remove('id')
    Cookies.remove('username')
    Cookies.remove('jwt')
    console.log("cookies removed")

    window.location.href = '/';

};


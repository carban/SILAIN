class Auth{
    constructor(){
        this.authenticated = localStorage.getItem('session') || null;
    }

    login(obj, cb){
        localStorage.setItem('session', JSON.stringify(obj));
        this.authenticated = localStorage.getItem('session');
        cb();
    }

    logout(cb){
        // Debo cambiar ambos
        this.authenticated = null;
        localStorage.clear();
        cb();
    }

    isAuthenticated(){
        return this.authenticated !== null;
    }
    
    getSession(){
        return JSON.parse(this.authenticated); 
    }
}

export default new Auth();
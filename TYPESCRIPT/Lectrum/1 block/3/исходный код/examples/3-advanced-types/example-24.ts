interface Admin {
    id: string;
    role: string;
}

interface User {
    email: string;
}

function redirect(usr: Admin | User) {
    if((<Admin>usr).role !== undefined) {
        console.log(usr.role);
    } else {
        console.log(usr.email);
    }
}

interface Admin {
    id: string;
    role: string;
}

interface User {
    email: string;
}

function redirect(usr: Admin | User) {
    if(isAdmin(usr)) {
        console.log(usr.id);
    } else {
        console.log(usr.email);
    }
}

function isAdmin(usr: Admin | User): usr is Admin {
    return (<Admin>usr).role !== undefined;
}

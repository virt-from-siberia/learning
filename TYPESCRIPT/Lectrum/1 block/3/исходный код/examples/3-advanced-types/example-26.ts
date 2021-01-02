interface Admin {
    id: string;
    role: string;
}

interface User {
    email: string;
}

function redirect(usr: Admin | User) {
    if('role' in usr) {
        console.log(usr.role);
    } else {
        console.log(usr.email);
    }
}
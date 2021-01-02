namespace A {
    export namespace B {
        export const C: string = 'C';
    }
}

import C = A.B.C;

console.log(C);
{
    type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';
    type AnimationNumber = number;

    interface Animation {
        <T extends AnimationNumber>(dx: T, dy: T, easing: Easing): {
            dx:T,
            dy:T,
            easing: Easing
        }
    }

    const animate:Animation = function(dx, dy, easing) {
        return {
            dx,
            dy,
            easing
        };
    };

    animate<number>(1,2,'ease-in');
}

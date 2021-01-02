{
    interface Square {
        kind: 'square';
        size: number;
    }

    interface Rectangle {
        kind: 'rectangle';
        width: number;
        height: number;
    }

    interface Circle {
        kind: 'circle';
        radius: number;
    }

    interface myShape {
        kind: 'myShape';
        size: number;
    }

    const generateError = function(x: never): never {
        throw new Error('Unexpected object: ' + x);
    };

    type allowedShapes = Square | Rectangle | Circle | myShape;

    const area = function(s: allowedShapes): number {
        let result;

        switch (s.kind) {
            case 'square':
                result = s.size * s.size;
                break;
            case 'rectangle':
                result = s.height * s.width;
                break;
            case 'circle':
                result = Math.PI * s.radius ** 2;
                break;
            // case 'myShape':
            //     result = s.size;
            //     break;
            default:
                generateError(s);
                result = NaN;
        }

        return result;
    };

    area({
        kind: 'myShape',
        size: 0
    })
}

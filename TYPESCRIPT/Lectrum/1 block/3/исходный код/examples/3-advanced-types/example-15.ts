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

    type Shape = Square | Rectangle | Circle;

    const area = function(s: Shape): number {
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
            default:
                result = NaN;
        }
        
        return result;
    }
}
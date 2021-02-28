{
    interface ClockType {
        n: number
    }
    interface ClockConstructor {
        new(hour: number, minute: number): ClockType;
    }

    class Clock implements ClockConstructor {
        currentTime: Date;
        constructor(h: number, m: number) { }
    }
}
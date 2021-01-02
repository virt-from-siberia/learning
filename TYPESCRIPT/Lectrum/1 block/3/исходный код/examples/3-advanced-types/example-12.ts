{
    type LinkedList<T> = T | { meta: string };

    interface Teacher {
        name: string;
    }

    interface Pupil {
        group: number
    }

    const people: LinkedList<Teacher & Pupil> = {
        name: 'Oliver',
        // group: 21,
        meta: 'Some text'
    };
}

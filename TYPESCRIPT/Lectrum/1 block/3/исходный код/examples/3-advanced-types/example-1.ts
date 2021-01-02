{
    interface teacher {
        email: string
    }

    interface pupil {
        group: number
    }

    const n: teacher & pupil = {
        email: '',
        group: 1
    }
}
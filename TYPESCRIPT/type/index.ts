import RReact, { ComponentType } from 'react'
import { compose } from 'redux'



function HOC1<WP>(WrappedComponent: ComponentType<WP & { hiphop: number }>) {
    return (props: WP) => {
        return <WrappedComponent { ...props } hiphop = { 10} />
   }
}

const f1 = (a: string) => '12'
const f2 = (a: string) => '100'


// let resault = compose(
//     f2,
//     f1
// )(18)

// resault = 18
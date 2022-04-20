export const TODOS = 'TODOS'


const todos = (payload: any) => {
    return {
        type: TODOS,
        payload: payload
    }
}


export {todos};
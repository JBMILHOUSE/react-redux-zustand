import { useAppSelector } from "../store"

export function TodoList() {
    const store = useAppSelector(state => {
        return state.todo
    })

    console.log(store)
    
    return(
        <ul>
          {store.map(todo => <li key={todo}>{todo}</li>)}
        </ul>
    )
}
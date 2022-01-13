import Card from './Card.js';

const UserCard = (todos) => {

    /*const CardList = todos.todos.map((value) => {
        <li key={value.id}><Card todo={value} /></li>
        console.log(value)
    })*/
    return (
        <div>
            {todos.todos.map((todo) => {
                return (
                    <Card todo={todo} />
                )
            })}
        </div>
    )
}

export default UserCard
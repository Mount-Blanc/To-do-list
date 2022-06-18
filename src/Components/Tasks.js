import Card from './Card';
import Taskitems from './Taskitems';
function Tasks (props) {

    return(
        <Card>
{props.items.map(dummyTodo => <Taskitems task={dummyTodo.task} date={dummyTodo.date} />)} 
    </Card>
    )
}

export default Tasks;
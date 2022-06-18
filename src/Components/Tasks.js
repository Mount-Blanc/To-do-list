import Card from './Card';
import Taskitems from './Taskitems';
function Tasks (props) {

    return(
        <Card>
{props.items.map(dummyTodo => <Taskitems task={dummyTodo.task} date={dummyTodo.date} />)} 
        <div className="todo-title"> 

             <div className="todo-button" >Todo</div>
            
        
             <div className="todo-description">{}
            </div>
        
             <div>{props.date}</div>
            
        </div>
    
    </Card>
    )
}

export default Tasks;
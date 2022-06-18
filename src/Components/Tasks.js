import './Tasks.css';
import Card from './Card';

function Tasks (props) {
    return(
        <Card>
        
        <div className="todo-title"> 
        
         <div className="todo-button" >Todo</div>
            
        
         <div className="todo-description">{props.task}
            </div>
        
         <div>Due Date</div>
            
        </div>
    
    </Card>
    )
}

export default Tasks;
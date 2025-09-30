import ExistingtaskContainer from "./ExistingtaskContainer";
import NewTaskField from "./NewTaskField";

export default function TodoListContainer() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <NewTaskField />
            <ExistingtaskContainer />
        </div>
    )
}

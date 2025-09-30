import ExistingtaskContainer from "./ExistingtaskContainer";
import NewTaskField from "./NewTaskField";

export default function TodoListContainer({ isEditing }: any) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {isEditing && <NewTaskField />}
            <ExistingtaskContainer />
        </div>
    )
}

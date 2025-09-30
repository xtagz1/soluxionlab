import { useState } from "react";
import FooterActions from "../footer/FooterActions";
import Header from "../header/Header";
import TodoListContainer from "../todo-list-container/TodoListContainer";

export default function TodoContainer() {
    const [isEditing, setEditing] = useState(false)

    return (
        <div style={{ backgroundImage: '' }}>
            <div style={{ marginTop: '2%', marginBottom: '2%', marginLeft: '10%', marginRight: '10%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Header isEditing={isEditing} />
                <TodoListContainer isEditing={isEditing} />
                <FooterActions setEditing={setEditing} isEditing={isEditing} />
            </div>
        </div>
    )
}

import FooterActions from "../footer/FooterActions";
import Header from "../header/Header";
import TodoListContainer from "../todo-list-container/TodoListContainer";

export default function TodoContainer() {
    return (
        <div style={{ backgroundImage: '' }}>
            <div style={{ marginTop: '5%', marginBottom: '5%', marginLeft: '10%', marginRight: '10%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Header />
                <TodoListContainer />
                <FooterActions />
            </div>
        </div>
    )
}

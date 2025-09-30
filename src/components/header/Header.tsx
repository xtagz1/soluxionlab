
export default function Header({ isEditing }: any) {

    const header = isEditing ? 'To do list title' : 'Goals for Today'

    return (
        <div style={{ borderBottom: 'solid #B59C86 3px', color: '#0B1F5A', fontFamily: 'Crimson Text', fontSize: '70px' }}>
            {header}
        </div>
    )
}

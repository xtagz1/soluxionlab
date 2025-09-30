import DefaultActions from "./DefaultActions";
import EditingActions from "./EditingActions";

interface FooterActionsProps {
    setEditing: any;
    isEditing: boolean;
}

export default function FooterActions({ setEditing, isEditing }: FooterActionsProps) {

    return (
        <div style={{ display: 'flex', justifyContent: 'right' }}>
            {
                isEditing ? <EditingActions setEditing={setEditing} /> : <DefaultActions setEditing={setEditing} />
            }
        </div>
    )
}

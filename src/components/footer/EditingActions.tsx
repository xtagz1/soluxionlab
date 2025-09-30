import Button from "../common/Button";

export default function EditingActions({ setEditing }: any) {
    return (
        <div style={{ display: 'flex', gap: '1em' }}>
            <Button
                onClick={
                    () => setEditing(false)
                }
                borderColor=""
                background=""
                color=""
                buttonName="Cancel"
            />
            <Button
                onClick={
                    () => setEditing(false)
                }
                borderColor=""
                background=""
                color=""
                buttonName="Save"
            />
        </div>
    )
}

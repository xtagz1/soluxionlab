import Button from "../common/Button";

export default function DefaultActions({ setEditing }: any) {
    return (
        <div style={{ display: 'flex', gap: '1em' }}>
            {/* <Button
                onClick={() => null}
                borderColor=""
                background=""
                color=""
                buttonName=""
            /> */}
            <Button
                onClick={
                    () => setEditing(true)
                }
                borderColor=""
                background=""
                color=""
                buttonName="Edit"
            />
        </div>
    )
}

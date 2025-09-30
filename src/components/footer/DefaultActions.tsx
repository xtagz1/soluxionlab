import Button from "../common/Button";

export default function DefaultActions({ setEditing }: any) {
    return (
        <div>
            <Button
                onClick={
                    // () => setEditing(true)
                    () => alert('asdasd')
                }
                borderColor=""
                background=""
                color=""
                buttonName="Edit"
            />
            {/* <Button
                onClick={() => null}
                borderColor=""
                background=""
                color=""
                buttonName=""
            /> */}
        </div>
    )
}

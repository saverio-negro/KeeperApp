import "./Note.css";

function Note({ title, text }: { title: string, text: string }) {
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
}

export default Note;
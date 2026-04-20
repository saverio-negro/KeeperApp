import Header from "./Components/Header/Header.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import NoteComponent from "./Components/Note/Note.tsx";
import Note from "./Models/Note.ts";

function App() {

    const notes: Array<Note> = [
        new Note("My Next Trip", "I would like to travel to Japan, on my next trip."),
        new Note("My Favorite Dish", "I love ramen!"),
        new Note("My Beloved One", "Cassy is very special. That's so true!")
    ]

    return (
        <div>
            <Header title="Keeper" />
            {notes.map(note => <NoteComponent title={note.title} text={note.text} />)}
            <Footer author="Saverio Negro" />
        </div>
    );
}

export default App;
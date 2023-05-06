const form = document.getElementById('form');
const notesCon = document.querySelector('.notes');
const note = form['text'];
const title = form['title'];
//const clearCon = document.getElementById('con');
const clear = document.getElementById('clear');

const theNote = JSON.parse(localStorage.getItem('.notes')) || [];

const add = (note, title) => {
    theNote.push({title, note});
    localStorage.setItem('.notes', JSON.stringify(theNote));
    return{title, note};
};

const createNote = ({note, title}) => {
    const div = document.createElement('div');
    const Head = document.createElement('h1');
    const text = document.createElement('p');
    const Delete = document.createElement('img');
    const edit = document.createElement('img');

    Delete.src = 'delete.png';
    Delete.style.width = '20px';
    edit.src = 'edit.svg.png';
    edit.style.width = '20px';
    
    Head.innerText = title + ':';
    text.innerText = note;

    div.append(Head, text);
    div.appendChild(Delete);
    div.appendChild(edit);
    notesCon.appendChild(div);
    notesCon.style.display = theNote.length === 0 ? 'none': 'flex';

    Delete.onclick = function Delete(){
        notesCon.removeChild(div);
        const item = localStorage.getItem('', JSON.stringify(div));
        localStorage.removeItem(item);
    };

    edit.onclick = function Edit(){
        text.textContent = '- ' +(prompt('Edit Note'));
    };
};

notesCon.style.display = theNote.length === 0 ? 'none': 'flex';
theNote.forEach(createNote);
form.onsubmit = e =>{
    e.preventDefault();
    const newNote = add(
        note.value,
        title.value
    );

    createNote(newNote);{
        note.value = '';
        title.value = '';
    };    
};

/*clear.onclick = function clearAll(){
    notesCon.remove();
    localStorage.clear(theNote);
}*/
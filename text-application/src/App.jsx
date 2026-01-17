// filename - ./src/App.js

import './App.css';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    setText
} from './redux/features/textSlice';


function App() {

    // creating the dispatch method and fetching the text state
    const dispatch = useDispatch();
    const { text } = useSelector(state => state.text);

    // whenever we type any data on the input 
    const handleChange = (event) => {
        dispatch(setText(event.target.value?.toUpperCase()));
    }

    return (
        <>
            <div className='container'>
                <h1 id="heading">Text Application</h1>
                 <h3>Using Redux Toolkit in React.js</h3>
                <h2>
                    Text: {text}
                </h2>
                <div className='input-box'>
                    <input type="text" name='text'
                        onChange={handleChange}
                        placeholder="Enter text" />
                </div>
            </div>
        </>
    );
}

export default App;
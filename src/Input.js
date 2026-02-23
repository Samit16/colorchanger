import colorNames from 'colornames';

const Input=({
    colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText})=> {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>
                Add Color:
            </label>
            <input
                type="text"
                autoFocus
                placeholder="Add color name"
                value={colorValue}
                onChange={(e)=>{
                    setColorValue(e.target.value);
                    setHexValue(colorNames.getHex(e.target.value));
                }}
                />
                <button 
                    type='button'
                    onClick={()=> setIsDarkText(!isDarkText)}
                    >Toggle Text Color</button>
        </form>
        )
}

export default Input;
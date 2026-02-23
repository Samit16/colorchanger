
const Square=({colorValue,hexValue,isDarkText})=> {
    return (
        <section 
        className="square"
        style={{
            backgroundColor:colorValue,
            color:isDarkText?"black":"white"}}
        >
            <p>{colorValue ? colorValue:"No Color present! "}</p>
            <p>{hexValue ? hexValue:null}</p>
        </section>
    )
}
Square.defaultProps={
    colorValue:"Empty value"
}
export default Square;
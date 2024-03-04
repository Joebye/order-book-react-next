type Props = {
    options: string[];
    callbackFn: (status: string) => void;

}

const SelectStatus: React.FC<Props> = (props) => {

return <div style={{color:'white'}}> 
    <label>Select status: </label>
<select onChange={(event) => {
    props.callbackFn(event.target.value)

}}>
{props.options.map((o)=>{
    return <option>{o}</option>
})}

</select>
</div>
} 

export default SelectStatus;
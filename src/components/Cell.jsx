export default function Cell({parameters}){
    let color = "blue";
    if(parameters.terrain === "water") color = "blue"
    else if(parameters.terrain === "dirt") color = "brown"
    else if(parameters.terrain === "sand") color = "yellow"
    else if(parameters.terrain === "forest") color = "green"
    return (
        <button  className={`cell ${color}`}></button>
    )
}
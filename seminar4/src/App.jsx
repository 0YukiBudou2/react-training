export default function App(){
    const width = 500;
    const height = 500;
    const stickHeight = 30;
    const data = [
        {y : 100,value: 250,label : "A",color:"orange"},
        {y : 200,value: 200,label : "B",color:"purple"},
        {y : 300,value: 100,label : "C",color:"pink"},
        {y : 400,value: 75,label: "D",color:"skyblue"}
    ]
    return(
    <div>
        <svg width = {width} height = {height}>
            <g>
                <line x1 = "100" x2 = "100" y1 = "0" y2 = "500" stroke="black"/>
                {data.map((item) =>{
                    return(
                        <g>
                        <line x1 = "100" x2 = "90" y1 = {item.y} y2 = {item.y} stroke = "black"/>,
                        <rect x = "100" y = {item.y-stickHeight/2} width = {item.value} height = {stickHeight} fill = {item.color}/>,
                        <text x = "85" y = {item.y+5} fill = "black" textAnchor="end">{item.label}</text>
                        </g>
                    )     
                })}
            </g>  
        </svg>
    </div>
    )
    /*return(
        <div>
            <svg width = {width} height = {height}>
                <g>
                    <line x1 = "100" x2 = "100" y1 = "0" y2 = "400" stroke="black"/>
                    <line x1 = "100" x2 = "90" y1 = "100" y2 = "100" stroke = "black"/>
                    <line x1 = "100" x2 = "90" y1 = "200" y2 = "200" stroke = "black"/>
                    <line x1 = "100" x2 = "90" y1 = "300" y2 = "300" stroke = "black"/>
                    <rect x = "100" y = {100-stickHeight/2} width = "250" height = {stickHeight} fill = "orange"/>
                    <rect x = "100" y = {200-stickHeight/2} width = "200" height = {stickHeight} fill="purple"/>
                    <rect x = "100" y = {300-stickHeight/2} width = "100" height = {stickHeight} fill="pink"/>
                    <text x = "85" y = "105" fill = "black" textAnchor="end">A</text>
                    <text x = "85" y = "205" fill = "black" textAnchor="end">B</text>
                    <text x = "85" y = "305" fill = "black" textAnchor="end">C</text>
                </g>  
            </svg>
        </div>
    )*/    
}
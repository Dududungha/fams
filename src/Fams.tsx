import React, { useState, useEffect } from 'react';
import Tree, { RawNodeDatum } from 'react-d3-tree';

import './Fams.css';

const nodeDimensions = {x: 512, y: 512};

function Fams() {
    const [tree, setTree] = useState<RawNodeDatum | RawNodeDatum[]>({name: "root", children: []})

    useEffect(() => {
        fetch("/sample.json")
            .then(response => response.json())
            .then(json => setTree(json))
    }, [])

    const renderCustomNode = ({ nodeDatum }) => {
        // let spaceIndex = 0;
        // for (let i = 0; i < nodeDatum.name.length; i++) {
        //     if (nodeDatum.name[i] == " ") {
        //         spaceIndex = i;
        //         break;
        //     }
        // }
        // const firstName = nodeDatum.name.slice(0, spaceIndex);
        // const lastName = nodeDatum.name.slice(spaceIndex+1);

        return (
            <g>
                <foreignObject height={nodeDimensions.x/2} width={nodeDimensions.y/2} x={-nodeDimensions.x/4} y={-nodeDimensions.y/4}>
                    <img src={nodeDatum.image} alt="pop"/>
                </foreignObject>
                <text x={nodeDimensions.x/4 + 16}>{nodeDatum.name.split(" ", 2)[0]}</text>
                <text x={nodeDimensions.x/4 + 16} y={16*3}>{nodeDatum.name.split(" ", 2)[1]}</text>
            </g>
        )
    }

    return (
        <div className="Fams">
            <Tree 
                data={tree} 
                collapsible={false} 
                orientation="vertical" 
                renderCustomNodeElement={renderCustomNode}
                nodeSize={nodeDimensions}
                rootNodeClassName={"node__root"}
                branchNodeClassName={"node__branch"}
                leafNodeClassName={"node__leaf"}
            />
        </div>
    )
}

export default Fams;
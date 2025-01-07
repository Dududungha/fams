import React, { useState, useEffect } from 'react';
import Tree, { RawNodeDatum } from 'react-d3-tree';

import './Fams.css';

import useWindowDimensions from './useWindowDimensions.tsx';

const nodeDimensions = {x: 512, y: 512};

function Fams() {
    const { width: screenWidth, height: screenHeight } = useWindowDimensions();

    const [tree, setTree] = useState<RawNodeDatum | RawNodeDatum[]>({name: "root", tree: { name: "", children: []}});

    useEffect(() => {
        fetch("/sample.json")
            .then(response => response.json())
            .then(json => setTree(json))
    }, []);

    const renderCustomNode = ({ nodeDatum }) => {
        return (
            <g>
                <foreignObject height={nodeDimensions.x/2} width={nodeDimensions.y/2} x={-nodeDimensions.x/4} y={-nodeDimensions.y/4}>
                    <img src={nodeDatum.image} alt="pop"/>
                </foreignObject>
                <text x={nodeDimensions.x/4 + 16}>{nodeDatum.firstName}</text>
                <text x={nodeDimensions.x/4 + 16} y={16*3}>{nodeDatum.lastName}</text>
            </g>
        )
    }

    return (
        <div className="Fams">
            <div className="tree-name">
                {tree.name}
            </div>
            <Tree 
                data={tree.tree} 
                collapsible={false} 
                orientation="vertical" 
                renderCustomNodeElement={renderCustomNode}
                nodeSize={nodeDimensions}
                rootNodeClassName={"node__root"}
                branchNodeClassName={"node__branch"}
                leafNodeClassName={"node__leaf"}
                translate={{x: screenWidth/2, y: screenHeight/2}}
                zoom={0.5}
            />
        </div>
    )
}

export default Fams;
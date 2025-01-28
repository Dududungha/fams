import React, { useState, useEffect } from 'react';
import Tree, { RawNodeDatum } from 'react-d3-tree';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

import './Fams.css';

import useWindowDimensions from './useWindowDimensions.tsx';
import { db } from './firebase.tsx';
import { ReactComponent as Arrow } from './arrow.svg';

const nodeDimensions = {x: 512, y: 512};

function Fams() {
    const { width: screenWidth, height: screenHeight } = useWindowDimensions();

    // list of trees
    const [treeList, setTreeList] = useState();
    // tree object
    const [tree, setTree] = useState<RawNodeDatum | RawNodeDatum[]>({name: "root", tree: { name: "", children: []}});
    // dropdown state
    const [firstClick, setFirstClick] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const getTreeList = async () => {
        const colRef = collection(db, "trees");
        const query = await getDocs(colRef);

        const tempTreeList = new Array<[]>();
        query.forEach((doc) => {
            tempTreeList.push([doc.id, doc.data().name]);
        })

        console.log(tempTreeList)

        setTreeList(tempTreeList)
    }

    const getTreeData = async (treeId) => {
        const docRef = doc(db, "trees", treeId);
        const docTree = await getDoc(docRef);
    
        if (docTree.exists()) {
            setTree(docTree.data());
        } else {
        // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    const handleDropdownClicked = () => {
        setFirstClick(true);
        setShowDropdown(showDropdown => !showDropdown);
    }

    const handleDropdownOptionClicked = (treeId) => {
        getTreeData(treeId)
    }

    useEffect(() => {
        getTreeList();
        getTreeData("OOPTree");
    }, [])

    const renderCustomNode = ({ nodeDatum }) => {
        return (
            <g>
                <foreignObject height={nodeDimensions.x/2} width={nodeDimensions.y/2} x={-nodeDimensions.x/4} y={-nodeDimensions.y/4}>
                    {nodeDatum.image ? 
                        <img src={nodeDatum.image} alt="pop"/> : 
                        <img src={"https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"} alt="person"/>
                    }
                </foreignObject>
                <text x={nodeDimensions.x/4 + 16}>{nodeDatum.firstName}</text>
                <text x={nodeDimensions.x/4 + 16} y={16*3}>{nodeDatum.lastName}</text>
            </g>
        )
    }

    const renderDropdown = () => {
        return (
            <div className="tree-dropdown-options">
                {treeList.map(([treeId, treeName]) => (
                    <div className="tree-dropdown-options-text" onClick={() => handleDropdownOptionClicked(treeId)}>
                        {treeName}
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="Fams">
            <div className="tree-dropdown" onClick={ handleDropdownClicked }>
                <div className="tree-name">
                    {tree.name}
                </div>
                <div className={`tree-arrow ${firstClick && (showDropdown ? 'up' : 'down')}`}>
                    <Arrow />
                </div>
                {showDropdown ? renderDropdown() : null}
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
import React from "react";

import {
    Row, Col,
} from 'reactstrap';// used for making the prop types of this component

import { ReactDiagram } from "gojs-react";
import * as go from "gojs";

class P1Obj1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    initDiagram = () => {
        const $ = go.GraphObject.make;

        const diagram = $(go.Diagram,
            {
                'undoManager.isEnabled': true,  // must be set to allow for model change listening
                // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
                model: $(go.GraphLinksModel, {
                    linkKeyProperty: 'key',  // this should always be set when using a GraphLinksModel
                })
            });

        diagram.nodeTemplate =
            $(go.Node, 'Auto',  // the Shape will go around the TextBlock
                $(go.Shape, 'RoundedRectangle', { strokeWidth: 2, fill: 'white' },
                    // Shape.fill is bound to Node.data.color
                    new go.Binding('fill', 'color')),
                $(go.TextBlock,
                    { margin: 8, editable: false },  // some room around the text
                    // TextBlock.text is bound to Node.data.key
                    new go.Binding('text', 'text'))
            );

        diagram.layout = $(go.TreeLayout, { angle: 90 });

        return diagram;
    }

    render() {
        // console.log(this.props.history)
        return (
            <div className="animated bounceInLeft fast">
                <center>
                    <ReactDiagram
                        divClassName='diagram-component'
                        initDiagram={this.initDiagram}
                        nodeDataArray={[
                            { key: 1, text: "Caracterizacion del manejo y uso del agua en la unidad agricola", color: 'lightblue' },
                            { key: 2, text: "Manejo del agua", color: 'orange' },
                            { key: 3, text: "Uso del agua", color: 'lightgreen' },
                            { key: 4, text: "Aspectos culturales", color: 'pink' }
                        ]}
                        linkDataArray={[
                            { key: 1, from: 1, to: 2 },
                            { key: 2, from: 1, to: 3 },
                            { key: 3, from: 1, to: 4 },
                        ]}
                    />
                </center>
            </div>
        )
    }
}


export default P1Obj1;

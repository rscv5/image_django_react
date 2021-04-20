import React from 'react';
// import ReactInputPosition, {MOUSE_ACTIVATION} from 'react-input-position';
import { Magnifier, MOUSE_ACTIVATION } from 'react-image-magnifiers';
class OneImageM extends React.Component{
    constructor(props) {
        super(props);
        this.state={
        mouseActivation:MOUSE_ACTIVATION.CLICK,
        dragToMove:true
    };
    }

    // finalActiveCursorStyle =
    render() {
        const { mouseActivation,dragToMove } =this.state;
        const {image} = this.props;
        return(
            <Magnifier
                imageSrc={image}
                imageAlt={"Example"}
                mouseActivation={mouseActivation}
                dragToMove={dragToMove}
            />
        )
    }
}
export default OneImageM;
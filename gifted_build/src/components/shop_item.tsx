import * as React from "react";

class shop_item extends React.Component<{}, {}> {
    render () {
        return (
            <div className='container'>
                <img src={require('../files/shirt1.jpg')} />
            </div>
            )
    }
}

export default shop_item;
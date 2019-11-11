import * as React from "react";
// import "../css/shop_item.css"

const styles = {
    container:{
        alignContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        margin: 20
    },
    images:{
        width: '80%',
        height: '80%'
    },
    text: {
        color: 'black'
    }
}

class Shop_item extends React.Component<{}, {}> {
    render () {
        return (
            <div style={styles.container}>
                <img src={require('../files/shirt1.jpg')} style={styles.images}/>
                <h2 style={styles.text}>T-Shirt</h2>
            </div>
            )
    }
}

export default Shop_item;
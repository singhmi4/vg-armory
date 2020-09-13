import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const AddToCardBtn = () => {
    const [cartCount, setCartCount] = useState(0);

    return (
        <div>
            <Button variant="success" onClick={() => setCartCount(cartCount + 1)}>Add to Inventory</Button>
        </div>
    )
}

export default AddToCardBtn

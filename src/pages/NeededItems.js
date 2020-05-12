import React from 'react';

function NeededItems() {


const postCode = "M130LE"

const [locations, setLocation] = useState([])

    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postCode}`)
            .then((response) => response.json())
            .then((data) => {
                setLocation(data)
            })
    }, []);





    return (
        <div>
            <h1>Needed Items</h1>
            <div><p>Click + to slect the amount to add to your shopping list</p></div>
        </div>
    )
}

export default NeededItems;
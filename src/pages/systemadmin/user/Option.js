import React from 'react'
function Option({ item, setID, sparator }) {
    if (setID !== item._id) {
        return (
            <>
                <option style={sparator === "" ? { fontWeight: 'bold' } : {}} value={item._id}>
                    {sparator + (sparator !== "" ? "❯ " : "") + item.group.name}
                </option>)
                {
                    item.children.map((itm, i) => (
                        <Option key={i} item={itm} setID={setID} sparator={sparator + "\u00A0\u00A0\u00A0"} />
                    ))
                }
            </>
        )
    } else {
        return (<></>)
    }
}

export default Option

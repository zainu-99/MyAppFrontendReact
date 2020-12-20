import React from 'react'
import ReactLoading from 'react-loading';

function Loading({ type, color }) {
    return (
        <ReactLoading className="text-center" type={"bubbles"} color={"yellow"} height={55} width={55} />
    )
}

export default Loading

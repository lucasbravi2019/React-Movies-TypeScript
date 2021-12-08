import React, { useState } from 'react'
//Types
type Props = {
    callback?: any
}

const Rate: React.FC<Props> = ({ callback }) => {
    const [value, setValue] = useState(5)

    return (
        <div>
            <input 
                type='range'
                min='1'
                max='10'
                value={value}
                onChange={(e: React.FormEvent<HTMLInputElement>) => setValue(Number(e.currentTarget.value))}
            />
            { value }
            <p>
                <button onClick={() => callback(value)}>Rate</button>
            </p>

        </div>
    )
}

export default Rate
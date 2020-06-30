import React, {useState} from 'react'

const Box = () => {

    const [count, setCount] = useState(1)

    const increaseCount = () => {
        setCount(count + 1)
    }


    const fizzbuzz = (num) => {
        if(num % 15 === 0) {
            return 'fizzbuzz'
        } else if (num % 5 === 0) {
            return 'buzz'
        } else if (num % 3 === 0) {
            return 'fizz'
        }
        return num
    }

    

    return (
        <>
        {fizzbuzz(count)} <br/>
        <button onClick={increaseCount}>Increase Count</button><br/>
        </>
    )
}

export default Box
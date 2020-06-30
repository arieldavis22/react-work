import React from 'react'

class Cube extends React.Component {

    palFunc = (word) => {
        const rev = word.split('').reduce((rev, char) => {
            return char + rev
        }, '')
        return word === rev
    }

    render() {
        const testWord = 'apa'
        return (
            <>
            =====<br/>
            {testWord}<br/>
            {this.palFunc(testWord) ? 'true' : 'false'}
            </>
        )
    }
}

export default Cube
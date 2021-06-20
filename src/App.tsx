import * as React from 'react'
import { config } from './types/config'

export function App() {
    const game = new Phaser.Game(config)

    return <h1>Hello world React! </h1>
}

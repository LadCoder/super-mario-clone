import * as Phaser from 'phaser'
import tiles from '../assets/images/mario-tile-set.png'

export const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    pixelArt: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

function preload() {
    // Runs once, loads up assets like images and audio
    this.load.image('mario-tiles', tiles)
    this.load.tilemapCSV('map', 'https://www.mikewesthad.com/phaser-3-tilemap-blog-posts/post-1/assets/tilemaps/catastrophi_level3.csv')
}

function create() {
    // Runs once, after all assets in preload are loaded
    // Load a map from a 2D array of tile indices
    const level = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 2, 3, 0, 0, 0, 1, 2, 3, 0],
        [0, 5, 6, 7, 0, 0, 0, 5, 6, 7, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 14, 13, 14, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 14, 14, 14, 14, 14, 0, 0, 0, 15],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15],
        [35, 36, 37, 0, 0, 0, 0, 0, 15, 15, 15],
        [39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39]
    ]

    // When loading from an array, make sure to specify the tileWidth and tileHeight
    const map = this.make.tilemap({ key: 'map', tileWidth: 16, tileHeight: 16 })
    const tiles = map.addTilesetImage('mario-tiles')
    const layer = map.createStaticLayer(0, tiles, 0, 0)
}

function update() {
    // Runs once per frame for the duration of the scene
}

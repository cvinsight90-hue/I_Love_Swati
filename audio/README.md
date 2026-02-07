# Audio Folder

## Adding Your Own Music

1. Download a romantic instrumental or song (MP3 format recommended)
2. Rename it to `background-music.mp3`
3. Place it in this `audio` folder
4. Update `index.html` line with audio source to use your music:

```html
<audio id="bgMusic" loop>
  <source src="audio/background-music.mp3" type="audio/mpeg" />
</audio>
```

## Current Setup

The website currently uses a free romantic music from Bensound.
You can replace it with your own music file.

## Recommended Music Sources

- **Free Music**: Bensound.com, YouTube Audio Library, Free Music Archive
- **Format**: MP3 (most compatible)
- **Type**: Romantic instrumental, soft piano, acoustic guitar
- **Volume**: The music is automatically set to 30% volume (adjustable in script.js)

## Music Control

Users can toggle music on/off using the floating button at the bottom-right corner of the website.

# Valentine's Day Website for Mannat/Swati/Manorma ❤️

A beautiful, emotional, and interactive Valentine's Day website created with love!

## 🎨 Features

### Interactive Elements

- **Welcome Screen**: Click to enter a magical experience
- **Animated Hearts**: Floating hearts background and click interactions
- **Love Letter**: Click the envelope to reveal a heartfelt message
- **Photo Gallery**: Add your own photos (4 placeholder spots ready)
- **Reasons I Love You**: Beautiful cards with hover animations
- **Video Section**: Space for a personal video message
- **Interactive Quiz**: Fun love quiz with sweet responses
- **Live Countdown**: Shows time spent together since your special day
- **Promise Section**: Your promises to her
- **Secret Surprise**: Hidden modal with extra message
- **Easter Egg**: Try the Konami code (↑ ↑ ↓ ↓ ← → ← → B A) for a surprise!

### Romantic Features

- 🌟 Smooth parallax scrolling effects
- 💫 Beautiful gradient backgrounds
- ❤️ Floating hearts on every click
- 📜 Random love quotes that appear while scrolling
- 🎭 3D hover effects on photo cards
- ✨ Glowing and pulsing animations
- 🎨 Multiple color themes across sections

## 🚀 How to Use

1. **Open the website**: Simply open `index.html` in any modern browser

2. **Customize the Countdown Timer**:

   - Open `script.js`
   - Find line 50: `const specialDate = new Date(2024, 0, 1, 0, 0, 0);`
   - Change to your special date (Year, Month-1, Day, Hour, Minute, Second)
   - Example: `new Date(2024, 1, 14, 10, 30, 0)` = February 14, 2024, 10:30 AM

3. **Add Photos**:

   - Create an `images` folder in the same directory
   - Add your photos (name them: photo1.jpg, photo2.jpg, photo3.jpg, photo4.jpg)
   - In `index.html`, replace the photo-placeholder divs with:

   ```html
   <img src="images/photo1.jpg" alt="Memory" />
   ```

4. **Add Video**:

   - Add your video file to the project folder (e.g., `message.mp4`)
   - In `index.html`, uncomment the video section and update:

   ```html
   <video controls>
     <source src="message.mp4" type="video/mp4" />
   </video>
   ```

5. **Personalize Text**:
   - Edit the love letter in the envelope section
   - Modify the "Reasons I Love You" cards
   - Update promises and final messages
   - Change any text to make it more personal

## 📝 Customization Tips

### Colors

The website uses gradient backgrounds. To change colors, edit the gradient values in `style.css`:

```css
background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
```

### Fonts

Currently using:

- 'Dancing Script' for romantic headings
- 'Poppins' for body text
  You can change these in the Google Fonts link in `index.html`

### Animations

All animations are defined in `style.css` and can be modified:

- Speed: Change animation duration (e.g., `2s` to `3s`)
- Effect: Modify @keyframes sections
- Disable: Remove animation property

## 🎁 Hidden Features

1. **Click anywhere**: Creates floating hearts
2. **Scroll down**: Random love quotes appear
3. **Konami Code**: Type ↑ ↑ ↓ ↓ ← → ← → B A for a heart shower
4. **Hover effects**: Move mouse over cards for 3D tilt effects
5. **Wrong quiz answers**: Shake animation provides feedback

## 📱 Mobile Responsive

The website is fully responsive and works beautifully on:

- Desktop computers
- Tablets
- Mobile phones

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript**: No frameworks needed
- **No server required**: Works directly in browser
- **Modern browser features**: Uses CSS Grid, Flexbox, animations
- **Performance optimized**: Smooth 60fps animations

## 💝 Final Touches

Before sharing:

1. ✅ Update the countdown date
2. ✅ Add your photos
3. ✅ Add your video (optional)
4. ✅ Personalize all text sections
5. ✅ Test the quiz questions
6. ✅ Check the secret modal message
7. ✅ Test on mobile device

## ❤️ Made with Love

This website is designed to evoke emotions and show your love in a creative, modern way. Every animation, every color, and every word is meant to make her feel special.

Enjoy your Valentine's Week! 🌹💕

---

**Note**: Remember to update the special date in script.js to match when you two met or another significant date!

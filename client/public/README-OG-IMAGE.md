# Open Graph Image Setup

## For Microsoft Teams Compatibility

Microsoft Teams requires PNG or JPG format (not SVG) and an absolute URL for Open Graph images.

## Steps to Create PNG Version:

1. **Convert SVG to PNG:**
   - Use an online converter: https://svgtopng.com/ or https://convertio.co/svg-png/
   - Or use ImageMagick: `magick og-image.svg -resize 1200x630 og-image.png`
   - Or use Inkscape: `inkscape og-image.svg --export-filename=og-image.png --export-width=1200 --export-height=630`

2. **Save the PNG file:**
   - Save as `og-image.png` in the `client/public/` directory
   - Ensure dimensions are exactly 1200x630 pixels

3. **Update the URL in index.html:**
   - Replace `https://your-portfolio-url.com` with your actual deployed portfolio URL
   - The image URL must be absolute (full URL), not relative

## Testing:

After deployment, test your Open Graph image using:
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
- Twitter Card Validator: https://cards-dev.twitter.com/validator

## Current Setup:

- SVG version: `og-image.svg` (works for most platforms)
- PNG version needed: `og-image.png` (required for Microsoft Teams)
- Both files should be in `client/public/` directory


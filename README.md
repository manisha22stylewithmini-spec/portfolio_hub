# Landing Page Studies — 20 designs, 20 styles

A portfolio of 20 single-page landing designs for imaginary brands. Each one is built from scratch in its own visual language, from neo-brutalist to Art Deco, claymorphism to live WebGL 3D.

Everything is **plain HTML, CSS and JavaScript**. There is no build step, no framework and no `node_modules`.

## The designs

| # | Folder | Brand | Style |
|---|--------|-------|-------|
| 01 | `01-salmon-sushi` | Salmon Sunrise | Torn paper, animated illustration |
| 02 | `02-brutalist-coffee` | Brewtal Coffee | Neo-brutalist |
| 03 | `03-glass-saas` | Nova AI | Glassmorphism SaaS |
| 04 | `04-retro-arcade` | Pixel Quest | 8-bit arcade |
| 05 | `05-3d-product` | Halo One | 3D product, Gen Z (WebGL) |
| 06 | `06-editorial-luxury` | Maison Véra | Editorial luxury |
| 07 | `07-playful-bento` | Juno Studio | Playful bento |
| 08 | `08-swiss-typographic` | Raster Studio | Swiss typographic |
| 09 | `09-y2k-chrome` | Chroma*OS | Y2K chrome (WebGL) |
| 10 | `10-luxury-watch` | Aurelia Genève | Dark luxury, 3D watch (WebGL) |
| 11 | `11-cyberpunk-neon` | Volt//Runner | Cyberpunk neon (WebGL) |
| 12 | `12-clay-kids` | Puffle | Claymorphism kids app (WebGL) |
| 13 | `13-cosmic-journey` | Odyssey | Space journey (WebGL shaders) |
| 14 | `14-memphis-pop` | Rad Fest '26 | Memphis 80s pop (physics) |
| 15 | `15-japanese-ink` | Shizuku 雫 | Japanese ink minimal |
| 16 | `16-art-deco` | The Emerald Room | Art Deco / Gatsby |
| 17 | `17-organic-nature` | Fern & Field | Organic nature (generative) |
| 18 | `18-synthwave` | Sunset Drive | Synthwave with a live synth (WebAudio) |
| 19 | `19-fintech-aurora` | Kova | Premium fintech, 3D card (WebGL) |
| 20 | `20-architecture-blueprint` | Atelier Noma | Architecture, scroll-built 3D (WebGL) |

## Project structure

```
portolio/
├── index.html          # the gallery (filters, search, live previews)
├── README.md
└── designs/
    ├── 01-salmon-sushi/index.html
    ├── 02-brutalist-coffee/index.html
    └── …               # each design is ONE self-contained index.html
```

Each design is a single `index.html` with its CSS and JS inline, so any design can be copied out and used on its own.

## Run it locally

You need a **local web server**. Opening `index.html` by double-click (`file://`) mostly works, but the gallery's live previews are blocked from loading the designs in iframes by some browsers, and ES-module imports are more reliable over HTTP.

Pick whichever you have:

```bash
# Python 3 (nothing to install)
python3 -m http.server 8000
```

```bash
# Node
npx serve .
```

Then open <http://localhost:8000>.

## Requirements and good to know

- **Internet connection.** The designs load fonts from Google Fonts. The WebGL designs also load [three.js 0.160](https://threejs.org) from the jsDelivr CDN, and design 14 loads [Matter.js](https://brm.io/matter-js/) from cdnjs. Nothing else is fetched.
- **Browsers.** Current Chrome, Edge, Safari and Firefox. The WebGL designs need hardware acceleration enabled.
- **Gallery performance.** The gallery loads each preview iframe only while its card is near the screen and unloads it afterwards. This keeps the number of live WebGL contexts low.
- **Reduced motion.** Every design honours `prefers-reduced-motion`.
- **Audio.** Design 18 makes its music live with the Web Audio API. Nothing plays until you press play.
- **Everything is fictional.** All brands, people, prices and places are made up for portfolio purposes.

### Make it work fully offline (optional)

Download the CDN files into the project and point the `importmap` / `<script src>` / font links at the local copies:

- `three@0.160.0/build/three.module.js` and the `examples/jsm/*` files each design imports
- `matter-js@0.19.0/build/matter.min.js`
- the Google Fonts CSS and font files (for example with [google-webfonts-helper](https://gwfh.mranftl.com/fonts))

## Deploy

Because the site is entirely static, it can be hosted anywhere. Deploy the **project root** (the folder containing `index.html`). No build command and no output directory are needed.

### Vercel

```bash
npm i -g vercel
vercel          # first run: accept the defaults, framework = "Other"
vercel --prod
```

Or import the repository in the Vercel dashboard and leave the build settings empty.

### Netlify

- **Drag and drop:** open <https://app.netlify.com/drop> and drop the project folder, or
- **CLI:**

```bash
npm i -g netlify-cli
netlify deploy --dir=. --prod
```

### GitHub Pages

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then save.
4. The site appears at `https://<user>.github.io/<repo>/`.

All links in the site are relative, so it works in a sub-folder like this.

### Cloudflare Pages

Create a project from your Git repository (or upload the folder directly). Leave the build command empty and set the output directory to `/`.

### Any static host

Upload the files over SFTP or to S3, Firebase Hosting, Render, and so on. Make sure `index.html` is served from the root.

## Add your own design

1. Create `designs/21-your-name/index.html` (copy any existing design as a starting point).
2. Add one line to the `D` array at the top of the script in the root `index.html`:

   ```js
   ['21','your-name','Brand Name','Short style label','One-sentence description.',['dark','3d'],1,['Tag','Tag','Tag']],
   ```

   The fields are: number, folder name, title, style label, description, filter tags, is-3D (`1` or `0`) and display tags.
3. Update the counts in the page heading if you like. Filter chips and counts update themselves.

Available filter tags: `3d`, `dark`, `light`, `playful`, `minimal`, `luxury`, `retro`, `organic`.

## The mascot (the character in the hero)

The hero character follows your cursor with its head, blinks, naps when idle and reacts when you click it ("boop"). A smaller copy docks in the corner after you scroll and comments on the card you hover.

It is the `glasses` character from the [page-mascot](https://koboyo.com/page-mascot) set, built from two 3×3 sprite sheets in `mascots/`:

```
mascots/glasses-directions.webp   # nine head directions
mascots/glasses-reactions.webp    # nine expressions
```

**To swap in a different character,** drop two new sheets in `mascots/` and change the two paths in the `MASCOT` constant near the top of the gallery script. The fifty-two ready-made characters are listed in the skill's `reference/characters.md`.

**To make the mascot look like you,** the skill can redraw a photo of you in the same format. That needs a photo and either an image-capable agent or an `OPENAI_API_KEY`.

## Theme

The gallery has a dark and a light theme. The first visit follows your system setting, and the toggle (top right) remembers your choice. On browsers that support View Transitions, the switch reveals the new theme in a circle from the button.

## Gallery tips

- Press <kbd>/</kbd> to jump to search and <kbd>Esc</kbd> to clear it.
- Filters and search are saved in the URL (for example `#3d` or `#dark&q=gold`), so you can link straight to a filtered view.

## Credits

- Typefaces from [Google Fonts](https://fonts.google.com) (SIL Open Font License).
- 3D by [three.js](https://threejs.org) (MIT). Physics by [Matter.js](https://brm.io/matter-js/) (MIT).
- All artwork, textures, planets, products and sounds are generated in code.

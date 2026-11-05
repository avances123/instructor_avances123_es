# AGENTS.md — Sidemount Spain (`sidemount.es`)

## Workflow Rules
- **Local verification first:** Run `hugo -D` locally and verify zero build errors before committing or pushing to `master`.
- **Analytics & Search Console:** GA4 (`properties/414173275`, `G-NFPNJYXW0E`) and Search Console (`sc-domain:sidemount.es`) are accessible via the `analytics-mcp` server and service account `/home/fabio/.config/ga4-mcp/credentials.json` (`ga4-mcp-reader@cave-diving.iam.gserviceaccount.com`). Resubmit `https://www.sidemount.es/sitemap.xml` via Search Console API after publishing new pages.
- **Google Ads CLI:** Configured via Service Account `gads-cli-sa@cave-diving.iam.gserviceaccount.com` in `~/.config/google-ads/google-ads.yaml`. CLI tool available at `~/.local/bin/gads` (commands: `campaigns`, `groups`, `keywords`, `search-terms`, `budget`, `pause`, `enable`, `negative`, `query`, `share`, `last-click`, `consent`). Customer ID: `3353483693`.


---

## Preferred Video Integration (`ceresia.vision` ambient film style)

Our preferred way to include videos on the website is as **self-hosted, muted, looping, ambient H.264 `.mp4` clips with a `.webp` poster** styled with the `ceresia.vision` treatment (desaturated, subtle opacity, radial/linear edge vignette, no player controls).

### 1. Downloading & Inspecting Source Videos
1. Download the video streams locally using `yt-dlp`:
   ```bash
   yt-dlp -f "bestvideo[height<=720]" -o "/tmp/source.%(ext)s" "<YOUTUBE_URL>"
   ```
2. Generate a timestamped contact sheet with `ffmpeg` to select the exact action range and identify any letterbox bars, channel watermarks, or burned-in subtitles:
   ```bash
   mkdir -p /tmp/frames && \
   ffmpeg -y -i /tmp/source.webm -vf "fps=1/5,scale=320:-1,drawtext=text='%{pts\:hms}':x=10:y=10:fontsize=24:fontcolor=white:box=1:boxcolor=black@0.7" /tmp/frames/f_%02d.jpg && \
   ffmpeg -y -pattern_type glob -i "/tmp/frames/*.jpg" -vf "tile=6x5" /tmp/grid.jpg
   ```

### 2. Cropping & Encoding (`ffmpeg` recipe)
Encode into `static/video/<slug>.mp4` (target size: **0.7 MB – 3.2 MB**, 15–30 seconds, no audio `-an`, 24 fps, `+faststart`) and extract a matching `static/video/<slug>.webp` poster frame:

```bash
# 1. Encode muted, cropped H.264 MP4 (adjust -ss, -t, and crop=w:h:x:y to remove bars/watermarks/subtitles)
ffmpeg -y -ss <START_SEC> -i /tmp/source.webm -t <DURATION_SEC> -an \
  -vf "crop=<W>:<H>:<X>:<Y>,scale=960:-2,fps=24" \
  -c:v libx264 -preset veryslow -crf 28 -pix_fmt yuv420p -movflags +faststart \
  static/video/<slug>.mp4

# 2. Extract lightweight WebP poster frame
ffmpeg -y -ss 3 -i static/video/<slug>.mp4 -frames:v 1 -q:v 75 \
  static/video/<slug>.webp
```

*Completion criterion:* Inspect `static/video/<slug>.webp` visually to confirm zero burned-in subtitles, watermarks, or black bars remain in the frame, and file size of `<slug>.mp4` is under `3.5 MB`.

### 3. Embedding in Content & Templates
- **Inside Markdown (`.md`) courses or articles:** Use the `.course-film` wrapper via the `rawhtml` shortcode:
  ```markdown
  {{< rawhtml >}}
  <div class="course-film" aria-hidden="true">
    <video autoplay muted loop playsinline preload="metadata" poster="/video/<slug>.webp">
      <source src="/video/<slug>.mp4" type="video/mp4">
    </video>
  </div>
  {{< /rawhtml >}}
  ```
- **In Homepage / Layout templates:**
  - Hero background uses `.hero-film` (`opacity: 0.24`, `grayscale(70%) saturate(0.6)`).
  - Section columns use `.location-film` (`opacity: 0.72`, `grayscale(30%) saturate(0.85)`).
  - Course/article inline blocks use `.course-film` (`opacity: 0.75`, `grayscale(35%) saturate(0.8)`, radial vignette mask) defined in [`themes/piko/assets/sass/main.scss`](themes/piko/assets/sass/main.scss).

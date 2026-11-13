import urllib.request, urllib.parse, os, time
PROMPT = ("3D Pixar style chibi character standing, holding a snowboard upright beside him, board resting on the ground, "
          "no snow, no spray, grey ski helmet with big goggles, bright yellow puffer jacket, white ski pants, black boots, "
          "cute big-head proportions, plain flat light grey studio background, full body with margin, 3d render, no text")
OUT = r"G:\DSH\workspaces\personal\output\resume-astro\gen"
for seed in [707, 808]:
    path = os.path.join(OUT, f"stand-{seed}.jpg")
    url = "https://image.pollinations.ai/prompt/" + urllib.parse.quote(PROMPT) + "?" + urllib.parse.urlencode(
        {"width": 768, "height": 1024, "nologo": "true", "seed": str(seed)})
    for a in range(3):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=200) as r, open(path, "wb") as f:
                f.write(r.read())
            print("ok", seed, os.path.getsize(path)); break
        except Exception as e:
            print("retry", seed, e); time.sleep(25)
    time.sleep(20)

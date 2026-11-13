import urllib.request, urllib.parse, os, time, random

PROMPT = (
    "3D Pixar style chibi snowboarder, full body standing straight facing camera, "
    "grey ski helmet with large black goggles, bright yellow ski jacket, white snow pants, black boots, "
    "holding a light grey snowboard under one arm, cute big-head proportions, "
    "soft studio lighting, plain light grey seamless background, full body with margin, "
    "high detail, 3d render, no text, no logo"
)

OUT = r"G:\DSH\workspaces\personal\output\resume-astro\gen"
os.makedirs(OUT, exist_ok=True)

seeds = [101, 202, 303, 404]
for seed in seeds:
    path = os.path.join(OUT, f"box-{seed}.jpg")
    if os.path.exists(path) and os.path.getsize(path) > 20000:
        print("skip", seed); continue
    params = {"width": 768, "height": 1024, "nologo": "true", "seed": str(seed)}
    url = "https://image.pollinations.ai/prompt/" + urllib.parse.quote(PROMPT) + "?" + urllib.parse.urlencode(params)
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=200) as r, open(path, "wb") as f:
                f.write(r.read())
            print("ok", seed, os.path.getsize(path))
            break
        except Exception as e:
            print("retry", seed, attempt, e)
            time.sleep(20)
    time.sleep(18)

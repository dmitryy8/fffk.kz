#!/usr/bin/env python3
import os, re, subprocess, sys
root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
# get tracked files
p = subprocess.run(['git','ls-files'], cwd=root, capture_output=True, text=True)
tracked = [l.strip() for l in p.stdout.splitlines() if l.strip()]
tracked_images = [t for t in tracked if re.search(r'\.(jpg|jpeg|png|gif|svg|JPG|JPEG|PNG|GIF|SVG)$', t)]
tracked_set = set(tracked_images)
# map lowercase to actual for case-insensitive lookup
lower_map = {}
for t in tracked_images:
    lower_map.setdefault(t.lower(), []).append(t)
# scan files
issues = []
pattern_attr = re.compile(r'src=["\']([^"\']+\.(?:jpg|jpeg|png|gif|svg|JPG|JPEG|PNG|GIF|SVG))["\']')
pattern_url = re.compile(r'url\(["\']?([^"\')]+\.(?:jpg|jpeg|png|gif|svg|JPG|JPEG|PNG|GIF|SVG))["\']?\)')
files = []
for dirpath,dirnames,filenames in os.walk(root):
    for fn in filenames:
        if fn.lower().endswith(('.html','.htm','.js','.css')):
            files.append(os.path.join(dirpath,fn))

for f in files:
    rel = os.path.relpath(f, root)
    try:
        txt = open(f, 'r', encoding='utf-8').read()
    except Exception:
        try:
            txt = open(f, 'r', encoding='cp1251').read()
        except Exception as e:
            print('skip', f, e)
            continue
    refs = []
    refs += pattern_attr.findall(txt)
    refs += pattern_url.findall(txt)
    refs = sorted(set(refs))
    for ref in refs:
        if re.match(r'^(http:|https:|data:|file:)', ref, re.I):
            continue
        lead = ref.startswith('/')
        path = ref[1:] if lead else ref
        # normalize path separators
        path = path.replace('\\', '/').lstrip('./')
        status = 'MISSING'
        suggestion = None
        if path in tracked_set:
            status = 'OK'
        else:
            low = path.lower()
            if low in lower_map:
                status = 'CASE_MISMATCH'
                suggestion = lower_map[low][0]
        issues.append((rel, ref, lead, status, suggestion))

# print report
print('Checked files:', len(files))
print('Tracked images:', len(tracked_images))
print('\nIssues (file | ref | leadingSlash | status | suggestion if any):\n')
for it in issues:
    rel, ref, lead, status, suggestion = it
    if status != 'OK':
        print(f"{rel} | {ref} | lead={lead} | {status}" + (f" | should: {suggestion}" if suggestion else ''))

# summary
ok = sum(1 for it in issues if it[3]=='OK')
miss = sum(1 for it in issues if it[3]=='MISSING')
case = sum(1 for it in issues if it[3]=='CASE_MISMATCH')
print('\nSummary:')
print('OK refs:', ok)
print('Case mismatches:', case)
print('Missing files:', miss)
if miss>0:
    sys.exit(2)
sys.exit(0)

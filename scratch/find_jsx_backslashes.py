import os
import re

# Find JSX text node occurrences of backslash + apostrophe
# A tag text node is typically between > and <
# We look for a backslash-apostrophe (\') or backslash-quote (\") that is outside javascript quotes
# Let's read line by line and find matches.
pattern = re.compile(r'>[^<]*\\\'[^<]*<')

for root, dirs, files in os.walk('src/app'):
    for f in files:
        if f.endswith('.tsx'):
            path = os.path.join(root, f).replace('\\\\', '/')
            with open(path, 'r', encoding='utf-8') as file:
                lines = file.readlines()
            for idx, line in enumerate(lines, 1):
                # Search for JSX tag text containing backslash-apostrophe
                if '\\\'' in line:
                    # Let's see if this line is a JSX tag line and contains \'.
                    # A line containing \' is an issue if the \' is not inside double/single JS quotes of an attribute or array.
                    # Simple heuristic: if it has '<p>' or '<span>' or '<strong>' or '<div>' and contains \'.
                    # Or if it matches the pattern > ... \' ... <
                    # Let's check for both.
                    stripped = line.strip()
                    if ('<' in stripped or '>' in stripped) and not (stripped.startswith('\'') or stripped.startswith('"') or stripped.startswith('question:') or stripped.startswith('answer:') or stripped.startswith('title:') or stripped.startswith('description:') or stripped.startswith('label:')):
                        print(f"{path}:{idx}: {stripped}")

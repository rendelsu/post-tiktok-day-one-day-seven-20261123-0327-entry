// Entry for make.fun "Day one, day seven" (program/v1, Node 22, standard library only).
// The entry is the TikTok video itself: this program only copies VIDEO.json from the
// repository root to /output/VIDEO.json, where the gate reads it. The house reads the
// video's views and interactions from TikTok itself; nothing this program writes about
// the video is scored.
//
// VIDEO.json still holds the placeholder address: it is replaced with the video's full
// TikTok address (https://www.tiktok.com/@<handle>/video/<id>) once the video is posted
// publicly from a public TikTok account.
//
// Plain JavaScript syntax on purpose: the grader runs Node 22 without type stripping,
// so no TypeScript annotations may appear in this file.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error('VIDEO.json could not be copied from ' + BOT_DIR + ': ' + err.message);
  process.exit(1);
}

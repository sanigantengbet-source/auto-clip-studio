# AutoClip Studio

AutoClip AI — PRD & Engineering Prompt

Overview

Build a production-ready web application named AutoClip AI using TanStack Start, React, TypeScript, and Tailwind CSS v4.

The application must be 100% deployable on Vercel without any VPS, Docker, Python backend, FFmpeg native, or external paid APIs.

All heavy processing must run inside the user's browser using WebAssembly and Web Workers.

Tech Stack

TanStack Start

React 19

TypeScript (strict)

Tailwind CSS v4

TanStack Router

TanStack Query

Zustand

IndexedDB (Dexie)

ffmpeg.wasm

MediaRecorder API

WebCodecs API (when supported)

Web Workers

OffscreenCanvas

Web Audio API

Transformers.js (optional AI)

ONNX Runtime Web (optional)

Motion

Lucide Icons

Deployment:

Vercel

No Node video processing

No VPS

No Docker

No Python

UI Style

Modern 2026 SaaS

Inspired by

Vercel

Linear

Notion AI

Raycast

Arc Browser

Theme

Black

White

Gray

Rounded

24px

Glass effect

Smooth animation

Beautiful loading states

Responsive

Mobile First

Landing Page

Hero

Features

Demo

How it Works

FAQ

Pricing (Coming Soon)

Footer

Dashboard

Sidebar

Dashboard

Auto Clip

Editor

History

Templates

Settings

About

Auto Clip Workflow

Step 1

Paste YouTube URL

Validate URL

Show thumbnail

Show duration

Show title

Step 2

Choose Quality

360p

480p

720p

1080p

Step 3

Choose Clip Length

15 sec

30 sec

45 sec

60 sec

Custom

Step 4

Choose Clip Count

1

3

5

10

Step 5

Aspect Ratio

9:16

1:1

16:9

Step 6

Subtitle

On

Off

Step 7

Watermark

Upload Logo

Opacity

Size

Position

Step 8

Generate

Processing Pipeline

Everything runs inside browser.

Never upload video to server.

Pipeline

Download

↓

Load ffmpeg.wasm

↓

Extract Audio

↓

Analyze Volume

↓

Detect Peaks

↓

Analyze Silence

↓

Analyze Motion

↓

Analyze Subtitle

↓

Generate Scores

↓

Choose Best Segments

↓

Cut Clips

↓

Burn Subtitle

↓

Crop

↓

Export

AI Highlight Detection

Create custom scoring algorithm.

Score based on

Audio Peaks

Speech Density

Silence Detection

Scene Changes

Motion Intensity

Subtitle Keywords

Clip Diversity

Avoid duplicate moments

Generate highlight score

Sort

Pick best clips

Subtitle Engine

Auto Subtitle

Support

SRT

ASS

VTT

Customize

Font

Weight

Size

Stroke

Shadow

Background

Animation

Center

Bottom

Top

Word Highlight

Live Karaoke Style

Editor

Timeline

Trim

Split

Delete

Move

Duplicate

Preview

Undo

Redo

Zoom Timeline

Snap

Video Controls

Play

Pause

Seek

Volume

Speed

Frame Step

Fullscreen

Export

MP4

WebM

GIF

Choose Resolution

720p

1080p

4K (if browser supports)

Choose FPS

30

60

Browser Features

Web Workers

OffscreenCanvas

WebCodecs

SharedArrayBuffer

Lazy Loading

Code Splitting

Streaming

Memory Optimization

IndexedDB

Store

Projects

History

Templates

Preferences

Export History

Drafts

Recover Session

Templates

Gaming

Podcast

Movie

Anime

Reaction

Education

Tutorial

Music

Motivation

News

Tech

Comedy

Batch Processing

Multiple URLs

Queue

Pause

Resume

Cancel

Retry

Notifications

Progress

Estimated Time

Success

Error

Retry

File Manager

Import Video

Export Project

Delete

Rename

Duplicate

Favorite

Settings

Theme

Language

Performance Mode

GPU Mode

Memory Limit

Cache

Auto Save

Keyboard Shortcut

Keyboard Shortcuts

Space

Play

Ctrl+S

Save

Delete

Remove Clip

Ctrl+Z

Undo

Ctrl+Shift+Z

Redo

Performance

Use

React.memo

Suspense

Virtualization

Worker Threads

Chunk Processing

Streaming Decode

Avoid Memory Leak

No unnecessary rerender

Security

Everything processed locally

Never upload user videos

No analytics

No tracking

No cookies except preferences

Accessibility

ARIA

Keyboard Navigation

Screen Reader

High Contrast

Reduced Motion

Browser Compatibility

Chrome

Edge

Firefox

Safari

Progressive Enhancement

Fallback if WebCodecs unavailable

Project Structure

app/

components/

features/

editor/

workers/

hooks/

stores/

lib/

utils/

styles/

routes/

assets/

Nice Features

Drag & Drop Upload

Dark Mode

Light Mode

Command Palette

Recent Projects

Auto Save

Search

Multi Language

PWA

Offline Support

Install App

Undo History

Export Settings

Import Settings

Future Features

Instagram Reels Export

TikTok Export

YouTube Shorts Export

AI Caption Generator

AI Emoji Detection

AI Face Tracking

AI Auto Zoom

AI Meme Generator

Cloud Sync

Team Workspace

Coding Rules

Use strict TypeScript.

No any.

Reusable components.

Feature-based architecture.

Clean code.

ESLint.

Prettier.

Accessibility first.

Responsive first.

Lazy load everything possible.

Keep bundle size small.

Optimize for Lighthouse 100.

Never use native FFmpeg binaries.

Only use ffmpeg.wasm.

Never require VPS.

Never require Docker.

Never require Python.

Application must run entirely in the browser and be fully deployable to Vercel with zero server-side video processing.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/eb62b229-a4ac-42a1-8e20-acd9c64d00ee).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

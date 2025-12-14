================================================
FILE: README.md
================================================
# AlpineSight

AlpineSight is a multimodal AI chat application that combines natural language interaction with visual tools. It features an interactive 3D globe for location-based queries and integrates computer vision models for object detection in images, providing an immersive and context-aware user experience.

## Features

- **AI Chat:** A conversational interface powered by large language models via OpenRouter, using the Vercel AI SDK for seamless streaming.
- **Interactive 3D Globe:** Visualize locations anywhere on Earth. The AI can plot markers and fly to specific coordinates in response to user prompts.
- **Multimodal Input:** Analyze images provided by the user.
- **Object Detection:** Utilizes YOLO models, converted to ONNX for efficient in-browser inference, to detect objects in images.
- **Streaming API:** A robust backend built with Python and FastAPI that streams AI responses and tool calls to the Next.js frontend.
- **Tool-Using AI:** The AI can use tools to show locations on the globe, with plans to support more complex actions.

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Python, FastAPI
- **AI:** Vercel AI SDK, OpenRouter
- **Globe Visualization:** `react-globe.gl`, `three.js`
- **Computer Vision:** YOLO, ONNX Runtime Web
- **Deployment:** Vercel

## Getting Started

To run AlpineSight locally, follow these steps:

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd alpinesight-app
```

### 2. Set up environment variables

Create a `.env.local` file in the root of the project and add your API keys. You can use `.env.local.template` as a starting point.

```dotenv
# .env.local
OPENROUTER_API_KEY=sk-or-v1-YOUR_API_KEY
```

### 3. Install dependencies

This project uses `pnpm` for the frontend and `pip` for the Python backend.

**Install Node.js dependencies:**

```bash
pnpm install
```

**Install Python dependencies:**

It's recommended to use a virtual environment.

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 4. Run the development server

The application consists of a Next.js frontend and a FastAPI backend. The `dev` script runs both concurrently.

```bash
pnpm dev
```

Your application should now be running at [http://localhost:3000](http://localhost:3000).

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/m-d-a-r/alpinesight)

When deploying to Vercel, make sure to set the required environment variables in the project settings.




================================================
FILE: package.json
================================================
{
	"dependencies": {
		"onnxruntime-web": "^1.23.2"
	}
}



================================================
FILE: pnpm-lock.yaml
================================================
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      onnxruntime-web:
        specifier: ^1.23.2
        version: 1.23.2

packages:

  '@protobufjs/aspromise@1.1.2':
    resolution: {integrity: sha512-j+gKExEuLmKwvz3OgROXtrJ2UG2x8Ch2YZUxahh+s1F2HZ+wAceUNLkvy6zKCPVRkU++ZWQrdxsUeQXmcg4uoQ==}

  '@protobufjs/base64@1.1.2':
    resolution: {integrity: sha512-AZkcAA5vnN/v4PDqKyMR5lx7hZttPDgClv83E//FMNhR2TMcLUhfRUBHCmSl0oi9zMgDDqRUJkSxO3wm85+XLg==}

  '@protobufjs/codegen@2.0.4':
    resolution: {integrity: sha512-YyFaikqM5sH0ziFZCN3xDC7zeGaB/d0IUb9CATugHWbd1FRFwWwt4ld4OYMPWu5a3Xe01mGAULCdqhMlPl29Jg==}

  '@protobufjs/eventemitter@1.1.0':
    resolution: {integrity: sha512-j9ednRT81vYJ9OfVuXG6ERSTdEL1xVsNgqpkxMsbIabzSo3goCjDIveeGv5d03om39ML71RdmrGNjG5SReBP/Q==}

  '@protobufjs/fetch@1.1.0':
    resolution: {integrity: sha512-lljVXpqXebpsijW71PZaCYeIcE5on1w5DlQy5WH6GLbFryLUrBD4932W/E2BSpfRJWseIL4v/KPgBFxDOIdKpQ==}

  '@protobufjs/float@1.0.2':
    resolution: {integrity: sha512-Ddb+kVXlXst9d+R9PfTIxh1EdNkgoRe5tOX6t01f1lYWOvJnSPDBlG241QLzcyPdoNTsblLUdujGSE4RzrTZGQ==}

  '@protobufjs/inquire@1.1.0':
    resolution: {integrity: sha512-kdSefcPdruJiFMVSbn801t4vFK7KB/5gd2fYvrxhuJYg8ILrmn9SKSX2tZdV6V+ksulWqS7aXjBcRXl3wHoD9Q==}

  '@protobufjs/path@1.1.2':
    resolution: {integrity: sha512-6JOcJ5Tm08dOHAbdR3GrvP+yUUfkjG5ePsHYczMFLq3ZmMkAD98cDgcT2iA1lJ9NVwFd4tH/iSSoe44YWkltEA==}

  '@protobufjs/pool@1.1.0':
    resolution: {integrity: sha512-0kELaGSIDBKvcgS4zkjz1PeddatrjYcmMWOlAuAPwAeccUrPHdUqo/J6LiymHHEiJT5NrF1UVwxY14f+fy4WQw==}

  '@protobufjs/utf8@1.1.0':
    resolution: {integrity: sha512-Vvn3zZrhQZkkBE8LSuW3em98c0FwgO4nxzv6OdSxPKJIEKY2bGbHn+mhGIPerzI4twdxaP8/0+06HBpwf345Lw==}

  '@types/node@24.10.0':
    resolution: {integrity: sha512-qzQZRBqkFsYyaSWXuEHc2WR9c0a0CXwiE5FWUvn7ZM+vdy1uZLfCunD38UzhuB7YN/J11ndbDBcTmOdxJo9Q7A==}

  flatbuffers@25.9.23:
    resolution: {integrity: sha512-MI1qs7Lo4Syw0EOzUl0xjs2lsoeqFku44KpngfIduHBYvzm8h2+7K8YMQh1JtVVVrUvhLpNwqVi4DERegUJhPQ==}

  guid-typescript@1.0.9:
    resolution: {integrity: sha512-Y8T4vYhEfwJOTbouREvG+3XDsjr8E3kIr7uf+JZ0BYloFsttiHU0WfvANVsR7TxNUJa/WpCnw/Ino/p+DeBhBQ==}

  long@5.3.2:
    resolution: {integrity: sha512-mNAgZ1GmyNhD7AuqnTG3/VQ26o760+ZYBPKjPvugO8+nLbYfX6TVpJPseBvopbdY+qpZ/lKUnmEc1LeZYS3QAA==}

  onnxruntime-common@1.23.2:
    resolution: {integrity: sha512-5LFsC9Dukzp2WV6kNHYLNzp8sT6V02IubLCbzw2Xd6X5GOlr65gAX6xiJwyi2URJol/s71gaQLC5F2C25AAR2w==}

  onnxruntime-web@1.23.2:
    resolution: {integrity: sha512-T09JUtMn+CZLk3mFwqiH0lgQf+4S7+oYHHtk6uhaYAAJI95bTcKi5bOOZYwORXfS/RLZCjDDEXGWIuOCAFlEjg==}

  platform@1.3.6:
    resolution: {integrity: sha512-fnWVljUchTro6RiCFvCXBbNhJc2NijN7oIQxbwsyL0buWJPG85v81ehlHI9fXrJsMNgTofEoWIQeClKpgxFLrg==}

  protobufjs@7.5.4:
    resolution: {integrity: sha512-CvexbZtbov6jW2eXAvLukXjXUW1TzFaivC46BpWc/3BpcCysb5Vffu+B3XHMm8lVEuy2Mm4XGex8hBSg1yapPg==}
    engines: {node: '>=12.0.0'}

  undici-types@7.16.0:
    resolution: {integrity: sha512-Zz+aZWSj8LE6zoxD+xrjh4VfkIG8Ya6LvYkZqtUQGJPZjYl53ypCaUwWqo7eI0x66KBGeRo+mlBEkMSeSZ38Nw==}

snapshots:

  '@protobufjs/aspromise@1.1.2': {}

  '@protobufjs/base64@1.1.2': {}

  '@protobufjs/codegen@2.0.4': {}

  '@protobufjs/eventemitter@1.1.0': {}

  '@protobufjs/fetch@1.1.0':
    dependencies:
      '@protobufjs/aspromise': 1.1.2
      '@protobufjs/inquire': 1.1.0

  '@protobufjs/float@1.0.2': {}

  '@protobufjs/inquire@1.1.0': {}

  '@protobufjs/path@1.1.2': {}

  '@protobufjs/pool@1.1.0': {}

  '@protobufjs/utf8@1.1.0': {}

  '@types/node@24.10.0':
    dependencies:
      undici-types: 7.16.0

  flatbuffers@25.9.23: {}

  guid-typescript@1.0.9: {}

  long@5.3.2: {}

  onnxruntime-common@1.23.2: {}

  onnxruntime-web@1.23.2:
    dependencies:
      flatbuffers: 25.9.23
      guid-typescript: 1.0.9
      long: 5.3.2
      onnxruntime-common: 1.23.2
      platform: 1.3.6
      protobufjs: 7.5.4

  platform@1.3.6: {}

  protobufjs@7.5.4:
    dependencies:
      '@protobufjs/aspromise': 1.1.2
      '@protobufjs/base64': 1.1.2
      '@protobufjs/codegen': 2.0.4
      '@protobufjs/eventemitter': 1.1.0
      '@protobufjs/fetch': 1.1.0
      '@protobufjs/float': 1.0.2
      '@protobufjs/inquire': 1.1.0
      '@protobufjs/path': 1.1.2
      '@protobufjs/pool': 1.1.0
      '@protobufjs/utf8': 1.1.0
      '@types/node': 24.10.0
      long: 5.3.2

  undici-types@7.16.0: {}



================================================
FILE: alpinesight-app/README.md
================================================
# AI SDK Python Streaming Preview

This template demonstrates the usage of [Data Stream Protocol](https://sdk.vercel.ai/docs/ai-sdk-ui/stream-protocol#data-stream-protocol) to stream chat completions from a Python endpoint ([FastAPI](https://fastapi.tiangolo.com)) and display them using the [useChat](https://sdk.vercel.ai/docs/ai-sdk-ui/chatbot#chatbot) hook in your Next.js application.

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel-labs/ai-sdk-preview-python-streaming)

## How to use

Run [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/vercel-labs/ai-sdk-preview-python-streaming ai-sdk-preview-python-streaming-example
```

```bash
yarn create next-app --example https://github.com/vercel-labs/ai-sdk-preview-python-streaming ai-sdk-preview-python-streaming-example
```

```bash
pnpm create next-app --example https://github.com/vercel-labs/ai-sdk-preview-python-streaming ai-sdk-preview-python-streaming-example
```

To run the example locally you need to:

1. Sign up for accounts with the AI providers you want to use (e.g., OpenAI, Anthropic).
2. Obtain API keys for each provider.
3. Set the required environment variables as shown in the `.env.example` file, but in a new file called `.env`.
4. `pnpm install` to install the required Node dependencies.
5. `python3 -m venv .venv` to create a virtual environment.
6. `source .venv/bin/activate` to activate the virtual environment.
7. `pip install -r requirements.txt` to install the required Python dependencies.
8. `pnpm dev` to launch the development server.

## Learn More

To learn more about the AI SDK or Next.js by Vercel, take a look at the following resources:

- [AI SDK Documentation](https://sdk.vercel.ai/docs)
- [Next.js Documentation](https://nextjs.org/docs)



================================================
FILE: alpinesight-app/biome.json
================================================
{
  "$schema": "https://biomejs.dev/schemas/2.2.5/schema.json",
  "vcs": { "enabled": false, "clientKind": "git", "useIgnoreFile": false },
  "files": {
    "ignoreUnknown": false,
    "includes": [
      "./**",
      "!node_modules",
      "!venv",
      "!dist",
      "!**/*.css",
      "!./env.d.ts",
      "!data",
      "!.wrangler"
    ]
  },
  "formatter": {
    "enabled": true,
    "formatWithErrors": false,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineEnding": "lf",
    "lineWidth": 80,
    "attributePosition": "auto",
    "bracketSameLine": false,
    "bracketSpacing": true,
    "expand": "auto",
    "useEditorconfig": true,
    "includes": ["**", "!**/env.d.ts"]
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": false,
      "a11y": {
        "useFocusableInteractive": "warn",
        "useKeyWithClickEvents": "warn"
      },
      "correctness": {
        "noUnusedImports": "warn",
        "noUnusedVariables": "warn",
        "useExhaustiveDependencies": "off"
      },
      "style": { "noNonNullAssertion": "off" },
      "suspicious": { "noConsole": "off" }
    },
    "includes": [
      "**",
      "!.now/*",
      "!**/*.css",
      "!**/.changeset",
      "!**/dist",
      "!esm/*",
      "!public/*",
      "!**/*.config.js",
      "!**/.DS_Store",
      "!**/node_modules",
      "!**/coverage",
      "!**/.next",
      "!**/build",
      "**/.commitlintrc.cjs",
      "**/.lintstagedrc.cjs",
      "**/jest.config.js",
      "**/plopfile.js",
      "**/react-shim.js",
      "**/tsup.config.ts"
    ]
  },
  "javascript": {
    "formatter": {
      "jsxQuoteStyle": "double",
      "quoteProperties": "asNeeded",
      "trailingCommas": "none",
      "semicolons": "asNeeded",
      "arrowParentheses": "always",
      "bracketSameLine": false,
      "quoteStyle": "single",
      "attributePosition": "auto",
      "bracketSpacing": true
    }
  },
  "html": { "formatter": { "selfCloseVoidElements": "always" } },
  "assist": {
    "enabled": true,
    "actions": {
      "source": {
        "useSortedKeys": "off",
        "organizeImports": {
          "level": "on",
          "options": {
            "groups": [
              ":PACKAGE:",
              ":BLANK_LINE:",
              ["@/assets/**"],
              ":BLANK_LINE:",
              ["@/common/**", "@/lib/**", "@/api/**", "@/utils/**"],
              ":BLANK_LINE:",
              ["./**"]
            ]
          }
        }
      }
    }
  }
}



================================================
FILE: alpinesight-app/components.json
================================================
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}


================================================
FILE: alpinesight-app/DEPLOYMENT.md
================================================
# Deployment Guide: ONNX Migration for Vercel

This document explains the YOLO model migration from PyTorch to ONNX Runtime for production deployment on Vercel.

## Problem

The original implementation used `ultralytics` package with PyTorch for YOLO object detection:
- PyTorch alone: **571 MB**
- OpenCV: **152 MB**
- Total dependencies: **~739 MB uncompressed**
- **Exceeds Vercel's 250 MB limit** (even after gzip compression)

## Solution

Migrated to **ONNX Runtime** for production deployment:
- ONNX Runtime: **114 MB** (vs PyTorch 571 MB)
- Smaller, faster, production-optimized
- **Total: 131 MB compressed** (119 MB under limit!)

## Architecture

### Development Environment
- Uses `requirements-dev.txt` with full PyTorch stack
- Allows model training, experimentation, export
- Run locally on Mac with M1/M2 support

### Production Environment
- Uses `requirements.txt` with ONNX Runtime only
- Lightweight inference-only dependencies
- Deployed to Vercel serverless functions

## Files Created/Modified

### New Files

1. **`api/utils/object_detection/onnx_detector.py`**
   - ONNX Runtime wrapper class `YOLO_ONNX`
   - Drop-in replacement for `ultralytics.YOLO`
   - Handles preprocessing, inference, postprocessing
   - Compatible with existing detection code

2. **`scripts/export_yolo_to_onnx.py`**
   - Converts YOLOv8 PyTorch models to ONNX format
   - Usage: `python scripts/export_yolo_to_onnx.py`
   - Exports to `api/models/yolov8n.onnx` (12 MB)

3. **`scripts/test_onnx_inference.py`**
   - Test suite for ONNX inference
   - Verifies model loading, inference, compatibility
   - Usage: `python scripts/test_onnx_inference.py`

4. **`scripts/test_requirements_size.sh`**
   - Tests uncompressed package size
   - Usage: `bash scripts/test_requirements_size.sh`

5. **`scripts/test_compressed_size.sh`**
   - Tests gzip-compressed package size (Vercel's actual limit)
   - Usage: `bash scripts/test_compressed_size.sh`

6. **`scripts/test_with_onnx_size.sh`**
   - Tests size with ONNX dependencies enabled
   - Confirms deployment feasibility

### Modified Files

1. **`requirements.txt`**
   - Added: `numpy`, `onnxruntime`, `opencv-python-headless`, `Pillow`
   - Removed: `ultralytics` (PyTorch dependency)
   - **Production-ready** for Vercel deployment

2. **`requirements-dev.txt`**
   - Keeps full PyTorch stack: `ultralytics`, `onnx`
   - For local development only
   - Not deployed to Vercel

3. **`api/utils/object_detection/detect.py`**
   - Auto-detects ONNX Runtime availability
   - Falls back to PyTorch in dev environment
   - Transparent to existing code

4. **`api/utils/object_detection/run_func.py`**
   - Same auto-detection logic
   - Note: OBB (Oriented Bounding Boxes) require ultralytics

5. **`.gitignore`**
   - Excludes model files (`.pt`, `.onnx`, etc.)
   - Models downloaded/exported at runtime

## Usage

### Local Development

```bash
# Install development dependencies (includes PyTorch)
pip install -r requirements-dev.txt

# Export YOLO model to ONNX
python scripts/export_yolo_to_onnx.py

# Test ONNX inference
python scripts/test_onnx_inference.py

# Use in code (automatically uses ONNX if available)
from api.utils.object_detection.detect import load_model
model = load_model("yolov8n.pt")  # Auto-converts to ONNX path
results = model.predict("image.jpg", conf=0.25)
```

### Production Deployment

```bash
# Vercel will automatically:
# 1. Install requirements.txt (ONNX Runtime)
# 2. Deploy serverless functions
# 3. Download YOLO model at runtime (if needed)

# Manual test before deployment
bash scripts/test_compressed_size.sh
# Expected: ✅ PASS: 131 MB < 250 MB limit
```

### Model Download Strategy

**Option 1: Include model in git (NOT RECOMMENDED)**
- 12 MB model file in repo
- Increases repo size

**Option 2: Download at runtime (RECOMMENDED)**
- Model downloaded on first request
- Cached in function instance
- Add to function startup:
```python
import os
from api.utils.object_detection.onnx_detector import YOLO_ONNX

MODEL_PATH = "api/models/yolov8n.onnx"

def ensure_model():
    if not os.path.exists(MODEL_PATH):
        # Download from cloud storage (S3, GCS, etc.)
        download_model(MODEL_PATH)

# In your API handler
ensure_model()
model = YOLO_ONNX(MODEL_PATH)
```

**Option 3: Use Vercel Blob Storage**
- Upload model to Vercel Blob
- Download in function cold start
```bash
# Upload model
vercel blob upload api/models/yolov8n.onnx
```

## Size Breakdown

### Without ONNX (Current Production)
```
Uncompressed: 91 MB
Compressed (gzip): 11 MB
✅ Well within limits
```

### With ONNX (YOLO Enabled)
```
Uncompressed: 886 MB
Compressed (gzip): 131 MB
✅ Within 250 MB limit! (119 MB remaining)
```

### Largest Packages
```
1. opencv-python-headless: 152 MB
2. onnxruntime: 114 MB
3. sympy: 72 MB (dependency of onnxruntime)
4. numpy: 37 MB
```

## Compatibility Notes

### Mac M1/M2 Support
✅ ONNX Runtime fully supports Apple Silicon (as of 2025)
- Official ARM64 wheels available
- No compatibility issues

### Model Formats
- **Development**: `.pt` (PyTorch) - 6.25 MB
- **Production**: `.onnx` (ONNX) - 12.26 MB
- ONNX slightly larger but more portable

### Feature Compatibility
- ✅ Standard detection (bounding boxes)
- ✅ Vehicle classification
- ✅ Confidence thresholds
- ⚠️ OBB (Oriented Bounding Boxes) require ultralytics
  - Not supported in ONNX production mode
  - Use standard detection instead

## Verification

Run full test suite before deploying:

```bash
# 1. Test ONNX inference
python scripts/test_onnx_inference.py
# Expected: ✅ All critical tests passed

# 2. Test compressed size
bash scripts/test_compressed_size.sh
# Expected: ✅ PASS: 131 MB < 250 MB

# 3. Test with real data (if available)
python api/utils/object_detection/detect.py
# Expected: Detections with confidence scores
```

## Troubleshooting

### "ONNX model not found"
```bash
# Export the model
python scripts/export_yolo_to_onnx.py
```

### "Falling back to PyTorch"
- Expected in development (when ultralytics is installed)
- In production, should use ONNX Runtime

### "Size exceeds limit"
```bash
# Check actual compressed size
bash scripts/test_compressed_size.sh

# If over limit, check for unnecessary dependencies
pip list | grep -v "onnxruntime\|opencv\|numpy\|Pillow"
```

### NumPy Compatibility Warning
```
A module that was compiled using NumPy 1.x cannot be run in NumPy 2.x
```
- This is a **warning only**, not an error
- ONNX export still works correctly
- Safe to ignore for now

## Performance

### Inference Speed
- **ONNX Runtime**: ~40-50 ms per image (640x640)
- **PyTorch**: ~60-80 ms per image
- **Improvement**: ~30% faster with ONNX

### Cold Start Time
- With ONNX: ~1-2 seconds
- With PyTorch: ~3-5 seconds
- **Improvement**: ~50% faster cold starts

### Memory Usage
- ONNX Runtime: ~500 MB peak
- PyTorch: ~800 MB peak
- Fits comfortably in Vercel's 2-4 GB memory limit

## Future Improvements

1. **Model Optimization**
   - Quantization (INT8) for smaller size
   - TensorRT for faster inference (Nvidia)

2. **OBB Support**
   - Export yolo11n-obb to ONNX
   - Implement OBB postprocessing in ONNX wrapper

3. **Multi-Model Support**
   - Support different YOLO versions
   - Model selection via API parameter

4. **Caching**
   - Cache model in memory across requests
   - Implement LRU cache for detections

## References

- [Vercel Functions Limits](https://vercel.com/docs/functions/limitations)
- [ONNX Runtime Documentation](https://onnxruntime.ai/)
- [Ultralytics YOLOv8](https://docs.ultralytics.com/)
- [ONNX Model Zoo](https://github.com/onnx/models)

---

**Last Updated**: 2025-11-09
**Status**: ✅ Production Ready
**Deployment Size**: 131 MB (compressed)
**Vercel Limit**: 250 MB (119 MB remaining)



================================================
FILE: alpinesight-app/Dockerfile
================================================
# Use official Python runtime as base image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies for OpenCV and other packages
RUN apt-get update && apt-get install -y \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
    libgomp1 \
    libgl1-mesa-glx \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first for better caching
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the API code
COPY api/ ./api/

# Set Python path
ENV PYTHONPATH=/app

# Expose port (Vercel will override this)
EXPOSE 8000

# Run the FastAPI app with uvicorn
CMD ["uvicorn", "api.index:app", "--host", "0.0.0.0", "--port", "8000"]



================================================
FILE: alpinesight-app/ex.ipynb
================================================
# Jupyter notebook converted to Python script.

!pip install "leafmap[maplibre]"

import leafmap.maplibregl as leafmap

m = leafmap.Map(center=[-115.318121, 36.317589], zoom=15, sidebar_visible=True)
m.add_wayback_layer(date="2014-02-20")
m.add_wayback_layer(date="2025-09-25")
m

m = leafmap.Map(
    center=[-115.318121, 36.317589],
    zoom=15,
    sidebar_visible=True,
    layer_manager_expanded=False,
)
m.add_wayback_time_slider(default_index=-1)
m

import leafmap.leafmap as leafmap

m = leafmap.Map(
    center=[36.317589, -115.318121],
    zoom=15,
    draw_control=False,
    toolbar_control=False,
    zoom_control=False,
    fullscreen_control=False,
)
m.add_wayback_layers()
m



================================================
FILE: alpinesight-app/next.config.js
================================================
/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/:path*"
            : "/api/",
      },
      {
        source: "/docs",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/docs"
            : "/api/docs",
      },
      {
        source: "/openapi.json",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/openapi.json"
            : "/api/openapi.json",
      },
    ];
  },
};

module.exports = nextConfig;



================================================
FILE: alpinesight-app/package.json
================================================
{
  "name": "nextjs-fastapi",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "fastapi-dev": "pip3 install -r requirements.txt && python3 -m uvicorn api.index:app --reload",
    "next-dev": "next dev",
    "dev": "concurrently \"npm run next-dev\" \"npm run fastapi-dev\"",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@ai-sdk/openai": "^2.0.64",
    "@ai-sdk/react": "^2.0.76",
    "@esri/wayback-core": "^1.0.10",
    "@radix-ui/react-slot": "^1.1.0",
    "@types/node": "20.2.4",
    "@types/react": "18.2.7",
    "@types/react-dom": "18.2.4",
    "@types/three": "^0.181.0",
    "@vercel/analytics": "^1.3.1",
    "@vercel/kv": "^2.0.0",
    "ai": "^5.0.76",
    "autoprefixer": "10.4.14",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "concurrently": "^8.0.1",
    "date-fns": "^4.1.0",
    "eslint": "8.41.0",
    "eslint-config-next": "13.4.4",
    "framer-motion": "^11.11.17",
    "geist": "^1.3.1",
    "lucide-react": "^0.460.0",
    "next": "13.4.4",
    "onnxruntime-web": "^1.23.2",
    "postcss": "8.4.23",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-globe.gl": "^2.37.0",
    "react-markdown": "^9.0.1",
    "remark-gfm": "^4.0.0",
    "sonner": "^1.5.0",
    "tailwind-merge": "^2.5.4",
    "tailwindcss": "3.4.15",
    "tailwindcss-animate": "^1.0.7",
    "three": "^0.181.0",
    "types": "link:next-themes/dist/types",
    "typescript": "5.0.4",
    "usehooks-ts": "^3.1.0",
    "zod": "^3.25.76"
  }
}



================================================
FILE: alpinesight-app/postcss.config.js
================================================
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}



================================================
FILE: alpinesight-app/requirements-dev.txt
================================================
# Development dependencies (local Mac development with PyTorch)
annotated-types==0.7.0
anyio==4.11.0
certifi==2025.10.5
charset-normalizer==3.4.4
click==8.3.0
distro==1.9.0
fastapi==0.119.1
h11==0.16.0
httpcore==1.0.9
httpx==0.28.1
idna==3.11
jiter==0.11.1
openai==2.6.0
opencv-python-headless==4.10.0.84
pydantic==2.12.3
pydantic_core==2.41.4
python-dotenv==1.1.1
requests==2.32.5
sniffio==1.3.1
starlette==0.48.0
tqdm==4.67.1
typing-inspection==0.4.2
typing_extensions==4.15.0
urllib3==2.5.0
uvicorn==0.38.0
vercel==0.3.2
vercel-sandbox==0.0.2
vercel-sdk==0.0.8
numpy==2.3.4
ultralytics==8.3.226

# For ONNX export (development only)
onnx==1.17.0



================================================
FILE: alpinesight-app/requirements.txt
================================================
# Production dependencies for Vercel deployment
# Core API dependencies (minimal size for current functionality)
annotated-types==0.7.0
anyio==4.11.0
certifi==2025.10.5
charset-normalizer==3.4.4
click==8.3.0
distro==1.9.0
fastapi==0.119.1
h11==0.16.0
httpcore==1.0.9
httpx==0.28.1
idna==3.11
jiter==0.11.1
openai==2.6.0
pydantic==2.12.3
pydantic_core==2.41.4
python-dotenv==1.1.1
requests==2.32.5
sniffio==1.3.1
starlette==0.48.0
tqdm==4.67.1
typing-inspection==0.4.2
typing_extensions==4.15.0
urllib3==2.5.0
uvicorn==0.38.0
vercel==0.3.2
vercel-sandbox==0.0.2
vercel-sdk==0.0.8

# YOLO detection dependencies - Deployed separately on AWS Lambda
# See lambda/ directory for container deployment (bypasses 250MB limit)
# Uncomment if you want to run YOLO directly in Vercel (not recommended):
# numpy==2.3.4
# onnxruntime==1.20.1
# opencv-python-headless==4.10.0.84
# Pillow==11.1.0



================================================
FILE: alpinesight-app/tailwind.config.js
================================================
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}



================================================
FILE: alpinesight-app/tsconfig.json
================================================
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}



================================================
FILE: alpinesight-app/vercel.json
================================================
{
  "functions": {
    "api/index.py": {
      "memory": 2048,
      "maxDuration": 60
    }
  },
  "git": {
    "deploymentEnabled": {
      "main": true
    }
  }
}



================================================
FILE: alpinesight-app/YOLO_CLIENT_SIDE.md
================================================
# Client-Side YOLO Detection Solution

## 🎯 Problem Solved

**Challenge**: ONNX Runtime + OpenCV = 886 MB (exceeds Vercel's 250 MB serverless function limit)

**Solution**: Run YOLO detection **client-side in the browser** using `onnxruntime-web`!

## ✅ Benefits

1. **No Server-Side Limits** - Runs in the browser, bypasses Vercel's 250 MB limit completely
2. **Everything Stays in Vercel** - No need for separate AWS Lambda or external services
3. **Fast Inference** - Uses WebGPU (GPU acceleration) or WebAssembly (near-native speed)
4. **Privacy-Friendly** - Images never leave the user's browser
5. **Cost-Effective** - No serverless compute costs for ML inference
6. **Scalable** - Client devices do the work, infinitely scalable

## 📦 What Was Created

### 1. **`lib/yolo-client.ts`** - Client-side YOLO detector
- Loads ONNX model in browser
- Runs inference using WebAssembly/WebGPU
- Full preprocessing and postprocessing (NMS, etc.)
- TypeScript types for detections

### 2. **`public/models/`** - Model directory
- Place `yolov8n.onnx` here (12 MB)
- Served as static asset by Vercel

## 🚀 Usage

### Step 1: Copy ONNX Model

```bash
# Export model if not done yet
python scripts/export_yolo_to_onnx.py

# Copy to public folder
cp api/models/yolov8n.onnx public/models/
```

### Step 2: Use in Your Component

```typescript
import { detectObjects } from '@/lib/yolo-client';

// In your component
const runDetection = async (imageUrl: string) => {
  // Load image
  const img = new Image();
  img.src = imageUrl;
  await img.decode();

  // Run detection
  const detections = await detectObjects(img, 0.25, 0.45);

  // Use results
  console.log('Detected objects:', detections);
  // detections = [
  //   { class: "car", confidence: 0.92, bbox: [100, 150, 200, 250] },
  //   { class: "person", confidence: 0.87, bbox: [300, 100, 400, 300] },
  // ]
};
```

### Step 3: Add to Existing Satellite Viewer

Update `components/satellite-image-viewer.tsx` to replace mock annotations with real YOLO detection:

```typescript
import { detectObjects } from '@/lib/yolo-client';

// Replace this:
const box = {
  left: Math.random() * 80 + 5,
  top: Math.random() * 80 + 5,
  size: 30,
};

// With this:
useEffect(() => {
  const runDetection = async () => {
    if (!imageRef.current) return;

    try {
      const detections = await detectObjects(imageRef.current);

      // Convert to annotation format
      const annotations = detections.map(det => ({
        left: (det.bbox[0] / imageRef.current!.width) * 100,
        top: (det.bbox[1] / imageRef.current!.height) * 100,
        width: ((det.bbox[2] - det.bbox[0]) / imageRef.current!.width) * 100,
        height: ((det.bbox[3] - det.bbox[1]) / imageRef.current!.height) * 100,
        class: det.class,
        confidence: det.confidence,
      }));

      setAnnotations(annotations);
    } catch (error) {
      console.error('Detection failed:', error);
    }
  };

  runDetection();
}, [currentIndex]);
```

## 🔧 Configuration

### Execution Providers

The library automatically uses the best available execution provider:

1. **WebGPU** (fastest, GPU) - Chrome 121+, Edge 122+
2. **WebAssembly** (fallback, CPU) - All modern browsers

### Model Loading

Model is loaded once and cached:

```typescript
// First call: loads model (~1-2 seconds)
const detections1 = await detectObjects(image1);

// Subsequent calls: instant (model cached)
const detections2 = await detectObjects(image2);
```

### Performance

- **Model load time**: 1-2 seconds (one-time)
- **Inference time**: 40-100ms per image (depends on device)
  - WebGPU: 40-60ms (GPU)
  - WebAssembly: 80-100ms (CPU)

## 📊 Deployment Size

```
Vercel deployment:
├── Frontend bundle: ~2 MB (including onnxruntime-web)
├── ONNX model (static asset): 12 MB
└── Total: ~14 MB ✅ WAY under limit!
```

## 🎨 Example: Vehicle Detection on Satellite Images

```typescript
import { detectObjects } from '@/lib/yolo-client';

const detectVehicles = async (satelliteImage: string) => {
  const img = new Image();
  img.src = satelliteImage;
  await img.decode();

  const detections = await detectObjects(img, 0.25);

  // Filter for vehicles
  const vehicles = detections.filter(d =>
    ['car', 'truck', 'bus', 'motorcycle'].includes(d.class)
  );

  console.log(`Found ${vehicles.length} vehicles`);
  return vehicles;
};
```

## 🔍 Browser Compatibility

| Browser | WebGPU | WebAssembly | Notes |
|---------|--------|-------------|-------|
| Chrome 121+ | ✅ | ✅ | Best performance |
| Edge 122+ | ✅ | ✅ | Best performance |
| Safari 17+ | ⚠️ | ✅ | WebGPU experimental |
| Firefox | ❌ | ✅ | WebAssembly only |

## 💡 Tips

### 1. **Lazy Load Model**
Don't load the model until needed:

```typescript
// Load on button click, not on page load
<button onClick={async () => {
  const detector = await getYOLODetector(); // Loads model
  const results = await detector.detect(imageData);
}}>
  Detect Objects
</button>
```

### 2. **Show Loading State**
Model loading takes 1-2 seconds:

```typescript
const [loading, setLoading] = useState(false);

const detect = async () => {
  setLoading(true);
  try {
    const results = await detectObjects(image);
    // Use results
  } finally {
    setLoading(false);
  }
};
```

### 3. **Cache Results**
Don't re-detect the same image:

```typescript
const [detectionCache, setDetectionCache] = useState(new Map());

const detectCached = async (imageUrl: string) => {
  if (detectionCache.has(imageUrl)) {
    return detectionCache.get(imageUrl);
  }

  const results = await detectObjects(image);
  detectionCache.set(imageUrl, results);
  return results;
};
```

## 🆚 Comparison: Client-Side vs Server-Side

| Aspect | Client-Side (This Solution) | Server-Side (Lambda) |
|--------|---------------------------|---------------------|
| Vercel deployment | ✅ 14 MB | ❌ 886 MB (exceeds limit) |
| Cost | ✅ Free (client compute) | 💰 ~$4.50/month |
| Privacy | ✅ Images stay in browser | ❌ Sent to server |
| Latency | ✅ No network roundtrip | ⚠️ Network + compute |
| Scalability | ✅ Unlimited (client scales) | ⚠️ Lambda concurrency limits |
| Device requirement | ⚠️ Needs decent device | ✅ Works on any device |

## 🔄 Migration Path

If you later want to move to server-side (for weaker devices):

1. Keep the client-side implementation
2. Add feature detection:
```typescript
const useClientSideDetection = 'gpu' in navigator && navigator.hardwareConcurrency > 4;

if (useClientSideDetection) {
  // Use lib/yolo-client.ts
} else {
  // Call AWS Lambda endpoint
}
```

## 📚 References

- [ONNX Runtime Web Docs](https://onnxruntime.ai/docs/get-started/with-javascript/web.html)
- [WebGPU Support](https://onnxruntime.ai/docs/tutorials/web/ep-webgpu.html)
- [Vercel Edge Runtime](https://vercel.com/docs/functions/runtimes/edge)

---

**Status**: ✅ Production Ready
**Deployment Size**: 14 MB (vs 886 MB server-side)
**Performance**: 40-100ms per inference
**Browser Support**: All modern browsers



================================================
FILE: alpinesight-app/.dockerignore
================================================
# Node modules and frontend build
node_modules/
.next/
out/

# Python cache and virtual environments
__pycache__/
*.pyc
*.pyo
*.pyd
.Python
.venv/
venv/
env/

# Git and version control
.git/
.gitignore
.gitattributes

# IDE and editor files
.vscode/
.idea/
*.swp
*.swo
*~

# OS files
.DS_Store
Thumbs.db

# Build outputs
build/
dist/
*.egg-info/

# Testing and coverage
.coverage
htmlcov/
.pytest_cache/
.tox/

# Environment variables (add to environment in Vercel)
.env
.env.local
.env*.local

# Documentation and markdown
*.md
docs/

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Vercel
.vercel/

# Frontend source (not needed in API container)
app/
components/
contexts/
public/
styles/

# Config files not needed in container
package.json
package-lock.json
pnpm-lock.yaml
tsconfig.json
next.config.js
tailwind.config.ts
postcss.config.js
biome.json



================================================
FILE: alpinesight-app/.env.local.template
================================================
OPENROUTER_API_KEY=sk-or-v1-SOMETHINGSOMETHING



================================================
FILE: alpinesight-app/.eslintrc.json
================================================
{
  "extends": "next/core-web-vitals"
}



================================================
FILE: alpinesight-app/.vercelignore
================================================
# Build artifacts that shouldn't be deployed
.next/cache/
.next/trace/

# Python environments and caches
.venv/
venv/
__pycache__/
*.pyc
*.pyo
*.pyd
.Python
pip-log.txt
pip-delete-this-directory.txt

# Exclude test files and documentation from dependencies (saves ~100 MB)
**/tests/
**/test/
**/*.md
**/docs/
**/examples/
**/benchmarks/
**/*.pyx
**/*.pxd
**/*.c
**/*.cpp
**/*.h

# YOLO models (download at runtime instead)
*.pt
*.pth
*.onnx
*.engine
*.mlmodel
models/
weights/

# Development files
.git/
.gitignore
.env*.local
.DS_Store
*.log
.idea/

# Test files
tests/
test/
*.test.js
*.test.ts
*.spec.js
*.spec.ts

# Documentation
docs/
*.md
!README.md

# IDE
.vscode/
.idea/

# Large dependencies that can be minimized
node_modules/.cache/



================================================
FILE: alpinesight-app/api/README.md
================================================
[Empty file]


================================================
FILE: alpinesight-app/api/index.py
================================================
import os
from typing import List
from pydantic import BaseModel
from dotenv import load_dotenv
from fastapi import FastAPI, Query, Request as FastAPIRequest
from fastapi.responses import StreamingResponse
from openai import OpenAI
from ._utils.prompt import ClientMessage, convert_to_openai_messages
from ._utils.stream import patch_response_with_headers, stream_text
from ._utils.tools import AVAILABLE_TOOLS, TOOL_DEFINITIONS
from vercel import oidc
from vercel.headers import set_headers


load_dotenv(".env.local")

app = FastAPI()


@app.middleware("http")
async def _vercel_set_headers(request: FastAPIRequest, call_next):
    set_headers(dict(request.headers))
    return await call_next(request)


def get_openai_client():
    """Get OpenAI client with appropriate configuration for environment."""
    # Check if running in Vercel environment
    if os.environ.get("VERCEL"):
        # Use Vercel AI Gateway with OIDC token
        return OpenAI(
            api_key=oidc.get_vercel_oidc_token(),
            base_url="https://ai-gateway.vercel.sh/v1"
        ), "google/gemini-2.0-flash-exp:free"

    # For local development, prefer OpenRouter
    openrouter_key = os.environ.get("OPENROUTER_API_KEY")
    if openrouter_key:
        # Default to Gemini 2.0 Flash (free and fast)
        model = os.environ.get("MODEL_NAME", "google/gemini-2.0-flash-exp:free")
        return OpenAI(
            api_key=openrouter_key,
            base_url="https://openrouter.ai/api/v1"
        ), model

    # Fallback to regular OpenAI
    openai_key = os.environ.get("OPENAI_API_KEY")
    if openai_key:
        model = os.environ.get("MODEL_NAME", "gpt-4o-mini")
        return OpenAI(api_key=openai_key), model

    raise ValueError(
        "No API key found. Please set OPENROUTER_API_KEY, OPENAI_API_KEY in .env.local, "
        "or deploy to Vercel for OIDC authentication."
    )


class Request(BaseModel):
    messages: List[ClientMessage]
    model: str | None = None


@app.post("/api/chat")
async def handle_chat_data(request: Request, protocol: str = Query('data')):
    messages = request.messages
    openai_messages = convert_to_openai_messages(messages)

    # Get model from request or use default
    requested_model = request.model
    client, model = get_openai_client()

    # Override with requested model if provided
    if requested_model:
        model = requested_model

    response = StreamingResponse(
        stream_text(client, openai_messages, TOOL_DEFINITIONS, AVAILABLE_TOOLS, protocol, model),
        media_type="text/event-stream",
    )
    return patch_response_with_headers(response, protocol)



================================================
FILE: alpinesight-app/api/.python-version
================================================
3.12



================================================
FILE: alpinesight-app/api/_utils/__init__.py
================================================
[Empty file]


================================================
FILE: alpinesight-app/api/_utils/attachment.py
================================================
from pydantic import BaseModel


class ClientAttachment(BaseModel):
    name: str
    contentType: str
    url: str



================================================
FILE: alpinesight-app/api/_utils/prompt.py
================================================
import json
from enum import Enum
from typing import Any, List, Optional

from openai.types.chat.chat_completion_message_param import ChatCompletionMessageParam
from pydantic import BaseModel, ConfigDict

from .attachment import ClientAttachment


class ToolInvocationState(str, Enum):
    CALL = 'call'
    PARTIAL_CALL = 'partial-call'
    RESULT = 'result'

class ToolInvocation(BaseModel):
    state: ToolInvocationState
    toolCallId: str
    toolName: str
    args: Any
    result: Any


class ClientMessagePart(BaseModel):
    type: str
    text: Optional[str] = None
    contentType: Optional[str] = None
    url: Optional[str] = None
    data: Optional[Any] = None
    toolCallId: Optional[str] = None
    toolName: Optional[str] = None
    state: Optional[str] = None
    input: Optional[Any] = None
    output: Optional[Any] = None
    args: Optional[Any] = None

    model_config = ConfigDict(extra="allow")


class ClientMessage(BaseModel):
    role: str
    content: Optional[str] = None
    parts: Optional[List[ClientMessagePart]] = None
    experimental_attachments: Optional[List[ClientAttachment]] = None
    toolInvocations: Optional[List[ToolInvocation]] = None


def convert_to_openai_messages(messages: List[ClientMessage]) -> List[ChatCompletionMessageParam]:
    openai_messages = []

    for message in messages:
        message_parts: List[dict] = []
        tool_calls = []
        tool_result_messages = []

        if message.parts:
            for part in message.parts:
                if part.type == 'text':
                    # Ensure empty strings default to ''
                    message_parts.append({
                        'type': 'text',
                        'text': part.text or ''
                    })

                elif part.type == 'file':
                    if part.contentType and part.contentType.startswith('image') and part.url:
                        message_parts.append({
                            'type': 'image_url',
                            'image_url': {
                                'url': part.url
                            }
                        })
                    elif part.url:
                        # Fall back to including the URL as text if we cannot map the file directly.
                        message_parts.append({
                            'type': 'text',
                            'text': part.url
                        })

                elif part.type.startswith('tool-'):
                    tool_call_id = part.toolCallId
                    tool_name = part.toolName or part.type.replace('tool-', '', 1)

                    if tool_call_id and tool_name:
                        should_emit_tool_call = False

                        if part.state and any(keyword in part.state for keyword in ('call', 'input')):
                            should_emit_tool_call = True

                        if part.input is not None or part.args is not None:
                            should_emit_tool_call = True

                        if should_emit_tool_call:
                            arguments = part.input if part.input is not None else part.args
                            if isinstance(arguments, str):
                                serialized_arguments = arguments
                            else:
                                serialized_arguments = json.dumps(arguments or {})

                            tool_calls.append({
                                "id": tool_call_id,
                                "type": "function",
                                "function": {
                                    "name": tool_name,
                                    "arguments": serialized_arguments
                                }
                            })

                        if part.state == 'output-available' and part.output is not None:
                            tool_result_messages.append({
                                "role": "tool",
                                "tool_call_id": tool_call_id,
                                "content": json.dumps(part.output),
                            })

        elif message.content is not None:
            message_parts.append({
                'type': 'text',
                'text': message.content
            })

        if not message.parts and message.experimental_attachments:
            for attachment in message.experimental_attachments:
                if attachment.contentType.startswith('image'):
                    message_parts.append({
                        'type': 'image_url',
                        'image_url': {
                            'url': attachment.url
                        }
                    })

                elif attachment.contentType.startswith('text'):
                    message_parts.append({
                        'type': 'text',
                        'text': attachment.url
                    })

        if(message.toolInvocations):
            for toolInvocation in message.toolInvocations:
                tool_calls.append({
                    "id": toolInvocation.toolCallId,
                    "type": "function",
                    "function": {
                        "name": toolInvocation.toolName,
                        "arguments": json.dumps(toolInvocation.args)
                    }
                })

        if message_parts:
            if len(message_parts) == 1 and message_parts[0]['type'] == 'text':
                content_payload = message_parts[0]['text']
            else:
                content_payload = message_parts
        else:
            # Ensure that we always provide some content for OpenAI
            content_payload = ""

        openai_message: ChatCompletionMessageParam = {
            "role": message.role,
            "content": content_payload,
        }

        if tool_calls:
            openai_message["tool_calls"] = tool_calls

        openai_messages.append(openai_message)

        if(message.toolInvocations):
            for toolInvocation in message.toolInvocations:
                tool_message = {
                    "role": "tool",
                    "tool_call_id": toolInvocation.toolCallId,
                    "content": json.dumps(toolInvocation.result),
                }

                openai_messages.append(tool_message)

        openai_messages.extend(tool_result_messages)

    return openai_messages



================================================
FILE: alpinesight-app/api/_utils/stream.py
================================================
import json
import traceback
import uuid
from typing import Any, Callable, Dict, Mapping, Sequence

from fastapi.responses import StreamingResponse
from openai import OpenAI
from openai.types.chat.chat_completion_message_param import ChatCompletionMessageParam


def stream_text(
    client: OpenAI,
    messages: Sequence[ChatCompletionMessageParam],
    tool_definitions: Sequence[Dict[str, Any]],
    available_tools: Mapping[str, Callable[..., Any]],
    protocol: str = "data",
    model: str = "gpt-4o",
):
    """Yield Server-Sent Events for a streaming chat completion."""
    try:
        def format_sse(payload: dict) -> str:
            return f"data: {json.dumps(payload, separators=(',', ':'))}\n\n"

        message_id = f"msg-{uuid.uuid4().hex}"
        text_stream_id = "text-1"
        text_started = False
        text_finished = False
        finish_reason = None
        usage_data = None
        tool_calls_state: Dict[int, Dict[str, Any]] = {}

        yield format_sse({"type": "start", "messageId": message_id})

        try:
            stream = client.chat.completions.create(
                messages=messages,
                model=model,
                stream=True,
                tools=tool_definitions,
            )
        except Exception as error:
            # Send error to frontend
            error_msg = str(error)
            if "429" in error_msg or "rate-limited" in error_msg.lower():
                yield format_sse({
                    "type": "error",
                    "error": "Rate limit reached. Please wait a moment or try a different model."
                })
            elif "401" in error_msg or "unauthorized" in error_msg.lower():
                yield format_sse({
                    "type": "error",
                    "error": "API key error. Please check your configuration."
                })
            else:
                yield format_sse({
                    "type": "error",
                    "error": f"Model error: {error_msg}"
                })
            yield "data: [DONE]\n\n"
            return

        for chunk in stream:
            for choice in chunk.choices:
                if choice.finish_reason is not None:
                    finish_reason = choice.finish_reason

                delta = choice.delta
                if delta is None:
                    continue

                if delta.content is not None:
                    if not text_started:
                        yield format_sse({"type": "text-start", "id": text_stream_id})
                        text_started = True
                    yield format_sse(
                        {"type": "text-delta", "id": text_stream_id, "delta": delta.content}
                    )

                if delta.tool_calls:
                    for tool_call_delta in delta.tool_calls:
                        index = tool_call_delta.index
                        state = tool_calls_state.setdefault(
                            index,
                            {
                                "id": None,
                                "name": None,
                                "arguments": "",
                                "started": False,
                            },
                        )

                        if tool_call_delta.id is not None:
                            state["id"] = tool_call_delta.id
                            if (
                                state["id"] is not None
                                and state["name"] is not None
                                and not state["started"]
                            ):
                                yield format_sse(
                                    {
                                        "type": "tool-input-start",
                                        "toolCallId": state["id"],
                                        "toolName": state["name"],
                                    }
                                )
                                state["started"] = True

                        function_call = getattr(tool_call_delta, "function", None)
                        if function_call is not None:
                            if function_call.name is not None:
                                state["name"] = function_call.name
                                if (
                                    state["id"] is not None
                                    and state["name"] is not None
                                    and not state["started"]
                                ):
                                    yield format_sse(
                                        {
                                            "type": "tool-input-start",
                                            "toolCallId": state["id"],
                                            "toolName": state["name"],
                                        }
                                    )
                                    state["started"] = True

                            if function_call.arguments:
                                if (
                                    state["id"] is not None
                                    and state["name"] is not None
                                    and not state["started"]
                                ):
                                    yield format_sse(
                                        {
                                            "type": "tool-input-start",
                                            "toolCallId": state["id"],
                                            "toolName": state["name"],
                                        }
                                    )
                                    state["started"] = True

                                state["arguments"] += function_call.arguments
                                if state["id"] is not None:
                                    yield format_sse(
                                        {
                                            "type": "tool-input-delta",
                                            "toolCallId": state["id"],
                                            "inputTextDelta": function_call.arguments,
                                        }
                                    )

            if not chunk.choices and chunk.usage is not None:
                usage_data = chunk.usage

        if finish_reason == "stop" and text_started and not text_finished:
            yield format_sse({"type": "text-end", "id": text_stream_id})
            text_finished = True

        if finish_reason == "tool_calls":
            for index in sorted(tool_calls_state.keys()):
                state = tool_calls_state[index]
                tool_call_id = state.get("id")
                tool_name = state.get("name")

                if tool_call_id is None or tool_name is None:
                    continue

                if not state["started"]:
                    yield format_sse(
                        {
                            "type": "tool-input-start",
                            "toolCallId": tool_call_id,
                            "toolName": tool_name,
                        }
                    )
                    state["started"] = True

                raw_arguments = state["arguments"]
                try:
                    parsed_arguments = json.loads(raw_arguments) if raw_arguments else {}
                except Exception as error:
                    yield format_sse(
                        {
                            "type": "tool-input-error",
                            "toolCallId": tool_call_id,
                            "toolName": tool_name,
                            "input": raw_arguments,
                            "errorText": str(error),
                        }
                    )
                    continue

                yield format_sse(
                    {
                        "type": "tool-input-available",
                        "toolCallId": tool_call_id,
                        "toolName": tool_name,
                        "input": parsed_arguments,
                    }
                )

                tool_function = available_tools.get(tool_name)
                if tool_function is None:
                    yield format_sse(
                        {
                            "type": "tool-output-error",
                            "toolCallId": tool_call_id,
                            "errorText": f"Tool '{tool_name}' not found.",
                        }
                    )
                    continue

                try:
                    tool_result = tool_function(**parsed_arguments)
                except Exception as error:
                    yield format_sse(
                        {
                            "type": "tool-output-error",
                            "toolCallId": tool_call_id,
                            "errorText": str(error),
                        }
                    )
                else:
                    yield format_sse(
                        {
                            "type": "tool-output-available",
                            "toolCallId": tool_call_id,
                            "output": tool_result,
                        }
                    )

        if text_started and not text_finished:
            yield format_sse({"type": "text-end", "id": text_stream_id})
            text_finished = True

        finish_metadata: Dict[str, Any] = {}
        if finish_reason is not None:
            finish_metadata["finishReason"] = finish_reason.replace("_", "-")

        if usage_data is not None:
            usage_payload = {
                "promptTokens": usage_data.prompt_tokens,
                "completionTokens": usage_data.completion_tokens,
            }
            total_tokens = getattr(usage_data, "total_tokens", None)
            if total_tokens is not None:
                usage_payload["totalTokens"] = total_tokens
            finish_metadata["usage"] = usage_payload

        if finish_metadata:
            yield format_sse({"type": "finish", "messageMetadata": finish_metadata})
        else:
            yield format_sse({"type": "finish"})

        yield "data: [DONE]\n\n"
    except Exception:
        traceback.print_exc()
        raise


def patch_response_with_headers(
    response: StreamingResponse,
    protocol: str = "data",
) -> StreamingResponse:
    """Apply the standard streaming headers expected by the Vercel AI SDK."""

    response.headers["x-vercel-ai-ui-message-stream"] = "v1"
    response.headers["Cache-Control"] = "no-cache"
    response.headers["Connection"] = "keep-alive"
    response.headers["X-Accel-Buffering"] = "no"

    if protocol:
        response.headers.setdefault("x-vercel-ai-protocol", protocol)

    return response



================================================
FILE: alpinesight-app/api/_utils/tools.py
================================================
import requests


def get_current_weather(latitude, longitude):
    # Format the URL with proper parameter substitution
    url = f"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current=temperature_2m&hourly=temperature_2m&daily=sunrise,sunset&timezone=auto"

    try:
        # Make the API call
        response = requests.get(url)

        # Raise an exception for bad status codes
        response.raise_for_status()

        # Return the JSON response
        return response.json()

    except requests.RequestException as e:
        # Handle any errors that occur during the request
        print(f"Error fetching weather data: {e}")
        return None


def show_location_on_globe(location: str, markerColor: str = "red"):
    """
    Shows a location on the interactive globe with a marker.
    ALWAYS call this tool for EVERY new user request to show/find/locate/display a place, even if the globe is already open or another location was just shown. Do NOT just respond with text like "with a blue marker"—you must invoke this tool so the frontend can update the globe.
    You can change marker colors if the user asks (red, blue, green, orange, purple).
    Returns a confirmation for the AI.
    """
    return {
        "status": "success",
        "action": "displayed_location",
        "location": location,
        "marker_color": markerColor,
        "message": f"Opened interactive globe and displayed {location} with {markerColor} marker"
    }


def close_globe():
    """
    Closes the globe view.
    This is a client-side tool that will be handled by the frontend.
    Return a confirmation so the AI knows the action succeeded.
    """
    return {
        "status": "success",
        "action": "closed_globe",
        "message": "Closed the globe view"
    }


def get_satellite_timeline(location: str, latitude: float, longitude: float):
    """
    Retrieves historical satellite imagery timeline for a specific location and analyzes visitor/traffic patterns using computer vision.

    WHEN TO USE THIS TOOL:
    - User asks for satellite imagery, historical imagery, wayback imagery, maps over time, or changes over time
    - User wants to ANALYZE POPULARITY, visitor trends, foot traffic, or activity levels at a location
    - User mentions TOURISM analysis, occupancy correlation, or business analytics for a location
    - User wants to check how BUSY a place is, traffic patterns, or crowding over time
    - User asks about TRENDS or temporal analysis of any location

    EXAMPLES OF REQUESTS THAT SHOULD USE THIS TOOL:
    ✓ "analyze popularity of Tulfes ski resort"
    ✓ "check visitor trends at Central Park"
    ✓ "how busy is Times Square"
    ✓ "correlate traffic with my hotel occupancy"
    ✓ "show me activity patterns at the beach"
    ✓ "is this tourist destination getting more crowded over time"

    IMPORTANT: ALWAYS call this tool for ANY request involving location analysis, popularity, traffic, or trends – EVEN IF the interactive globe is currently open or was just used. The frontend will automatically close the globe and display the satellite timeline with AI-powered vehicle/visitor detection.

    The tool will:
    1. Fetch historical satellite imagery from ESRI Wayback
    2. Run AI-powered object detection to count vehicles (proxy for visitor activity)
    3. Generate a timeline chart showing traffic/popularity trends
    4. Provide insights for business/tourism analysis
    """
    return {
        "status": "success",
        "action": "show_satellite_timeline",
        "location": location,
        "latitude": latitude,
        "longitude": longitude,
        "message": f"Analyzing historical visitor patterns and popularity trends for {location} using satellite imagery and AI detection"
    }


TOOL_DEFINITIONS = [
    {
        "type": "function",
        "function": {
            "name": "get_current_weather",
            "description": "Get the current weather at a location",
            "parameters": {
                "type": "object",
                "properties": {
                    "latitude": {
                        "type": "number",
                        "description": "The latitude of the location",
                    },
                    "longitude": {
                        "type": "number",
                        "description": "The longitude of the location",
                    },
                },
                "required": ["latitude", "longitude"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "show_location_on_globe",
            "description": "Shows a location on the interactive 3D globe with a marker and zooms to it. ALWAYS call for each new location request even if the globe is open already. Examples: 'show me Paris', 'find Big Ben', 'locate Mount Everest'. IMPORTANT: Each call replaces previous markers (they are cleared). Marker colors allowed: red, blue, green, orange, purple.",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "The name of the location to show (e.g., 'Istanbul', 'Paris', 'Mount Everest', 'Golden Gate Bridge')",
                    },
                    "markerColor": {
                        "type": "string",
                        "description": "The color of the marker pin",
                        "enum": ["red", "blue", "green", "orange", "purple"],
                        "default": "red"
                    },
                },
                "required": ["location"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "close_globe",
            "description": "Closes the globe view, clears all markers, and returns to full-screen chat. Use when the user explicitly asks to close or changes topic away from locations.",
            "parameters": {
                "type": "object",
                "properties": {},
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "get_satellite_timeline",
            "description": "Analyzes location popularity, visitor trends, and traffic patterns using historical satellite imagery with AI-powered vehicle detection. Use this tool when users ask to: analyze popularity/traffic/visitors, check how busy a place is, correlate with business metrics (hotel occupancy, tourism), examine trends over time, or view satellite/historical imagery. The tool fetches ESRI Wayback imagery and runs computer vision to count vehicles as a proxy for visitor activity. ALWAYS call this even if globe is open - it will auto-close and show the satellite timeline viewer. Examples: 'analyze popularity of Tulfes', 'check visitor trends at the beach', 'how busy is Times Square', 'correlate with my hotel data'.",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "The name or address of the location to analyze (e.g., 'Tulfes Glungezerbahn Talstation', 'Eiffel Tower', 'Central Park')",
                    },
                    "latitude": {
                        "type": "number",
                        "description": "Latitude in decimal degrees (required for geocoding)",
                    },
                    "longitude": {
                        "type": "number",
                        "description": "Longitude in decimal degrees (required for geocoding)",
                    },
                },
                "required": ["location", "latitude", "longitude"],
            },
        },
    },
]


AVAILABLE_TOOLS = {
    "get_current_weather": get_current_weather,
    "show_location_on_globe": show_location_on_globe,
    "close_globe": close_globe,
    "get_satellite_timeline": get_satellite_timeline,
}



================================================
FILE: alpinesight-app/api/_utils/object_detection/__init__.py
================================================
[Empty file]


================================================
FILE: alpinesight-app/api/_utils/object_detection/detect.py
================================================
# file: detect_vehicles.py
import os
from pathlib import Path

import cv2
import numpy as np

# Use ONNX Runtime instead of ultralytics for production deployment
try:
    from api._utils.object_detection.onnx_detector import YOLO_ONNX as YOLO
    USE_ONNX = True
except ImportError:
    # Fallback to ultralytics for development
    from ultralytics import YOLO
    USE_ONNX = False

# Define which classes count as "vehicles" for your use case
VEHICLE_CLASSES = {
    "car",
    "motorcycle",
    "bus",
    "truck",
    "bicycle",    # keep or drop based on your scope
    "train"       # big objects, can unselect if you only want road traffic
}

def load_model(model_name: str = "yolov8n.pt") -> YOLO:
    """
    Use yolov8n for speed or yolov8s/m for better accuracy.

    For production (ONNX): model_name should be "api/models/yolov8n.onnx"
    For development (PyTorch): model_name should be "yolov8n.pt"
    """
    # Auto-convert .pt to .onnx path for production
    if USE_ONNX and model_name.endswith('.pt'):
        model_name = model_name.replace('.pt', '.onnx')
        if not model_name.startswith('api/models/'):
            model_name = f"api/models/{os.path.basename(model_name)}"

    print(f"🔄 Loading model: {model_name} ({'ONNX' if USE_ONNX else 'PyTorch'})")
    return YOLO(model_name)

def filter_vehicle_detections(result, vehicle_classes=VEHICLE_CLASSES):
    """
    Takes a single Ultralytics result object.
    Returns list of (cls_name, conf, x1, y1, x2, y2)
    """
    names = result.names
    boxes = result.boxes
    if boxes is None or len(boxes) == 0:
        return []

    out = []
    for box in boxes:
        cls_id = int(box.cls[0])
        cls_name = names[cls_id]
        if cls_name in vehicle_classes:
            x1, y1, x2, y2 = box.xyxy[0].tolist()
            conf = float(box.conf[0])
            out.append((cls_name, conf, int(x1), int(y1), int(x2), int(y2)))
    return out

def annotate_and_count_image(model: YOLO, img_path: Path, conf_thres=0.25):
    """
    Runs detection on one image, returns stats and saves an annotated copy.
    """
    results = model.predict(source=str(img_path), conf=conf_thres, verbose=False)
    if not results:
        return {"image": str(img_path), "total": 0, "per_class": {}}

    result = results[0]
    vehicles = filter_vehicle_detections(result)

    # Count per class
    per_class = {}
    for cls_name, conf, *_ in vehicles:
        per_class[cls_name] = per_class.get(cls_name, 0) + 1

    # Draw boxes
    img = cv2.imread(str(img_path))
    if img is None:
        return {"image": str(img_path), "total": 0, "per_class": {}}

    for cls_name, conf, x1, y1, x2, y2 in vehicles:
        label = f"{cls_name} {conf:.2f}"
        cv2.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)
        cv2.putText(
            img,
            label,
            (x1, max(0, y1 - 5)),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.4,
            (0, 255, 0),
            1,
            cv2.LINE_AA,
        )

    out_dir = img_path.parent / "annotated"
    out_dir.mkdir(exist_ok=True)
    out_file = out_dir / img_path.name
    cv2.imwrite(str(out_file), img)

    return {
        "image": str(img_path),
        "total": len(vehicles),
        "per_class": per_class,
        "annotated": str(out_file),
    }

def run_on_folder(
    input_folder: str = "data/raw",
    model_name: str = "yolov8n.pt",
    conf_thres: float = 0.25,
):
    model = load_model(model_name)

    input_path = Path(input_folder)
    image_exts = {".jpg", ".jpeg", ".png", ".tif", ".tiff", ".bmp"}

    all_stats = []
    total_overall = 0
    total_by_class = {}

    for img_path in sorted(input_path.iterdir()):
        if img_path.suffix.lower() not in image_exts:
            continue
        stats = annotate_and_count_image(model, img_path, conf_thres)
        all_stats.append(stats)

        total_overall += stats["total"]
        for cls_name, count in stats["per_class"].items():
            total_by_class[cls_name] = total_by_class.get(cls_name, 0) + count

        print(f"{stats['image']}: {stats['total']} vehicles {stats['per_class']}")

    print("\nSummary")
    print("Total vehicles:", total_overall)
    print("By class:", total_by_class)

    return all_stats

def run_single(
    image_path: str = "/Users/lukasbauer/alpinesight/test_data/sat_1.png",
    model_name: str = "yolov8n.pt",
    conf_thres: float = 0.05,
):
    model = load_model(model_name)
    img_path = Path(image_path)
    stats = annotate_and_count_image(model, img_path, conf_thres)
    print(f"Image: {stats['image']}")
    print(f"Total vehicles: {stats['total']}")
    print(f"Per class: {stats['per_class']}")
    print(f"Annotated image: {stats['annotated']}")
    return stats

if __name__ == "__main__":
    run_single()



================================================
FILE: alpinesight-app/api/_utils/object_detection/fetch_image.py
================================================
# file: fetch_image.py
import os
import math
import requests

def latlon_to_tile(lat, lon, zoom):
    lat_rad = math.radians(lat)
    n = 2.0 ** zoom
    x_tile = int((lon + 180.0) / 360.0 * n)
    y_tile = int((1.0 - math.log(math.tan(lat_rad) + 1.0 / math.cos(lat_rad)) / math.pi) / 2.0 * n)
    return x_tile, y_tile

def fetch_satellite_tile(lat, lon, zoom, out_path, url_template, api_key=None):
    """
    url_template example for a tile based provider:
    "https://api.example.com/tiles/satellite/{z}/{x}/{y}.png?key={api_key}"
    You must choose a provider that allows this usage.
    """
    x, y = latlon_to_tile(lat, lon, zoom)
    url = url_template.format(z=zoom, x=x, y=y, api_key=api_key or "")
    resp = requests.get(url, timeout=20)
    resp.raise_for_status()
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "wb") as f:
        f.write(resp.content)
    return out_path

if __name__ == "__main__":
    # Example placeholder, replace url_template and api_key with a legal source
    img_path = fetch_satellite_tile(
        lat=47.263, lon=11.400,
        zoom=19,
        out_path="data/raw/test_tile.png",
        url_template="https://your-provider.example/{z}/{x}/{y}.png?key={api_key}",
        api_key="YOUR_KEY"
    )
    print("Saved", img_path)




================================================
FILE: alpinesight-app/api/_utils/object_detection/obb.py
================================================
from pathlib import Path
import cv2
from ultralytics import YOLO

def run_yolo11_obb_single(
    image_path="/Users/lukasbauer/alpinesight/test_data/sat_2.png",
    model_path="yolo11n-obb.pt",
    conf_thres=0.2,
):
    img_path = Path(image_path)
    if not img_path.exists():
        raise FileNotFoundError(img_path)

    model = YOLO(model_path)
    img = cv2.imread(str(img_path))
    if img is None:
        raise RuntimeError("Could not read image")

    # direct predict with higher imgsz since objects are small
    results = model.predict(
        source=img,
        conf=conf_thres,
        imgsz=1280,
        verbose=False
    )

    r = results[0]
    if r.obb is None or len(r.obb) == 0:
        print("No OBB detections")
        return

    boxes = r.obb.xyxy.cpu().numpy()  # axis aligned from oriented boxes
    scores = r.obb.conf.cpu().numpy()
    classes = r.obb.cls.cpu().numpy().astype(int)
    names = r.names

    count = 0
    vis = img.copy()
    for (x1, y1, x2, y2), conf, cls_id in zip(boxes, scores, classes):
        cls_name = names.get(int(cls_id), str(cls_id))
        # pick vehicle like classes from DOTA style labels
        if "vehicle" in cls_name or "car" in cls_name or "truck" in cls_name:
            count += 1
            x1 = int(x1)
            y1 = int(y1)
            x2 = int(x2)
            y2 = int(y2)
            cv2.rectangle(vis, (x1, y1), (x2, y2), (0, 255, 0), 1)
            cv2.putText(
                vis,
                f"{cls_name} {conf:.2f}",
                (x1, max(0, y1 - 3)),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.35,
                (0, 255, 0),
                1,
                cv2.LINE_AA,
            )

    out_path = img_path.parent / "sat_1_yolo11_obb.png"
    cv2.imwrite(str(out_path), vis)
    print(f"Vehicle like detections: {count}")
    print(f"Annotated image: {out_path}")
    return count, str(out_path)

if __name__ == "__main__":
    run_yolo11_obb_single()




================================================
FILE: alpinesight-app/api/_utils/object_detection/onnx_detector.py
================================================
#!/usr/bin/env python3
"""
ONNX Runtime inference wrapper for YOLOv8 models.

This module provides a drop-in replacement for ultralytics YOLO class
using ONNX Runtime for inference. It maintains compatibility with existing
detection code while using the lightweight ONNX Runtime (~50 MB) instead
of PyTorch (~571 MB).

Usage:
    from api._utils.object_detection.onnx_detector import YOLO_ONNX

    model = YOLO_ONNX("api/models/yolov8n.onnx")
    results = model.predict(source="image.jpg", conf=0.25)
"""

import os
from pathlib import Path
from typing import Union, List, Tuple

import cv2
import numpy as np
import onnxruntime as ort


class ONNXDetectionResult:
    """
    Mimics ultralytics Results object structure.
    Provides compatibility with existing detection code.
    """

    def __init__(self, boxes_data, names, orig_shape):
        self.boxes = ONNXBoxes(boxes_data) if boxes_data is not None else None
        self.names = names
        self.orig_shape = orig_shape
        self.obb = None  # OBB not supported in this basic implementation

    def __len__(self):
        return len(self.boxes) if self.boxes is not None else 0


class ONNXBoxes:
    """
    Mimics ultralytics Boxes object structure.
    Stores detection boxes in xyxy format with confidence and class.
    """

    def __init__(self, boxes_data):
        """
        boxes_data: numpy array of shape (N, 6) with [x1, y1, x2, y2, conf, cls]
        """
        self.data = boxes_data

    @property
    def xyxy(self):
        """Returns boxes in xyxy format as numpy array."""
        if self.data is None or len(self.data) == 0:
            return np.array([]).reshape(0, 4)
        return self.data[:, :4]

    @property
    def conf(self):
        """Returns confidence scores as numpy array."""
        if self.data is None or len(self.data) == 0:
            return np.array([])
        return self.data[:, 4]

    @property
    def cls(self):
        """Returns class indices as numpy array."""
        if self.data is None or len(self.data) == 0:
            return np.array([])
        return self.data[:, 5]

    def __len__(self):
        return len(self.data) if self.data is not None else 0

    def __getitem__(self, idx):
        """Allow iteration over boxes."""
        class Box:
            def __init__(self, data):
                self._data = data
                self.xyxy = [data[:4]]
                self.conf = [data[4]]
                self.cls = [data[5]]

        return Box(self.data[idx])


class YOLO_ONNX:
    """
    ONNX Runtime wrapper for YOLOv8 models.
    Provides ultralytics-compatible interface.
    """

    # COCO dataset class names (YOLOv8 default)
    COCO_NAMES = {
        0: 'person', 1: 'bicycle', 2: 'car', 3: 'motorcycle', 4: 'airplane',
        5: 'bus', 6: 'train', 7: 'truck', 8: 'boat', 9: 'traffic light',
        10: 'fire hydrant', 11: 'stop sign', 12: 'parking meter', 13: 'bench',
        14: 'bird', 15: 'cat', 16: 'dog', 17: 'horse', 18: 'sheep', 19: 'cow',
        20: 'elephant', 21: 'bear', 22: 'zebra', 23: 'giraffe', 24: 'backpack',
        25: 'umbrella', 26: 'handbag', 27: 'tie', 28: 'suitcase', 29: 'frisbee',
        30: 'skis', 31: 'snowboard', 32: 'sports ball', 33: 'kite',
        34: 'baseball bat', 35: 'baseball glove', 36: 'skateboard',
        37: 'surfboard', 38: 'tennis racket', 39: 'bottle', 40: 'wine glass',
        41: 'cup', 42: 'fork', 43: 'knife', 44: 'spoon', 45: 'bowl',
        46: 'banana', 47: 'apple', 48: 'sandwich', 49: 'orange', 50: 'broccoli',
        51: 'carrot', 52: 'hot dog', 53: 'pizza', 54: 'donut', 55: 'cake',
        56: 'chair', 57: 'couch', 58: 'potted plant', 59: 'bed',
        60: 'dining table', 61: 'toilet', 62: 'tv', 63: 'laptop', 64: 'mouse',
        65: 'remote', 66: 'keyboard', 67: 'cell phone', 68: 'microwave',
        69: 'oven', 70: 'toaster', 71: 'sink', 72: 'refrigerator', 73: 'book',
        74: 'clock', 75: 'vase', 76: 'scissors', 77: 'teddy bear',
        78: 'hair drier', 79: 'toothbrush'
    }

    def __init__(self, model_path: str):
        """
        Initialize ONNX model.

        Args:
            model_path: Path to .onnx model file
        """
        if not os.path.exists(model_path):
            raise FileNotFoundError(f"ONNX model not found: {model_path}")

        # Create ONNX Runtime session
        self.session = ort.InferenceSession(
            model_path,
            providers=['CPUExecutionProvider']  # Use CPU, can add CoreMLExecutionProvider for Mac
        )

        # Get model input/output info
        self.input_name = self.session.get_inputs()[0].name
        self.output_names = [output.name for output in self.session.get_outputs()]

        # Get input shape (usually [1, 3, 640, 640] for YOLOv8)
        input_shape = self.session.get_inputs()[0].shape
        self.input_height = input_shape[2]
        self.input_width = input_shape[3]

        # Class names
        self.names = self.COCO_NAMES

        print(f"✅ ONNX model loaded: {model_path}")
        print(f"   Input shape: {input_shape}")
        print(f"   Input size: {self.input_width}x{self.input_height}")

    def preprocess(self, image: np.ndarray) -> Tuple[np.ndarray, Tuple[int, int]]:
        """
        Preprocess image for YOLO inference.

        Args:
            image: BGR image from cv2.imread

        Returns:
            Preprocessed image tensor and original shape
        """
        orig_shape = image.shape[:2]  # (height, width)

        # Resize to model input size (letterbox with padding)
        img = self._letterbox(image, (self.input_height, self.input_width))

        # Convert BGR to RGB
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

        # Normalize to [0, 1]
        img = img.astype(np.float32) / 255.0

        # HWC to CHW format
        img = np.transpose(img, (2, 0, 1))

        # Add batch dimension
        img = np.expand_dims(img, axis=0)

        return img, orig_shape

    def _letterbox(self, img: np.ndarray, new_shape: Tuple[int, int]) -> np.ndarray:
        """
        Resize image with padding to maintain aspect ratio.
        Similar to ultralytics letterbox preprocessing.
        """
        shape = img.shape[:2]  # current shape [height, width]

        # Scale ratio (new / old)
        r = min(new_shape[0] / shape[0], new_shape[1] / shape[1])

        # Compute padding
        new_unpad = (int(round(shape[1] * r)), int(round(shape[0] * r)))
        dw = new_shape[1] - new_unpad[0]  # width padding
        dh = new_shape[0] - new_unpad[1]  # height padding

        dw /= 2  # divide padding into 2 sides
        dh /= 2

        if shape[::-1] != new_unpad:  # resize
            img = cv2.resize(img, new_unpad, interpolation=cv2.INTER_LINEAR)

        top, bottom = int(round(dh - 0.1)), int(round(dh + 0.1))
        left, right = int(round(dw - 0.1)), int(round(dw + 0.1))

        img = cv2.copyMakeBorder(
            img, top, bottom, left, right, cv2.BORDER_CONSTANT, value=(114, 114, 114)
        )

        return img

    def postprocess(
        self,
        outputs: np.ndarray,
        orig_shape: Tuple[int, int],
        conf_threshold: float = 0.25,
        iou_threshold: float = 0.45
    ) -> np.ndarray:
        """
        Post-process ONNX outputs to get final detections.

        Args:
            outputs: Raw ONNX model outputs
            orig_shape: Original image shape (height, width)
            conf_threshold: Confidence threshold
            iou_threshold: IoU threshold for NMS

        Returns:
            Array of detections [x1, y1, x2, y2, conf, cls]
        """
        # YOLOv8 output format: (1, 84, 8400) where 84 = 4 (bbox) + 80 (classes)
        # Transpose to (8400, 84)
        predictions = outputs[0].transpose(0, 2, 1)[0]  # (8400, 84)

        # Extract boxes and scores
        boxes = predictions[:, :4]  # (8400, 4) - x_center, y_center, width, height
        scores = predictions[:, 4:]  # (8400, 80) - class scores

        # Get max class score and class index for each detection
        class_scores = np.max(scores, axis=1)  # (8400,)
        class_ids = np.argmax(scores, axis=1)  # (8400,)

        # Filter by confidence
        mask = class_scores > conf_threshold
        boxes = boxes[mask]
        class_scores = class_scores[mask]
        class_ids = class_ids[mask]

        if len(boxes) == 0:
            return np.array([]).reshape(0, 6)

        # Convert from xywh to xyxy format
        x_center, y_center, width, height = boxes[:, 0], boxes[:, 1], boxes[:, 2], boxes[:, 3]
        x1 = x_center - width / 2
        y1 = y_center - height / 2
        x2 = x_center + width / 2
        y2 = y_center + height / 2

        boxes_xyxy = np.stack([x1, y1, x2, y2], axis=1)

        # Scale boxes to original image size
        boxes_xyxy = self._scale_boxes(boxes_xyxy, orig_shape)

        # Apply NMS
        indices = self._nms(boxes_xyxy, class_scores, iou_threshold)

        # Combine boxes, scores, and class IDs
        detections = np.hstack([
            boxes_xyxy[indices],
            class_scores[indices].reshape(-1, 1),
            class_ids[indices].reshape(-1, 1)
        ])

        return detections

    def _scale_boxes(self, boxes: np.ndarray, orig_shape: Tuple[int, int]) -> np.ndarray:
        """
        Scale boxes from model input size to original image size.
        """
        # Calculate scale and padding
        gain = min(self.input_height / orig_shape[0], self.input_width / orig_shape[1])
        pad_x = (self.input_width - orig_shape[1] * gain) / 2
        pad_y = (self.input_height - orig_shape[0] * gain) / 2

        # Remove padding and scale
        boxes[:, [0, 2]] = (boxes[:, [0, 2]] - pad_x) / gain  # x coordinates
        boxes[:, [1, 3]] = (boxes[:, [1, 3]] - pad_y) / gain  # y coordinates

        # Clip to image bounds
        boxes[:, [0, 2]] = boxes[:, [0, 2]].clip(0, orig_shape[1])
        boxes[:, [1, 3]] = boxes[:, [1, 3]].clip(0, orig_shape[0])

        return boxes

    def _nms(self, boxes: np.ndarray, scores: np.ndarray, iou_threshold: float) -> List[int]:
        """
        Non-Maximum Suppression.
        """
        x1 = boxes[:, 0]
        y1 = boxes[:, 1]
        x2 = boxes[:, 2]
        y2 = boxes[:, 3]

        areas = (x2 - x1) * (y2 - y1)
        order = scores.argsort()[::-1]

        keep = []
        while order.size > 0:
            i = order[0]
            keep.append(i)

            xx1 = np.maximum(x1[i], x1[order[1:]])
            yy1 = np.maximum(y1[i], y1[order[1:]])
            xx2 = np.minimum(x2[i], x2[order[1:]])
            yy2 = np.minimum(y2[i], y2[order[1:]])

            w = np.maximum(0.0, xx2 - xx1)
            h = np.maximum(0.0, yy2 - yy1)
            inter = w * h

            iou = inter / (areas[i] + areas[order[1:]] - inter)

            inds = np.where(iou <= iou_threshold)[0]
            order = order[inds + 1]

        return keep

    def predict(
        self,
        source: Union[str, np.ndarray],
        conf: float = 0.25,
        iou: float = 0.45,
        imgsz: int = 640,
        verbose: bool = True
    ) -> List[ONNXDetectionResult]:
        """
        Run inference on image(s).

        Args:
            source: Image path or numpy array
            conf: Confidence threshold
            iou: IoU threshold for NMS
            imgsz: Input image size (not used, model size is fixed)
            verbose: Print verbose output

        Returns:
            List of detection results (compatible with ultralytics)
        """
        # Load image if path provided
        if isinstance(source, (str, Path)):
            image = cv2.imread(str(source))
            if image is None:
                raise ValueError(f"Failed to load image: {source}")
        else:
            image = source

        # Preprocess
        input_tensor, orig_shape = self.preprocess(image)

        # Run inference
        outputs = self.session.run(self.output_names, {self.input_name: input_tensor})

        # Postprocess
        detections = self.postprocess(outputs, orig_shape, conf, iou)

        # Create result object
        result = ONNXDetectionResult(detections, self.names, orig_shape)

        if verbose and len(result) > 0:
            print(f"Detected {len(result)} objects")

        return [result]

    def export(self, *args, **kwargs):
        """Dummy method for compatibility - model is already exported."""
        raise NotImplementedError("Model is already in ONNX format")


def load_onnx_model(model_path: str = "api/models/yolov8n.onnx") -> YOLO_ONNX:
    """
    Convenience function to load ONNX YOLO model.

    Args:
        model_path: Path to ONNX model file

    Returns:
        YOLO_ONNX model instance
    """
    return YOLO_ONNX(model_path)


if __name__ == "__main__":
    # Test the ONNX model
    import sys

    model_path = "api/models/yolov8n.onnx"
    if not os.path.exists(model_path):
        print(f"❌ ONNX model not found: {model_path}")
        print("Please run: python scripts/export_yolo_to_onnx.py")
        sys.exit(1)

    model = YOLO_ONNX(model_path)
    print(f"\n✅ ONNX model loaded successfully")
    print(f"Model supports {len(model.names)} classes")
    print(f"Sample classes: {list(model.names.values())[:10]}")



================================================
FILE: alpinesight-app/api/_utils/object_detection/run_anything.py
================================================
# detect_anything_single.py

from pathlib import Path
import cv2
from ultralytics import YOLO

def run_single_anything(
    image_path: str = "/Users/lukasbauer/alpinesight/test_data/sat_2.png",
    model_name: str = "yolov8x.pt",
    conf_thres: float = 0.01
    
):
    img_path = Path(image_path)
    if not img_path.exists():
        raise FileNotFoundError(f"{img_path} not found")

    model = YOLO(model_name)

    results = model.predict(source=str(img_path), conf=conf_thres, verbose=False)
    if not results:
        print("No results from model")
        return

    result = results[0]
    boxes = result.boxes
    names = result.names

    if boxes is None or len(boxes) == 0:
        print("No detections at this threshold")
        return

    img = cv2.imread(str(img_path))
    if img is None:
        raise RuntimeError("Could not read image")

    print(f"Detections for {img_path}:")
    for box in boxes:
        cls_id = int(box.cls[0])
        cls_name = names[cls_id]
        conf = float(box.conf[0])
        x1, y1, x2, y2 = box.xyxy[0].tolist()
        x1, y1, x2, y2 = map(int, (x1, y1, x2, y2))

        print(f"{cls_name:15s} conf={conf:.3f} box=({x1},{y1},{x2},{y2})")

        cv2.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)
        label = f"{cls_name} {conf:.2f}"
        cv2.putText(
            img,
            label,
            (x1, max(0, y1 - 5)),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.4,
            (0, 255, 0),
            1,
            cv2.LINE_AA,
        )

    out_path = img_path.parent / "annotated_anything.png"
    cv2.imwrite(str(out_path), img)
    print(f"Annotated image saved to {out_path}")

def run_single_yolo11s(
    image_path: str = "/Users/lukasbauer/alpinesight/test_data/sat_2.png",
    conf_thres: float = 0.05
):
    img_path = Path(image_path)
    if not img_path.exists():
        raise FileNotFoundError(img_path)

    model = YOLO("yolov8x.pt")

    results = model.predict(source=str(img_path), conf=conf_thres, verbose=False, imgsz=512*4)
    if not results:
        print("No results")
        return

    result = results[0]
    boxes = result.boxes
    names = result.names

    if boxes is None or len(boxes) == 0:
        print("No detections")
        return

    img = cv2.imread(str(img_path))
    if img is None:
        raise RuntimeError("Image read failed")

    print(f"Detections for {img_path}:")
    for box in boxes:
        cls_id = int(box.cls[0])
        cls_name = names[cls_id]
        conf = float(box.conf[0])
        x1, y1, x2, y2 = box.xyxy[0].tolist()
        x1, y1, x2, y2 = map(int, (x1, y1, x2, y2))
        print(f"{cls_name:15s} conf={conf:.3f} box=({x1},{y1},{x2},{y2})")
        cv2.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)
        cv2.putText(
            img,
            f"{cls_name} {conf:.2f}",
            (x1, max(0, y1 - 5)),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.4,
            (0, 255, 0),
            1,
            cv2.LINE_AA,
        )

    out_path = img_path.parent / "sat_1_yolo11s_annotated.png"
    cv2.imwrite(str(out_path), img)
    print(f"Annotated image saved to {out_path}")

    # print(model.names)
    return out_path

if __name__ == "__main__":
    run_single_yolo11s()
    


================================================
FILE: alpinesight-app/api/_utils/object_detection/run_func.py
================================================
from pathlib import Path
import cv2

# Use ONNX Runtime instead of ultralytics for production deployment
# Note: OBB (Oriented Bounding Boxes) require yolo11n-obb model
# For now, this falls back to ultralytics in production
# TODO: Export yolo11n-obb.pt to ONNX for full production support
try:
    from api._utils.object_detection.onnx_detector import YOLO_ONNX as YOLO
    USE_ONNX = True
except ImportError:
    from ultralytics import YOLO
    USE_ONNX = False

def is_vehicle_label(name: str) -> bool:
    name = name.lower()
    return (
        "small-vehicle" in name
        or "large-vehicle" in name
        or "vehicle" in name
    )

def count_vehicles_timeseries_simple(
    image_paths,
    dates,
    model_path="yolo11n-obb.pt",
    conf_thres=0.2,
    imgsz=1280,
):
    """
    image_paths and dates must have same length
    Applies the same logic as your working run_yolo11_obb_single
    Returns:
      annotated_paths: list of output image paths
      counts: list of vehicle counts per image
      details: list of dicts per image

    Note: OBB detection currently requires ultralytics.
    For production ONNX deployment, use standard detection (detect.py) instead.
    """
    if len(image_paths) != len(dates):
        raise ValueError("image_paths and dates must have same length")

    # OBB models require ultralytics, so force fallback
    if USE_ONNX and "obb" in model_path.lower():
        print("⚠️ OBB detection requires ultralytics. Falling back to PyTorch.")
        from ultralytics import YOLO as YOLO_PT
        model = YOLO_PT(model_path)
    else:
        model = YOLO(model_path)

    annotated_paths = []
    counts = []
    details = []

    for img_path, date in zip(image_paths, dates):
        img_path = Path(img_path)
        if not img_path.exists():
            raise FileNotFoundError(img_path)

        img = cv2.imread(str(img_path))
        if img is None:
            raise RuntimeError(f"Could not read {img_path}")

        results = model.predict(
            source=img,
            conf=conf_thres,
            imgsz=imgsz,
            verbose=False
        )

        r = results[0]

        if r.obb is None or len(r.obb) == 0:
            print(f"{img_path}: No OBB detections")
            annotated_path = str(img_path.with_name(f"{img_path.stem}_yolo11_obb.png"))
            cv2.imwrite(annotated_path, img)
            annotated_paths.append(annotated_path)
            counts.append(0)
            details.append(
                {
                    "date": date,
                    "image": str(img_path),
                    "annotated_image": annotated_path,
                    "total": 0,
                    "per_class": {},
                    "boxes": [],
                    "avg_conf": 0.0,
                }
            )
            continue

        boxes = r.obb.xyxy.cpu().numpy()
        scores = r.obb.conf.cpu().numpy()
        classes = r.obb.cls.cpu().numpy().astype(int)
        names = r.names

        vis = img.copy()
        total = 0
        per_class = {}
        box_list = []

        for (x1, y1, x2, y2), conf, cls_id in zip(boxes, scores, classes):
            cls_name = names.get(int(cls_id), str(cls_id))
            if not is_vehicle_label(cls_name):
                continue

            total += 1
            per_class[cls_name] = per_class.get(cls_name, 0) + 1

            x1i = int(x1)
            y1i = int(y1)
            x2i = int(x2)
            y2i = int(y2)

            cv2.rectangle(vis, (x1i, y1i), (x2i, y2i), (0, 255, 0), 1)
            cv2.putText(
                vis,
                f"{cls_name} {conf:.2f}",
                (x1i, max(0, y1i - 3)),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.35,
                (0, 255, 0),
                1,
                cv2.LINE_AA,
            )

            box_list.append(
                {
                    "x1": float(x1),
                    "y1": float(y1),
                    "x2": float(x2),
                    "y2": float(y2),
                    "conf": float(conf),
                    "label": cls_name,
                }
            )

        out_path = img_path.with_name(f"{img_path.stem}_yolo11_obb.png")
        cv2.imwrite(str(out_path), vis)

        avg_conf = float(sum(b["conf"] for b in box_list) / len(box_list)) if box_list else 0.0

        print(f"{img_path}: {total} vehicle like detections -> {out_path}")

        annotated_paths.append(str(out_path))
        counts.append(total)
        details.append(
            {
                "date": date,
                "image": str(img_path),
                "annotated_image": str(out_path),
                "total": total,
                "per_class": per_class,
                "boxes": box_list,
                "avg_conf": avg_conf,
            }
        )

    return annotated_paths, counts, details

def dummy_run():
    image_paths = [
        "/Users/lukasbauer/alpinesight/test_data/sat_1.png",
        "/Users/lukasbauer/alpinesight/test_data/sat_2.png",
        "/Users/lukasbauer/alpinesight/test_data/sat_3.jpeg",
        "/Users/lukasbauer/alpinesight/test_data/sat_4.jpeg",
    ]
    dates = [
        "2025-11-07",
        "2025-11-08",
        "2025-11-09",
        "2025-11-10",
    ]
    return count_vehicles_timeseries_simple(image_paths, dates)

if __name__ == "__main__":
    annotated_paths, counts, details = dummy_run()
    print(counts)




================================================
FILE: alpinesight-app/api/_utils/object_detection/testing.ipynb
================================================
Error processing notebook: Invalid JSON in notebook: /tmp/gitingest/1d560c67-8e55-4495-a56e-127b78ba6c37/batikanor-alpinesight/alpinesight-app/api/_utils/object_detection/testing.ipynb


================================================
FILE: alpinesight-app/app/globals.css
================================================
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
    --foreground-rgb: 0, 0, 0;
    --background-start-rgb: 214, 219, 220;
    --background-end-rgb: 255, 255, 255;
}

@layer base {
    :root {
        --background: 0 0% 100%;
        --foreground: 240 10% 3.9%;
        --card: 0 0% 100%;
        --card-foreground: 240 10% 3.9%;
        --popover: 0 0% 100%;
        --popover-foreground: 240 10% 3.9%;
        --primary: 240 5.9% 10%;
        --primary-foreground: 0 0% 98%;
        --secondary: 240 4.8% 95.9%;
        --secondary-foreground: 240 5.9% 10%;
        --muted: 240 4.8% 95.9%;
        --muted-foreground: 240 3.8% 46.1%;
        --accent: 240 4.8% 95.9%;
        --accent-foreground: 240 5.9% 10%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 0 0% 98%;
        --border: 240 5.9% 90%;
        --input: 240 5.9% 90%;
        --ring: 240 10% 3.9%;
        --chart-1: 12 76% 61%;
        --chart-2: 173 58% 39%;
        --chart-3: 197 37% 24%;
        --chart-4: 43 74% 66%;
        --chart-5: 27 87% 67%;
        --radius: 0.5rem;
    }
    .dark {
        --background: 240 10% 3.9%;
        --foreground: 0 0% 98%;
        --card: 240 10% 3.9%;
        --card-foreground: 0 0% 98%;
        --popover: 240 10% 3.9%;
        --popover-foreground: 0 0% 98%;
        --primary: 0 0% 98%;
        --primary-foreground: 240 5.9% 10%;
        --secondary: 240 3.7% 15.9%;
        --secondary-foreground: 0 0% 98%;
        --muted: 240 3.7% 15.9%;
        --muted-foreground: 240 5% 64.9%;
        --accent: 240 3.7% 15.9%;
        --accent-foreground: 0 0% 98%;
        --destructive: 0 62.8% 30.6%;
        --destructive-foreground: 0 0% 98%;
        --border: 240 3.7% 15.9%;
        --input: 240 3.7% 15.9%;
        --ring: 240 4.9% 83.9%;
        --chart-1: 220 70% 50%;
        --chart-2: 160 60% 45%;
        --chart-3: 30 80% 55%;
        --chart-4: 280 65% 60%;
        --chart-5: 340 75% 55%;
    }
}

@layer base {
    * {
        @apply border-border;
    }
    body {
        @apply text-foreground;
    }
}

.skeleton {
    * {
        pointer-events: none !important;
    }

    *[class^="text-"] {
        color: transparent;
        @apply rounded-md bg-foreground/20 select-none animate-pulse;
    }

    .skeleton-bg {
        @apply bg-foreground/10;
    }

    .skeleton-div {
        @apply bg-foreground/20 animate-pulse;
    }
}



================================================
FILE: alpinesight-app/app/icons.tsx
================================================
export const LogoPython = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: "currentcolor" }}
  >
    <path
      d="M7.90474 0.00013087C7.24499 0.00316291 6.61494 0.0588153 6.06057 0.15584C4.42745 0.441207 4.13094 1.0385 4.13094 2.14002V3.59479H7.9902V4.07971H4.13094H2.68259C1.56099 4.07971 0.578874 4.7465 0.271682 6.01496C-0.0826597 7.4689 -0.0983767 8.37619 0.271682 9.89434C0.546012 11.0244 1.20115 11.8296 2.32276 11.8296H3.64966V10.0856C3.64966 8.82574 4.75179 7.71441 6.06057 7.71441H9.91533C10.9884 7.71441 11.845 6.84056 11.845 5.77472V2.14002C11.845 1.10556 10.9626 0.328487 9.91533 0.15584C9.25237 0.046687 8.56448 -0.00290121 7.90474 0.00013087ZM5.81768 1.17017C6.21631 1.17017 6.54185 1.49742 6.54185 1.89978C6.54185 2.30072 6.21631 2.62494 5.81768 2.62494C5.41761 2.62494 5.09351 2.30072 5.09351 1.89978C5.09351 1.49742 5.41761 1.17017 5.81768 1.17017Z"
      fill="url(#paint0_linear_872_3163)"
    ></path>
    <path
      d="M12.3262 4.07971V5.77472C12.3262 7.08883 11.1997 8.19488 9.91525 8.19488H6.06049C5.0046 8.19488 4.13086 9.0887 4.13086 10.1346V13.7693C4.13086 14.8037 5.04033 15.4122 6.06049 15.709C7.28211 16.0642 8.45359 16.1285 9.91525 15.709C10.8868 15.4307 11.8449 14.8708 11.8449 13.7693V12.3145H7.99012V11.8296H11.8449H13.7745C14.8961 11.8296 15.3141 11.0558 15.7041 9.89434C16.1071 8.69865 16.0899 7.5488 15.7041 6.01495C15.4269 4.91058 14.8975 4.07971 13.7745 4.07971H12.3262ZM10.1581 13.2843C10.5582 13.2843 10.8823 13.6086 10.8823 14.0095C10.8823 14.4119 10.5582 14.7391 10.1581 14.7391C9.7595 14.7391 9.43397 14.4119 9.43397 14.0095C9.43397 13.6086 9.7595 13.2843 10.1581 13.2843Z"
      fill="url(#paint1_linear_872_3163)"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_872_3163"
        x1="-4.80577e-08"
        y1="-4.12903e-08"
        x2="8.81665"
        y2="7.59598"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5A9FD4"></stop>
        <stop offset="1" stopColor="#306998"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_872_3163"
        x1="10.0654"
        y1="13.8872"
        x2="6.91907"
        y2="9.42956"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD43B"></stop>
        <stop offset="1" stopColor="#FFE873"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export const LogoNext = () => (
  <svg
    height={20}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={20}
    style={{ color: "currentcolor" }}
  >
    <g clipPath="url(#clip0_53_108)">
      <circle
        cx="8"
        cy="8"
        r="7.375"
        fill="black"
        stroke="var(--ds-gray-1000)"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></circle>
      <path
        d="M10.63 11V5"
        stroke="url(#paint0_linear_53_1080o22379mo)"
        strokeWidth="1.25"
        strokeMiterlimit="1.41421"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.995 5.00087V5H4.745V11H5.995V6.96798L12.3615 14.7076C12.712 14.4793 13.0434 14.2242 13.353 13.9453L5.99527 5.00065L5.995 5.00087Z"
        fill="url(#paint1_linear_53_1080o22379mo)"
      ></path>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_53_1080o22379mo"
        x1="11.13"
        y1="5"
        x2="11.13"
        y2="11"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white"></stop>
        <stop offset="0.609375" stopColor="white" stopOpacity="0.57"></stop>
        <stop offset="0.796875" stopColor="white" stopOpacity="0"></stop>
        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_53_1080o22379mo"
        x1="9.9375"
        y1="9.0625"
        x2="13.5574"
        y2="13.3992"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white"></stop>
        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
      </linearGradient>
      <clipPath id="clip0_53_108">
        <rect width="16" height="16" fill="red"></rect>
      </clipPath>
    </defs>
  </svg>
);

export const MoonIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <g clip-path="url(#clip0_174_19363)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.88067 14.5 2.27454 12.3027 1.64496 9.37151C1.81218 9.77621 2.05228 10.1443 2.36758 10.4596C4.04598 12.138 7.21941 11.6857 9.45566 9.44949C11.6919 7.21325 12.1441 4.03981 10.4657 2.36142C10.1601 2.05583 9.80498 1.82087 9.41495 1.65445C12.3244 2.30033 14.5 4.8961 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
          fill="currentColor"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_174_19363">
          <rect width="16" height="16" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export const SunIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      stroke-linejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75 0.75V0H7.25V0.75V2V2.75H8.75V2V0.75ZM11.182 3.75732L11.7123 3.22699L12.0659 2.87344L12.5962 2.34311L13.6569 3.40377L13.1265 3.9341L12.773 4.28765L12.2426 4.81798L11.182 3.75732ZM8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM13.25 7.25H14H15.25H16V8.75H15.25H14H13.25V7.25ZM0.75 7.25H0V8.75H0.75H2H2.75V7.25H2H0.75ZM2.87348 12.0659L2.34315 12.5962L3.40381 13.6569L3.93414 13.1265L4.28769 12.773L4.81802 12.2426L3.75736 11.182L3.22703 11.7123L2.87348 12.0659ZM3.75735 4.81798L3.22702 4.28765L2.87347 3.9341L2.34314 3.40377L3.4038 2.34311L3.93413 2.87344L4.28768 3.22699L4.81802 3.75732L3.75735 4.81798ZM12.0659 13.1265L12.5962 13.6569L13.6569 12.5962L13.1265 12.0659L12.773 11.7123L12.2426 11.182L11.182 12.2426L11.7123 12.773L12.0659 13.1265ZM8.75 13.25V14V15.25V16H7.25V15.25V14V13.25H8.75Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};



================================================
FILE: alpinesight-app/app/layout.tsx
================================================
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { GlobeProvider } from "@/contexts/globe-context";
import { LayoutWrapper } from "@/components/layout-wrapper";

export const metadata = {
  title: "Alpinesight - Interactive Globe Chat",
  description:
    "Chat with AI while exploring an interactive 3D globe. Built with FastAPI and Next.js.",
  openGraph: {
    images: [
      {
        url: "/og?title=Alpinesight",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/og?title=Alpinesight",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={cn(GeistSans.className, "antialiased dark relative")} style={{ backgroundColor: 'hsl(240 10% 3.9%)' }}>
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/waves.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.09,
            zIndex: -1,
          }}
        />
        <GlobeProvider>
          <Toaster position="top-center" richColors />
          <Navbar />
          <LayoutWrapper>{children}</LayoutWrapper>
        </GlobeProvider>
      </body>
    </html>
  );
}



================================================
FILE: alpinesight-app/app/(chat)/page.tsx
================================================
"use client";

import { Chat } from "@/components/chat";
import { useEffect } from "react";

export default function Page() {
  // Suppress console errors in production-like environment (only log to console)
  useEffect(() => {
    // Override console.error to prevent React error overlays
    const originalError = console.error;
    console.error = (...args) => {
      // Silently log errors without triggering React error overlay
      originalError.apply(console, args);
    };

    // Global error handler - catch all unhandled errors
    const handleError = (event: ErrorEvent) => {
      event.preventDefault(); // Prevent default error display
      console.error("🔴 Caught error:", event.error || event.message);
    };

    // Catch unhandled promise rejections
    const handleRejection = (event: PromiseRejectionEvent) => {
      event.preventDefault(); // Prevent default error display
      console.error("🔴 Unhandled rejection:", event.reason);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      console.error = originalError;
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  return <Chat />;
}



================================================
FILE: alpinesight-app/app/api/globe/geocode/route.ts
================================================
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const location = searchParams.get("location");

  if (!location) {
    return NextResponse.json(
      { error: "Location parameter is required" },
      { status: 400 }
    );
  }

  try {
    // Using Nominatim (OpenStreetMap) geocoding service
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        location
      )}&format=json&limit=1`,
      {
        headers: {
          "User-Agent": "AlpineSight/1.0",
        },
      }
    );

    const data = await response.json();

    if (!data || data.length === 0) {
      return NextResponse.json(
        { error: "Location not found" },
        { status: 404 }
      );
    }

    const result = data[0];
    return NextResponse.json({
      name: result.display_name,
      lat: parseFloat(result.lat),
      lng: parseFloat(result.lon),
      boundingBox: result.boundingbox,
    });
  } catch (error) {
    console.error("Geocoding error:", error);
    return NextResponse.json(
      { error: "Failed to geocode location" },
      { status: 500 }
    );
  }
}



================================================
FILE: alpinesight-app/app/api/vision-detect/route.ts
================================================
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

interface VisionRequest {
  imageUrl: string;
  provider: "anthropic" | "openai";
}

async function detectWithClaude(imageUrl: string) {
  if (!ANTHROPIC_API_KEY) {
    throw new Error("ANTHROPIC_API_KEY not configured");
  }

  // Fetch the image and convert to base64
  const imageResponse = await fetch(imageUrl);
  const imageBuffer = await imageResponse.arrayBuffer();
  const base64Image = Buffer.from(imageBuffer).toString("base64");

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: "image/jpeg",
                data: base64Image,
              },
            },
            {
              type: "text",
              text: `Analyze this satellite/aerial image and count the number of vehicles (cars, trucks, vans) visible.

Also look for OTHER INSIGHTS that might be relevant for a nearby hotel or business:
- Weather conditions (snow, rain, clear skies)
- Parking lot occupancy
- Road conditions
- Construction or development
- Seasonal indicators (snow cover, foliage)
- Special events or unusual activity

Please respond in this exact JSON format:
{
  "vehicleCount": <number>,
  "confidence": <0.0 to 1.0>,
  "description": "<brief description of what you see>",
  "businessInsights": "<additional insights for nearby businesses, or 'No other relatable insights found' if none>"
}

Be conservative - only count objects you're reasonably confident are vehicles. The image may be blurry or low quality.`,
            },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Claude API error: ${error}`);
  }

  const data = await response.json();
  const content = data.content[0].text;

  // Parse JSON from response
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("Failed to parse JSON from Claude response");
  }

  return JSON.parse(jsonMatch[0]);
}

async function detectWithOpenAI(imageUrl: string) {
  // Use OpenRouter if available (same as chat API), otherwise fall back to direct fetch
  const apiKey = OPENROUTER_API_KEY;
  const baseUrl = OPENROUTER_API_KEY
    ? "https://openrouter.ai/api/v1"
    : "https://api.openai.com/v1";
  const model = OPENROUTER_API_KEY
    ? "openai/gpt-5-mini"
    : "gpt-5-mini";

  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY not configured. Vision detection requires OpenRouter API key for now.");
  }

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: model,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Analyze this satellite/aerial image and count the number of vehicles (cars, trucks, vans) visible.

Also look for OTHER INSIGHTS that might be relevant for a nearby hotel or business:
- Weather conditions (snow, rain, clear skies)
- Parking lot occupancy
- Road conditions
- Construction or development
- Seasonal indicators (snow cover, foliage)
- Special events or unusual activity

Please respond in this exact JSON format:
{
  "vehicleCount": <number>,
  "confidence": <0.0 to 1.0>,
  "description": "<brief description of what you see>",
  "businessInsights": "<additional insights for nearby businesses, or 'No other relatable insights found' if none>"
}

Be conservative - only count objects you're reasonably confident are vehicles. The image may be blurry or low quality.`,
            },
            {
              type: "image_url",
              image_url: {
                url: imageUrl,
              },
            },
          ],
        },
      ],
      max_tokens: 1024,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`OpenAI API error: ${error}`);
  }

  const data = await response.json();
  const content = data.choices[0].message.content;

  // Parse JSON from response
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("Failed to parse JSON from OpenAI response");
  }

  return JSON.parse(jsonMatch[0]);
}

export async function POST(request: NextRequest) {
  try {
    const body: VisionRequest = await request.json();
    const { imageUrl, provider } = body;

    console.log(`🔍 Vision detection request: ${provider} for ${imageUrl}`);

    let result;
    if (provider === "anthropic") {
      result = await detectWithClaude(imageUrl);
    } else {
      result = await detectWithOpenAI(imageUrl);
    }

    console.log(`✅ Vision detection result:`, result);

    return NextResponse.json(result);
  } catch (error) {
    console.error("❌ Vision detection error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}



================================================
FILE: alpinesight-app/app/api/wayback/route.ts
================================================
import { NextResponse } from "next/server";
import {
  getWaybackItemsWithLocalChanges,
  getWaybackItems,
} from "@esri/wayback-core";

// Force dynamic rendering for this route (uses request.url)
export const dynamic = "force-dynamic";

// Helper function to calculate tile coordinates from lat/lng
function latLngToTile(lat: number, lng: number, zoom: number) {
  const latRad = (lat * Math.PI) / 180;
  const n = Math.pow(2, zoom);
  const xTile = Math.floor(n * ((lng + 180) / 360));
  const yTile = Math.floor(
    (n * (1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI)) / 2
  );
  return { x: xTile, y: yTile, z: zoom };
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lat = parseFloat(searchParams.get("lat") || "0");
    const lng = parseFloat(searchParams.get("lng") || "0");
    const zoom = parseInt(searchParams.get("zoom") || "15");
    const mode = searchParams.get("mode") || "all"; // "changes" or "all"

    console.log("📡 Wayback API Request:", { lat, lng, zoom, mode });

    if (!lat || !lng) {
      return NextResponse.json(
        { error: "Missing latitude or longitude" },
        { status: 400 }
      );
    }

    // Get wayback items based on mode
    let waybackItems;
    if (mode === "all") {
      console.log("🌍 Fetching ALL wayback items...");
      waybackItems = await getWaybackItems();
      console.log(`✅ Received ${waybackItems.length} total wayback items`);
    } else {
      console.log("🔍 Fetching wayback items with LOCAL CHANGES only...");
      waybackItems = await getWaybackItemsWithLocalChanges(
        { latitude: lat, longitude: lng },
        zoom
      );
      console.log(`✅ Received ${waybackItems.length} items with local changes`);
    }

    // Calculate tile coordinates
    const tileCoords = latLngToTile(lat, lng, zoom);
    console.log("🗺️ Tile coordinates:", tileCoords);

    // Build response with tile URLs
    const timelineRaw = waybackItems.map((item) => {
      // Replace template variables in itemURL
      const tileUrl = item.itemURL
        .replace("{level}", tileCoords.z.toString())
        .replace("{row}", tileCoords.y.toString())
        .replace("{col}", tileCoords.x.toString());

      return {
        releaseNum: item.releaseNum,
        releaseDate: item.releaseDateLabel,
        releaseDatetime: item.releaseDatetime,
        title: item.itemTitle,
        tileUrl: tileUrl,
        provider: item.layerIdentifier,
      };
    });

    // Filter out duplicates by checking for image equality
    const timeline = await (async () => {
      const uniqueImageUrls = new Set<string>();
      const uniqueItems: (typeof timelineRaw)[0][] = [];

      await Promise.all(
        timelineRaw.map(async (item) => {
          try {
            const response = await fetch(item.tileUrl);
            if (response.ok) {
              const imageBuffer = await response.arrayBuffer();
              const imageBase64 = Buffer.from(imageBuffer).toString("base64");
              if (!uniqueImageUrls.has(imageBase64)) {
                uniqueImageUrls.add(imageBase64);
                uniqueItems.push(item);
              }
            }
          } catch (error) {
            console.error(`Failed to process image for ${item.tileUrl}`, error);
          }
        })
      );

      // Sort items by release date as the order is not guaranteed with Promise.all
      return uniqueItems.sort(
        (a, b) =>
          new Date(a.releaseDatetime).getTime() -
          new Date(b.releaseDatetime).getTime()
      );
    })();

    return NextResponse.json({
      location: { lat, lng },
      zoom,
      tileCoords,
      count: timeline.length,
      timeline,
    });
  } catch (error) {
    console.error("Wayback API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch wayback imagery" },
      { status: 500 }
    );
  }
}



================================================
FILE: alpinesight-app/app/og/route.tsx
================================================
/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "next/server";

export const runtime = "edge";
export const preferredRegion = ["iad1"];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const imageData = await fetch(
    new URL("./background.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const geistSemibold = await fetch(
    new URL("../../assets/geist-semibold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full bg-black"
        style={{ fontFamily: "Geist Sans" }}
      >
        {/* @ts-expect-error */}
        <img src={imageData} alt="vercel opengraph background" />
        <div tw="flex flex-col absolute h-full w-[750px] justify-center left-[50px] pr-[50px] pt-[116px] pb-[166px]">
          <div
            tw="text-zinc-50 tracking-tight flex-grow-1 flex flex-col justify-center leading-[1.1]"
            style={{
              textWrap: "balance",
              fontWeight: 500,
              fontSize: 80,
              color: "black",
              letterSpacing: "-0.05em",
            }}
          >
            {title}
          </div>
          <div tw="text-[40px]" style={{ color: "#7D7D7D" }}>
            {description}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 628,
      fonts: [
        {
          name: "geist",
          data: geistSemibold,
          style: "normal",
        },
      ],
    }
  );
}



================================================
FILE: alpinesight-app/components/chat.tsx
================================================
"use client";

import { PreviewMessage, ThinkingMessage } from "@/components/message";
import { MultimodalInput } from "@/components/multimodal-input";
import { Overview } from "@/components/overview";
import { useGlobe } from "@/contexts/globe-context";
import { useScrollToBottom } from "@/hooks/use-scroll-to-bottom";
import { geocodeLocation } from "@/lib/globe-tools";
import { useChat, type UIMessage } from "@ai-sdk/react";
import React, { useEffect, useRef } from "react";
import { toast } from "sonner";

export function Chat() {
  const chatId = "001";
  const { isGlobeOpen, setIsGlobeOpen, addMarker, clearMarkers, flyToLocation } = useGlobe();

  // Process tracking
  const processedToolCalls = useRef<Set<string>>(new Set());
  const lastAssistantMessageId = useRef<string | null>(null);
  const satelliteCloseIssuedForMessage = useRef<boolean>(false);

  // Model selection
  const [selectedModel, setSelectedModel] = React.useState<string | null>(null);
  useEffect(() => {
    const model = localStorage.getItem("selected_model");
    setSelectedModel(model || "google/gemini-2.0-flash-exp:free");
  }, []);

  const { messages, setMessages, sendMessage, status, stop } = useChat({
    id: chatId,
    onError: (error: Error) => {
      // Log all errors to console, but don't show toast notifications to user
      console.error("❌ Chat error:", error);

      // Suppress synthetic tool call errors (these are fallback behaviors and expected)
      if (error.message.includes('synth-')) {
        console.warn("⚠️ Synthetic tool call error (expected, suppressed):", error.message.substring(0, 200));
        return;
      }

      // Log error details without showing toast
      if (error.message.match(/Too many requests|429|rate-limited/i)) {
        console.error("⚠️ Rate limit reached. Please wait or use a different model.");
      } else if (error.message.match(/API|fetch/i)) {
        console.error("⚠️ Connection error. Check your network and retry.");
      } else if (error.message.match(/model|Provider/i)) {
        console.error("⚠️ Model error:", error.message);
      } else {
        console.error("⚠️ Error:", error.message);
      }

      // Don't show toast notifications for errors - only log to console
    },
  });

  // Effect: handle assistant tool parts
  useEffect(() => {
    const latestMessage = messages[messages.length - 1] as any;
    if (!latestMessage || latestMessage.role !== "assistant") return;

    // Reset tracking if this is a new assistant message
    if (lastAssistantMessageId.current !== latestMessage.id) {
      lastAssistantMessageId.current = latestMessage.id;
      processedToolCalls.current.clear();
      satelliteCloseIssuedForMessage.current = false;
    }

    const parts = latestMessage.parts as any[] | undefined;
    if (!parts?.length) return;

    parts.forEach(async (part) => {
      if (!part.type?.startsWith("tool-")) return;
      const toolName = part.type.replace("tool-", "");
      const state = part.state;
      const toolCallId = part.toolCallId;

      // Handle satellite view: close globe as soon as the tool *starts* streaming
      if (toolName === "get_satellite_timeline" && (state === "input-available" || state === "input-streaming") && !satelliteCloseIssuedForMessage.current) {
        satelliteCloseIssuedForMessage.current = true;
        setIsGlobeOpen(false);
        clearMarkers();
        return; // Don't process this part further
      }

      // Only process completed tool outputs
      if (state !== "output-available") return;

      // Ensure we don't process the same tool call multiple times
      if (!toolCallId || processedToolCalls.current.has(toolCallId)) return;
      processedToolCalls.current.add(toolCallId);

      const input = part.input;

      // --- Handle Tool Actions ---

      if (toolName === "show_location_on_globe") {
        const locationToFind = input?.location; // Check for undefined input
        if (!locationToFind) {
          console.warn("⚠️ show_location_on_globe called but input.location is missing");
          return;
        }
        try {
          const result = await geocodeLocation(locationToFind);
          clearMarkers();
          setIsGlobeOpen(true);
          // Delay to ensure globe is open before flying
          setTimeout(() => {
            addMarker({ id: toolCallId, lat: result.lat, lng: result.lng, label: result.name, color: input.markerColor || "red", size: 35 });
            flyToLocation(result.lat, result.lng, 0.45);
            toast.success(`Showing ${result.name} on the globe`);
          }, 400);
        } catch (error) {
          toast.error(`Could not find location: ${input?.location || 'unknown'}`);
        }
      } else if (toolName === "close_globe") {
        setIsGlobeOpen(false);
        clearMarkers();
      } else if (toolName === "get_satellite_timeline") {
        // This will run when the *output* is available, after the input-streaming check
        setIsGlobeOpen(false);
        clearMarkers();
        // The satellite component itself will handle the output,
        // we just need to ensure the globe is closed.
      }
    });
  }, [messages, setIsGlobeOpen, addMarker, clearMarkers, flyToLocation]);

  const [messagesContainerRef, messagesEndRef] = useScrollToBottom<HTMLDivElement>();
  const [input, setInput] = React.useState("");
  const isLoading = status === "submitted" || status === "streaming";

  // Intent detection - expanded to understand semantic requests
  const hasSatelliteIntent = (text: string) => {
    const t = text.toLowerCase();

    // Direct satellite keywords
    if (t.includes("satellite") || t.includes("historical imagery") ||
        t.includes("historical satellite") || t.includes("wayback") ||
        t.includes("imagery")) {
      return true;
    }

    // Semantic analysis keywords (for business/popularity analysis)
    const analysisKeywords = [
      "analyze", "analysis", "popularity", "popular", "traffic", "visitor",
      "busy", "occupancy", "trend", "correlate", "correlation", "foot traffic",
      "activity", "crowded", "visitors", "tourism", "tourist"
    ];

    const hasAnalysisKeyword = analysisKeywords.some(keyword => t.includes(keyword));

    // If it has analysis keywords AND mentions a location, it's likely satellite intent
    if (hasAnalysisKeyword) {
      // Check if there's a location-like pattern (place names, coordinates, etc.)
      const hasLocation = /\b(in|at|near|of|for)\s+[A-Z]/i.test(text) || // "in Paris", "at Berlin"
                          /\d+°?\s*[NS]/.test(text) || // coordinates
                          /[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*/.test(text); // Capitalized words (place names)

      if (hasLocation) {
        return true;
      }
    }

    return false;
  };

  // Helper to extract location from text
  const extractLocationFromText = (text: string) => {
    // Remove analysis keywords and prepositions
    return text
      .replace(/^(analyze|check|show|find)\s+(me\s+)?/i, "")
      .replace(/\b(popularity|traffic|trends?|visitors?|for|of|at|in|near)\b/gi, "")
      .replace(/\s+/g, " ")
      .trim();
  };

  const handleSubmit = (e?: { preventDefault?: () => void }) => {
    e?.preventDefault?.();
    if (!input.trim() || !selectedModel) return;
    const text = input.trim();

    sendMessage({ role: "user", parts: [{ type: "text", text }] } as any, { body: { model: selectedModel } } as any);

    // Fallback: if AI doesn't call satellite tool for satellite-intent queries, inject a synthetic call
    if (hasSatelliteIntent(text)) {
      setTimeout(async () => {
        // Check if AI called the tool in last few messages
        const recentMessages = messages.slice(-3);
        const hasToolCall = recentMessages.some((m: any) =>
          m.parts?.some((p: any) => p.type === "tool-get_satellite_timeline")
        );

        if (!hasToolCall) {
          console.log("🔧 Fallback: AI didn't call satellite tool, extracting location...");
          const locationText = extractLocationFromText(text);
          try {
            const geocoded = await geocodeLocation(locationText);
            const synthMsg: UIMessage = {
              id: `synth-satellite-${Date.now()}` as any,
              role: "assistant",
              parts: [
                {
                  type: "tool-get_satellite_timeline",
                  toolCallId: `synth-call-${Date.now()}`,
                  state: "output-available",
                  input: { location: geocoded.name, latitude: geocoded.lat, longitude: geocoded.lng },
                  output: { status: "success", action: "show_satellite_timeline", location: geocoded.name, latitude: geocoded.lat, longitude: geocoded.lng, message: `Analyzing ${geocoded.name}` },
                } as any,
              ],
            };
            setMessages((prev) => [...prev, synthMsg]);
          } catch (error) {
            console.error("Fallback geocoding failed:", error);
          }
        }
      }, 2500);
    }

    setInput("");
  };

  // Helpers to determine message content
  const hasToolParts = (m: UIMessage) => !!(m as any).parts?.some((p: any) => p.type?.startsWith("tool-"));
  const isAssistantTextOnly = (m: UIMessage) => {
    if (m.role !== "assistant") return false;
    const parts = (m as any).parts || [];
    if (parts.length === 0) return true;
    return parts.every((p: any) => p.type === "text" && typeof p.text === "string");
  };

  // Compute messages to render: hide assistant text-only messages if immediately followed by assistant tool message
  const messagesToRender = React.useMemo(() => {
    const arr = messages as UIMessage[];
    const out: UIMessage[] = [];
    for (let i = 0; i < arr.length; i++) {
      const m = arr[i];
      if (isAssistantTextOnly(m)) {
        const next = arr[i + 1];
        if (next && next.role === "assistant" && hasToolParts(next)) {
          // Skip this ephemeral assistant text message
          continue;
        }
      }
      out.push(m);
    }
    return out;
  }, [messages]);

  return (
    <div className="flex flex-col min-w-0 h-full relative z-20">
      <div ref={messagesContainerRef} className="flex flex-col min-w-0 gap-6 flex-1 overflow-y-scroll pt-4">
        {messagesToRender.length === 0 && <Overview />}
        {messagesToRender.map((message: UIMessage, index: number) => (
          <PreviewMessage key={message.id} chatId={chatId} message={message} isLoading={isLoading && messagesToRender.length - 1 === index} setMessages={setMessages} />
        ))}
        {isLoading && messagesToRender.length > 0 && messagesToRender[messagesToRender.length - 1].role === "user" && <ThinkingMessage />}
        <div ref={messagesEndRef} className="shrink-0 min-w-[24px] min-h-[24px]" />
      </div>
      <form className="flex mx-auto px-4 pb-4 md:pb-6 gap-2 w-full md:max-w-3xl">
        <MultimodalInput chatId={chatId} input={input} setInput={setInput} handleSubmit={handleSubmit} isLoading={isLoading} stop={stop} messages={messages} setMessages={setMessages} />
      </form>
    </div>
  );
}


================================================
FILE: alpinesight-app/components/globe-modal.tsx
================================================
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGlobe } from "@/contexts/globe-context";
import GlobeGl from "react-globe.gl";

// Type-safe Globe component
const Globe = GlobeGl as any;

// Type fix for framer-motion v11 AnimatePresence
const FixedAnimatePresence = AnimatePresence as any;

interface GlobeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Marker SVG
const markerSvg = `<svg viewBox="-4 0 36 36">
  <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
  <circle fill="black" cx="14" cy="14" r="7"></circle>
</svg>`;

export function GlobeModal({ isOpen, onClose }: GlobeModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeInstanceRef = useRef<any>(null);
  const [globeReady, setGlobeReady] = useState(false);
  const { markers, pointOfView } = useGlobe();

  // Handle camera movement when pointOfView changes
  useEffect(() => {
    if (pointOfView && globeInstanceRef.current) {
      console.log("🌍 Flying to location:", pointOfView);
      const globe = globeInstanceRef.current;

      console.log("🌍 Globe ref type:", typeof globe);
      console.log("🌍 Globe has pointOfView method:", typeof globe.pointOfView);
      console.log("🌍 Globe has controls method:", typeof globe.controls);

      try {
        // Try to call pointOfView method
        if (typeof globe.pointOfView === 'function') {
          globe.pointOfView(pointOfView, 3000);
          console.log("🌍 ✅ pointOfView() called successfully!");
        }

        // Try to disable auto-rotate
        if (typeof globe.controls === 'function') {
          const controls = globe.controls();
          if (controls) {
            controls.autoRotate = false;
            console.log("🌍 ✅ Auto-rotate disabled!");
          }
        }
      } catch (e) {
        console.log("🌍 ❌ Error:", e);
      }
    }
  }, [pointOfView]);

  // Handle ESC key to close panel
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <FixedAnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="globe-modal"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute left-0 top-0 bottom-0 w-[80%] z-30 bg-gradient-to-br from-slate-950 via-slate-900 to-black shadow-2xl border-r border-white/10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm group"
            aria-label="Close globe"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:rotate-90 transition-transform duration-300"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Title */}
          <div className="absolute top-4 left-4 z-10">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-white drop-shadow-lg"
            >
              Interactive Globe
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-white/70 mt-1"
            >
              Drag to rotate • Scroll to zoom
            </motion.p>
          </div>

          {/* Globe container */}
          <div ref={containerRef} className="w-full h-full overflow-hidden">
            <Globe
              ref={(ref: any) => {
                if (ref) {
                  console.log("🌍 Ref callback fired with:", ref);
                  console.log("🌍 Ref has pointOfView:", typeof ref.pointOfView);
                  console.log("🌍 Ref has controls:", typeof ref.controls);
                  globeInstanceRef.current = ref;
                }
              }}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              // Markers
              htmlElementsData={markers}
              htmlElement={(d: any) => {
                const el = document.createElement('div');
                el.innerHTML = markerSvg;
                el.style.color = d.color || 'red';
                el.style.width = `${d.size || 30}px`;
                el.style.transition = 'opacity 250ms';
                el.style.pointerEvents = 'auto';
                el.style.cursor = 'pointer';
                el.title = d.label;
                return el;
              }}
              htmlTransitionDuration={1000}
              // Tile engine configuration
              tilesData={[]}
              tileAltitude={0.01}
              tileWidth={1}
              tileHeight={1}
              tileLat={(d: any) => d.lat}
              tileLng={(d: any) => d.lng}
              // Custom tile URL using OpenStreetMap
              globeTileEngineUrl={(x: number, y: number, l: number) =>
                `https://tile.openstreetmap.org/${l}/${x}/${y}.png`
              }
              animateIn={true}
              waitForGlobeReady={true}
              onGlobeReady={() => {
                console.log("🌍 Globe is ready!");
                console.log("🌍 Current ref has pointOfView:", typeof globeInstanceRef.current?.pointOfView);
                console.log("🌍 Current ref has controls:", typeof globeInstanceRef.current?.controls);
                setGlobeReady(true);
              }}
            />
          </div>

          {/* Loading indicator */}
          {!globeReady && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
                <p className="text-white text-sm">Loading globe...</p>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </FixedAnimatePresence>
  );
}



================================================
FILE: alpinesight-app/components/icons.tsx
================================================
export const BotIcon = () => {
  return (
    <svg
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75 2.79933C9.19835 2.53997 9.5 2.05521 9.5 1.5C9.5 0.671573 8.82843 0 8 0C7.17157 0 6.5 0.671573 6.5 1.5C6.5 2.05521 6.80165 2.53997 7.25 2.79933V5H7C4.027 5 1.55904 7.16229 1.08296 10H0V13H1V14.5V16H2.5H13.5H15V14.5V13H16V10H14.917C14.441 7.16229 11.973 5 9 5H8.75V2.79933ZM7 6.5C4.51472 6.5 2.5 8.51472 2.5 11V14.5H13.5V11C13.5 8.51472 11.4853 6.5 9 6.5H7ZM7.25 11.25C7.25 12.2165 6.4665 13 5.5 13C4.5335 13 3.75 12.2165 3.75 11.25C3.75 10.2835 4.5335 9.5 5.5 9.5C6.4665 9.5 7.25 10.2835 7.25 11.25ZM10.5 13C11.4665 13 12.25 12.2165 12.25 11.25C12.25 10.2835 11.4665 9.5 10.5 9.5C9.5335 9.5 8.75 10.2835 8.75 11.25C8.75 12.2165 9.5335 13 10.5 13Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const UserIcon = () => {
  return (
    <svg
      data-testid="geist-icon"
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.75 0C5.95507 0 4.5 1.45507 4.5 3.25V3.75C4.5 5.54493 5.95507 7 7.75 7H8.25C10.0449 7 11.5 5.54493 11.5 3.75V3.25C11.5 1.45507 10.0449 0 8.25 0H7.75ZM6 3.25C6 2.2835 6.7835 1.5 7.75 1.5H8.25C9.2165 1.5 10 2.2835 10 3.25V3.75C10 4.7165 9.2165 5.5 8.25 5.5H7.75C6.7835 5.5 6 4.7165 6 3.75V3.25ZM2.5 14.5V13.1709C3.31958 11.5377 4.99308 10.5 6.82945 10.5H9.17055C11.0069 10.5 12.6804 11.5377 13.5 13.1709V14.5H2.5ZM6.82945 9C4.35483 9 2.10604 10.4388 1.06903 12.6857L1 12.8353V13V15.25V16H1.75H14.25H15V15.25V13V12.8353L14.931 12.6857C13.894 10.4388 11.6452 9 9.17055 9H6.82945Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const AttachmentIcon = () => {
  return (
    <svg
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 6.5V13.5C14.5 14.8807 13.3807 16 12 16H4C2.61929 16 1.5 14.8807 1.5 13.5V1.5V0H3H8H9.08579C9.351 0 9.60536 0.105357 9.79289 0.292893L14.2071 4.70711C14.3946 4.89464 14.5 5.149 14.5 5.41421V6.5ZM13 6.5V13.5C13 14.0523 12.5523 14.5 12 14.5H4C3.44772 14.5 3 14.0523 3 13.5V1.5H8V5V6.5H9.5H13ZM9.5 2.12132V5H12.3787L9.5 2.12132Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const VercelIcon = ({ size = 17 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1L16 15H0L8 1Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GitIcon = () => {
  return (
    <svg
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
      style={{ color: "currentcolor" }}
    >
      <g clipPath="url(#clip0_872_3147)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_872_3147">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const BoxIcon = ({ size = 16 }: { size: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0.154663L8.34601 0.334591L14.596 3.58459L15 3.79466V4.25V11.75V12.2053L14.596 12.4154L8.34601 15.6654L8 15.8453L7.65399 15.6654L1.40399 12.4154L1 12.2053V11.75V4.25V3.79466L1.40399 3.58459L7.65399 0.334591L8 0.154663ZM2.5 11.2947V5.44058L7.25 7.81559V13.7647L2.5 11.2947ZM8.75 13.7647L13.5 11.2947V5.44056L8.75 7.81556V13.7647ZM8 1.84534L12.5766 4.22519L7.99998 6.51352L3.42335 4.2252L8 1.84534Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const HomeIcon = ({ size = 16 }: { size: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 6.56062L8.00001 2.06062L3.50001 6.56062V13.5L6.00001 13.5V11C6.00001 9.89539 6.89544 8.99996 8.00001 8.99996C9.10458 8.99996 10 9.89539 10 11V13.5L12.5 13.5V6.56062ZM13.78 5.71933L8.70711 0.646409C8.31659 0.255886 7.68342 0.255883 7.2929 0.646409L2.21987 5.71944C2.21974 5.71957 2.21961 5.7197 2.21949 5.71982L0.469676 7.46963L-0.0606537 7.99996L1.00001 9.06062L1.53034 8.53029L2.00001 8.06062V14.25V15H2.75001L6.00001 15H7.50001H8.50001H10L13.25 15H14V14.25V8.06062L14.4697 8.53029L15 9.06062L16.0607 7.99996L15.5303 7.46963L13.7806 5.71993C13.7804 5.71973 13.7802 5.71953 13.78 5.71933ZM8.50001 11V13.5H7.50001V11C7.50001 10.7238 7.72386 10.5 8.00001 10.5C8.27615 10.5 8.50001 10.7238 8.50001 11Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GPSIcon = ({ size = 16 }: { size: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        d="M1 6L15 1L10 15L7.65955 8.91482C7.55797 8.65073 7.34927 8.44203 7.08518 8.34045L1 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        fill="transparent"
      />
    </svg>
  );
};

export const InvoiceIcon = ({ size = 16 }: { size: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 15.1L12 14.5L10.1524 15.8857C10.0621 15.9534 9.93791 15.9534 9.8476 15.8857L8 14.5L6.14377 15.8922C6.05761 15.9568 5.94008 15.9601 5.85047 15.9003L3.75 14.5L3 15L2.83257 15.1116L1.83633 15.7758L1.68656 15.8756C1.60682 15.9288 1.5 15.8716 1.5 15.7758V15.5958V14.3985V14.1972V1.5V0H3H8H9.08579C9.351 0 9.60536 0.105357 9.79289 0.292893L14.2071 4.70711C14.3946 4.89464 14.5 5.149 14.5 5.41421V6.5V14.2507V14.411V15.5881V15.7881C14.5 15.8813 14.3982 15.9389 14.3183 15.891L14.1468 15.7881L13.1375 15.1825L13 15.1ZM12.3787 5L9.5 2.12132V5H12.3787ZM8 1.5V5V6.5H9.5H13V13.3507L12.7717 13.2138L11.9069 12.6948L11.1 13.3L10 14.125L8.9 13.3L8 12.625L7.1 13.3L5.94902 14.1632L4.58205 13.2519L3.75 12.6972L3 13.1972V1.5H8Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const LogoOpenAI = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        d="M14.9449 6.54871C15.3128 5.45919 15.1861 4.26567 14.5978 3.27464C13.7131 1.75461 11.9345 0.972595 10.1974 1.3406C9.42464 0.481584 8.3144 -0.00692594 7.15045 7.42132e-05C5.37487 -0.00392587 3.79946 1.1241 3.2532 2.79113C2.11256 3.02164 1.12799 3.72615 0.551837 4.72468C-0.339497 6.24071 -0.1363 8.15175 1.05451 9.45178C0.686626 10.5413 0.813308 11.7348 1.40162 12.7258C2.28637 14.2459 4.06498 15.0279 5.80204 14.6599C6.5743 15.5189 7.68504 16.0074 8.849 15.9999C10.6256 16.0044 12.2015 14.8754 12.7478 13.2069C13.8884 12.9764 14.873 12.2718 15.4491 11.2733C16.3394 9.75728 16.1357 7.84774 14.9454 6.54771L14.9449 6.54871ZM8.85001 14.9544C8.13907 14.9554 7.45043 14.7099 6.90468 14.2604C6.92951 14.2474 6.97259 14.2239 7.00046 14.2069L10.2293 12.3668C10.3945 12.2743 10.4959 12.1008 10.4949 11.9133V7.42173L11.8595 8.19925C11.8742 8.20625 11.8838 8.22025 11.8858 8.23625V11.9558C11.8838 13.6099 10.5263 14.9509 8.85001 14.9544ZM2.32133 12.2028C1.9651 11.5958 1.8369 10.8843 1.95902 10.1938C1.98284 10.2078 2.02489 10.2333 2.05479 10.2503L5.28366 12.0903C5.44733 12.1848 5.65003 12.1848 5.81421 12.0903L9.75604 9.84429V11.3993C9.75705 11.4153 9.74945 11.4308 9.73678 11.4408L6.47295 13.3004C5.01915 14.1264 3.1625 13.6354 2.32184 12.2028H2.32133ZM1.47155 5.24819C1.82626 4.64017 2.38619 4.17516 3.05305 3.93366C3.05305 3.96116 3.05152 4.00966 3.05152 4.04366V7.72424C3.05051 7.91124 3.15186 8.08475 3.31654 8.17725L7.25838 10.4228L5.89376 11.2003C5.88008 11.2093 5.86285 11.2108 5.84765 11.2043L2.58331 9.34327C1.13255 8.51426 0.63494 6.68272 1.47104 5.24869L1.47155 5.24819ZM12.6834 7.82274L8.74157 5.57669L10.1062 4.79968C10.1199 4.79068 10.1371 4.78918 10.1523 4.79568L13.4166 6.65522C14.8699 7.48373 15.3681 9.31827 14.5284 10.7523C14.1732 11.3593 13.6138 11.8243 12.9474 12.0663V8.27575C12.9489 8.08875 12.8481 7.91574 12.6839 7.82274H12.6834ZM14.0414 5.8057C14.0176 5.7912 13.9756 5.7662 13.9457 5.7492L10.7168 3.90916C10.5531 3.81466 10.3504 3.81466 10.1863 3.90916L6.24442 6.15521V4.60017C6.2434 4.58417 6.251 4.56867 6.26367 4.55867L9.52751 2.70063C10.9813 1.87311 12.84 2.36563 13.6781 3.80066C14.0323 4.40667 14.1605 5.11618 14.0404 5.8057H14.0414ZM5.50257 8.57726L4.13744 7.79974C4.12275 7.79274 4.11312 7.77874 4.11109 7.76274V4.04316C4.11211 2.38713 5.47368 1.0451 7.15197 1.0461C7.86189 1.0461 8.54902 1.2921 9.09476 1.74011C9.06993 1.75311 9.02737 1.77661 8.99899 1.79361L5.77012 3.63365C5.60493 3.72615 5.50358 3.89916 5.50459 4.08666L5.50257 8.57626V8.57726ZM6.24391 7.00022L7.99972 5.9997L9.75553 6.99972V9.00027L7.99972 10.0003L6.24391 9.00027V7.00022Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const LogoGoogle = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      data-testid="geist-icon"
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        d="M8.15991 6.54543V9.64362H12.4654C12.2763 10.64 11.709 11.4837 10.8581 12.0509L13.4544 14.0655C14.9671 12.6692 15.8399 10.6182 15.8399 8.18188C15.8399 7.61461 15.789 7.06911 15.6944 6.54552L8.15991 6.54543Z"
        fill="#4285F4"
      />
      <path
        d="M3.6764 9.52268L3.09083 9.97093L1.01807 11.5855C2.33443 14.1963 5.03241 16 8.15966 16C10.3196 16 12.1305 15.2873 13.4542 14.0655L10.8578 12.0509C10.1451 12.5309 9.23598 12.8219 8.15966 12.8219C6.07967 12.8219 4.31245 11.4182 3.67967 9.5273L3.6764 9.52268Z"
        fill="#34A853"
      />
      <path
        d="M1.01803 4.41455C0.472607 5.49087 0.159912 6.70543 0.159912 7.99995C0.159912 9.29447 0.472607 10.509 1.01803 11.5854C1.01803 11.5926 3.6799 9.51991 3.6799 9.51991C3.5199 9.03991 3.42532 8.53085 3.42532 7.99987C3.42532 7.46889 3.5199 6.95983 3.6799 6.47983L1.01803 4.41455Z"
        fill="#FBBC05"
      />
      <path
        d="M8.15982 3.18545C9.33802 3.18545 10.3853 3.59271 11.2216 4.37818L13.5125 2.0873C12.1234 0.792777 10.3199 0 8.15982 0C5.03257 0 2.33443 1.79636 1.01807 4.41455L3.67985 6.48001C4.31254 4.58908 6.07983 3.18545 8.15982 3.18545Z"
        fill="#EA4335"
      />
    </svg>
  );
};

export const LogoAnthropic = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 92.2 65"
      style={{ color: "currentcolor", fill: "currentcolor" }}
      width="18px"
      height="18px"
    >
      <path
        d="M66.5,0H52.4l25.7,65h14.1L66.5,0z M25.7,0L0,65h14.4l5.3-13.6h26.9L51.8,65h14.4L40.5,0C40.5,0,25.7,0,25.7,0z
		M24.3,39.3l8.8-22.8l8.8,22.8H24.3z"
      />
    </svg>
  );
};

export const RouteIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.53033 0.719661L7 0.189331L5.93934 1.24999L6.46967 1.78032L6.68934 1.99999H3.375C1.51104 1.99999 0 3.51103 0 5.37499C0 7.23895 1.51104 8.74999 3.375 8.74999H12.625C13.6605 8.74999 14.5 9.58946 14.5 10.625C14.5 11.6605 13.6605 12.5 12.625 12.5H4.88555C4.56698 11.4857 3.61941 10.75 2.5 10.75C1.11929 10.75 0 11.8693 0 13.25C0 14.6307 1.11929 15.75 2.5 15.75C3.61941 15.75 4.56698 15.0143 4.88555 14H12.625C14.489 14 16 12.489 16 10.625C16 8.76103 14.489 7.24999 12.625 7.24999H3.375C2.33947 7.24999 1.5 6.41052 1.5 5.37499C1.5 4.33946 2.33947 3.49999 3.375 3.49999H6.68934L6.46967 3.71966L5.93934 4.24999L7 5.31065L7.53033 4.78032L8.85355 3.4571C9.24408 3.06657 9.24408 2.43341 8.85355 2.04288L7.53033 0.719661ZM2.5 14.25C3.05228 14.25 3.5 13.8023 3.5 13.25C3.5 12.6977 3.05228 12.25 2.5 12.25C1.94772 12.25 1.5 12.6977 1.5 13.25C1.5 13.8023 1.94772 14.25 2.5 14.25ZM14.5 2.74999C14.5 3.30228 14.0523 3.74999 13.5 3.74999C12.9477 3.74999 12.5 3.30228 12.5 2.74999C12.5 2.19771 12.9477 1.74999 13.5 1.74999C14.0523 1.74999 14.5 2.19771 14.5 2.74999ZM16 2.74999C16 4.1307 14.8807 5.24999 13.5 5.24999C12.1193 5.24999 11 4.1307 11 2.74999C11 1.36928 12.1193 0.249991 13.5 0.249991C14.8807 0.249991 16 1.36928 16 2.74999Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const FileIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 13.5V6.5V5.41421C14.5 5.149 14.3946 4.89464 14.2071 4.70711L9.79289 0.292893C9.60536 0.105357 9.351 0 9.08579 0H8H3H1.5V1.5V13.5C1.5 14.8807 2.61929 16 4 16H12C13.3807 16 14.5 14.8807 14.5 13.5ZM13 13.5V6.5H9.5H8V5V1.5H3V13.5C3 14.0523 3.44772 14.5 4 14.5H12C12.5523 14.5 13 14.0523 13 13.5ZM9.5 5V2.12132L12.3787 5H9.5ZM5.13 5.00062H4.505V6.25062H5.13H6H6.625V5.00062H6H5.13ZM4.505 8H5.13H11H11.625V9.25H11H5.13H4.505V8ZM5.13 11H4.505V12.25H5.13H11H11.625V11H11H5.13Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const LoaderIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <g clipPath="url(#clip0_2393_1490)">
        <path d="M8 0V4" stroke="currentColor" strokeWidth="1.5" />
        <path
          opacity="0.5"
          d="M8 16V12"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          opacity="0.9"
          d="M3.29773 1.52783L5.64887 4.7639"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          opacity="0.1"
          d="M12.7023 1.52783L10.3511 4.7639"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          opacity="0.4"
          d="M12.7023 14.472L10.3511 11.236"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          opacity="0.6"
          d="M3.29773 14.472L5.64887 11.236"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          opacity="0.2"
          d="M15.6085 5.52783L11.8043 6.7639"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          opacity="0.7"
          d="M0.391602 10.472L4.19583 9.23598"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          opacity="0.3"
          d="M15.6085 10.4722L11.8043 9.2361"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          opacity="0.8"
          d="M0.391602 5.52783L4.19583 6.7639"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_2393_1490">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const UploadIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      data-testid="geist-icon"
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 4.875C1.5 3.01104 3.01104 1.5 4.875 1.5C6.20018 1.5 7.34838 2.26364 7.901 3.37829C8.1902 3.96162 8.79547 4.5 9.60112 4.5H12.25C13.4926 4.5 14.5 5.50736 14.5 6.75C14.5 7.42688 14.202 8.03329 13.7276 8.44689L13.1622 8.93972L14.1479 10.0704L14.7133 9.57758C15.5006 8.89123 16 7.8785 16 6.75C16 4.67893 14.3211 3 12.25 3H9.60112C9.51183 3 9.35322 2.93049 9.2449 2.71201C8.44888 1.1064 6.79184 0 4.875 0C2.18261 0 0 2.18261 0 4.875V6.40385C0 7.69502 0.598275 8.84699 1.52982 9.59656L2.11415 10.0667L3.0545 8.89808L2.47018 8.42791C1.87727 7.95083 1.5 7.22166 1.5 6.40385V4.875ZM7.29289 7.39645C7.68342 7.00592 8.31658 7.00592 8.70711 7.39645L11.7803 10.4697L12.3107 11L11.25 12.0607L10.7197 11.5303L8.75 9.56066V15.25V16H7.25V15.25V9.56066L5.28033 11.5303L4.75 12.0607L3.68934 11L4.21967 10.4697L7.29289 7.39645Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const MenuIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 2H1.75H14.25H15V3.5H14.25H1.75H1V2ZM1 12.5H1.75H14.25H15V14H14.25H1.75H1V12.5ZM1.75 7.25H1V8.75H1.75H14.25H15V7.25H14.25H1.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const PencilEditIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.75 0.189331L12.2803 0.719661L15.2803 3.71966L15.8107 4.24999L15.2803 4.78032L5.15901 14.9016C4.45575 15.6049 3.50192 16 2.50736 16H0.75H0V15.25V13.4926C0 12.4981 0.395088 11.5442 1.09835 10.841L11.2197 0.719661L11.75 0.189331ZM11.75 2.31065L9.81066 4.24999L11.75 6.18933L13.6893 4.24999L11.75 2.31065ZM2.15901 11.9016L8.75 5.31065L10.6893 7.24999L4.09835 13.841C3.67639 14.2629 3.1041 14.5 2.50736 14.5H1.5V13.4926C1.5 12.8959 1.73705 12.3236 2.15901 11.9016ZM9 16H16V14.5H9V16Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const CheckedSquare = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 16H1C0.447715 16 0 15.5523 0 15V1C0 0.447715 0.447716 0 1 0L15 8.17435e-06C15.5523 8.47532e-06 16 0.447724 16 1.00001V15C16 15.5523 15.5523 16 15 16ZM11.7803 6.28033L12.3107 5.75L11.25 4.68934L10.7197 5.21967L6.5 9.43935L5.28033 8.21967L4.75001 7.68934L3.68934 8.74999L4.21967 9.28033L5.96967 11.0303C6.11032 11.171 6.30109 11.25 6.5 11.25C6.69891 11.25 6.88968 11.171 7.03033 11.0303L11.7803 6.28033Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const UncheckedSquare = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <rect
        x="1"
        y="1"
        width="14"
        height="14"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
};

export const MoreIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4C7.17157 4 6.5 3.32843 6.5 2.5C6.5 1.67157 7.17157 1 8 1C8.82843 1 9.5 1.67157 9.5 2.5C9.5 3.32843 8.82843 4 8 4ZM8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8C9.5 8.82843 8.82843 9.5 8 9.5ZM6.5 13.5C6.5 14.3284 7.17157 15 8 15C8.82843 15 9.5 14.3284 9.5 13.5C9.5 12.6716 8.82843 12 8 12C7.17157 12 6.5 12.6716 6.5 13.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TrashIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.75 2.75C6.75 2.05964 7.30964 1.5 8 1.5C8.69036 1.5 9.25 2.05964 9.25 2.75V3H6.75V2.75ZM5.25 3V2.75C5.25 1.23122 6.48122 0 8 0C9.51878 0 10.75 1.23122 10.75 2.75V3H12.9201H14.25H15V4.5H14.25H13.8846L13.1776 13.6917C13.0774 14.9942 11.9913 16 10.6849 16H5.31508C4.00874 16 2.92263 14.9942 2.82244 13.6917L2.11538 4.5H1.75H1V3H1.75H3.07988H5.25ZM4.31802 13.5767L3.61982 4.5H12.3802L11.682 13.5767C11.6419 14.0977 11.2075 14.5 10.6849 14.5H5.31508C4.79254 14.5 4.3581 14.0977 4.31802 13.5767Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const InfoIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM6.25002 7H7.00002H7.75C8.30229 7 8.75 7.44772 8.75 8V11.5V12.25H7.25V11.5V8.5H7.00002H6.25002V7ZM8 6C8.55229 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ArrowUpIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.70711 1.39644C8.31659 1.00592 7.68342 1.00592 7.2929 1.39644L2.21968 6.46966L1.68935 6.99999L2.75001 8.06065L3.28034 7.53032L7.25001 3.56065V14.25V15H8.75001V14.25V3.56065L12.7197 7.53032L13.25 8.06065L14.3107 6.99999L13.7803 6.46966L8.70711 1.39644Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const StopIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3H13V13H3V3Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const PaperclipIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
      className="-rotate-45"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8591 1.70735C10.3257 1.70735 9.81417 1.91925 9.437 2.29643L3.19455 8.53886C2.56246 9.17095 2.20735 10.0282 2.20735 10.9222C2.20735 11.8161 2.56246 12.6734 3.19455 13.3055C3.82665 13.9376 4.68395 14.2927 5.57786 14.2927C6.47178 14.2927 7.32908 13.9376 7.96117 13.3055L14.2036 7.06304L14.7038 6.56287L15.7041 7.56321L15.204 8.06337L8.96151 14.3058C8.06411 15.2032 6.84698 15.7074 5.57786 15.7074C4.30875 15.7074 3.09162 15.2032 2.19422 14.3058C1.29682 13.4084 0.792664 12.1913 0.792664 10.9222C0.792664 9.65305 1.29682 8.43592 2.19422 7.53852L8.43666 1.29609C9.07914 0.653606 9.95054 0.292664 10.8591 0.292664C11.7678 0.292664 12.6392 0.653606 13.2816 1.29609C13.9241 1.93857 14.2851 2.80997 14.2851 3.71857C14.2851 4.62718 13.9241 5.49858 13.2816 6.14106L13.2814 6.14133L7.0324 12.3835C7.03231 12.3836 7.03222 12.3837 7.03213 12.3838C6.64459 12.7712 6.11905 12.9888 5.57107 12.9888C5.02297 12.9888 4.49731 12.7711 4.10974 12.3835C3.72217 11.9959 3.50444 11.4703 3.50444 10.9222C3.50444 10.3741 3.72217 9.8484 4.10974 9.46084L4.11004 9.46054L9.877 3.70039L10.3775 3.20051L11.3772 4.20144L10.8767 4.70131L5.11008 10.4612C5.11005 10.4612 5.11003 10.4612 5.11 10.4613C4.98779 10.5835 4.91913 10.7493 4.91913 10.9222C4.91913 11.0951 4.98782 11.2609 5.11008 11.3832C5.23234 11.5054 5.39817 11.5741 5.57107 11.5741C5.74398 11.5741 5.9098 11.5054 6.03206 11.3832L6.03233 11.3829L12.2813 5.14072C12.2814 5.14063 12.2815 5.14054 12.2816 5.14045C12.6586 4.7633 12.8704 4.25185 12.8704 3.71857C12.8704 3.18516 12.6585 2.6736 12.2813 2.29643C11.9041 1.91925 11.3926 1.70735 10.8591 1.70735Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const MoreHorizontalIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8C4 8.82843 3.32843 9.5 2.5 9.5C1.67157 9.5 1 8.82843 1 8C1 7.17157 1.67157 6.5 2.5 6.5C3.32843 6.5 4 7.17157 4 8ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8ZM13.5 9.5C14.3284 9.5 15 8.82843 15 8C15 7.17157 14.3284 6.5 13.5 6.5C12.6716 6.5 12 7.17157 12 8C12 8.82843 12.6716 9.5 13.5 9.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const MessageIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.8914 10.4028L2.98327 10.6318C3.22909 11.2445 3.5 12.1045 3.5 13C3.5 13.3588 3.4564 13.7131 3.38773 14.0495C3.69637 13.9446 4.01409 13.8159 4.32918 13.6584C4.87888 13.3835 5.33961 13.0611 5.70994 12.7521L6.22471 12.3226L6.88809 12.4196C7.24851 12.4724 7.61994 12.5 8 12.5C11.7843 12.5 14.5 9.85569 14.5 7C14.5 4.14431 11.7843 1.5 8 1.5C4.21574 1.5 1.5 4.14431 1.5 7C1.5 8.18175 1.94229 9.29322 2.73103 10.2153L2.8914 10.4028ZM2.8135 15.7653C1.76096 16 1 16 1 16C1 16 1.43322 15.3097 1.72937 14.4367C1.88317 13.9834 2 13.4808 2 13C2 12.3826 1.80733 11.7292 1.59114 11.1903C0.591845 10.0221 0 8.57152 0 7C0 3.13401 3.58172 0 8 0C12.4183 0 16 3.13401 16 7C16 10.866 12.4183 14 8 14C7.54721 14 7.10321 13.9671 6.67094 13.9038C6.22579 14.2753 5.66881 14.6656 5 15C4.23366 15.3832 3.46733 15.6195 2.8135 15.7653Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const CrossIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: "currentcolor" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.4697 13.5303L13 14.0607L14.0607 13L13.5303 12.4697L9.06065 7.99999L13.5303 3.53032L14.0607 2.99999L13 1.93933L12.4697 2.46966L7.99999 6.93933L3.53032 2.46966L2.99999 1.93933L1.93933 2.99999L2.46966 3.53032L6.93933 7.99999L2.46966 12.4697L1.93933 13L2.99999 14.0607L3.53032 13.5303L7.99999 9.06065L12.4697 13.5303Z"
      fill="currentColor"
    />
  </svg>
);

export const UndoIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: "currentcolor" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 8C13.5 4.96643 11.0257 2.5 7.96452 2.5C5.42843 2.5 3.29365 4.19393 2.63724 6.5H5.25H6V8H5.25H0.75C0.335787 8 0 7.66421 0 7.25V2.75V2H1.5V2.75V5.23347C2.57851 2.74164 5.06835 1 7.96452 1C11.8461 1 15 4.13001 15 8C15 11.87 11.8461 15 7.96452 15C5.62368 15 3.54872 13.8617 2.27046 12.1122L1.828 11.5066L3.03915 10.6217L3.48161 11.2273C4.48831 12.6051 6.12055 13.5 7.96452 13.5C11.0257 13.5 13.5 11.0336 13.5 8Z"
      fill="currentColor"
    />
  </svg>
);

export const RedoIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: "currentcolor" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 8C2.5 4.96643 4.97431 2.5 8.03548 2.5C10.5716 2.5 12.7064 4.19393 13.3628 6.5H10.75H10V8H10.75H15.25C15.6642 8 16 7.66421 16 7.25V2.75V2H14.5V2.75V5.23347C13.4215 2.74164 10.9316 1 8.03548 1C4.1539 1 1 4.13001 1 8C1 11.87 4.1539 15 8.03548 15C10.3763 15 12.4513 13.8617 13.7295 12.1122L14.172 11.5066L12.9609 10.6217L12.5184 11.2273C11.5117 12.6051 9.87945 13.5 8.03548 13.5C4.97431 13.5 2.5 11.0336 2.5 8Z"
      fill="currentColor"
    />
  </svg>
);

export const DeltaIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: "currentcolor" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.67705 15H1L1.75 13.5L6.16147 4.67705L6.15836 4.67082L6.16667 4.66667L7.16147 2.67705L8 1L8.83853 2.67705L14.25 13.5L15 15H13.3229H2.67705ZM7 6.3541L10.5729 13.5H3.42705L7 6.3541Z"
      fill="currentColor"
    />
  </svg>
);

export const PenIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: "currentcolor" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.75 0.189331L9.28033 0.719661L15.2803 6.71966L15.8107 7.24999L15.2803 7.78032L13.7374 9.32322C13.1911 9.8696 12.3733 9.97916 11.718 9.65188L9.54863 13.5568C8.71088 15.0648 7.12143 16 5.39639 16H0.75H0V15.25V10.6036C0 8.87856 0.935237 7.28911 2.4432 6.45136L6.34811 4.28196C6.02084 3.62674 6.13039 2.80894 6.67678 2.26255L8.21967 0.719661L8.75 0.189331ZM7.3697 5.43035L10.5696 8.63029L8.2374 12.8283C7.6642 13.8601 6.57668 14.5 5.39639 14.5H2.56066L5.53033 11.5303L4.46967 10.4697L1.5 13.4393V10.6036C1.5 9.42331 2.1399 8.33579 3.17166 7.76259L7.3697 5.43035ZM12.6768 8.26256C12.5791 8.36019 12.4209 8.36019 12.3232 8.26255L12.0303 7.96966L8.03033 3.96966L7.73744 3.67677C7.63981 3.57914 7.63981 3.42085 7.73744 3.32321L8.75 2.31065L13.6893 7.24999L12.6768 8.26256Z"
      fill="currentColor"
    />
  </svg>
);

export const SummarizeIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: "currentcolor" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.75 12H1V10.5H1.75H5.25H6V12H5.25H1.75ZM1.75 7.75H1V6.25H1.75H4.25H5V7.75H4.25H1.75ZM1.75 3.5H1V2H1.75H7.25H8V3.5H7.25H1.75ZM12.5303 14.7803C12.2374 15.0732 11.7626 15.0732 11.4697 14.7803L9.21967 12.5303L8.68934 12L9.75 10.9393L10.2803 11.4697L11.25 12.4393V2.75V2H12.75V2.75V12.4393L13.7197 11.4697L14.25 10.9393L15.3107 12L14.7803 12.5303L12.5303 14.7803Z"
      fill="currentColor"
    />
  </svg>
);

export const SidebarLeftIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: "currentcolor" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.245 2.5H14.5V12.5C14.5 13.0523 14.0523 13.5 13.5 13.5H6.245V2.5ZM4.995 2.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H4.995V2.5ZM0 1H1.5H14.5H16V2.5V12.5C16 13.8807 14.8807 15 13.5 15H2.5C1.11929 15 0 13.8807 0 12.5V2.5V1Z"
      fill="currentColor"
    />
  </svg>
);

export const PlusIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: "currentcolor" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.75 1.75V1H7.25V1.75V6.75H2.25H1.5V8.25H2.25H7.25V13.25V14H8.75V13.25V8.25H13.75H14.5V6.75H13.75H8.75V1.75Z"
      fill="currentColor"
    />
  </svg>
);

export const CopyIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: "currentcolor" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 0.5C1.7835 0.5 1 1.2835 1 2.25V9.75C1 10.7165 1.7835 11.5 2.75 11.5H3.75H4.5V10H3.75H2.75C2.61193 10 2.5 9.88807 2.5 9.75V2.25C2.5 2.11193 2.61193 2 2.75 2H8.25C8.38807 2 8.5 2.11193 8.5 2.25V3H10V2.25C10 1.2835 9.2165 0.5 8.25 0.5H2.75ZM7.75 4.5C6.7835 4.5 6 5.2835 6 6.25V13.75C6 14.7165 6.7835 15.5 7.75 15.5H13.25C14.2165 15.5 15 14.7165 15 13.75V6.25C15 5.2835 14.2165 4.5 13.25 4.5H7.75ZM7.5 6.25C7.5 6.11193 7.61193 6 7.75 6H13.25C13.3881 6 13.5 6.11193 13.5 6.25V13.75C13.5 13.8881 13.3881 14 13.25 14H7.75C7.61193 14 7.5 13.8881 7.5 13.75V6.25Z"
      fill="currentColor"
    />
  </svg>
);

export const ThumbUpIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: "currentcolor" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.89531 2.23972C6.72984 2.12153 6.5 2.23981 6.5 2.44315V5.25001C6.5 6.21651 5.7165 7.00001 4.75 7.00001H2.5V13.5H12.1884C12.762 13.5 13.262 13.1096 13.4011 12.5532L14.4011 8.55318C14.5984 7.76425 14.0017 7.00001 13.1884 7.00001H9.25H8.5V6.25001V3.51458C8.5 3.43384 8.46101 3.35807 8.39531 3.31114L6.89531 2.23972ZM5 2.44315C5 1.01975 6.6089 0.191779 7.76717 1.01912L9.26717 2.09054C9.72706 2.41904 10 2.94941 10 3.51458V5.50001H13.1884C14.9775 5.50001 16.2903 7.18133 15.8563 8.91698L14.8563 12.917C14.5503 14.1412 13.4503 15 12.1884 15H1.75H1V14.25V6.25001V5.50001H1.75H4.75C4.88807 5.50001 5 5.38808 5 5.25001V2.44315Z"
      fill="currentColor"
    />
  </svg>
);

export const ThumbDownIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: "currentcolor" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.89531 13.7603C6.72984 13.8785 6.5 13.7602 6.5 13.5569V10.75C6.5 9.7835 5.7165 9 4.75 9H2.5V2.5H12.1884C12.762 2.5 13.262 2.89037 13.4011 3.44683L14.4011 7.44683C14.5984 8.23576 14.0017 9 13.1884 9H9.25H8.5V9.75V12.4854C8.5 12.5662 8.46101 12.6419 8.39531 12.6889L6.89531 13.7603ZM5 13.5569C5 14.9803 6.6089 15.8082 7.76717 14.9809L9.26717 13.9095C9.72706 13.581 10 13.0506 10 12.4854V10.5H13.1884C14.9775 10.5 16.2903 8.81868 15.8563 7.08303L14.8563 3.08303C14.5503 1.85882 13.4503 1 12.1884 1H1.75H1V1.75V9.75V10.5H1.75H4.75C4.88807 10.5 5 10.6119 5 10.75V13.5569Z"
      fill="currentColor"
    />
  </svg>
);

export const ChevronDownIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: "currentcolor" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0607 6.74999L11.5303 7.28032L8.7071 10.1035C8.31657 10.4941 7.68341 10.4941 7.29288 10.1035L4.46966 7.28032L3.93933 6.74999L4.99999 5.68933L5.53032 6.21966L7.99999 8.68933L10.4697 6.21966L11 5.68933L12.0607 6.74999Z"
      fill="currentColor"
    />
  </svg>
);

export const SparklesIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: "currentcolor" }}
  >
    <path
      d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z"
      fill="currentColor"
    />
    <path
      d="M14.5 4.5V5H13.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5H12V3V2.5H12.5C13.0523 2.5 13.5 2.05228 13.5 1.5V1H14H14.5V1.5C14.5 2.05228 14.9477 2.5 15.5 2.5H16V3V3.5H15.5C14.9477 3.5 14.5 3.94772 14.5 4.5Z"
      fill="currentColor"
    />
    <path
      d="M8.40706 4.92939L8.5 4H9.5L9.59294 4.92939C9.82973 7.29734 11.7027 9.17027 14.0706 9.40706L15 9.5V10.5L14.0706 10.5929C11.7027 10.8297 9.82973 12.7027 9.59294 15.0706L9.5 16H8.5L8.40706 15.0706C8.17027 12.7027 6.29734 10.8297 3.92939 10.5929L3 10.5V9.5L3.92939 9.40706C6.29734 9.17027 8.17027 7.29734 8.40706 4.92939Z"
      fill="currentColor"
    />
  </svg>
);

export const CheckCirclFillIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5303 6.53033L12.0607 6L11 4.93934L10.4697 5.46967L6.5 9.43934L5.53033 8.46967L5 7.93934L3.93934 9L4.46967 9.53033L5.96967 11.0303C6.26256 11.3232 6.73744 11.3232 7.03033 11.0303L11.5303 6.53033Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GlobeIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      width={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      style={{ color: "currentcolor" }}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
};



================================================
FILE: alpinesight-app/components/layout-wrapper.tsx
================================================
"use client";

import { useGlobe } from "@/contexts/globe-context";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import GlobeModal to avoid SSR issues with react-globe.gl
const GlobeModal = dynamic(() => import("./globe-modal").then(mod => ({ default: mod.GlobeModal })), {
  ssr: false,
});

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { isGlobeOpen, setIsGlobeOpen } = useGlobe();

  return (
    <div className="relative w-full h-[calc(100dvh-52px)] overflow-hidden">
      {/* Globe Panel */}
      <GlobeModal isOpen={isGlobeOpen} onClose={() => setIsGlobeOpen(false)} />

      {/* Main Content - Animated to shift when globe is open */}
      <motion.div
        className="absolute inset-0 h-full"
        animate={{
          left: isGlobeOpen ? "80%" : "0%",
          width: isGlobeOpen ? "20%" : "100%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.div>
    </div>
  );
}



================================================
FILE: alpinesight-app/components/markdown.tsx
================================================
import Link from "next/link";
import React, { memo } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const NonMemoizedMarkdown = ({ children }: { children: string }) => {
  const components: Partial<Components> = {
    // @ts-expect-error
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        // @ts-expect-error
        <pre
          {...props}
          className={`${className} text-sm w-[80dvw] md:max-w-[500px] overflow-x-scroll bg-zinc-100 p-3 rounded-lg mt-2 dark:bg-zinc-800`}
        >
          <code className={match[1]}>{children}</code>
        </pre>
      ) : (
        <code
          className={`${className} text-sm bg-zinc-100 dark:bg-zinc-800 py-0.5 px-1 rounded-md`}
          {...props}
        >
          {children}
        </code>
      );
    },
    ol: ({ node, children, ...props }) => {
      return (
        <ol className="list-decimal list-outside ml-4" {...props}>
          {children}
        </ol>
      );
    },
    li: ({ node, children, ...props }) => {
      return (
        <li className="py-1" {...props}>
          {children}
        </li>
      );
    },
    ul: ({ node, children, ...props }) => {
      return (
        <ul className="list-decimal list-outside ml-4" {...props}>
          {children}
        </ul>
      );
    },
    strong: ({ node, children, ...props }) => {
      return (
        <span className="font-semibold" {...props}>
          {children}
        </span>
      );
    },
    a: ({ node, children, ...props }) => {
      return (
        // @ts-expect-error
        <Link
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          {children}
        </Link>
      );
    },
    h1: ({ node, children, ...props }) => {
      return (
        <h1 className="text-3xl font-semibold mt-6 mb-2" {...props}>
          {children}
        </h1>
      );
    },
    h2: ({ node, children, ...props }) => {
      return (
        <h2 className="text-2xl font-semibold mt-6 mb-2" {...props}>
          {children}
        </h2>
      );
    },
    h3: ({ node, children, ...props }) => {
      return (
        <h3 className="text-xl font-semibold mt-6 mb-2" {...props}>
          {children}
        </h3>
      );
    },
    h4: ({ node, children, ...props }) => {
      return (
        <h4 className="text-lg font-semibold mt-6 mb-2" {...props}>
          {children}
        </h4>
      );
    },
    h5: ({ node, children, ...props }) => {
      return (
        <h5 className="text-base font-semibold mt-6 mb-2" {...props}>
          {children}
        </h5>
      );
    },
    h6: ({ node, children, ...props }) => {
      return (
        <h6 className="text-sm font-semibold mt-6 mb-2" {...props}>
          {children}
        </h6>
      );
    },
  };

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {children}
    </ReactMarkdown>
  );
};

export const Markdown = memo(
  NonMemoizedMarkdown,
  (prevProps, nextProps) => prevProps.children === nextProps.children,
);



================================================
FILE: alpinesight-app/components/message.tsx
================================================
"use client";

import type { UIMessage } from "@ai-sdk/react";
import { motion } from "framer-motion";

import { SparklesIcon } from "./icons";
import { Markdown } from "./markdown";
import { PreviewAttachment } from "./preview-attachment";
import { cn } from "@/lib/utils";
import { Weather } from "./weather";
import { ToolResult } from "./tool-result";
import { SatelliteImageViewer } from "./satellite-image-viewer";
import { TimelineChart } from "./timeline-chart";

export const PreviewMessage = ({
  message,
  chatId,
  isLoading,
  setMessages,
}: {
  chatId: string;
  message: UIMessage;
  isLoading: boolean;
  setMessages?: React.Dispatch<React.SetStateAction<UIMessage[]>>;
}) => {
  const parts = message.parts || [];
  const hasToolParts = parts.some((p: any) => p.type?.startsWith("tool-"));

  // Determine if this message will actually render any visible content
  const hasRenderableParts = parts.some((part: any) => {
    if (part.type === "text") {
      // If there are tool parts, suppress assistant free text
      if (hasToolParts) return false;
      return Boolean(part.text && part.text.trim() !== "");
    }
    if (part.type === "file") return true;
    if (part.type?.startsWith("tool-")) {
      const toolName = part.type.replace("tool-", "");
      // We render tool outputs when output-available
      if (part.state === "output-available" && part.output) return true;
      // We render loading placeholders for weather and satellite timeline
      if (
        (part.state === "input-streaming" || part.state === "input-available") &&
        (toolName === "get_current_weather" || toolName === "get_satellite_timeline")
      )
        return true;
    }
    return false;
  });

  // If assistant message has nothing to show, skip rendering to avoid empty SparklesIcon rows
  if (message.role === "assistant" && !hasRenderableParts) return null;

  return (
    <motion.div
      className="w-full mx-auto max-w-3xl px-4 group/message"
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      data-role={message.role}
      data-chat={chatId}
    >
      <div
        className={cn(
          "group-data-[role=user]/message:bg-primary group-data-[role=user]/message:text-primary-foreground flex gap-4 group-data-[role=user]/message:px-3 w-full group-data-[role=user]/message:w-fit group-data-[role=user]/message:ml-auto group-data-[role=user]/message:max-w-2xl group-data-[role=user]/message:py-2 rounded-xl",
          { "opacity-70": isLoading && message.role === "assistant" }
        )}
      >
        {message.role === "assistant" && (
          <div className="size-8 flex items-center rounded-full justify-center ring-1 shrink-0 ring-border">
            <SparklesIcon size={14} />
          </div>
        )}

        <div className="flex flex-col gap-2 w-full">
          {parts.map((part: any, index: number) => {
            if (part.type === "text") {
              // Suppress assistant free text when tool parts are present
              if (hasToolParts) return null;
              return (
                <div key={index} className="flex flex-col gap-4">
                  <Markdown>{part.text}</Markdown>
                </div>
              );
            }
            // Support custom chart render part
            if (part.type === "chart-satellite-counts" && part.data?.points) {
              return (
                <div key={`chart-${index}`} className="space-y-2">
                  <div className="text-sm text-muted-foreground">Detected red squares over time</div>
                  <TimelineChart points={part.data.points} title="Squares per date" />
                </div>
              );
            }
            // Handle tool calls - type is "tool-{toolName}" in AI SDK v5
            if (part.type?.startsWith("tool-")) {
              const { toolCallId, state, output } = part;
              const toolName = part.type.replace("tool-", "");

              // Show tool outputs with appropriate components
              if (state === "output-available" && output) {
                if (toolName === "get_current_weather") {
                  return (
                    <div key={toolCallId}>
                      <Weather weatherAtLocation={output} />
                    </div>
                  );
                }
                if (toolName === "get_satellite_timeline") {
                  // Show the satellite image viewer inline in the chat
                  return (
                    <div key={toolCallId} className="space-y-2">
                      <ToolResult result={output} />
                      <SatelliteImageViewer
                        location={output.location}
                        latitude={output.latitude}
                        longitude={output.longitude}
                        onAnalysisComplete={(data) => {
                          if (!setMessages) return;

                          // Generate summary text with business insights
                          const totalVehicles = data.points.reduce((sum, p) => sum + p.count, 0);
                          const avgVehicles = Math.round(totalVehicles / data.points.length);
                          const maxPoint = data.points.reduce((max, p) => p.count > max.count ? p : max, data.points[0]);
                          const minPoint = data.points.reduce((min, p) => p.count < min.count ? p : min, data.points[0]);

                          let summaryText = `## Analysis Summary for ${data.location}\n\n`;
                          summaryText += `**Vehicle Traffic Trends:**\n`;
                          summaryText += `- Analyzed ${data.points.length} historical satellite images\n`;
                          summaryText += `- Average vehicles detected: ${avgVehicles}\n`;
                          summaryText += `- Peak activity: ${maxPoint.count} vehicles on ${maxPoint.date}\n`;
                          summaryText += `- Lowest activity: ${minPoint.count} vehicles on ${minPoint.date}\n\n`;

                          // Add business insights if any
                          if (data.insights && data.insights.length > 0) {
                            summaryText += `**Additional Business Insights:**\n`;
                            data.insights.forEach(insight => {
                              summaryText += `- ${insight}\n`;
                            });
                            summaryText += `\n`;
                          }

                          // Add contextual interpretation
                          summaryText += `**What This Means:**\n\n`;
                          summaryText += `Let's say you're a nearby hotel manager. This analysis suggests:\n\n`;

                          if (maxPoint.count > avgVehicles * 1.5) {
                            summaryText += `- **Peak Season Indicator**: ${maxPoint.date} shows significantly higher activity (${maxPoint.count} vs ${avgVehicles} avg), which could correlate with high occupancy periods.\n`;
                          }

                          if (minPoint.count < avgVehicles * 0.5) {
                            summaryText += `- **Low Season Indicator**: ${minPoint.date} shows much lower activity, potentially indicating off-peak periods when promotional rates might be needed.\n`;
                          }

                          const trend = data.points[data.points.length - 1].count > data.points[0].count ? "increasing" : "decreasing";
                          summaryText += `- **Overall Trend**: Visitor traffic appears to be ${trend} over time.\n`;
                          summaryText += `- **Correlation Opportunity**: Compare these patterns with your hotel occupancy data to identify booking windows and optimize pricing strategies.\n`;

                          const msg: UIMessage = {
                            id: `assistant-analysis-${Date.now()}` as any,
                            role: "assistant",
                            parts: [
                              {
                                type: "text",
                                text: summaryText,
                              } as any,
                              {
                                type: "chart-satellite-counts",
                                data,
                              } as any,
                            ],
                          };
                          setMessages((prev) => [...prev, msg]);
                        }}
                      />
                    </div>
                  );
                }
                if (toolName === "show_location_on_globe" || toolName === "close_globe") {
                  return (
                    <div key={toolCallId}>
                      <ToolResult result={output} />
                    </div>
                  );
                }
              }
              // Show loading state while tool is executing
              if (
                state === "input-streaming" || state === "input-available"
              ) {
                if (toolName === "get_current_weather") {
                  return (
                    <div key={toolCallId} className="skeleton">
                      <Weather />
                    </div>
                  );
                }
                if (toolName === "get_satellite_timeline") {
                  return (
                    <div key={toolCallId} className="text-sm text-muted-foreground py-2">
                      Fetching satellite imagery...
                    </div>
                  );
                }
              }
            }
            if (part.type === "file") {
              return (
                <PreviewAttachment
                  key={index}
                  attachment={part}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export const ThinkingMessage = () => {
  const role = "assistant";

  return (
    <motion.div
      className="w-full mx-auto max-w-3xl px-4 group/message "
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
      data-role={role}
    >
      <div
        className={cn(
          "flex gap-4 group-data-[role=user]/message:px-3 w-full group-data-[role=user]/message:w-fit group-data-[role=user]/message:ml-auto group-data-[role=user]/message:max-w-2xl group-data-[role=user]/message:py-2 rounded-xl",
          {
            "group-data-[role=user]/message:bg-muted": true,
          }
        )}
      >
        <div className="size-8 flex items-center rounded-full justify-center ring-1 shrink-0 ring-border">
          <SparklesIcon size={14} />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-4 text-muted-foreground">
            Thinking...
          </div>
        </div>
      </div>
    </motion.div>
  );
};



================================================
FILE: alpinesight-app/components/model-selector.tsx
================================================
"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const MODELS = [
  { id: "google/gemini-2.0-flash-exp:free", name: "Gemini 2.0 Flash (Free)" },
  { id: "openai/gpt-5-nano", name: "GPT-5 Nano" },
  { id: "openai/gpt-5-mini", name: "GPT-5 Mini" },
  { id: "openai/gpt-5", name: "GPT-5" },
  { id: "openai/gpt-4.1-mini", name: "GPT-4.1 Mini" },
  { id: "anthropic/claude-sonnet-4.5", name: "Claude Sonnet 4.5" },
  { id: "anthropic/claude-haiku-4.5", name: "Claude Haiku 4.5" },
  { id: "anthropic/claude-sonnet-4", name: "Claude Sonnet 4" },
  { id: "google/gemini-2.5-flash", name: "Gemini 2.5 Flash" },
  { id: "google/gemini-2.5-flash-lite", name: "Gemini 2.5 Flash Lite" },
  { id: "google/gemini-2.5-pro", name: "Gemini 2.5 Pro" },
  { id: "google/gemini-2.0-flash-001", name: "Gemini 2.0 Flash" },
  { id: "google/gemini-2.0-flash-lite-001", name: "Gemini 2.0 Flash Lite" },
  { id: "xai/grok-4-fast-reasoning", name: "Grok 4 Fast Reasoning" },
  { id: "xai/grok-4-fast-non-reasoning", name: "Grok 4 Fast" },
  { id: "deepseek/deepseek-v3.2-exp-thinking", name: "DeepSeek V3.2 Thinking" },
];

export function ModelSelector() {
  const [selectedModel, setSelectedModel] = useState(MODELS[0].id);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load saved model from localStorage
    const saved = localStorage.getItem("selected_model");
    if (saved) {
      setSelectedModel(saved);
    }
  }, []);

  const handleModelChange = (modelId: string) => {
    setSelectedModel(modelId);
    localStorage.setItem("selected_model", modelId);
    setIsOpen(false);
    // Reload the page to apply model change
    window.location.reload();
  };

  const currentModel = MODELS.find((m) => m.id === selectedModel) || MODELS[0];

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm"
      >
        {currentModel.name}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2"
        >
          <polyline points="3 4.5 6 7.5 9 4.5"></polyline>
        </svg>
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-64 bg-slate-900 border border-white/10 rounded-lg shadow-xl z-50 overflow-hidden max-h-96 overflow-y-auto">
            {MODELS.map((model) => (
              <button
                key={model.id}
                onClick={() => handleModelChange(model.id)}
                className={`w-full px-4 py-2.5 text-left text-sm hover:bg-white/5 transition-colors ${
                  model.id === selectedModel
                    ? "bg-white/10 text-white font-medium"
                    : "text-white/70"
                }`}
              >
                {model.name}
                {model.id === selectedModel && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline ml-2"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}



================================================
FILE: alpinesight-app/components/multimodal-input.tsx
================================================
"use client";

import type { CreateUIMessage, UIMessage, UseChatHelpers, UseChatOptions } from "@ai-sdk/react";

type ChatRequestOptions = {
  headers?: Record<string, string> | Headers;
  body?: object;
  data?: any;
};
import { motion } from "framer-motion";
import type React from "react";
import {
  useRef,
  useEffect,
  useCallback,
  type Dispatch,
  type SetStateAction,
} from "react";
import { toast } from "sonner";
import { useLocalStorage, useWindowSize } from "usehooks-ts";

import { cn, sanitizeUIMessages } from "@/lib/utils";

import { ArrowUpIcon, StopIcon } from "./icons";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const suggestedActions = [
  {
    title: "Show me",
    label: "the Eiffel Tower",
    action: "Show me the Eiffel Tower on the map",
  },
  {
    title: "Find",
    label: "Mount Everest",
    action: "Find Mount Everest",
  },
];

export function MultimodalInput({
  input,
  setInput,
  isLoading,
  stop,
  messages,
  setMessages,
  handleSubmit,
  className,
}: {
  chatId: string;
  input: string;
  setInput: (value: string) => void;
  isLoading: boolean;
  stop: () => void;
  messages: Array<UIMessage>;
  setMessages: Dispatch<SetStateAction<Array<UIMessage>>>;
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  className?: string;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight();
    }
  }, []);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${
        textareaRef.current.scrollHeight + 2
      }px`;
    }
  };

  const [localStorageInput, setLocalStorageInput] = useLocalStorage(
    "input",
    ""
  );

  useEffect(() => {
    if (textareaRef.current) {
      const domValue = textareaRef.current.value;
      // Prefer DOM value over localStorage to handle hydration
      const finalValue = domValue || localStorageInput || "";
      setInput(finalValue);
      adjustHeight();
    }
    // Only run once after hydration
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLocalStorageInput(input);
  }, [input, setLocalStorageInput]);

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
    adjustHeight();
  };

  const submitForm = useCallback(() => {
    handleSubmit(undefined, {});
    setLocalStorageInput("");

    if (width && width > 768) {
      textareaRef.current?.focus();
    }
  }, [handleSubmit, setLocalStorageInput, width]);

  return (
    <div className="relative w-full flex flex-col gap-4">
      {messages.length === 0 && (
        <div className="grid sm:grid-cols-2 gap-2 w-full">
          {suggestedActions.map((suggestedAction, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.05 * index }}
              key={`suggested-action-${suggestedAction.title}-${index}`}
              className={index > 1 ? "hidden sm:block" : "block"}
            >
              <Button
                variant="ghost"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setInput(suggestedAction.action);
                  // Trigger submit after a brief delay to ensure input is set
                  setTimeout(() => handleSubmit(), 10);
                }}
                className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start"
              >
                <span className="font-medium">{suggestedAction.title}</span>
                <span className="text-muted-foreground">
                  {suggestedAction.label}
                </span>
              </Button>
            </motion.div>
          ))}
        </div>
      )}

      <Textarea
        ref={textareaRef}
        placeholder="Send a message..."
        value={input || ""}
        onChange={handleInput}
        className={cn(
          "min-h-[24px] max-h-[calc(75dvh)] overflow-hidden resize-none rounded-xl !text-base bg-muted",
          className
        )}
        rows={3}
        autoFocus
        onKeyDown={(event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();

            if (isLoading) {
              toast.error("Please wait for the model to finish its response!");
            } else {
              submitForm();
            }
          }
        }}
      />

      {isLoading ? (
        <Button
          className="rounded-full p-1.5 h-fit absolute bottom-2 right-2 m-0.5 border dark:border-zinc-600"
          onClick={(event) => {
            event.preventDefault();
            stop();
            setMessages((messages) => sanitizeUIMessages(messages));
          }}
        >
          <StopIcon size={14} />
        </Button>
      ) : (
        <Button
          className="rounded-full p-1.5 h-fit absolute bottom-2 right-2 m-0.5 border dark:border-zinc-600"
          onClick={(event) => {
            event.preventDefault();
            submitForm();
          }}
          disabled={!input || input.length === 0}
        >
          <ArrowUpIcon size={14} />
        </Button>
      )}
    </div>
  );
}



================================================
FILE: alpinesight-app/components/navbar.tsx
================================================
"use client";

import { Button } from "./ui/button";
import { GitIcon, GlobeIcon } from "./icons";
import { useGlobe } from "@/contexts/globe-context";
import { ModelSelector } from "./model-selector";
import Link from "next/link";

export const Navbar = () => {
  const { isGlobeOpen, setIsGlobeOpen } = useGlobe();

  return (
    <div className="p-2 flex flex-row gap-2 justify-between relative z-50">
      <Link href="https://github.com/batikanor/alpinesight">
        <Button variant="outline">
          <GitIcon /> View Source Code
        </Button>
      </Link>

      <div className="flex gap-2">
        <ModelSelector />
        <Button onClick={() => setIsGlobeOpen(!isGlobeOpen)}>
          <GlobeIcon size={16} />
          {isGlobeOpen ? "Hide Map" : "View Map"}
        </Button>
      </div>
    </div>
  );
};



================================================
FILE: alpinesight-app/components/overview.tsx
================================================
"use client";

import { motion } from "framer-motion";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="text-lg md:text-5xl">
          <span className="text-amber-800">Alpine</span>sight
        </p>
        <p>Get intelligent, data supported insights that help your business</p>
      </div>
    </motion.div>
  );
};



================================================
FILE: alpinesight-app/components/preview-attachment.tsx
================================================
import type { FileUIPart } from "ai";

import { LoaderIcon } from "./icons";

export const PreviewAttachment = ({
  attachment,
  isUploading = false,
}: {
  attachment: FileUIPart;
  isUploading?: boolean;
}) => {
  const { filename, url, mediaType } = attachment;
  const displayName = filename ?? "Attachment";

  return (
    <div className="flex flex-col gap-2">
      <div className="w-20 aspect-video bg-muted rounded-md relative flex flex-col items-center justify-center">
        {mediaType ? (
          mediaType.startsWith("image") ? (
            // NOTE: it is recommended to use next/image for images
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={url}
              src={url}
              alt={displayName}
              className="rounded-md size-full object-cover"
            />
          ) : (
            <div className="" />
          )
        ) : (
          <div className="" />
        )}

        {isUploading && (
          <div className="animate-spin absolute text-zinc-500">
            <LoaderIcon />
          </div>
        )}
      </div>
      <div className="text-xs text-zinc-500 max-w-16 truncate">
        {displayName}
      </div>
    </div>
  );
};



================================================
FILE: alpinesight-app/components/satellite-image-viewer.tsx
================================================
"use client";

import { useGlobe } from "@/contexts/globe-context";
import { detectAerialObjects, Detection } from "@/lib/yolo-aerial-client";
import { detectVehiclesWithVision } from "@/lib/multimodal-detection";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface TimelineItem {
  releaseNum: number;
  releaseDate: string;
  releaseDatetime: number;
  title: string;
  tileUrl: string;
  provider: string;
}

interface SatelliteImageViewerProps {
  location: string;
  latitude: number;
  longitude: number;
  // New: callback to append analysis message
  onAnalysisComplete?: (data: {
    points: { date: string; count: number }[];
    location: string;
    insights: string[];
  }) => void;
}

interface BoundingBox {
  left: number;
  top: number;
  width: number;
  height: number;
  class: string;
  confidence: number;
}

interface AnnotationEntry {
  date: string;
  boxes: BoundingBox[];
}

export function SatelliteImageViewer({
  location,
  latitude,
  longitude,
  onAnalysisComplete,
}: SatelliteImageViewerProps) {
  const [timeline, setTimeline] = useState<TimelineItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [annotationData, setAnnotationData] = useState<AnnotationEntry[]>([]);
  const [autoplayDone, setAutoplayDone] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const analysisSentRef = useRef(false);
  const [detectionMode, setDetectionMode] = useState<"yolo" | "multimodal">("multimodal");
  const [visionProvider, setVisionProvider] = useState<"anthropic" | "openai">("openai");
  const [liveDetectionResult, setLiveDetectionResult] = useState<string | null>(null);
  const [collectedInsights, setCollectedInsights] = useState<string[]>([]);

  // Ensure globe is closed when the satellite viewer mounts (and clear markers)
  const { setIsGlobeOpen, clearMarkers } = useGlobe();
  useEffect(() => {
    setIsGlobeOpen(false);
    clearMarkers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function fetchTimeline() {
      try {
        setLoading(true);
        const url = `/api/wayback?lat=${latitude}&lng=${longitude}&zoom=18&mode=all`;
        console.log("🛰️ Fetching satellite timeline:", url);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch satellite imagery");
        }

        const data = await response.json();
        console.log("📸 Received satellite data:", data);
        setTimeline(data.timeline);
        setCurrentIndex(0);
        analysisSentRef.current = false; // reset analysis sent when new timeline fetched
      } catch (err) {
        console.error("❌ Error fetching wayback timeline:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchTimeline();
  }, [latitude, longitude]);

  const currentImage = timeline[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : timeline.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < timeline.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    // Start autoplay once timeline loaded
    if (timeline.length && !autoplayDone) {
      setAnnotationData([]);
      analysisSentRef.current = false; // reset when restarting autoplay
      if (autoplayRef.current) clearTimeout(autoplayRef.current);

      const play = async (index: number) => {
        setCurrentIndex(index);

        try {
          let boxes: BoundingBox[] = [];

          if (detectionMode === "yolo") {
            // YOLO detection mode
            setLiveDetectionResult("🔍 Analyzing with YOLO...");

            const img = document.createElement("img");
            img.crossOrigin = "anonymous";
            img.src = timeline[index].tileUrl;
            await img.decode();

            const detections = await detectAerialObjects(img);

            console.log(
              `🔍 YOLO detections for ${timeline[index].releaseDate}:`,
              detections
            );

            // Convert YOLO detections to bounding boxes (percentage-based)
            boxes = detections.map((det: Detection) => ({
              left: (det.bbox[0] / img.width) * 100,
              top: (det.bbox[1] / img.height) * 100,
              width: ((det.bbox[2] - det.bbox[0]) / img.width) * 100,
              height: ((det.bbox[3] - det.bbox[1]) / img.height) * 100,
              class: det.class,
              confidence: det.confidence,
            }));

            console.log(
              `🚗 YOLO detected ${boxes.length} vehicles in ${timeline[index].releaseDate}`
            );

            setLiveDetectionResult(`✅ Found ${boxes.length} vehicle${boxes.length !== 1 ? 's' : ''}`);
          } else {
            // Multimodal AI detection mode
            setLiveDetectionResult(`🤖 Analyzing with ${visionProvider === 'anthropic' ? 'Claude' : 'GPT-5 mini'}...`);

            console.log(
              `🤖 Using ${visionProvider} vision for ${timeline[index].releaseDate}`
            );

            const result = await detectVehiclesWithVision(
              timeline[index].tileUrl,
              visionProvider
            );

            console.log(
              `🚗 Vision detected ${result.vehicleCount} vehicles (confidence: ${result.confidence}):`,
              result.description
            );

            // Show live result with AI's description
            const insights = result.businessInsights && result.businessInsights !== "No other relatable insights found"
              ? ` • ${result.businessInsights}`
              : result.businessInsights === "No other relatable insights found"
              ? " • No other relatable insights found"
              : "";

            setLiveDetectionResult(
              `✅ Found ${result.vehicleCount} vehicle${result.vehicleCount !== 1 ? 's' : ''}: ${result.description}${insights}`
            );

            // Collect business insights for final summary
            if (result.businessInsights && result.businessInsights !== "No other relatable insights found") {
              setCollectedInsights(prev => [...prev, `${timeline[index].releaseDate}: ${result.businessInsights}`]);
            }

            // For vision mode, we don't have bounding boxes, just a count
            // We'll create empty boxes array and store count in description
            boxes = [];
            // Store the count in the annotation for chart purposes
            setAnnotationData((prev) => {
              if (prev.find((p) => p.date === timeline[index].releaseDate))
                return prev;
              return [
                ...prev,
                {
                  date: timeline[index].releaseDate,
                  boxes: Array(result.vehicleCount).fill({
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                    class: "vehicle",
                    confidence: result.confidence,
                  }),
                },
              ];
            });

            if (index < timeline.length - 1) {
              autoplayRef.current = setTimeout(() => play(index + 1), 2000); // Longer delay for API calls
            } else {
              setAutoplayDone(true);
              setLiveDetectionResult(null); // Clear when done
            }
            return; // Skip the normal box setting below
          }

          setAnnotationData((prev) => {
            if (prev.find((p) => p.date === timeline[index].releaseDate))
              return prev;
            return [
              ...prev,
              { date: timeline[index].releaseDate, boxes },
            ];
          });
        } catch (error) {
          console.error("❌ Detection failed:", error);
          // Add empty boxes on error so we don't block progress
          setAnnotationData((prev) => {
            if (prev.find((p) => p.date === timeline[index].releaseDate))
              return prev;
            return [...prev, { date: timeline[index].releaseDate, boxes: [] }];
          });
        }

        if (index < timeline.length - 1) {
          autoplayRef.current = setTimeout(() => play(index + 1), 800);
        } else {
          setAutoplayDone(true);
          setLiveDetectionResult(null); // Clear when done
        }
      };

      play(0);
    }
  }, [timeline, autoplayDone, detectionMode, visionProvider]);

  // When autoplay completes fire analysis callback
  useEffect(() => {
    if (
      autoplayDone &&
      annotationData.length === timeline.length &&
      onAnalysisComplete &&
      !analysisSentRef.current
    ) {
      analysisSentRef.current = true;
      const points = annotationData.map((e) => ({
        date: e.date,
        count: e.boxes.length,
      }));
      onAnalysisComplete({
        points,
        location,
        insights: collectedInsights,
      });
    }
  }, [autoplayDone, annotationData, timeline.length, onAnalysisComplete, location, collectedInsights]);

  // Cleanup timer
  useEffect(
    () => () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
    },
    []
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8 px-4 rounded-lg border border-border/50 bg-muted/30">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground mr-2" />
        <span className="text-muted-foreground">
          Loading satellite imagery...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-8 px-4 rounded-lg border border-border/50 bg-muted/30 text-red-400">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (timeline.length === 0) {
    return (
      <div className="flex items-center justify-center py-8 px-4 rounded-lg border border-border/50 bg-muted/30 text-muted-foreground">
        <p>No satellite imagery available for this location</p>
      </div>
    );
  }

  if (!currentImage) return null;

  return (
    <div className="space-y-4 p-4 rounded-lg border border-border/50 bg-muted/30">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold text-foreground">
            Satellite Imagery Timeline
          </h4>
          <p className="text-xs text-muted-foreground">
            {location} • {timeline.length} versions available
          </p>
        </div>
      </div>

      {/* Detection Mode Selector */}
      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/30">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">
            Detection:
          </span>
          <button
            onClick={() => {
              setDetectionMode("multimodal");
              if (autoplayDone) {
                setAutoplayDone(false);
              }
            }}
            disabled={!autoplayDone}
            className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
              detectionMode === "multimodal"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Multimodal AI
          </button>
          <button
            onClick={() => {
              setDetectionMode("yolo");
              if (autoplayDone) {
                setAutoplayDone(false);
              }
            }}
            disabled={!autoplayDone}
            className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
              detectionMode === "yolo"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            YOLO
          </button>
        </div>

        {detectionMode === "multimodal" && (
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-xs font-medium text-muted-foreground">
              Provider:
            </span>
            <button
              onClick={() => {
                setVisionProvider("anthropic");
                if (autoplayDone) {
                  setAutoplayDone(false);
                }
              }}
              disabled={!autoplayDone}
              className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                visionProvider === "anthropic"
                  ? "bg-primary/80 text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              Claude
            </button>
            <button
              onClick={() => {
                setVisionProvider("openai");
                if (autoplayDone) {
                  setAutoplayDone(false);
                }
              }}
              disabled={!autoplayDone}
              className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                visionProvider === "openai"
                  ? "bg-primary/80 text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              GPT-5 mini
            </button>
          </div>
        )}
      </div>

      {/* Image Viewer */}
      <div
        ref={imageContainerRef}
        className="relative aspect-square max-w-full mx-auto bg-black rounded-lg overflow-hidden"
      >
        <Image
          src={currentImage.tileUrl}
          alt={`Satellite imagery from ${currentImage.releaseDate}`}
          fill
          className="object-contain"
          unoptimized
        />

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Date Label */}
        <div className="absolute top-2 left-2 px-2 py-1 rounded-md bg-black/70 backdrop-blur-sm">
          <p className="text-white text-sm font-semibold">
            {currentImage.releaseDate}
          </p>
          <p className="text-xs text-white/70">{currentImage.provider}</p>
        </div>

        {/* Live Detection Result */}
        {liveDetectionResult && (
          <div className="absolute bottom-2 left-2 right-2 px-3 py-2 rounded-md bg-black/80 backdrop-blur-sm border border-white/20">
            <p className="text-white text-sm font-medium">
              {liveDetectionResult}
            </p>
          </div>
        )}

        {/* YOLO Detection Overlay */}
        {annotationData.find((p) => p.date === currentImage.releaseDate) && (
          <div className="absolute inset-0 pointer-events-none">
            {annotationData
              .find((p) => p.date === currentImage.releaseDate)!
              .boxes.map((b, i) => (
                <div
                  key={i}
                  className="absolute border-2 border-red-500"
                  style={{
                    left: `${b.left}%`,
                    top: `${b.top}%`,
                    width: `${b.width}%`,
                    height: `${b.height}%`,
                  }}
                  title={`${b.class} (${(b.confidence * 100).toFixed(1)}%)`}
                />
              ))}
          </div>
        )}

        {/* Autoplay progress indicator */}
        {!autoplayDone && (
          <div className="absolute bottom-2 left-2 right-2 h-1 bg-white/20">
            <div
              className="h-full bg-red-500 transition-all"
              style={{
                width: `${
                  ((annotationData.length - 1) /
                    Math.max(timeline.length - 1, 1)) *
                  100
                }%`,
              }}
            />
          </div>
        )}
      </div>

      {/* Timeline Slider (disabled during autoplay) */}
      <div className="space-y-2 opacity-80">
        <input
          type="range"
          min="0"
          max={timeline.length - 1}
          value={currentIndex}
          onChange={(e) => setCurrentIndex(parseInt(e.target.value))}
          disabled={!autoplayDone}
          className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer disabled:cursor-not-allowed"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{timeline[0]?.releaseDate}</span>
          <span className="font-medium">
            {currentIndex + 1} / {timeline.length}
          </span>
          <span>{timeline[timeline.length - 1]?.releaseDate}</span>
        </div>
      </div>
    </div>
  );
}



================================================
FILE: alpinesight-app/components/timeline-chart.tsx
================================================
"use client";

import React from "react";

type Point = { date: string; count: number };

export function TimelineChart({ points, title }: { points: Point[]; title?: string }) {
  if (!points || points.length === 0) return null;

  // Layout
  const width = 600;
  const height = 260;
  const margin = { top: 24, right: 16, bottom: 36, left: 40 };
  const innerW = width - margin.left - margin.right;
  const innerH = height - margin.top - margin.bottom;

  // Scales
  const xStep = innerW / Math.max(points.length - 1, 1);
  const yMax = Math.max(...points.map((p) => p.count), 1);
  const yScale = (v: number) => innerH - (v / yMax) * innerH;

  // Ticks
  const xTicks: { x: number; label: string }[] = [];
  const tickEvery = Math.ceil(points.length / 6);
  points.forEach((p, i) => {
    if (i % tickEvery === 0 || i === points.length - 1) {
      xTicks.push({ x: i * xStep, label: p.date });
    }
  });

  // Line path
  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${i * xStep},${yScale(p.count)}`)
    .join(" ");

  return (
    <div className="w-full overflow-x-auto">
      {title && <div className="text-sm font-medium mb-2 text-foreground">{title}</div>}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        className="rounded-md border border-border/50 bg-muted/30"
      >
        <g transform={`translate(${margin.left},${margin.top})`}>
          {/* Y axis */}
          <line x1={0} y1={0} x2={0} y2={innerH} stroke="currentColor" opacity={0.2} />
          {[0, yMax].map((t, i) => (
            <g key={i}>
              <line x1={0} y1={yScale(t)} x2={innerW} y2={yScale(t)} stroke="currentColor" opacity={0.08} />
              <text x={-8} y={yScale(t)} dy="0.32em" textAnchor="end" className="text-[10px] fill-muted-foreground">
                {t}
              </text>
            </g>
          ))}

          {/* X axis */}
          <line x1={0} y1={innerH} x2={innerW} y2={innerH} stroke="currentColor" opacity={0.2} />
          {xTicks.map((t, i) => (
            <g key={i} transform={`translate(${t.x},0)`}>
              <line x1={0} y1={innerH} x2={0} y2={innerH + 4} stroke="currentColor" />
              <text x={0} y={innerH + 16} textAnchor="middle" className="text-[10px] fill-muted-foreground">
                {t.label}
              </text>
            </g>
          ))}

          {/* Line */}
          <path d={pathD} fill="none" stroke="#ef4444" strokeWidth={2} />
          {/* Points */}
          {points.map((p, i) => (
            <circle key={i} cx={i * xStep} cy={yScale(p.count)} r={3} fill="#ef4444" />
          ))}
        </g>
      </svg>
    </div>
  );
}




================================================
FILE: alpinesight-app/components/tool-result.tsx
================================================
import { CheckCircle2, MapPin, X, Satellite } from "lucide-react";

interface ToolResultProps {
  result?: {
    status?: string;
    action?: string;
    location?: string;
    marker_color?: string;
    message?: string;
    latitude?: number;
    longitude?: number;
  };
}

export function ToolResult({ result }: ToolResultProps) {
  if (!result || !result.action) return null;

  const getIcon = () => {
    switch (result.action) {
      case "displayed_location":
        return <MapPin className="w-4 h-4" />;
      case "closed_globe":
        return <X className="w-4 h-4" />;
      case "show_satellite_timeline":
        return <Satellite className="w-4 h-4" />;
      default:
        return <CheckCircle2 className="w-4 h-4" />;
    }
  };

  const getTitle = () => {
    switch (result.action) {
      case "displayed_location":
        return "Location Displayed";
      case "closed_globe":
        return "Globe Closed";
      case "show_satellite_timeline":
        return "Satellite Imagery";
      default:
        return "Action Complete";
    }
  };

  return (
    <div className="flex items-start gap-3 p-3 rounded-lg border border-border/50 bg-muted/30 text-sm">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
        {getIcon()}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-foreground mb-0.5">{getTitle()}</div>
        {result.location && (
          <div className="text-muted-foreground">
            📍 {result.location}
            {result.marker_color && (
              <span className="ml-2">
                • <span style={{ color: result.marker_color }}>●</span>{" "}
                {result.marker_color} marker
              </span>
            )}
          </div>
        )}
        {result.message && !result.location && (
          <div className="text-muted-foreground">{result.message}</div>
        )}
      </div>
    </div>
  );
}



================================================
FILE: alpinesight-app/components/weather.tsx
================================================
"use client";

import { cn } from "@/lib/utils";
import { format, isWithinInterval } from "date-fns";
import { useEffect, useState } from "react";

interface WeatherAtLocation {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
  };
  daily_units: {
    time: string;
    sunrise: string;
    sunset: string;
  };
  daily: {
    time: string[];
    sunrise: string[];
    sunset: string[];
  };
}

const SAMPLE = {
  latitude: 37.763283,
  longitude: -122.41286,
  generationtime_ms: 0.027894973754882812,
  utc_offset_seconds: 0,
  timezone: "GMT",
  timezone_abbreviation: "GMT",
  elevation: 18,
  current_units: { time: "iso8601", interval: "seconds", temperature_2m: "°C" },
  current: { time: "2024-10-07T19:30", interval: 900, temperature_2m: 29.3 },
  hourly_units: { time: "iso8601", temperature_2m: "°C" },
  hourly: {
    time: [
      "2024-10-07T00:00",
      "2024-10-07T01:00",
      "2024-10-07T02:00",
      "2024-10-07T03:00",
      "2024-10-07T04:00",
      "2024-10-07T05:00",
      "2024-10-07T06:00",
      "2024-10-07T07:00",
      "2024-10-07T08:00",
      "2024-10-07T09:00",
      "2024-10-07T10:00",
      "2024-10-07T11:00",
      "2024-10-07T12:00",
      "2024-10-07T13:00",
      "2024-10-07T14:00",
      "2024-10-07T15:00",
      "2024-10-07T16:00",
      "2024-10-07T17:00",
      "2024-10-07T18:00",
      "2024-10-07T19:00",
      "2024-10-07T20:00",
      "2024-10-07T21:00",
      "2024-10-07T22:00",
      "2024-10-07T23:00",
      "2024-10-08T00:00",
      "2024-10-08T01:00",
      "2024-10-08T02:00",
      "2024-10-08T03:00",
      "2024-10-08T04:00",
      "2024-10-08T05:00",
      "2024-10-08T06:00",
      "2024-10-08T07:00",
      "2024-10-08T08:00",
      "2024-10-08T09:00",
      "2024-10-08T10:00",
      "2024-10-08T11:00",
      "2024-10-08T12:00",
      "2024-10-08T13:00",
      "2024-10-08T14:00",
      "2024-10-08T15:00",
      "2024-10-08T16:00",
      "2024-10-08T17:00",
      "2024-10-08T18:00",
      "2024-10-08T19:00",
      "2024-10-08T20:00",
      "2024-10-08T21:00",
      "2024-10-08T22:00",
      "2024-10-08T23:00",
      "2024-10-09T00:00",
      "2024-10-09T01:00",
      "2024-10-09T02:00",
      "2024-10-09T03:00",
      "2024-10-09T04:00",
      "2024-10-09T05:00",
      "2024-10-09T06:00",
      "2024-10-09T07:00",
      "2024-10-09T08:00",
      "2024-10-09T09:00",
      "2024-10-09T10:00",
      "2024-10-09T11:00",
      "2024-10-09T12:00",
      "2024-10-09T13:00",
      "2024-10-09T14:00",
      "2024-10-09T15:00",
      "2024-10-09T16:00",
      "2024-10-09T17:00",
      "2024-10-09T18:00",
      "2024-10-09T19:00",
      "2024-10-09T20:00",
      "2024-10-09T21:00",
      "2024-10-09T22:00",
      "2024-10-09T23:00",
      "2024-10-10T00:00",
      "2024-10-10T01:00",
      "2024-10-10T02:00",
      "2024-10-10T03:00",
      "2024-10-10T04:00",
      "2024-10-10T05:00",
      "2024-10-10T06:00",
      "2024-10-10T07:00",
      "2024-10-10T08:00",
      "2024-10-10T09:00",
      "2024-10-10T10:00",
      "2024-10-10T11:00",
      "2024-10-10T12:00",
      "2024-10-10T13:00",
      "2024-10-10T14:00",
      "2024-10-10T15:00",
      "2024-10-10T16:00",
      "2024-10-10T17:00",
      "2024-10-10T18:00",
      "2024-10-10T19:00",
      "2024-10-10T20:00",
      "2024-10-10T21:00",
      "2024-10-10T22:00",
      "2024-10-10T23:00",
      "2024-10-11T00:00",
      "2024-10-11T01:00",
      "2024-10-11T02:00",
      "2024-10-11T03:00",
    ],
    temperature_2m: [
      36.6, 32.8, 29.5, 28.6, 29.2, 28.2, 27.5, 26.6, 26.5, 26, 25, 23.5, 23.9,
      24.2, 22.9, 21, 24, 28.1, 31.4, 33.9, 32.1, 28.9, 26.9, 25.2, 23, 21.1,
      19.6, 18.6, 17.7, 16.8, 16.2, 15.5, 14.9, 14.4, 14.2, 13.7, 13.3, 12.9,
      12.5, 13.5, 15.8, 17.7, 19.6, 21, 21.9, 22.3, 22, 20.7, 18.9, 17.9, 17.3,
      17, 16.7, 16.2, 15.6, 15.2, 15, 15, 15.1, 14.8, 14.8, 14.9, 14.7, 14.8,
      15.3, 16.2, 17.9, 19.6, 20.5, 21.6, 21, 20.7, 19.3, 18.7, 18.4, 17.9,
      17.3, 17, 17, 16.8, 16.4, 16.2, 16, 15.8, 15.7, 15.4, 15.4, 16.1, 16.7,
      17, 18.6, 19, 19.5, 19.4, 18.5, 17.9, 17.5, 16.7, 16.3, 16.1,
    ],
  },
  daily_units: {
    time: "iso8601",
    sunrise: "iso8601",
    sunset: "iso8601",
  },
  daily: {
    time: [
      "2024-10-07",
      "2024-10-08",
      "2024-10-09",
      "2024-10-10",
      "2024-10-11",
    ],
    sunrise: [
      "2024-10-07T07:15",
      "2024-10-08T07:16",
      "2024-10-09T07:17",
      "2024-10-10T07:18",
      "2024-10-11T07:19",
    ],
    sunset: [
      "2024-10-07T19:00",
      "2024-10-08T18:58",
      "2024-10-09T18:57",
      "2024-10-10T18:55",
      "2024-10-11T18:54",
    ],
  },
};

function n(num: number): number {
  return Math.ceil(num);
}

export function Weather({
  weatherAtLocation = SAMPLE,
}: {
  weatherAtLocation?: WeatherAtLocation;
}) {
  const currentHigh = Math.max(
    ...weatherAtLocation.hourly.temperature_2m.slice(0, 24),
  );
  const currentLow = Math.min(
    ...weatherAtLocation.hourly.temperature_2m.slice(0, 24),
  );

  const isDay = isWithinInterval(new Date(weatherAtLocation.current.time), {
    start: new Date(weatherAtLocation.daily.sunrise[0]),
    end: new Date(weatherAtLocation.daily.sunset[0]),
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hoursToShow = isMobile ? 5 : 6;

  // Find the index of the current time or the next closest time
  const currentTimeIndex = weatherAtLocation.hourly.time.findIndex(
    (time) => new Date(time) >= new Date(weatherAtLocation.current.time),
  );

  // Slice the arrays to get the desired number of items
  const displayTimes = weatherAtLocation.hourly.time.slice(
    currentTimeIndex,
    currentTimeIndex + hoursToShow,
  );
  const displayTemperatures = weatherAtLocation.hourly.temperature_2m.slice(
    currentTimeIndex,
    currentTimeIndex + hoursToShow,
  );

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-2xl p-4 skeleton-bg max-w-[500px]",
        {
          "bg-blue-400": isDay,
        },
        {
          "bg-indigo-900": !isDay,
        },
      )}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <div
            className={cn(
              "size-10 rounded-full skeleton-div",
              {
                "bg-yellow-300": isDay,
              },
              {
                "bg-indigo-100": !isDay,
              },
            )}
          />
          <div className="text-4xl font-medium text-blue-50">
            {n(weatherAtLocation.current.temperature_2m)}
            {weatherAtLocation.current_units.temperature_2m}
          </div>
        </div>

        <div className="text-blue-50">{`H:${n(currentHigh)}° L:${n(currentLow)}°`}</div>
      </div>

      <div className="flex flex-row justify-between">
        {displayTimes.map((time, index) => (
          <div key={time} className="flex flex-col items-center gap-1">
            <div className="text-blue-100 text-xs">
              {format(new Date(time), "ha")}
            </div>
            <div
              className={cn(
                "size-6 rounded-full skeleton-div",
                {
                  "bg-yellow-300": isDay,
                },
                {
                  "bg-indigo-200": !isDay,
                },
              )}
            />
            <div className="text-blue-50 text-sm">
              {n(displayTemperatures[index])}
              {weatherAtLocation.hourly_units.temperature_2m}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



================================================
FILE: alpinesight-app/components/ui/button.tsx
================================================
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }



================================================
FILE: alpinesight-app/components/ui/textarea.tsx
================================================
import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }



================================================
FILE: alpinesight-app/contexts/globe-context.tsx
================================================
"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export interface GlobeMarker {
  id: string;
  lat: number;
  lng: number;
  label: string;
  color?: string;
  size?: number;
}

export interface GlobePointOfView {
  lat: number;
  lng: number;
  altitude: number;
}

interface GlobeContextType {
  isGlobeOpen: boolean;
  setIsGlobeOpen: (open: boolean) => void;
  markers: GlobeMarker[];
  addMarker: (marker: GlobeMarker) => void;
  clearMarkers: () => void;
  pointOfView: GlobePointOfView | null;
  setPointOfView: (pov: GlobePointOfView) => void;
  flyToLocation: (lat: number, lng: number, altitude?: number) => void;
}

const GlobeContext = createContext<GlobeContextType | undefined>(undefined);

export function GlobeProvider({ children }: { children: ReactNode }) {
  const [isGlobeOpen, setIsGlobeOpen] = useState(false);
  const [markers, setMarkers] = useState<GlobeMarker[]>([]);
  const [pointOfView, setPointOfView] = useState<GlobePointOfView | null>(null);

  const addMarker = useCallback((marker: GlobeMarker) => {
    setMarkers((prev) => {
      // Remove existing marker with same id if exists
      const filtered = prev.filter((m) => m.id !== marker.id);
      return [...filtered, marker];
    });
  }, []);

  const clearMarkers = useCallback(() => {
    setMarkers([]);
  }, []);

  const flyToLocation = useCallback((lat: number, lng: number, altitude: number = 1.5) => {
    setPointOfView({ lat, lng, altitude });
  }, []);

  return (
    <GlobeContext.Provider
      value={{
        isGlobeOpen,
        setIsGlobeOpen,
        markers,
        addMarker,
        clearMarkers,
        pointOfView,
        setPointOfView,
        flyToLocation,
      }}
    >
      {children}
    </GlobeContext.Provider>
  );
}

export function useGlobe() {
  const context = useContext(GlobeContext);
  if (context === undefined) {
    throw new Error("useGlobe must be used within a GlobeProvider");
  }
  return context;
}



================================================
FILE: alpinesight-app/hooks/use-scroll-to-bottom.tsx
================================================
import { useEffect, useRef, type RefObject } from "react";

export function useScrollToBottom<T extends HTMLElement>(): [
  RefObject<T>,
  RefObject<T>,
] {
  const containerRef = useRef<T>(null);
  const endRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    const end = endRef.current;

    if (container && end) {
      const observer = new MutationObserver(() => {
        end.scrollIntoView({ behavior: "auto", block: "end" });
      });

      observer.observe(container, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });

      return () => observer.disconnect();
    }
  }, []);

  return [containerRef, endRef];
}



================================================
FILE: alpinesight-app/lambda/README.md
================================================
# AWS Lambda Container Deployment for YOLO

This directory contains the setup for deploying YOLO detection as an AWS Lambda container image, bypassing the 250MB deployment limit.

## Why Lambda Containers?

- **250MB limit** for regular Lambda deployments
- **10GB limit** for container deployments ✅
- ONNX Runtime + OpenCV = ~350 MB (too big for regular Lambda, perfect for containers)

## Prerequisites

1. AWS CLI installed and configured
2. Docker installed
3. AWS account with Lambda permissions
4. Exported YOLO model at `api/models/yolov8n.onnx`

## Deployment Steps

### 1. Build the Docker Image

```bash
# From project root
docker build -t yolo-lambda -f lambda/Dockerfile .
```

### 2. Test Locally

```bash
# Run container locally
docker run -p 9000:8080 yolo-lambda

# Test with curl (in another terminal)
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" \
  -d '{
    "image": "base64-encoded-image-here",
    "conf_threshold": 0.25
  }'
```

### 3. Push to AWS ECR

```bash
# Authenticate Docker to ECR
aws ecr get-login-password --region us-east-1 | \\
  docker login --username AWS --password-stdin \\
  123456789012.dkr.ecr.us-east-1.amazonaws.com

# Create ECR repository
aws ecr create-repository --repository-name yolo-lambda --region us-east-1

# Tag image
docker tag yolo-lambda:latest \\
  123456789012.dkr.ecr.us-east-1.amazonaws.com/yolo-lambda:latest

# Push image
docker push 123456789012.dkr.ecr.us-east-1.amazonaws.com/yolo-lambda:latest
```

### 4. Create Lambda Function

```bash
# Create Lambda function from container
aws lambda create-function \\
  --function-name yolo-detection \\
  --package-type Image \\
  --code ImageUri=123456789012.dkr.ecr.us-east-1.amazonaws.com/yolo-lambda:latest \\
  --role arn:aws:iam::123456789012:role/lambda-execution-role \\
  --memory-size 3008 \\
  --timeout 60 \\
  --region us-east-1
```

### 5. Create Function URL (for HTTP access)

```bash
# Create public function URL
aws lambda create-function-url-config \\
  --function-name yolo-detection \\
  --auth-type NONE \\
  --cors '{"AllowOrigins": ["*"], "AllowMethods": ["POST"], "AllowHeaders": ["content-type"]}' \\
  --region us-east-1

# Add permission for public access
aws lambda add-permission \\
  --function-name yolo-detection \\
  --statement-id FunctionURLAllowPublicAccess \\
  --action lambda:InvokeFunctionUrl \\
  --principal "*" \\
  --function-url-auth-type NONE \\
  --region us-east-1
```

## Usage from Vercel API

```python
import requests
import base64

def detect_objects(image_path: str):
    # Read and encode image
    with open(image_path, 'rb') as f:
        image_b64 = base64.b64encode(f.read()).decode('utf-8')

    # Call Lambda function
    response = requests.post(
        "https://your-lambda-url.lambda-url.us-east-1.on.aws/",
        json={
            "image": image_b64,
            "conf_threshold": 0.25
        }
    )

    return response.json()
```

## Cost Estimate

AWS Lambda Container pricing:
- Free tier: 1M requests/month + 400,000 GB-seconds compute
- After free tier: $0.0000166667 per GB-second + $0.20 per 1M requests

Example: 1000 requests/day, 3 seconds each, 3GB memory:
- Compute: 1000 * 3 * 3 GB-seconds = 9000 GB-seconds/day
- Monthly: 270,000 GB-seconds = $4.50/month
- Requests: 30,000 requests = $0.006/month
- **Total: ~$4.51/month**

Much cheaper than running a dedicated server!

## Alternative: Use Terraform

See `lambda/terraform/` for Infrastructure-as-Code deployment.

## Troubleshooting

### "Error loading model"
- Ensure `api/models/yolov8n.onnx` exists
- Run `python scripts/export_yolo_to_onnx.py` to create it

### "Out of memory"
- Increase Lambda memory to 10GB (max)
- Check model size

### "Timeout"
- Increase Lambda timeout to 900s (max)
- Optimize model with ONNX optimization

## References

- [AWS Lambda Container Images](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html)
- [HowTo: deploying YOLOv8 on AWS Lambda](https://www.trainyolo.com/blog/deploy-yolov8-on-aws-lambda)



================================================
FILE: alpinesight-app/lambda/Dockerfile
================================================
# Dockerfile for AWS Lambda YOLO detection
# Bypasses 250MB limit by using container images (up to 10GB)

FROM public.ecr.aws/lambda/python:3.12

# Install system dependencies for OpenCV
RUN yum install -y \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
    libgomp1 \
    && yum clean all

# Copy requirements
COPY requirements-lambda.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements-lambda.txt

# Copy ONNX model
COPY api/models/yolov8n.onnx /var/task/models/

# Copy YOLO detection code
COPY api/_utils/object_detection/ /var/task/

# Copy Lambda handler
COPY lambda/handler.py ${LAMBDA_TASK_ROOT}

# Set the CMD to your handler
CMD [ "handler.lambda_handler" ]



================================================
FILE: alpinesight-app/lambda/handler.py
================================================
"""
AWS Lambda handler for YOLO object detection.
Uses ONNX Runtime for efficient inference.

Deploy as Lambda container image to bypass 250MB limit.
"""

import json
import base64
import io
from typing import Dict, Any

import numpy as np
from PIL import Image
from onnx_detector import YOLO_ONNX

# Load model once at cold start
MODEL_PATH = "/var/task/models/yolov8n.onnx"
model = YOLO_ONNX(MODEL_PATH)

print(f"✅ YOLO model loaded: {MODEL_PATH}")


def lambda_handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    """
    Lambda handler for YOLO detection.

    Event format:
    {
        "image": "base64-encoded-image",
        "conf_threshold": 0.25,
        "iou_threshold": 0.45
    }

    Returns:
    {
        "statusCode": 200,
        "body": {
            "detections": [
                {
                    "class": "car",
                    "confidence": 0.92,
                    "bbox": [x1, y1, x2, y2]
                },
                ...
            ]
        }
    }
    """
    try:
        # Parse request
        body = json.loads(event.get("body", "{}")) if isinstance(event.get("body"), str) else event

        image_b64 = body.get("image")
        conf_threshold = body.get("conf_threshold", 0.25)
        iou_threshold = body.get("iou_threshold", 0.45)

        if not image_b64:
            return {
                "statusCode": 400,
                "body": json.dumps({"error": "Missing 'image' field"})
            }

        # Decode image
        image_bytes = base64.b64decode(image_b64)
        image = Image.open(io.BytesIO(image_bytes))
        image_np = np.array(image)

        # Run inference
        results = model.predict(
            source=image_np,
            conf=conf_threshold,
            iou=iou_threshold,
            verbose=False
        )

        # Format results
        detections = []
        result = results[0]

        if result.boxes is not None and len(result.boxes) > 0:
            for box in result.boxes:
                cls_id = int(box.cls[0])
                cls_name = model.names[cls_id]
                confidence = float(box.conf[0])
                x1, y1, x2, y2 = box.xyxy[0].tolist()

                detections.append({
                    "class": cls_name,
                    "confidence": confidence,
                    "bbox": [int(x1), int(y1), int(x2), int(y2)]
                })

        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps({
                "detections": detections,
                "count": len(detections)
            })
        }

    except Exception as e:
        print(f"Error: {e}")
        return {
            "statusCode": 500,
            "body": json.dumps({"error": str(e)})
        }


# For local testing
if __name__ == "__main__":
    # Test with sample event
    test_event = {
        "image": "",  # Add base64 image here
        "conf_threshold": 0.25
    }

    result = lambda_handler(test_event, None)
    print(json.dumps(result, indent=2))



================================================
FILE: alpinesight-app/lambda/requirements-lambda.txt
================================================
# Lambda-specific requirements for YOLO detection
# Container images support up to 10GB, so size is not an issue

numpy==2.3.4
onnxruntime==1.20.1
opencv-python-headless==4.10.0.84
Pillow==11.1.0



================================================
FILE: alpinesight-app/lib/globe-tools.ts
================================================
/**
 * Globe Control Tools
 *
 * This module provides tools for the AI to control the globe visualization.
 * The AI can use these tools to show locations, add markers, and control the camera.
 */

export interface GeocodingResult {
  name: string;
  lat: number;
  lng: number;
  boundingBox?: number[];
}

/**
 * Geocode a location string to coordinates
 */
export async function geocodeLocation(
  location: string
): Promise<GeocodingResult> {
  const response = await fetch(
    `/api/globe/geocode?location=${encodeURIComponent(location)}`
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to geocode location");
  }

  return response.json();
}

/**
 * Tool definitions for the AI to use in the chat API
 */
export const globeTools = [
  {
    type: "function" as const,
    function: {
      name: "show_location_on_globe",
      description:
        "Shows a location on the interactive globe with a marker and zooms the camera to that location. Opens the globe if it's not already open. Use this when the user asks to find, show, or locate a place on the map.",
      parameters: {
        type: "object",
        properties: {
          location: {
            type: "string",
            description:
              "The name of the location to show (e.g., 'Istanbul', 'Paris', 'Mount Everest', 'Golden Gate Bridge')",
          },
          markerColor: {
            type: "string",
            description: "The color of the marker pin (default: 'red')",
            enum: ["red", "blue", "green", "orange", "purple"],
          },
        },
        required: ["location"],
      },
    },
  },
  {
    type: "function" as const,
    function: {
      name: "close_globe",
      description:
        "Closes the globe view and returns to full-screen chat. Use this when the user is done viewing the map or asks to close it.",
      parameters: {
        type: "object",
        properties: {},
      },
    },
  },
];

/**
 * Type for tool calls
 */
export type GlobeToolCall =
  | {
      name: "show_location_on_globe";
      arguments: {
        location: string;
        markerColor?: "red" | "blue" | "green" | "orange" | "purple";
      };
    }
  | {
      name: "close_globe";
      arguments: Record<string, never>;
    };



================================================
FILE: alpinesight-app/lib/multimodal-detection.ts
================================================
/**
 * Multimodal AI-based vehicle detection for satellite imagery
 * Uses Claude Vision or GPT-4 Vision to count vehicles in images
 */

export interface VisionDetection {
  vehicleCount: number;
  confidence: number;
  description: string;
  businessInsights?: string;
}

export async function detectVehiclesWithVision(
  imageUrl: string,
  provider: "anthropic" | "openai" = "anthropic"
): Promise<VisionDetection> {
  try {
    const response = await fetch("/api/vision-detect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageUrl,
        provider,
      }),
    });

    if (!response.ok) {
      throw new Error(`Vision API failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("❌ Vision detection failed:", error);
    throw error;
  }
}



================================================
FILE: alpinesight-app/lib/utils.ts
================================================
import { UIMessage } from "@ai-sdk/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitizeUIMessages(
  messages: Array<UIMessage>
): Array<UIMessage> {
  const messagesBySanitizedParts = messages.map((message) => {
    if (message.role !== "assistant") return message;

    if (!message.parts) return message;

    const sanitizedParts = message.parts.filter((part: any) => {
      if (part.type === "text") return true;

      if (part.type?.startsWith("tool-")) {
        return part.state === "output-available";
      }

      return true;
    });

    return {
      ...message,
      parts: sanitizedParts,
    };
  });

  return messagesBySanitizedParts.filter((message) => {
    if (!message.parts || message.parts.length === 0) return false;

    return message.parts.some((part: any) => {
      if (part.type === "text" && part.text?.length > 0) return true;
      if (part.type?.startsWith("tool-") && part.state === "output-available")
        return true;
      return false;
    });
  });
}



================================================
FILE: alpinesight-app/lib/yolo-aerial-client.ts
================================================
/**
 * Client-side YOLO-OBB detection for aerial/satellite imagery
 * Uses YOLOv8-OBB model trained on DOTA dataset
 */

import * as ort from "onnxruntime-web";

export interface Detection {
  class: string;
  confidence: number;
  bbox: [number, number, number, number]; // [x1, y1, x2, y2]
  angle?: number; // rotation angle for OBB
}

// DOTA dataset classes - we only care about vehicles (indices 9 and 10)
const DOTA_CLASSES = [
  null,
  null,
  null,
  null,
  null, // 0-4: plane, ship, storage tank, baseball diamond, tennis court
  null,
  null,
  null,
  null, // 5-8: basketball court, ground track field, harbor, bridge
  "large vehicle", // 9
  "small vehicle", // 10
  null,
  null,
  null,
  null, // 11-14: helicopter, roundabout, soccer ball field, swimming pool
];

class YOLOOBBDetector {
  private session: ort.InferenceSession | null = null;
  private modelLoaded = false;

  async loadModel(
    modelUrl: string = "/models/yolo11n-obb.onnx"
  ): Promise<void> {
    if (this.modelLoaded) return;

    console.log("🔄 Loading YOLO11-OBB aerial model from:", modelUrl);

    try {
      const executionProviders: string[] = [];

      if (typeof navigator !== "undefined" && "gpu" in navigator) {
        executionProviders.push("webgpu");
        console.log("✅ WebGPU available");
      }

      executionProviders.push("wasm");

      this.session = await ort.InferenceSession.create(modelUrl, {
        executionProviders: executionProviders as any,
      });

      this.modelLoaded = true;
      console.log("✅ YOLO11-OBB aerial model loaded successfully");
      console.log(
        "   Input/Output:",
        this.session.inputNames,
        this.session.outputNames
      );
    } catch (error) {
      console.error("❌ Failed to load YOLO-OBB model:", error);
      throw error;
    }
  }

  private preprocessImage(
    imageData: ImageData,
    targetWidth = 640,
    targetHeight = 640
  ): { tensor: ort.Tensor; scale: number; padX: number; padY: number } {
    const { width, height } = imageData;

    const scale = Math.min(targetWidth / width, targetHeight / height);
    const scaledWidth = Math.round(width * scale);
    const scaledHeight = Math.round(height * scale);
    const padX = Math.floor((targetWidth - scaledWidth) / 2);
    const padY = Math.floor((targetHeight - scaledHeight) / 2);

    const canvas = document.createElement("canvas");
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = "#808080";
    ctx.fillRect(0, 0, targetWidth, targetHeight);

    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = imageData.width;
    tempCanvas.height = imageData.height;
    const tempCtx = tempCanvas.getContext("2d")!;
    tempCtx.putImageData(imageData, 0, 0);

    ctx.drawImage(
      tempCanvas,
      0,
      0,
      width,
      height,
      padX,
      padY,
      scaledWidth,
      scaledHeight
    );

    const resizedData = ctx.getImageData(0, 0, targetWidth, targetHeight);

    const tensorData = new Float32Array(3 * targetHeight * targetWidth);
    const pixels = resizedData.data;

    for (let i = 0; i < pixels.length; i += 4) {
      const pixelIndex = i / 4;
      const r = pixels[i] / 255.0;
      const g = pixels[i + 1] / 255.0;
      const b = pixels[i + 2] / 255.0;

      tensorData[pixelIndex] = r;
      tensorData[targetHeight * targetWidth + pixelIndex] = g;
      tensorData[2 * targetHeight * targetWidth + pixelIndex] = b;
    }

    const tensor = new ort.Tensor("float32", tensorData, [
      1,
      3,
      targetHeight,
      targetWidth,
    ]);

    return { tensor, scale, padX, padY };
  }

  private nms(
    boxes: number[][],
    scores: number[],
    iouThreshold: number
  ): number[] {
    const indices: number[] = [];
    const sortedIndices = scores
      .map((score, idx) => ({ score, idx }))
      .sort((a, b) => b.score - a.score)
      .map((item) => item.idx);

    while (sortedIndices.length > 0) {
      const current = sortedIndices.shift()!;
      indices.push(current);

      const currentBox = boxes[current];

      sortedIndices.splice(
        0,
        sortedIndices.length,
        ...sortedIndices.filter((idx) => {
          const box = boxes[idx];
          const iou = this.calculateIoU(currentBox, box);
          return iou <= iouThreshold;
        })
      );
    }

    return indices;
  }

  private calculateIoU(box1: number[], box2: number[]): number {
    const [x1_1, y1_1, x2_1, y2_1] = box1;
    const [x1_2, y1_2, x2_2, y2_2] = box2;

    const x1 = Math.max(x1_1, x1_2);
    const y1 = Math.max(y1_1, y1_2);
    const x2 = Math.min(x2_1, x2_2);
    const y2 = Math.min(y2_1, y2_2);

    const intersection = Math.max(0, x2 - x1) * Math.max(0, y2 - y1);
    const area1 = (x2_1 - x1_1) * (y2_1 - y1_1);
    const area2 = (x2_2 - x1_2) * (y2_2 - y1_2);
    const union = area1 + area2 - intersection;

    return intersection / union;
  }

  async detect(
    imageData: ImageData,
    confThreshold = 0.001,
    iouThreshold = 0.45
  ): Promise<Detection[]> {
    if (!this.session) {
      throw new Error("Model not loaded. Call loadModel() first.");
    }

    const { tensor, scale, padX, padY } = this.preprocessImage(imageData);

    const startTime = performance.now();
    const results = await this.session.run({ images: tensor });
    const inferenceTime = performance.now() - startTime;
    console.log(`⚡ Aerial inference time: ${inferenceTime.toFixed(2)}ms`);

    // OBB output format: [1, 20, 8400] - [batch, (x, y, w, h, angle, class scores...), anchors]
    const output = results.output0.data as Float32Array;
    const outputShape = results.output0.dims; // [1, 20, 8400]
    const numClasses = 15; // DOTA has 15 classes

    const detections: Detection[] = [];
    const boxes: number[][] = [];
    const scores: number[] = [];
    const classIds: number[] = [];

    // Parse detections
    for (let i = 0; i < outputShape[2]; i++) {
      let maxScore = 0;
      let maxClass = 0;

      // Class scores start at index 5 (after x, y, w, h, angle)
      for (let c = 0; c < numClasses; c++) {
        const score = output[i + (5 + c) * outputShape[2]];
        if (score > maxScore) {
          maxScore = score;
          maxClass = c;
        }
      }

      if (maxScore < confThreshold) continue;

      // Get box (xywh format, plus angle)
      const cx = output[i];
      const cy = output[i + outputShape[2]];
      const w = output[i + 2 * outputShape[2]];
      const h = output[i + 3 * outputShape[2]];
      // const angle = output[i + 4 * outputShape[2]]; // rotation angle (not used for now)

      const x1 = (cx - w / 2 - padX) / scale;
      const y1 = (cy - h / 2 - padY) / scale;
      const x2 = (cx + w / 2 - padX) / scale;
      const y2 = (cy + h / 2 - padY) / scale;

      boxes.push([x1, y1, x2, y2]);
      scores.push(maxScore);
      classIds.push(maxClass);
    }

    const keepIndices = this.nms(boxes, scores, iouThreshold);

    console.log(`🔍 Before NMS: ${boxes.length} detections`);
    console.log(`🔍 After NMS: ${keepIndices.length} detections`);

    // Log class distribution (only vehicles)
    const classCounts: { [key: string]: number } = {};
    for (const idx of keepIndices) {
      const classId = classIds[idx];
      const className = DOTA_CLASSES[classId];

      // Skip if not a vehicle (null in our class list)
      if (!className) continue;

      classCounts[className] = (classCounts[className] || 0) + 1;

      detections.push({
        class: className,
        confidence: scores[idx],
        bbox: boxes[idx] as [number, number, number, number],
      });
    }

    console.log(`✅ Found ${detections.length} aerial objects:`, classCounts);
    return detections;
  }
}

let detector: YOLOOBBDetector | null = null;

export async function getYOLOAerialDetector(): Promise<YOLOOBBDetector> {
  if (!detector) {
    detector = new YOLOOBBDetector();
    await detector.loadModel();
  }
  return detector;
}

export async function detectAerialObjects(
  image: HTMLImageElement | HTMLCanvasElement,
  confThreshold = 0.15,
  iouThreshold = 0.3
): Promise<Detection[]> {
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(image, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const detector = await getYOLOAerialDetector();
  return detector.detect(imageData, confThreshold, iouThreshold);
}



================================================
FILE: alpinesight-app/lib/yolo-client.ts
================================================
/**
 * Client-side YOLO detection using ONNX Runtime Web
 * Runs inference in the browser using WebAssembly/WebGPU
 *
 * Bypasses Vercel's 250MB serverless function limit by running client-side!
 */

import * as ort from 'onnxruntime-web';

export interface Detection {
  class: string;
  confidence: number;
  bbox: [number, number, number, number]; // [x1, y1, x2, y2]
}

// COCO class names (YOLOv8 default)
const COCO_CLASSES = [
  'person', 'bicycle', 'car', 'motorcycle', 'airplane', 'bus', 'train', 'truck', 'boat',
  'traffic light', 'fire hydrant', 'stop sign', 'parking meter', 'bench', 'bird', 'cat',
  'dog', 'horse', 'sheep', 'cow', 'elephant', 'bear', 'zebra', 'giraffe', 'backpack',
  'umbrella', 'handbag', 'tie', 'suitcase', 'frisbee', 'skis', 'snowboard', 'sports ball',
  'kite', 'baseball bat', 'baseball glove', 'skateboard', 'surfboard', 'tennis racket',
  'bottle', 'wine glass', 'cup', 'fork', 'knife', 'spoon', 'bowl', 'banana', 'apple',
  'sandwich', 'orange', 'broccoli', 'carrot', 'hot dog', 'pizza', 'donut', 'cake',
  'chair', 'couch', 'potted plant', 'bed', 'dining table', 'toilet', 'tv', 'laptop',
  'mouse', 'remote', 'keyboard', 'cell phone', 'microwave', 'oven', 'toaster', 'sink',
  'refrigerator', 'book', 'clock', 'vase', 'scissors', 'teddy bear', 'hair drier', 'toothbrush'
];

class YOLODetector {
  private session: ort.InferenceSession | null = null;
  private modelLoaded = false;

  /**
   * Load YOLO ONNX model
   */
  async loadModel(modelUrl: string = '/models/yolov8n.onnx'): Promise<void> {
    if (this.modelLoaded) return;

    console.log('🔄 Loading YOLO model from:', modelUrl);

    try {
      // Use WebGPU if available, fallback to WASM
      const executionProviders: string[] = [];

      if (typeof navigator !== 'undefined' && 'gpu' in navigator) {
        executionProviders.push('webgpu');
        console.log('✅ WebGPU available');
      }

      executionProviders.push('wasm');

      this.session = await ort.InferenceSession.create(modelUrl, {
        executionProviders: executionProviders as any,
      });

      this.modelLoaded = true;
      console.log('✅ YOLO model loaded successfully');
      console.log('   Input shape:', this.session.inputNames, this.session.outputNames);
    } catch (error) {
      console.error('❌ Failed to load YOLO model:', error);
      throw error;
    }
  }

  /**
   * Preprocess image for YOLO inference
   */
  private preprocessImage(
    imageData: ImageData,
    targetWidth = 640,
    targetHeight = 640
  ): { tensor: ort.Tensor; scale: number; padX: number; padY: number } {
    const { width, height } = imageData;

    // Calculate scale (letterbox)
    const scale = Math.min(targetWidth / width, targetHeight / height);
    const scaledWidth = Math.round(width * scale);
    const scaledHeight = Math.round(height * scale);
    const padX = Math.floor((targetWidth - scaledWidth) / 2);
    const padY = Math.floor((targetHeight - scaledHeight) / 2);

    // Create canvas for resizing
    const canvas = document.createElement('canvas');
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext('2d')!;

    // Fill with gray padding
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, targetWidth, targetHeight);

    // Draw scaled image
    ctx.drawImage(
      this.imageDataToCanvas(imageData),
      0, 0, width, height,
      padX, padY, scaledWidth, scaledHeight
    );

    const resizedData = ctx.getImageData(0, 0, targetWidth, targetHeight);

    // Convert to tensor (CHW format, normalized to [0, 1])
    const tensorData = new Float32Array(3 * targetHeight * targetWidth);
    const pixels = resizedData.data;

    for (let i = 0; i < pixels.length; i += 4) {
      const pixelIndex = i / 4;
      const r = pixels[i] / 255.0;
      const g = pixels[i + 1] / 255.0;
      const b = pixels[i + 2] / 255.0;

      // CHW format
      tensorData[pixelIndex] = r; // R channel
      tensorData[targetHeight * targetWidth + pixelIndex] = g; // G channel
      tensorData[2 * targetHeight * targetWidth + pixelIndex] = b; // B channel
    }

    const tensor = new ort.Tensor('float32', tensorData, [1, 3, targetHeight, targetWidth]);

    return { tensor, scale, padX, padY };
  }

  /**
   * Convert ImageData to Canvas
   */
  private imageDataToCanvas(imageData: ImageData): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    const ctx = canvas.getContext('2d')!;
    ctx.putImageData(imageData, 0, 0);
    return canvas;
  }

  /**
   * Non-Maximum Suppression
   */
  private nms(
    boxes: number[][],
    scores: number[],
    iouThreshold: number
  ): number[] {
    const indices: number[] = [];
    const sortedIndices = scores
      .map((score, idx) => ({ score, idx }))
      .sort((a, b) => b.score - a.score)
      .map(item => item.idx);

    while (sortedIndices.length > 0) {
      const current = sortedIndices.shift()!;
      indices.push(current);

      const currentBox = boxes[current];

      sortedIndices.splice(0, sortedIndices.length, ...sortedIndices.filter(idx => {
        const box = boxes[idx];
        const iou = this.calculateIoU(currentBox, box);
        return iou <= iouThreshold;
      }));
    }

    return indices;
  }

  /**
   * Calculate Intersection over Union
   */
  private calculateIoU(box1: number[], box2: number[]): number {
    const [x1_1, y1_1, x2_1, y2_1] = box1;
    const [x1_2, y1_2, x2_2, y2_2] = box2;

    const x1 = Math.max(x1_1, x1_2);
    const y1 = Math.max(y1_1, y1_2);
    const x2 = Math.min(x2_1, x2_2);
    const y2 = Math.min(y2_1, y2_2);

    const intersection = Math.max(0, x2 - x1) * Math.max(0, y2 - y1);
    const area1 = (x2_1 - x1_1) * (y2_1 - y1_1);
    const area2 = (x2_2 - x1_2) * (y2_2 - y1_2);
    const union = area1 + area2 - intersection;

    return intersection / union;
  }

  /**
   * Run YOLO detection on image
   */
  async detect(
    imageData: ImageData,
    confThreshold = 0.25,
    iouThreshold = 0.45
  ): Promise<Detection[]> {
    if (!this.session) {
      throw new Error('Model not loaded. Call loadModel() first.');
    }

    // Preprocess
    const { tensor, scale, padX, padY } = this.preprocessImage(imageData);

    // Run inference
    const startTime = performance.now();
    const results = await this.session.run({ images: tensor });
    const inferenceTime = performance.now() - startTime;
    console.log(`⚡ Inference time: ${inferenceTime.toFixed(2)}ms`);

    // Parse output (YOLOv8 format: [1, 84, 8400])
    const output = results.output0.data as Float32Array;
    const outputShape = results.output0.dims; // [1, 84, 8400]
    const numClasses = 80;

    const detections: Detection[] = [];
    const boxes: number[][] = [];
    const scores: number[] = [];
    const classIds: number[] = [];

    // Parse detections
    for (let i = 0; i < outputShape[2]; i++) {
      // Get class scores
      let maxScore = 0;
      let maxClass = 0;

      for (let c = 0; c < numClasses; c++) {
        const score = output[i + (4 + c) * outputShape[2]];
        if (score > maxScore) {
          maxScore = score;
          maxClass = c;
        }
      }

      if (maxScore < confThreshold) continue;

      // Get box (xywh -> xyxy)
      const cx = output[i];
      const cy = output[i + outputShape[2]];
      const w = output[i + 2 * outputShape[2]];
      const h = output[i + 3 * outputShape[2]];

      const x1 = (cx - w / 2 - padX) / scale;
      const y1 = (cy - h / 2 - padY) / scale;
      const x2 = (cx + w / 2 - padX) / scale;
      const y2 = (cy + h / 2 - padY) / scale;

      boxes.push([x1, y1, x2, y2]);
      scores.push(maxScore);
      classIds.push(maxClass);
    }

    // Apply NMS
    const keepIndices = this.nms(boxes, scores, iouThreshold);

    // Build final detections
    for (const idx of keepIndices) {
      detections.push({
        class: COCO_CLASSES[classIds[idx]] || `class_${classIds[idx]}`,
        confidence: scores[idx],
        bbox: boxes[idx] as [number, number, number, number],
      });
    }

    console.log(`✅ Found ${detections.length} objects`);
    return detections;
  }
}

// Singleton instance
let detector: YOLODetector | null = null;

/**
 * Get or create YOLO detector instance
 */
export async function getYOLODetector(): Promise<YOLODetector> {
  if (!detector) {
    detector = new YOLODetector();
    await detector.loadModel();
  }
  return detector;
}

/**
 * Detect objects in an image element
 */
export async function detectObjects(
  image: HTMLImageElement | HTMLCanvasElement,
  confThreshold = 0.25,
  iouThreshold = 0.45
): Promise<Detection[]> {
  // Convert to ImageData
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(image, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // Run detection
  const detector = await getYOLODetector();
  return detector.detect(imageData, confThreshold, iouThreshold);
}



================================================
FILE: alpinesight-app/scripts/export_yolo_to_onnx.py
================================================
#!/usr/bin/env python3
"""
Export YOLOv8 model to ONNX format for Vercel deployment.

This script converts the PyTorch YOLOv8 model to ONNX format,
which is much smaller and works within Vercel's 250 MB limit.

Usage:
    python scripts/export_yolo_to_onnx.py
"""

from ultralytics import YOLO
import os
from pathlib import Path

def export_yolo_to_onnx(
    model_name: str = "yolov8n.pt",  # nano model (smallest)
    output_dir: str = "api/models",
    simplify: bool = True,
    opset: int = 12,
):
    """
    Export YOLO model to ONNX format.

    Args:
        model_name: YOLOv8 model name (yolov8n.pt, yolov8s.pt, etc.)
        output_dir: Directory to save the ONNX model
        simplify: Whether to simplify the ONNX model (recommended)
        opset: ONNX opset version (12 is stable)
    """
    print(f"🔄 Loading YOLOv8 model: {model_name}")

    # Load the YOLOv8 model
    model = YOLO(model_name)

    # Create output directory
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    print(f"📦 Exporting to ONNX format...")
    print(f"   - Simplify: {simplify}")
    print(f"   - Opset: {opset}")

    # Export to ONNX
    # This will create a .onnx file in the same directory as the model
    success = model.export(
        format="onnx",
        simplify=simplify,
        opset=opset,
        dynamic=False,  # Static shapes for better performance
        imgsz=640,      # Input image size
    )

    # Move the exported file to our models directory
    model_base = model_name.replace('.pt', '')
    source_onnx = f"{model_base}.onnx"
    dest_onnx = output_path / f"{model_base}.onnx"

    if os.path.exists(source_onnx):
        os.rename(source_onnx, dest_onnx)
        print(f"✅ ONNX model exported to: {dest_onnx}")

        # Print file size comparison
        if os.path.exists(model_name):
            pt_size = os.path.getsize(model_name) / (1024 * 1024)
            onnx_size = os.path.getsize(dest_onnx) / (1024 * 1024)
            print(f"\n📊 Size Comparison:")
            print(f"   PyTorch (.pt):  {pt_size:.2f} MB")
            print(f"   ONNX (.onnx):   {onnx_size:.2f} MB")
            print(f"   Reduction:      {((pt_size - onnx_size) / pt_size * 100):.1f}%")

        return dest_onnx
    else:
        print(f"❌ Export failed: {source_onnx} not found")
        return None


if __name__ == "__main__":
    # Export the nano model (smallest, fastest)
    export_yolo_to_onnx(
        model_name="yolov8n.pt",
        output_dir="api/models",
        simplify=True,
    )

    print("\n✨ Next steps:")
    print("1. Update requirements.txt to use onnxruntime instead of ultralytics")
    print("2. Update your detection code to use ONNX Runtime")
    print("3. Deploy to Vercel!")



================================================
FILE: alpinesight-app/scripts/test_compressed_size.sh
================================================
[Binary file]


================================================
FILE: alpinesight-app/scripts/test_onnx_inference.py
================================================
#!/usr/bin/env python3
"""
Test script to verify ONNX inference works correctly.

This script tests:
1. ONNX model loading
2. Inference on a test image
3. Compatibility with existing detection code
4. Performance comparison (optional)

Usage:
    python scripts/test_onnx_inference.py
"""

import os
import sys
import time
from pathlib import Path

import cv2
import numpy as np

# Add project root to path
sys.path.insert(0, str(Path(__file__).parent.parent))

from api.utils.object_detection.onnx_detector import YOLO_ONNX


def create_test_image(width=640, height=640):
    """Create a simple test image with colored rectangles."""
    img = np.ones((height, width, 3), dtype=np.uint8) * 128

    # Add some colored rectangles to simulate objects
    cv2.rectangle(img, (100, 100), (200, 200), (255, 0, 0), -1)  # Blue
    cv2.rectangle(img, (300, 300), (450, 450), (0, 255, 0), -1)  # Green
    cv2.rectangle(img, (200, 400), (350, 550), (0, 0, 255), -1)  # Red

    return img


def test_model_loading():
    """Test 1: Model loading."""
    print("\n" + "=" * 60)
    print("Test 1: ONNX Model Loading")
    print("=" * 60)

    model_path = "api/models/yolov8n.onnx"

    if not os.path.exists(model_path):
        print(f"❌ ONNX model not found: {model_path}")
        print("Please run: python scripts/export_yolo_to_onnx.py")
        return None

    try:
        model = YOLO_ONNX(model_path)
        print(f"✅ Model loaded successfully")
        print(f"   Classes: {len(model.names)}")
        print(f"   Input size: {model.input_width}x{model.input_height}")
        return model
    except Exception as e:
        print(f"❌ Failed to load model: {e}")
        return None


def test_inference(model):
    """Test 2: Inference on test image."""
    print("\n" + "=" * 60)
    print("Test 2: Inference on Test Image")
    print("=" * 60)

    # Create test image
    test_img = create_test_image()

    try:
        # Run inference
        start_time = time.time()
        results = model.predict(test_img, conf=0.25, verbose=False)
        inference_time = time.time() - start_time

        print(f"✅ Inference completed")
        print(f"   Time: {inference_time * 1000:.2f} ms")
        print(f"   Detections: {len(results[0])}")

        if len(results[0]) > 0:
            result = results[0]
            print(f"\n   Detected objects:")
            for i, box in enumerate(result.boxes):
                cls_id = int(box.cls[0])
                cls_name = model.names[cls_id]
                conf = float(box.conf[0])
                print(f"   - {cls_name}: {conf:.2f}")

        return True
    except Exception as e:
        print(f"❌ Inference failed: {e}")
        import traceback
        traceback.print_exc()
        return False


def test_compatibility():
    """Test 3: Compatibility with existing detection code."""
    print("\n" + "=" * 60)
    print("Test 3: Compatibility with Existing Detection Code")
    print("=" * 60)

    try:
        from api.utils.object_detection.detect import load_model, filter_vehicle_detections

        print("✅ Import successful")

        # Try to load model (will use ONNX if available)
        model = load_model("yolov8n.pt")
        print(f"✅ Model loaded via detect.py")

        # Create test image
        test_img = create_test_image()

        # Run detection
        results = model.predict(test_img, conf=0.25, verbose=False)
        print(f"✅ Inference via detect.py wrapper")
        print(f"   Detections: {len(results[0])}")

        # Test filter function
        vehicles = filter_vehicle_detections(results[0])
        print(f"✅ Vehicle filtering")
        print(f"   Vehicles found: {len(vehicles)}")

        return True
    except Exception as e:
        print(f"❌ Compatibility test failed: {e}")
        import traceback
        traceback.print_exc()
        return False


def test_real_image():
    """Test 4: Inference on real image (if available)."""
    print("\n" + "=" * 60)
    print("Test 4: Inference on Real Image (Optional)")
    print("=" * 60)

    # Look for test images in common locations
    test_paths = [
        "test_data/sat_1.png",
        "data/raw/test.jpg",
        "api/test_image.jpg",
    ]

    test_image = None
    for path in test_paths:
        if os.path.exists(path):
            test_image = path
            break

    if test_image is None:
        print("⚠️ No test image found, skipping real image test")
        print(f"   Searched: {test_paths}")
        return True

    try:
        model = YOLO_ONNX("api/models/yolov8n.onnx")

        # Run inference
        print(f"Testing with: {test_image}")
        start_time = time.time()
        results = model.predict(test_image, conf=0.25, verbose=False)
        inference_time = time.time() - start_time

        print(f"✅ Real image inference completed")
        print(f"   Time: {inference_time * 1000:.2f} ms")
        print(f"   Detections: {len(results[0])}")

        if len(results[0]) > 0:
            result = results[0]
            print(f"\n   Detected objects:")
            for i, box in enumerate(result.boxes):
                cls_id = int(box.cls[0])
                cls_name = model.names[cls_id]
                conf = float(box.conf[0])
                x1, y1, x2, y2 = box.xyxy[0].tolist()
                print(f"   - {cls_name}: {conf:.2f} at [{int(x1)}, {int(y1)}, {int(x2)}, {int(y2)}]")

        return True
    except Exception as e:
        print(f"❌ Real image test failed: {e}")
        import traceback
        traceback.print_exc()
        return False


def main():
    """Run all tests."""
    print("\n" + "=" * 60)
    print("ONNX Inference Test Suite")
    print("=" * 60)

    results = {
        "Model Loading": False,
        "Inference": False,
        "Compatibility": False,
        "Real Image": False,
    }

    # Test 1: Model loading
    model = test_model_loading()
    results["Model Loading"] = model is not None

    if model is None:
        print("\n❌ Cannot proceed without model")
        return False

    # Test 2: Inference
    results["Inference"] = test_inference(model)

    # Test 3: Compatibility
    results["Compatibility"] = test_compatibility()

    # Test 4: Real image (optional)
    results["Real Image"] = test_real_image()

    # Summary
    print("\n" + "=" * 60)
    print("Test Summary")
    print("=" * 60)

    for test_name, passed in results.items():
        status = "✅ PASS" if passed else "❌ FAIL"
        print(f"{test_name:20s}: {status}")

    all_critical_passed = (
        results["Model Loading"] and
        results["Inference"] and
        results["Compatibility"]
    )

    print("\n" + "=" * 60)
    if all_critical_passed:
        print("✅ All critical tests passed!")
        print("ONNX inference is working correctly and ready for deployment.")
    else:
        print("❌ Some critical tests failed!")
        print("Please check the errors above and fix before deployment.")
    print("=" * 60 + "\n")

    return all_critical_passed


if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)



================================================
FILE: alpinesight-app/scripts/test_requirements_size.sh
================================================
#!/bin/bash
# Test production requirements size for Vercel deployment
# Vercel limit: 250 MB unzipped

set -e

echo "============================================================"
echo "Testing Production Requirements Size"
echo "============================================================"
echo ""

# Create temporary virtual environment
TEMP_VENV="/tmp/alpinesight_test_venv"
echo "🔧 Creating temporary virtual environment..."
rm -rf "$TEMP_VENV"
python3 -m venv "$TEMP_VENV"

# Activate virtual environment
source "$TEMP_VENV/bin/activate"

# Install production requirements
echo ""
echo "📦 Installing production requirements..."
pip install --quiet --upgrade pip
pip install --quiet -r requirements.txt

# Calculate size
echo ""
echo "📊 Calculating installed package sizes..."
SITE_PACKAGES="$TEMP_VENV/lib/python3.*/site-packages"
TOTAL_SIZE=$(du -sh $SITE_PACKAGES | cut -f1)
TOTAL_BYTES=$(du -s $SITE_PACKAGES | cut -f1)
TOTAL_MB=$((TOTAL_BYTES / 1024))

echo ""
echo "============================================================"
echo "Results"
echo "============================================================"
echo "Total size: $TOTAL_SIZE (${TOTAL_MB} MB)"
echo "Vercel limit: 250 MB"
echo ""

if [ $TOTAL_MB -lt 250 ]; then
    REMAINING=$((250 - TOTAL_MB))
    echo "✅ PASS: Size is within Vercel limits!"
    echo "   Remaining capacity: ${REMAINING} MB"
else
    OVERFLOW=$((TOTAL_MB - 250))
    echo "❌ FAIL: Size exceeds Vercel limits!"
    echo "   Overflow: ${OVERFLOW} MB"
fi

echo ""
echo "Top 10 largest packages:"
du -sh $SITE_PACKAGES/* | sort -hr | head -10

# Cleanup
echo ""
echo "🧹 Cleaning up temporary virtual environment..."
deactivate
rm -rf "$TEMP_VENV"

echo ""
echo "============================================================"
echo "Test Complete"
echo "============================================================"



================================================
FILE: alpinesight-app/scripts/test_with_onnx_size.sh
================================================
#!/bin/bash
# Test production requirements with ONNX dependencies
# To see if we can include YOLO detection in production

set -e

echo "============================================================"
echo "Testing Production Size WITH ONNX Dependencies"
echo "============================================================"
echo ""

# Create temporary requirements file with ONNX uncommented
TEMP_REQ="/tmp/requirements_with_onnx.txt"
cat requirements.txt | sed 's/^# numpy/numpy/' | sed 's/^# onnxruntime/onnxruntime/' | sed 's/^# opencv-python-headless/opencv-python-headless/' | sed 's/^# Pillow/Pillow/' > "$TEMP_REQ"

echo "📝 Testing with ONNX dependencies enabled..."
cat "$TEMP_REQ" | tail -10

# Create temporary virtual environment
TEMP_VENV="/tmp/alpinesight_onnx_test"
echo ""
echo "🔧 Creating temporary virtual environment..."
rm -rf "$TEMP_VENV"
python3 -m venv "$TEMP_VENV"

# Activate virtual environment
source "$TEMP_VENV/bin/activate"

# Install production requirements
echo ""
echo "📦 Installing requirements with ONNX..."
pip install --quiet --upgrade pip
pip install --quiet -r "$TEMP_REQ"

# Calculate uncompressed size
echo ""
echo "📊 Calculating sizes..."
SITE_PACKAGES="$TEMP_VENV/lib/python3.*/site-packages"
UNCOMPRESSED_BYTES=$(du -s $SITE_PACKAGES | cut -f1)
UNCOMPRESSED_MB=$((UNCOMPRESSED_BYTES / 1024))

# Create tarball and compress
echo "🗜️  Compressing with gzip..."
TARBALL="/tmp/site_packages_onnx.tar"
COMPRESSED="/tmp/site_packages_onnx.tar.gz"
tar -cf "$TARBALL" -C $(dirname $SITE_PACKAGES) $(basename $SITE_PACKAGES) 2>/dev/null
gzip -f "$TARBALL"

COMPRESSED_BYTES=$(stat -f%z "$COMPRESSED" 2>/dev/null || stat -c%s "$COMPRESSED")
COMPRESSED_MB=$((COMPRESSED_BYTES / 1024 / 1024))

echo ""
echo "============================================================"
echo "Results WITH ONNX Dependencies"
echo "============================================================"
echo "Uncompressed size: ${UNCOMPRESSED_MB} MB"
echo "Compressed size (gzip): ${COMPRESSED_MB} MB"
echo "Compression ratio: $(echo "scale=1; $UNCOMPRESSED_MB / $COMPRESSED_MB" | bc)x"
echo ""
echo "Vercel limit: 250 MB (after gzip compression)"
echo ""

if [ $COMPRESSED_MB -lt 250 ]; then
    REMAINING=$((250 - COMPRESSED_MB))
    echo "✅ PASS: Compressed size is within Vercel limits!"
    echo "   Remaining capacity: ${REMAINING} MB"
    echo ""
    echo "🎉 YOLO detection CAN be enabled in production!"
else
    OVERFLOW=$((COMPRESSED_MB - 250))
    echo "❌ FAIL: Compressed size exceeds Vercel limits!"
    echo "   Overflow: ${OVERFLOW} MB"
    echo ""
    echo "⚠️  YOLO detection must remain disabled for production"
fi

echo ""
echo "Top 10 largest packages:"
du -sh $SITE_PACKAGES/* | sort -hr | head -10

# Cleanup
echo ""
echo "🧹 Cleaning up..."
deactivate
rm -rf "$TEMP_VENV" "$COMPRESSED" "$TEMP_REQ"

echo ""
echo "============================================================"
echo "Test Complete"
echo "============================================================"



================================================
FILE: .github/CODE_OF_CONDUCT.md
================================================
# Contributor Covenant Code of Conduct

## Our Pledge
We pledge to make participation in our community a harassment-free experience for everyone.

## Our Standards
Examples of positive behavior include:
- Being respectful and inclusive
- Giving and gracefully accepting feedback
- Focusing on what’s best for the community

## Enforcement
Instances of abusive or unacceptable behavior may be reported to:
**[YOUR EMAIL HERE]**

---

*Based on the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct.html).*




================================================
FILE: .github/CONTRIBUTING.md
================================================
# Contributing Guide 🤝

Thanks for helping improve this project!

## 🧰 How to Contribute

1. **Fork the repo**
2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Commit with a clear message**
   ```bash
   git commit -m "Add: new login API endpoint"
   ```
5. **Push and open a Pull Request**

---

## 🧩 Code Style
- Follow existing patterns and naming conventions.
- Keep commits atomic and well-documented.
- Run tests before submitting.

---

## 💬 Communication
- Use descriptive PR titles.
- Tag reviewers using `@username`.
- Be respectful and constructive.

---

## 🚀 Getting Help
If you're stuck, open a **draft PR** or start a **discussion**.



================================================
FILE: .github/pull_request_template.md
================================================
## 🧠 Summary
<!-- Describe the purpose of this PR and what it changes -->

## 🔍 Related Issue
<!-- Link to any related issues (e.g., Fixes #123) -->

## ✅ Changes Made
- [ ] Feature added
- [ ] Bug fixed
- [ ] Refactor / code cleanup
- [ ] Documentation updated

## 🧪 Testing Instructions
<!-- Steps to test the changes -->
1. ...
2. ...

## 📸 Screenshots (if applicable)
<!-- Add before/after screenshots -->

## ⚙️ Checklist
- [ ] Code builds successfully
- [ ] Tests added or updated
- [ ] Documentation updated
- [ ] Follows style guidelines
- [ ] PR title is descriptive

## 💬 Additional Notes
<!-- Any other context or info reviewers should know -->



================================================
FILE: .github/ISSUE_TEMPLATE/bug_report.md
================================================
---
name: 🐞 Bug Report
about: Report a bug or unexpected behavior
title: "[BUG] "
labels: bug
---

## 🐛 Description
<!-- Describe the bug clearly -->

## ⚙️ Steps to Reproduce
1. ...
2. ...
3. ...

## 💻 Expected Behavior
<!-- What you expected to happen -->

## 📸 Screenshots / Logs
<!-- If applicable, add screenshots or error logs -->

## 🧩 Environment
- OS: 
- Browser/Version: 
- Node/Python version: 

## ✅ Additional Context
<!-- Anything else that might help debug -->



================================================
FILE: .github/ISSUE_TEMPLATE/config.yml
================================================
blank_issues_enabled: false
contact_links:
  - name: 📖 Contribution Guide
    url: ../CONTRIBUTING.md
    about: Please read this before opening issues or PRs



================================================
FILE: .github/ISSUE_TEMPLATE/feature_request.md
================================================
---
name: 💡 Feature Request
about: Suggest a new feature or improvement
title: "[FEATURE] "
labels: enhancement
---

## ✨ Summary
<!-- A clear and concise description of the feature -->

## 🔍 Problem
<!-- What problem does this feature solve? -->

## 🧩 Proposed Solution
<!-- Describe your proposed solution -->

## 📎 Alternatives
<!-- Optional: any alternative solutions you've considered -->

## ✅ Additional Context
<!-- Any other information, sketches, links, etc. -->




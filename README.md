# SHELTR // Subterranean Media Vault

**SHELTR** (Self-Hosted Entertainment, Literature, & Transmission Repository) is a local-first, browser-agnostic personal media tracker and link archiver styled as a post-apocalyptic bunker terminal.

Catalog everything you read, watch, or discover online—complete with locally cached cover art, long-form survival notes, custom categories, full-text search, and a 5-tier Thumb rating system—stored in a single portable folder on your machine.

---

## Core Features

* **Zero-Cloud & Browser-Agnostic:** Runs locally on `127.0.0.1:8420` using SQLite (`sheltr.db`). Never relies on browser cache or `localStorage`—open it in any browser without losing data.
* **Portable Vault Directory:** Your database, cached thumbnails, and backups live inside one self-contained directory that can be copied to another computer or external drive at any time.
* **Signal Scavenger (Auto-Ingestion):** Paste any URL to automatically extract the page title and description, classify the media type, and download a local copy of the cover image to prevent link rot.
* **5-Tier Thumb Rating System:**
  * **Unstamped (0):** Unscanned backlog item
  * **Red Thumb (1):** Toxic / avoid
  * **Orange Thumb (2):** Rations only / mediocre
  * **Green Thumb (3):** Safe sector / solid
  * **Gold Thumb (4):** Pre-war relic / exceptional
  * **Diamond Thumb (5):** Vault apex artifact / masterpiece
* **Flexible Categories:** Starts with `READING`, `WATCHING`, and `WEB`, with built-in support for creating custom categories (`GAMING`, `AUDIO`, `PODCASTS`, etc.).
* **Instant Full-Text Search (`FTS5`):** Sub-millisecond search across titles, domains, URLs, and review notes, combinable with category, status, rating, and `#tag` filters.
* **One-Click Cold Backups:** Exports timestamped `.db` and `.json` snapshots into `backups/`.

---

## Directory Structure

```text
SHELTR_VAULT/
├── sheltr.py          # FastAPI local server, SQLite FTS5 engine & URL scraper
├── README.md          # Documentation
├── ui/
│   └── index.html     # Bunker Terminal OS web interface
├── sheltr.db          # SQLite database (auto-generated on first run)
├── vault_media/       # Locally cached cover art & thumbnails (auto-generated)
└── backups/           # Timestamped .db and .json snapshots (auto-generated)

```

---

## Installation & Setup

### Prerequisites

* **Python 3.10+**

### 1. Navigate to the Vault Folder

```bash
cd path/to/SHELTR_VAULT

```

### 2. Create a Virtual Environment (Recommended)

**macOS / Linux:**

```bash
python3 -m venv .venv
source .venv/bin/activate

```

**Windows (PowerShell):**

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1

```

### 3. Install Dependencies

```bash
pip install fastapi uvicorn beautifulsoup4 httpx

```

---

## Running SHELTR

Start the local bunker server:

```bash
python sheltr.py

```

The terminal will confirm the server is active:

```text
[SHELTR VAULT OS] Subterranean server active at [http://127.0.0.1:8420](http://127.0.0.1:8420)
[DATABASE PATH]   .../SHELTR_VAULT/sheltr.db
[SHUTDOWN]        Press CTRL+C to seal bunker.

```

Open **`http://127.0.0.1:8420`** in any web browser. Press `CTRL+C` in the terminal to shut down the server.

---

## Keyboard Shortcuts & Controls

| Key / Button | Action |
| --- | --- |
| `/` | Focus the full-text search bar |
| `N` | Open the **New Manual Entry** modal (for offline books/media) |
| `Esc` | Close any open Dossier or Category modal |
| `+ CATEGORIES` | Add or remove custom media categories |
| `COLD BACKUP` | Save a timestamped `.db` and `.json` snapshot to `/backups/` |
| `CRT` | Toggle the retro CRT scanline overlay |

---

## API Reference

SHELTR exposes a local REST API at `http://127.0.0.1:8420`:

* `POST /api/ingest` — Scrape metadata, cache cover art, and archive a URL
* `POST /api/entries` — Create a manual entry
* `GET /api/entries` — Query entries (`q`, `media_type`, `status`, `rating`, `tag`)
* `PATCH /api/entries/{id}` — Update an entry's details, status, rating, tags, or notes
* `DELETE /api/entries/{id}` — Delete an entry and clean up unused local cover images
* `GET /api/media-types` / `POST /api/media-types` / `DELETE /api/media-types/{name}` — Manage media categories
* `GET /api/stats` — Retrieve archive counts and top tags
* `POST /api/backup` — Generate `.db` and `.json` backup files

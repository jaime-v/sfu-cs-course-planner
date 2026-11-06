# Architecture

> This describes the planned design. Most of it isn't built yet.

## Components

| Component | Technology              | Responsibility                                      |
| --------- | ----------------------- | --------------------------------------------------- |
| Frontend  | React, TypeScript, Vite | User interface and course planning interactions     |
| Backend   | Python, FastAPI         | REST API, business logic and data processing        |
| Database  | PostgreSQL, SQLAlchemy  | Application data, user information and course plans |
| Adminer   | Adminer                 | Browser-based inspection of the local database      |

## How they connect

React frontend -> REST API -> FastAPI backend -> SQLAlchemy -> PostgreSQL

## Course data

`docs/sfucourses-api.json` is a Swagger 2.0 description of the sfucourses API
(`api.sfucourses.com`), an unofficial API not affiliated with SFU. It covers course
outlines, sections, instructors, prerequisites and reviews. The data source for this
project is still being researched in #7.

## Repository layout

- `frontend/src/`: `components/`, `pages/` and `services/`
- `backend/app/`: `api/`, `models/`, `schemas/` and `services/`
- `backend/tests/`: backend tests
- `docs/`: project documentation

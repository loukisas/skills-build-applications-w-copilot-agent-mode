---
mode: 'agent'
model: GPT-4.1
description: 'Create a Django project, start it, and run it'
---

Your task is to create the Django project in octofit-tracker/backend/octofit_tracker directory using the Python
virtual environment we already created in directory octofit-tracker/backend/venv which contains all the prerequisites.


To create the Django project follow these steps.
1. Make sure we are in the root directory and don't change directories
2. source octofit-tracker/backend/venv/bin/activate
3. django-admin startproject octofit_tracker in the octofit-tracker/backend directory
4. python manage.py migrate
5. Instruct the user to run the django app from the .vscode/launch.json configuration that isLet's add the following to a prompt file called `update-octofit-tracker-app.prompt.md` in the `.github/prompts` directory and add mode: 'agent' and model: GPT-4.1 to the prompt file.

# Django App Updates

- All Django project files are in the `octofit-tracker/backend/octofit_tracker` directory.

1. Update `settings.py` for MongoDB connection and CORS.
2. Update `models.py`, `serializers.py`, `urls.py`, `views.py`, `tests.py`, and `admin.py` to support users, teams, activities, leaderboard, and workouts collections.
3. Ensure `/` points to the api and `api_root` is present in `urls.py`. in the repository

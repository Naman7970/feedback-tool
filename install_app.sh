#!/bin/bash
echo "Installing Backend" && \
echo "Creating Virtual Environment" && \
python3 -m venv feedback-app-venv && \
echo "Virtual Environment Created successfully" && \
source feedback-app-venv/bin/activate && \
echo "Virtual Environment Activated successfully" && \
echo "Upgrading pip version" && \
python3 -m pip install --upgrade pip && \
echo "Installing required pip packages" && \
pip install -r ./Backend/requirements.txt && \
echo "Creating Migrations for DB" && \
cd Backend/feedback_capture && \
python3 manage.py makemigrations && \
echo "Migrating DB" && \
python3 manage.py migrate && \
echo "Backend Installed Successfully" && \
echo "Installing Frontend" && \
cd ../../Frontend && \
echo "Installing required node packages" && \
npm install && \
echo "Frontend Installed Successfully"

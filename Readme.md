<h1> Feedback App </h1>

<h3> Setup Steps </h1>

<h2>Prerequisites</h2>
<ol>
  <li>Python 3 - python3 is used to run the shell scripts.</li>
  <li> Node.js - Version - v16.14.0 </li>
  <li> npm - Version - 8.3.1 </li>
</ol>

<ol>
    <li>Clone the repo</li>
    <li>cd to the cloned repo using command:<br />
      <code> cd feedback-tool </code>
    </li>
    <li>Run following command to install the app:<br />
      <code>sh install_app.sh</code>
    </li>
  <li>Run following command to run the Backend:<br />
    <code>sh run_backend.sh</code>
    <p> Now API is running at http://127.0.0.1:8000/ </p>
  </li>
  <li>Keep the previous terminal open and open a new terminal in the cloned directory.</li>
  <li>Run following command to run the Frontend:<br />
    <code>sh run_frontend.sh</code>
    <p> Now Frontend is accessible at http://127.0.0.1:3000/ </p>
  </li>
</ol>
<p>
  <h4> Note </h4>
  <p> If any of the above shell scripts give error then try run commands manually as described below.</p>
  <h3> Manual steps if install_app.sh gives error </h3>
  <p>The following steps assumes that you have cloned the repository and terminal is open in the cloned directory.</p>
  <ol>
    <li>Create Virtual Environment<br />
      <code>python3 -m venv feedback-app-venv</code>
    </li>
    <li>Activate Virtual Environment</li>
      <code>source feedback-app-venv/bin/activate</code>
    </li>
    <li>Upgrade PIP <br />
      <code>python3 -m pip install --upgrade pip</code>
    </li>
    <li>Install Requirements<br />
      <code>pip install -r ./Backend/requirements.txt</code>
    </li>
    <li>Change Directory to Backend<br />
      <code>cd Backend/feedback_capture</code>
    </li>
    <li>Create Migrations for creating database<br />
      <code>python3 manage.py makemigrations</code>
    </li>
    <li>Migrate models to Database<br />
      <code>python3 manage.py migrate</code>
    </li>
    <li>Change Directory to Frontend<br />
      <code>cd ../../Frontend</code>
    </li>
    <li>Install node packages<br />
      <code>npm install</li></code>
    </li>
  </ol>
  
  <h3> Manual steps if run_backend.sh gives error</h3>
  <p>The following steps assumes that you have cloned the repository and terminal is open in the cloned directory.</p>
  <ol>
    <li>Activate the virtual environment<br />
      <code>source feedback-app-venv/bin/activate</code>
    </li>
    <li>Run the API<br />
      <code>python Backend/feedback_capture/manage.py runserver</code>
    </li>
  </ol>
  
  <h3> Manual steps if run_frontend.sh gives error</h3>
  <p>The following steps assumes that you have cloned the repository and terminal is open in the cloned directory.</p>
  <ol>
  <li>Change directory to Frontend <br />
    <code>cd Frontend</code>
  </li>
  <li>Run the frontend <br />
    <code>npm start</code>
  </li>
  </ol>
</p>

<h1>Access the app</h1>
<p>The app will be accessible at http://127.0.0.1:3000/ </p>

<h1> App Screenshots </h1>

<h3>Home Page of the App:</h3>

Shows the submitted feedbacks from the user.

<img width="1440" alt="Page 1" src="https://user-images.githubusercontent.com/100676257/157393873-46bae6c4-8c6d-4efc-b8ac-6494bf9afab0.png">

<h3> Add Feedback Page </h3>

After clicking on the Add Feedback button in the header user will be redirected to following page:

<img width="1440" alt="Page 2" src="https://user-images.githubusercontent.com/100676257/157394327-c4fcd7d7-9f09-4630-a8e3-4e24040e177e.png">

<h3> User can fill the details and submit feedback </h3>

<img width="1440" alt="Page 3" src="https://user-images.githubusercontent.com/100676257/157394501-83230c2f-d91e-45ff-9603-3e2b883e5c47.png">

<h3> User can click on to the "Feedback App" text in the header to again go to home page </h3>

The newly added feedback will be displayed in the last.

<img width="1440" alt="Page 4" src="https://user-images.githubusercontent.com/100676257/157394802-6f145cb2-bf5d-4178-9d8b-30fc31879561.png">

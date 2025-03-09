# take home assessment: Pilotage Data Retrieval

Basic React application that fetches and displays pilotage data for a given IMO number vessel

Setup:
1. Clone repo
2. cd pilotage-form-app
3. npm install 
4. npm run dev

Assumptions:
API Endpoint of: https://uat.engineering.sgtradex.gov.sg/pt/api/v1/pilotage/:vesselImo is reachable 
Timezones: All date/time will be displayed from the data obtained via the api, no special conversion to the date/time will be done
UI is kept simple(1 search box and 1 table) as assumed use case was a single IMO query
Validation is only done to prevent user from entering non-numeric numbers and only IMO that fulfils the check digit.


API Layer

Small service (api.js) that calls the pilotage API using axios.
If the response is successful, data is returned to the UI. Otherwise, an error is thrown.

Frontend

Form Component (PilotageForm.jsx): Handles user input (IMO number) and triggers a search function.
Data Component (PilotageData.jsx): Displays the fetched data in a table.
Main Container (App.jsx): Manages the application state (loading, error, pilotage data) and orchestrates calls to the API service.

Error Handling

When an error is caught (e.g., invalid IMO or network issue), the error message is displayed in the UI.

Development Approach

Start with a basic React/Vite setup.
Implement the API call and test with a hardcoded IMO.
Add the form for user input and error handling.
Style and refine the table display.
 
  

  
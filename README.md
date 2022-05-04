# Talking To Servers Workshop

## A set of tasks to practice using fetch.

_ALWAYS AWAIT A PROMISE!_

### Task 1 - The Fetch Bit

In this task, we will fetch some data from a server. The data we receive will be in JSON format and will contain a quote. We will use fetch to send a GET request to `https://api.kanye.rest/` and will extract the data from the response object.

👉 Write an async function called `getQuote`.

👉 Use fetch to send a GET request to `https://api.kanye.rest/` and store the resolved value of the returned promise in a variable called `response`.

👉 Call the `.json()` method on the response variable to parse the JSON data contained in the response object. Store the resolved value of the returned promise in a variable called `data`.

👉 Use that data to set the text of the `h1` with id `"kanye-quote"`.

👉 Call this function as soon as the page loads.

### Task 2 - On Click

Sweet - we're getting a new Kanye West quote every time the page is refreshed. Let's make the page more interactive.

👉 Attach an event listener to the button with id `"new-quote-button"` to call `getQuote` when the user clicks.

### Task 3 - History

We're now going to display every quote we fetch in a list so that we don't forget our favorites.

👉 Create a function that takes in a string, creates a new list item with that string, and adds it to the `ol` with the id `"kanye-quote-history"`.

👉 Call this function within your `getQuote` function so that the quotes get stored in the `"kanye-quote-history"` list.

### 🌟 Bonus Task!

You might see after a while that the quotes we fetch from the API are sometimes repeated.

👉 Change your code so that if a repeat quote is generated, it will not be added to the list of previous quotes.

#### 🌟 Bonus Bonus Task!

👉 Have a quote added to the history list **only** when a new quote is generated so that the same quote is never on the screen in two places.

/**
 * 1. Initialize an XMLHttpRequest constructor
 * 2. Open a GET request, set the headers and response type
 * 3. Output successful response
 * 4. Output error state
 * 5. Combine with an event listener (button)
 * 6. Adjust UI states accordingly
 * 7. Bonus: change button CTA to indicate if it's the first joke or a "next" one
 */

const API_ENDPOINT = 'https://icanhazdadjoke.com/';
const btn = document.getElementById('button');
const jokeEl = document.getElementById('joke');

btn.onclick = async () => {
try {
    const response = await axios.get(API_ENDPOINT, {headers:{Accept:'application/json'}});
  const data= response.data;
const joke=data.joke;
jokeEl.textContent = joke;
} catch (error) {

}
}
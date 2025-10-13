# Weather demo (api_fetch)

This folder contains a small static demo that fetches weather from OpenWeatherMap.

How to use

- Open `index.html` in your browser (double-click or use a static server).
- Click "Set API Key" and paste your OpenWeatherMap API key (it will be stored in browser localStorage).
- Type a city name and click "Get Weather". The demo uses the stored API key.

Notes

- The API key is stored locally in your browser's localStorage for convenience. Do not commit secret keys to your repo.
- If you don't have an API key, sign up at https://openweathermap.org/ and get a free key.
- For development, you can run a local static server (Python 3):

```powershell
# from this folder
python -m http.server 8000
# then open http://localhost:8000/index.html
```

Local fallback

- The registration forms in the project will save data to `localStorage` when the POST to `/api/register` fails. This allows testing without a backend.


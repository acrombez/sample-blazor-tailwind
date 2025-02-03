## Adding Tailwind CSS v3 to Blazor

- https://chrissainty.com/adding-tailwind-css-v3-to-a-blazor-app/
- https://youtu.be/GKbTgovP-VU?si=EYCJ1qjfz9gd8fEK
- https://dev.to/rasheedmozaffar/using-tailwind-css-with-net-blazor-4ng7
- Summary:
	- npx tailwindcss init
	- Set content in tailwind.config.js
	- Import tailwind modules in App.css
	- Link css/app.css in index.html
	- npx tailwindcss -i .\Styles\App.css -o .\wwwroot\css\app.css --watch

## Upgrading to Tailwind CSS v4

- https://tailwindcss.com/docs/upgrade-guide
- https://dev.to/sirneij/tailwindcss-v40-upgrading-from-v3-with-some-plugins-572f
- npx @tailwindcss/upgrade@next --force
- npx @tailwindcss/cli -i .\Styles\App.css -o .\wwwroot\css\app.css --watch

## Toggling dark mode

- https://dev.to/rasheedmozaffar/dark-mode-with-blazor-and-tailwind-css-22on

## Using local storage in Blazor

- https://dev.to/rasheedmozaffar/how-to-work-with-the-browsers-local-storage-in-blazor-58kc

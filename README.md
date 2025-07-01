# InstantILL Tombstone Page

An Eleventy one-pager announcing that **InstantILL is no longer available**, with relevant redirects. Static and deployed on Netlify.

## Requirements 

* **Node.js** ≥ 14.
* **npm** (comes with Node).

## Local dev

```bash
# install Eleventy
npm install

# run local server at http://localhost:8080
npm start

## Legacy InstantILL `embed.js` file

InstantILL’s widget will keep working until **18&nbsp;Nov&nbsp;2025**. To avoid any dependency on the old Open Access Button infrastructure, we copied the last stable version of the script (`embed.js`) from <[https://github.com/oaworks/embed/blob/main/embed.js](https://github.com/oaworks/embed/blob/main/embed.js)> into **`src/embed.js`** in this repo so that Netlify can still serve it at [`instantill.org/embed.js`](https://instantill.org/embed.js).

If we ever need to update the widget before the shutdown date, ensure to update both sources to avoid any confusion for end-users. 



# SHOPIFY DEVELOPER CHALLENGE - Michal Jez

### Steps to Run

1. Install MySQL
2. Clone repo
3. `npm install`
4. You may need to update `/models/index.js` to connect with the correct account to MySQL
5. You may need to run `CREATE SCHEMA 'shopify2018backendchallenge'` in MySQL workbench or import `data.sql`
6. Load `Shopify2018BackendChallenge.postman_collection.json` into Postman which you can use to interact with the API
7. `node index.js`

### Folder Structure

- Models are defined in `/models/${modelName}/index.js`
- Route structure is defined in `/routes/**/index.js` files
- Actual routing middlewares and handlers are defined in all the other files in the `routes` directory
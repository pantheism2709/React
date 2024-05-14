# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## As we are using appwrite in it , appwrite has multiple services like authentication related service, database related service,download upload related service .... so we need to write the code in a manner so that if we want to exclude any service or replace any service of apppwrite with any other service then it will not put much impact on entire code .


### Here the concept of vendor lockin comes (Vendor lock-in refers to a situation where the cost of switching to a different vendor is so high that the customer is essentially stuck with the original vendor)


### SO we create different services services are nothing but class here  ... these services just give you functionallity and at the main file you just use differenct function from different services (Abstraction) .. You dont need to care about which vendor is offering the particular functionallity or service


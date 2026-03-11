# Pricing Cards

![Static Badge](https://img.shields.io/badge/HTML-%23e34c26?style=for-the-badge&logo=HTML5&logoColor=white)
![Static Badge](https://img.shields.io/badge/CSS-%231572B6?style=for-the-badge&logo=CSS&logoColor=white)
![Static Badge](https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=white)
![Static Badge](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=000)
![Static Badge](https://img.shields.io/badge/Vite-bd34fe?style=for-the-badge&logo=vite&logoColor=white)
![Static Badge](https://img.shields.io/badge/Tailwind-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)

This is the pricing page design for a fictional subscription service based on a project in the HTML, CSS & JavaScript course on [YouTube](https://youtu.be/kAiX0itnonM?si=AgG25UPPdiu5cFZu) by Codesistency. This implementation makes some slight adjustments to the original design by leveraging technologies such as React, Vite, TailwindCSS and JSON.

**This is a design project so only simple interactions such as hovering and clicking are supported by the application. No business logic is implemented!**

## Design
### Component Hierarchy  

* `Header` Header for the pricing page.
* `Cards` The collection of pricing cards.
  * `Card` The card for a specific pricing tier
    * `Badge` 
    * `CardHeader`
    * `CardBody`
    * `CardFooter`
* `Testimonial` The user testimonial for the fictional service

### JSON Data
The original implementation uses hardcoded values for the cards. In this implementation, the data is stored in the `tiers.json` file as an array of objects to mimic real world use of an API. Thus, cards and data within them can now be added and removed simply by modifying the JSON file.


```json
{
    [
        "id": number,
        "name": string,
        "description": string,
        "price": number,
        "icon": string,
        "popular": boolean,
        "features": [
            {
                "id": number,
                "description": string,
                "available": boolean
            }
        ]
    ]
}
```

### Card Styling
Some of the styling elements for the cards depend on the values of the following fields:
* `icon` Determines the react-icon that will be displayed in the `CardHeader`. If you wish to use icons other than **FaRocket**, **FaBuilding** and **FaGem** you must modify the imports and conditional statements accordingly.
* `popular` Determines if the card receives unique styling as it is considered the popular option and will be displayed as such. This includes the addition of a `Badge`, pulsing button animations and other minor color adjustments.
* `features.available` Determines the styling for the specific feature. If true, the **FaCheck** is displayed; otherwise the **FaTimes** icon will be displayed next to the feature.

## Additional Information
### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

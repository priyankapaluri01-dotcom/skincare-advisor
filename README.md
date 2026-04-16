#  SKINCARE-ADVISOR
[Live Demo](https://skincare-advisor.vercel.app/)

I built this project to understand the "root level" of React, Vite tools, and the end-to-end journey from VS Code to a live web application.

###  Tech Stack
* **React:** Routers, Basic Hooks (useState, useEffect), Event Handlers, and JSX.
* **State Management:** **Redux Toolkit** (Two slices) to master data flow and reducers.
* **Backend:** **Firebase & Firestore** for Backend-as-a-Service (BaaS).
* **Styling:** CSS3 (Flexbox/Grid, Transitions, and Responsive Design).
* **Deployment:** Vercel.

###  Project Structure
| Directory / File | Description | Key Responsibility |
| :--- | :--- | :--- |
| **src/app** | Global Store | Centralized Redux state management (`store.js`). |
| **src/components** | UI Elements | Reusable components like Navbar and Hero sections. |
| **src/pages** | Main Screens | All route-level pages (Login, Skin Quiz, Account). |
| **src/utils** | State Logic | Redux Slices for users and skincare analysis. |
| **src/firebase.js** | Backend Config | Firebase initialization and security settings. |
| **Root Level** | Configuration | Environment variables (`.env`) and Vite settings. |

###  Problem & Solution
I built this to solve **"choice paralysis"**. Instead of complex theory, it provides a direct, no-nonsense AM/PM routine based on a user's skin profile. It’s a simple "filter" for the noise of the skincare world.

> **Note:** This project marks my transition from watching tutorials to solving real-world problems. It taught me how React components fit together and why project structure matters for the end-user.

# QurbaniHat

QurbaniHat is a modern livestock marketplace where users can explore Qurbani animals (cows and goats), view details, and place a booking after logging in.

**Live URL:** https://qurbani-animal-booking-app.vercel.app
**GitHub:** https://github.com/risatkhandakar6-rs/qurbani-animal-booking-app

## Purpose

To make buying Qurbani animals easy: browse animals, compare prices, check details, and book with a simple authenticated flow.

## Key Features

- Responsive design for mobile, tablet, and desktop
- Navbar with logo, Home and All Animals links; avatar and logout when logged in, login and register buttons when logged out
- Footer with contact info, social links, and about section
- Home page with hero banner, featured animals (4), Qurbani Tips, and Top Breeds
- All Animals page with sort by price (low to high / high to low) and details button
- Animal Details page (private route) with full info and booking form
- Booking form resets on submit and shows a success toast (data is not saved)
- Email/password authentication and Google social login (Better Auth)
- Registration with name, email, photo URL, and password
- My Profile page showing name, photo, and email
- Update Information page to change name and photo
- Toast notifications for success and error messages
- Loading spinner while fetching data
- Custom 404 not-found page
- Animations using (Animate.css / React Spring / Lottie)
- Environment variables for secure configuration

## Routes

| Route | Access |
|---|---|
| `/` | Public |
| `/animals` | Public |
| `/login` | Public |
| `/register` | Public |
| `/details-page/[id]` | Private |
| `/my-profile` | Private |
| `/my-profile/update` | Private |

## npm Packages Used

- next
- react, react-dom
- tailwindcss
- daisyui
- better-auth
- react-hook-form
- react-toastify
- (animate.css / react-spring / lottie-react)
- (your database package, e.g. mongodb)

## Environment Variables

Create a `.env` file in the root:

```env
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
MONGODB_URI=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

## Run Locally

```bash
git clone https://github.com/risatkhandakar6-rs/qurbani-animal-booking-app.git
cd qurbani-animal-booking-app
npm install
npm run dev
```

Open http://localhost:3000
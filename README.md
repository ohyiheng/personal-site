# yiheng's website (WIP)

This is a very basic personal website for me created using [Svelte](https://svelte.dev/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your local machine. You can download Node.js and npm [here](https://nodejs.org/en/download/).

### Clone the Repository

First, clone the repository to your local machine:

```sh
git clone https://github.com/rainmrn/personal-site.git
```

### Install Dependencies

Navigate into the cloned repository's directory and install the necessary dependencies:

```sh
cd personal-site
npm install
```

### Run the Development Server

Start the development server:

```sh
npm run dev
```

The website should now be running at `http://localhost:5173`, it can also be accessed through `http://<your-ip-addr>:5173` on devices on the same network.

If you want to limit connections to only the host machine, remove the `--host` flag in the dev script in the `package.json` file:
```json
"scripts": {
	"dev": "vite dev --host",
	"build": "vite build",
```
becomes:
```json
"scripts": {
	"dev": "vite dev",
	"build": "vite build",
```

### Build the Project

To build the project for production, run:

```sh
npm run build
```

This will create a `build` directory with the compiled project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

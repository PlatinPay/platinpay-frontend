# PlatinPay-Frontend

[Find the main README here! (It has a showcase video and deployment links so you can try PlatinPay yourself!)](https://github.com/PlatinPay)

This is the Frontend of the PlatinPay project.

## Features
- Beautiful nord-themed UI 😍

# NOTE: Everything is subject to change, this is only a proof-of-concept and definitely not finalized, there are still a lot more features on the roadmap and the backend will also be ported to either Go or Rust

## Prerequesites

Make sure `bun` is installed and up-to-date
```bash
curl -fsSL https://bun.sh/install | bash
```
or
```bash
bun upgrade
```

(Feel free to use other package managers and/or runtime for this project, i just prefer bun :3)

## Installation

1. Clone the repository
```bash
git clone https://github.com/PlatinPay/platinpay-frontend
```
2. `cd` into the cloned git repo
```bash
cd platinpay-frontend
```
3. Install packages
```bash
bun i
```
4. Build
```bash
bun run build
```
5. Start
```bash
bun run start
```

The frontend will run on port `6969` by default, to change that, edit the file `package.json` and find the text `-p 6969` and change the number `6969` to your desired port then restart the app


This project is licensed under the [GNU AGPL-3.0](LICENSE) License. See the `LICENSE` file for details.

**DISCLAIMER: This project is currently not ready for production usage. It is a work-in-progress.**

# NureTimetableAPI.Docs

This website is built using [Docusaurus](https://docusaurus.io/).

## Local Development

### Using Docker

Run

```bash
docker-compose up docusaurus
```
for starting the development server (English locale).

OR

```bash
docker-compose up docusaurus-uk
```
for starting with Ukrainian locale.

#### Write translations

```bash
docker-compose run --rm npm run docusaurus write-translations -- --locale uk
```

### Using Node.js

1. Run the following commands:

```bash
npm i
```

2. Start the development server:

```bash
npm run start
```
for English locale.

OR

```bash
npm run start -- --locale uk
```
for Ukrainian locale.

#### Write translations

```bash
npm run docusaurus write-translations -- --locale uk
```


## Copyright

© 2024 [music-soul1-1](https://github.com/music-soul1-1).
# NureTimetableAPI.Docs

This website is built using [Docusaurus](https://docusaurus.io/).

## Local Development

### Using Docker

1. Install dependencies:

```bash
docker-compose run --rm docusaurus npm i
```

2. Start the development server:

```bash
docker-compose up docusaurus
```
for starting server with English locale.

OR

```bash
docker-compose up docusaurus-uk
```
for starting with Ukrainian locale.

#### Write translations

```bash
docker-compose run --rm docusaurus npm run docusaurus write-translations -- --locale uk
```

#### Add version

```bash
docker-compose run --rm docusaurus npm run docusaurus docs:version major.minor
```
(major.minor - version number, e.g. 3.0)

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

#### Add version

```bash
npm run docusaurus docs:version major.minor
```
(major.minor - version number, e.g. 3.0)


## Copyright

© 2024 [music-soul1-1](https://github.com/music-soul1-1).
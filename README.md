# nunjucks-autolink
Nunjucks filter for autolinking URLs

### Installation

```shell
npm install nunjucks-autolink --save
```

### Usage
Require the filter and pass into your nunjucks env

```js
var env = new nunjucks.Environment(
    new nunjucks.FileSystemLoader('views', { noCache: true, }),
    { autoescape: true, });

env.addFilter('autolink', require('nunjucks-autolink'));
```

### Tests

```shell
npm test
```

## Credits
- [Richard Carls](https://richardcarls.com)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2016 Richard Carls

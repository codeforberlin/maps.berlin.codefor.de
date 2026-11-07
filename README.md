# maps.berlin.codefor.de

On [maps.berlin.codefor.de](https://maps.berlin.codefor.de), you can compare current aerial images from the
[Geoportal Berlin](https://gdi.berlin.de) with earlier years and historical maps, like the map of Berlin 1:5000 or
the urban development of Berlin since 1650.

This is a project of the [OK Lab Berlin](https://codefor.de/berlin).


## Related projects

* [github.com/jochenklar/maps](https://github.com/jochenklar/maps) is the app to compare tiled maps side by side,
  which this site is built with
* [github.com/codeforberlin/luftbilder.berlin.codefor.de](https://github.com/codeforberlin/luftbilder.berlin.codefor.de)
  is the sister site [luftbilder.berlin.codefor.de](https://luftbilder.berlin.codefor.de), which focuses on the
  aerial images of Berlin from 1928 until today
* [github.com/codeforberlin/gdal-tiles-api](https://github.com/codeforberlin/gdal-tiles-api) is the API which cuts
  out the tiles from Cloud Optimized GeoTIFFs and other datasets using GDAL
* [github.com/codeforberlin/tiles-config](https://github.com/codeforberlin/tiles-config) is the configuration of
  [tiles.codefor.de](https://tiles.codefor.de), which serves the tiles for the different maps with the GDAL Tiles API


## Data source

The aerial images and maps are provided by the City of Berlin in the [Geoportal Berlin](https://gdi.berlin.de),
formerly known as the FIS Broker. The code to fetch them is at
[github.com/codeforberlin/fis-broker](https://github.com/codeforberlin/fis-broker).


## Development

The site is a small [Vite](https://vite.dev) app, the maps are configured in `maps.json` and the rest of the
config in `maps.config.js`, see the README of [@jochenklar/maps](https://github.com/jochenklar/maps). Install the
dependencies and start the development server with:

```bash
make install
make dev
```

`make build` builds the static site into `dist/` and `make preview` serves it locally. `make local` uses a
checkout of `@jochenklar/maps` in `../maps` instead of the release from npm, and `make deploy` copies the build to
the server set as `DEPLOY=host:/path` in `.env`.

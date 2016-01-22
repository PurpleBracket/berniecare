# berniecare
Bernie 2016

Live at http://berniecare.org

### development
```
npm install
```

 . . . after any edits to `index.js`:

```
npm run build
```


for local viewing comment out gz files and uncomment normal file

```
<!-- <link rel="stylesheet" href="dist/css/app.css.gz" charset="utf-8"> -->
<link rel="stylesheet" href="dist/css/app.css"


<!-- <script src="dist/js/serve.js.gz"></script> -->
<script src="dist/js/serve.js"></script>
```

after any sass or dependency changes run

```
gulp
```

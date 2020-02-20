<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Document</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.2.3/css/bulma.css" />
    <style>
        body {
            padding-top: 40px;
        }
    </style> 
    <script src="main.js"></script>
</head>
<body>
    <div id="app" class="container">
        @include ('project.list')

        <form method="POST" action="/projects">
            
            <div class="control">
                <label for="name" class="label">Project Name:</label>
                <input type="text" id="name" name="name" class="input">
            </div>

            <div class="control">
                <label for="description" class="label">Project Description:</label>
                <input type="text" id="description" name="description" class="input">
            </div>

            <div class="control">
                <button class="button is-primary">Create</button>
            </div>

        </form>

    </div>
</body>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.3/axios.js"></script>
        <script src="https://unpkg.com/vue@2.1.6/dist/vue.js"></script>
        <script src="/js/app.js"></script>
</html>